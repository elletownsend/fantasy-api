const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;

const app = require('../app');

chai.use(chaiHttp);

describe('Characters', () => {
  describe('GET characters/harry-potter/', () => {
    it('GET all Harry Potter characters in the data', (done) => {
      chai
        .request(app)
        .get('/api/v1/characters/harry-potter/')
        .end((err, res) => {
          assert.equal(res.statusCode, 200);
          assert.equal(res.body.status, 'success');
          assert.equal(res.body.results, 140);
          assert.typeOf(res.body.data.results, 'array');
          assert.equal(res.body.data.results[0].id, 1);
          assert.equal(res.body.results, res.body.data.results.length);
          done();
        });
    });
  });

  describe('GET characters/star-wars/', () => {
    it('GET all Star Wars characters in the data', (done) => {
      chai
        .request(app)
        .get('/api/v1/characters/star-wars/')
        .end((err, res) => {
          assert.equal(res.statusCode, 200);
          assert.equal(res.body.status, 'success');
          assert.equal(res.body.results, 87);
          assert.typeOf(res.body.data.results, 'array');
          assert.equal(res.body.data.results[0].id, 201);
          assert.equal(res.body.results, res.body.data.results.length);
          done();
        });
    });
  });
});
