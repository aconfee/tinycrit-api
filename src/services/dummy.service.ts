import Dummy from './models/dummy';
//import { IDummyDao } from '../data/dummy.dao';
import DummyDao from '../data/dummy.dao';
import Bluebird from 'sequelize';

export interface IDummyService {
    findDummy(): Dummy
    findDummySql(): any;
};

class DummyService implements IDummyService {

    // TODO change from any to Bluebird<Dummy> (do i need to install bluebird and types?)
    public findDummySql = (): any => {

        // Clean to use async/await instead.. possibly. 
        return DummyDao.findById(1)
            .then((dummy: any) => {
                var newDummy = new Dummy();
                newDummy.message = dummy.get('message');

                return newDummy;
            })
            .catch((error: any) => {
                console.error(error);
            });
    };

    public findDummy = (): Dummy => {
        var dummy = new Dummy();
        dummy.message = 'Dummy api endpoint wow.';

        return dummy;
    };

};

export default DummyService;