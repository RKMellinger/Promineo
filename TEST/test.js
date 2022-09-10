const assert = require('chai.assert')
const test = require('../test/testcode')
var expect = chai.expect;

  describe('test', function() {
    it('Should return hello', function(){
      assert.equal(test(), "hello")
    })
  })

