import Dummy from './models/dummy.model';
import DummyDao from '../data/dummy.dao';
import Bluebird from 'bluebird'; // Promise library for Sequelize
import Sequelize from 'sequelize';


export interface IDummyService {
    findDummy(): Dummy
    findDummySql(): any;
};

/**
 * Dummy
 */
class DummyService implements IDummyService {

    private dummyDao: Sequelize.Model<{}, {}> = null;

    constructor(dummyDao: Sequelize.Model<{}, {}>) {
        this.dummyDao = dummyDao;
    };

    /**
     * Get a dummy from the posgres RDS instance.
     * 
     * @return {Bluebird<void | Dummy} A promise whos contents is the dummy with the provided id.
     */
    public findDummySql = async (): Bluebird<void | Dummy> => {
        const dummyRow: any = await this.dummyDao.findById(1)
            .catch((e) => { console.error(e); });

        return new Dummy(dummyRow.get('message'));
    };

    /**
     * Fake data dummy.
     * 
     * @returns {Dummy} A dummy initialized with a hard-coded string.
     */
    public findDummy = (): Dummy => {
        return new Dummy('Dummy api endpoint wow.');
    };

};

export default DummyService;