const chai = require('chai');
const assert = chai.assert;
const service = require('./dummy.service.js');

describe('Dummy service', () => {

    describe('Dummy message', () => {
        it('Can get the message.', () => {
            const obj = service.dummyMessage();

            assert.isNotNull(obj);
            assert.isNotNull(obj.message)
            assert.equal(obj.message, 'Dummy api endpoint.');
        })
    });
});