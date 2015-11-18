var expect = require('chai').expect
  , defaults = require('./')

describe('defaults', function() {
  
  it('should default to preset if not set', function() {
    var el = {}
      , opts = { foo: 'bar' }

    var state = defaults(el, opts)
    expect(el).to.be.eql({ state: { foo: 'bar'} })
  })
  
  it('should use datum if present', function() {
    var el = { __data__: { foo: 'baz' } }
      , opts = { foo: 'bar' }

    var state = defaults(el, opts)
    expect(el).to.be.eql({ __data__: { foo: 'baz' }, state: { foo: 'baz'} })
  })

  it('should use data over state, state over preset', function() {
    var el = { __data__: { foo: 'baz' }, state: { foo: 'boo', a: 1 } }
      , opts = { foo: 'bar', a: 2, b: 3 }

    var state = defaults(el, opts)
    expect(el).to.be.eql({ __data__: { foo: 'baz', a: 1, b: 3 }, state: { foo: 'baz', a: 1, b: 3 } })
  })

  it('should return data/state if no opts', function() {
    var el = { __data__: { foo: 'baz' }, state: { foo: 'boo', a: 1 } }
      
    var state = defaults(el)
    expect(el).to.be.eql({ __data__: { foo: 'baz', a: 1 }, state: { foo: 'baz', a: 1 } })
  })

})