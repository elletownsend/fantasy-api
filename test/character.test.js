const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;

const app = require('../app');

chai.use(chaiHttp);

describe('Characters', () => {
  describe('Harry Potter Resources', () => {
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

    describe('GET characters/harry-potter/:id', () => {
      it('GET specific Harry Potter character in the data by id', (done) => {
        chai
          .request(app)
          .get('/api/v1/characters/harry-potter/1')
          .end((err, res) => {
            assert.equal(res.statusCode, 200);
            assert.equal(res.body.status, 'success');
            assert.typeOf(res.body.data, 'Object');
            assert.equal(res.body.data.character.id, 1);
            done();
          });
      });
    });

    describe('GET characters/harry-potter?p=', () => {
      it('GET Harry Potter character by search', (done) => {
        chai
          .request(app)
          .get('/api/v1/characters/harry-potter?q=Remus John Lupin')
          .end((err, res) => {
            assert.equal(res.statusCode, 200);
            assert.equal(res.body.status, 'success');
            assert.typeOf(res.body.data.results, 'array');
            assert.equal(res.body.results, 1);
            assert.equal(res.body.results, res.body.data.results.length);
            assert.include(res.body.data.results[0].name, 'Remus John Lupin');
            done();
          });
      });
    });
  });

  describe('Star Wars Resources', () => {
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

    describe('GET characters/star-wars/:id', () => {
      it('GET specific Star Wars character in the data by id', (done) => {
        chai
          .request(app)
          .get('/api/v1/characters/star-wars/201')
          .end((err, res) => {
            assert.equal(res.statusCode, 200);
            assert.equal(res.body.status, 'success');
            assert.typeOf(res.body.data, 'Object');
            assert.equal(res.body.data.character.id, 201);
            done();
          });
      });
    });

    describe('GET characters/star-wars?p=', () => {
      it('GET Star Wars character by search', (done) => {
        chai
          .request(app)
          .get('/api/v1/characters/star-wars?q=Han Solo')
          .end((err, res) => {
            assert.equal(res.statusCode, 200);
            assert.equal(res.body.status, 'success');
            assert.typeOf(res.body.data.results, 'array');
            assert.equal(res.body.results, 1);
            assert.equal(res.body.results, res.body.data.results.length);
            assert.include(res.body.data.results[0].name, 'Han Solo');
            done();
          });
      });
    });
  });
});

describe('Characters Errors', () => {
  describe('GET characters/harry-potter/:id', () => {
    it('GET Harry Potter character id out of range', (done) => {
      chai
        .request(app)
        .get('/api/v1/characters/harry-potter/0')
        .end((err, res) => {
          assert.equal(res.statusCode, 404);
          assert.equal(res.body.status, 'failed');
          done();
        });
    });
  });

  describe('GET character/harry-potter?p=', () => {
    it('GET Harry Potter character search criteria not met', (done) => {
      chai
        .request(app)
        .get('/api/v1/characters/harry-potter?q=Han Solo')
        .end((err, res) => {
          assert.equal(res.statusCode, 404);
          assert.equal(res.body.status, 'failed');
          done();
        });
    });
  });

  describe('GET characters/star-wars/:id', () => {
    it('GET Star Wars character id out of range', (done) => {
      chai
        .request(app)
        .get('/api/v1/characters/star-wars/0')
        .end((err, res) => {
          assert.equal(res.statusCode, 404);
          assert.equal(res.body.status, 'failed');
          done();
        });
    });
  });

  describe('GET characters/star-wars?p=', () => {
    it('GET Star Wars character search criteria not met', (done) => {
      chai
        .request(app)
        .get('/api/v1/characters/star-wars?q=Remus')
        .end((err, res) => {
          assert.equal(res.statusCode, 404);
          assert.equal(res.body.status, 'failed');
          done();
        });
    });
  });
});
