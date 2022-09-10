var expect = chai.expect

describe('myFunction', function(){
  describe('#doSomething', function(){
    it('should concatenate tyhe two parameters', function(){
      var x = doSomething('hello', 5)
      expect(x).to.equal('hello5')
    })
    it('should throw an error if first parameter is not string', function(){
      expect(function(){
        doSomething(5,5)
      }).to.throw(Error)
    })
  })
})