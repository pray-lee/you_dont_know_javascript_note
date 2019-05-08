//现代模块核心实现
var MyModules = (function Manager() {
  var modules = {}
  function define(name, deps, impl) {
    for(var i = 0; i < deps.length; i++) {
      deps[i] = modules[deps[i]]
    }
    modules[name] = impl.apply(impl, deps) // 核心
  }
  function get(name) {
    return modules[name]
  }
  return {
    define,
    get
  }
})()

// 定义模块
MyModules.define('bar', [], function() {
  function hello(who) {
    return 'Let me introduce' + who
  }
  return {
    hello
  }
})

MyModules.define('foo', ['bar'], function(bar) {
  var hungry = 'hippo'
  function awesome() {
    console.log(bar.hello(hungry).toUpperCase())
  }
  return {
    awesome
  }
})

var bar = MyModules.get('bar')
var foo = MyModules.get('foo')
console.log(bar.hello('hippo'))
foo.awesome()
