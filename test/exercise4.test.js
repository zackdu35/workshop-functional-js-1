const expect = require('chai').expect;
const asyncYolo = require('../src/exercise1').asyncYolo;

describe('GIVEN function asyncYolo', function() {

  it('WHEN asynchronous thing is not broken THEN should return THE result', function() {

    // Your future job begins here ...

    expect(asyncYolo()).to.eql([101, 102, 203]);
  });

});