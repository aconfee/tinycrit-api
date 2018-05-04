import chai from 'chai';
import DummyService from './dummy.service';
import Dummy from './models/dummy';
const assert = chai.assert;

describe('Dummy service', () => {

    describe('Dummy message', () => {
        it('Can get the message.', () => {
            const service = new DummyService();
            const result: Dummy = service.findDummy();

            assert.isNotNull(result);
            assert.isNotNull(result.message)
            assert.equal(result.message, 'Dummy api endpoint wow.');
        })
    });
    
});