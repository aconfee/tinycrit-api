import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
const assert = chai.assert;
chai.use(chaiHttp);

describe('/dummy', () => {

    describe('GET /dummy', () => {
        it('Can be a dummy.', (done) => {
            chai.request(app)
            .get('/dummy')
            .end((err, res) => {
                assert.isNull(err);
                assert.isNotNull(res);
                assert.equal(res.status, 200);
                assert.isNotNull(res.body.message);
                assert.equal(res.body.message, 'Dummy api endpoint wow.');

                done();
            })
        });
    });

    describe('GET /dummy/{id}', () => {
        it('Can be a dummy.', () => {
            const add = 5+5;
        
            assert.equal(add, 10);
        });
    });

    describe('POST /dummy', () => {
        it('Can be a dummy.', () => {
            const add = 5+5;
        
            assert.equal(add, 10);
        });
    });

});