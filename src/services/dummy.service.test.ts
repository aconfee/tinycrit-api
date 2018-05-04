import chai from 'chai';
import DummyService, { IDummyService } from './dummy.service';
import Dummy from './models/dummy';
import SequelizeMock from 'sequelize-mock';
const dbMock = new SequelizeMock();
const assert = chai.assert;

describe('Dummy service', () => {

    const MockDummyDao = dbMock.define('dummy');

    describe('Dummy message', () => {
        it('Can get the message.', () => {

            MockDummyDao.$queueResult(MockDummyDao.build({
                id: 1,
                message: 'Test message.'
            }));

            const service = new DummyService(MockDummyDao);
            service.findDummySql().then((result: Dummy) => {
                assert.isNotNull(result);
                assert.isNotNull(result.message);
                assert.equal(result.message, 'Test message.');

                MockDummyDao.$clearQueue();
            });

        })
    });
    
});