'use strict';

var chai = require('chai');
var request = require('supertest');
var app = require('../server');
var expect = chai.expect;

describe('API TESTS', function() {
  var test = { 
    message: 'Toolbox test' 
  };
  describe('#GET / repeat', function() { 
    it('should return a message to toolbox', function(done) { 
      request(app).get('/api/repeat')
        .end(function(err, res) { 
          expect(res.statusCode).to.equal(200); 
          expect(res.text).to.equal("Hi everyboby on Toolbox, I am working."); 
          done(); 
        }); 
    });
  });
  describe('#POST / repeat ', function() { 
    it('should return NO DATA', function(done) { 
      request(app) .post('/api/repeat') .send({}) .end(function(err, res) { 
        expect(res.statusCode).to.equal(200); 
        expect(res.text).to.equal("NO DATA"); 
        done(); 
      }); 
    });
    it('should return same data', function(done) { 
      request(app) .post('/api/repeat') .send(test) .end(function(err, res) { 
        expect(res.statusCode).to.equal(200); 
        expect(res.text).to.equal(test.message); 
        done(); 
      }); 
    });  
  }); 
});