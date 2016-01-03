var expect = require('chai').expect
  , defaults = require('./')

describe('defaults', function() {
  
  it('should default singular', function() {
    var o = {}
    var foo = defaults(o, 'foo', 'bar')
    expect(foo).to.be.eql('bar')
    expect(o).to.be.eql({ foo: 'bar'})
  })

  it('should default plural', function() {
    var o = {}
      , opts = { foo: 'bar' }

    var state = defaults(o, { 
      foo: 'bar' 
    , bar: 'baz'
    })

    expect(o).to.not.be.equal(opts)
    expect(o).to.be.eql(state)
    expect(o).to.be.eql({ 
      foo: 'bar' 
    , bar: 'baz' 
    })
  })
  
  it('should not overwrite', function() {
    var o = {}
    var foo 

    foo = defaults(o, 'foo', 'bar')
    expect(foo).to.be.eql('bar')
    expect(o).to.be.eql({ foo: 'bar'})

    foo = defaults(o, 'foo', 'baz')
    expect(foo).to.be.eql('bar')
    expect(o).to.be.eql({ foo: 'bar'})
  })
  
  it('should not bind on shadow root', function() {
    var o = { host: {} }
    defaults(o, { api: String })

    expect(o.api).to.not.be.ok
    expect(o.host.api).to.be.eql(String)
  })

})