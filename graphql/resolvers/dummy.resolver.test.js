const chai = require('chai');
const assert = chai.assert;
const sinon = require('sinon');
const dummyResolver = require('./dummy.resolver.js');

describe('Dummy resolver', () => {

    describe('dummy', () => {
        it('Can get message.', () => {

            const stub = sinon.stub().returns({message: 'Aww yiss'})

            const serviceMock = {
                dummyMessage: stub
            };

            const resolver = dummyResolver(serviceMock);
            var result = resolver.Query.dummy();

            assert.isNotNull(result);
            assert.isNotNull(result.message);
            assert.equal(result.message, 'Aww yiss');
            assert.isTrue(stub.calledOnce);
        });
    });

});