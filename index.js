var extend = require('utilise.extend')
  , keys = require('utilise.keys')
  , is = require('utilise.is')

module.exports = function defaults(o, k, v){
  if (o.host) o = o.host
  return is.obj(k) 
       ? (keys(k).map(function(i) { set(i, k[i]) }), o)
       : (set(k, v), o[k])

  function set(k, v) {
    if (!is.def(o[k])) o[k] = v
  }
}