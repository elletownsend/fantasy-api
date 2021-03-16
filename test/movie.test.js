const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;

const app = require('../app');

chai.use(chaiHttp);

describe('Movies', () => {
  describe('GET movies/harry-potter/', () => {
    it('GET all Harry Potter movies in the data', (done) => {
      chai
        .request(app)
        .get('/api/v1/movies/harry-potter/')
        .end((err, res) => {
          assert.equal(res.statusCode, 200);
          assert.equal(res.body.status, 'success');
          assert.equal(res.body.results, 8);
          assert.typeOf(res.body.data.results, 'array');
          assert.equal(res.body.data.results[0].id, 1);
          assert.equal(res.body.results, res.body.data.results.length);
          done();
        });
    });
  });

  describe('GET movies/harry-potter/:id', () => {
    it('GET specific Harry Potter movie in the data by id', (done) => {
      chai
        .request(app)
        .get('/api/v1/movies/harry-potter/5')
        .end((err, res) => {
          assert.equal(res.statusCode, 200);
          assert.equal(res.body.status, 'success');
          assert.typeOf(res.body.data, 'Object');
          assert.equal(res.body.data.movie.id, 5);
          done();
        });
    });
  });

  describe('GET movies/harry-potter/', () => {
    it('GET Harry Potter movie by search', (done) => {
      chai
        .request(app)
        .get('/api/v1/movies/harry-potter?q=Azkaban')
        .end((err, res) => {
          assert.equal(res.statusCode, 200);
          assert.equal(res.body.status, 'success');
          assert.equal(res.body.results, 1);
          assert.typeOf(res.body.data.results, 'array');
          assert.equal(res.body.results, res.body.data.results.length);
          assert.include(res.body.data.results[0].title, 'Azkaban');
          done();
        });
    });
  });

  describe('GET movies/star-wars/', () => {
    it('GET all Star Wars movies in the data', (done) => {
      chai
        .request(app)
        .get('/api/v1/movies/star-wars/')
        .end((err, res) => {
          assert.equal(res.statusCode, 200);
          assert.equal(res.body.status, 'success');
          assert.equal(res.body.results, 11);
          assert.typeOf(res.body.data.results, 'array');
          assert.equal(res.body.data.results[0].id, 15);
          assert.equal(res.body.results, res.body.data.results.length);
          done();
        });
    });
  });

  describe('GET movies/star-wars/:id', () => {
    it('GET specific Star Wars movie in the data by id', (done) => {
      chai
        .request(app)
        .get('/api/v1/movies/star-wars/20')
        .end((err, res) => {
          assert.equal(res.statusCode, 200);
          assert.equal(res.body.status, 'success');
          assert.typeOf(res.body.data, 'Object');
          assert.equal(res.body.data.movie.id, 20);
          done();
        });
    });
  });

  describe('GET movies/star-wars/', () => {
    it('GET Star Wars movie by search', (done) => {
      chai
        .request(app)
        .get('/api/v1/movies/star-wars?q=Sith')
        .end((err, res) => {
          assert.equal(res.statusCode, 200);
          assert.equal(res.body.status, 'success');
          assert.equal(res.body.results, 1);
          assert.typeOf(res.body.data.results, 'array');
          assert.equal(res.body.results, res.body.data.results.length);
          assert.include(res.body.data.results[0].title, 'Sith');
          done();
        });
    });
  });
});

describe('Movies Errors', () => {
  describe('GET movies/harry-potter/:id', () => {
    it('GET Harry Potter movie id out of range', (done) => {
      chai
        .request(app)
        .get('/api/v1/movies/harry-potter/0')
        .end((err, res) => {
          assert.equal(res.statusCode, 404);
          assert.equal(res.body.status, 'failed');
          done();
        });
    });
  });

  describe('GET movies/harry-potter/', () => {
    it('GET Harry Potter movie search criteria not met', (done) => {
      chai
        .request(app)
        .get('/api/v1/movies/harry-potter?q=Sith')
        .end((err, res) => {
          assert.equal(res.statusCode, 404);
          assert.equal(res.body.status, 'failed');
          done();
        });
    });
  });

  describe('GET movies/star-wars/:id', () => {
    it('GET Star Wars movie id out of range', (done) => {
      chai
        .request(app)
        .get('/api/v1/movies/star-wars/0')
        .end((err, res) => {
          assert.equal(res.statusCode, 404);
          assert.equal(res.body.status, 'failed');
          done();
        });
    });
  });

  describe('GET movies/star-wars/', () => {
    it('GET Star Wars movie search criteria not met', (done) => {
      chai
        .request(app)
        .get('/api/v1/movies/star-wars?q=Azkaban')
        .end((err, res) => {
          assert.equal(res.statusCode, 404);
          assert.equal(res.body.status, 'failed');
          done();
        });
    });
  });
});
