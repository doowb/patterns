
var Option = require('./option');

var Foo = function () {
  console.log('Foo#create');
  this.option = Option.create();
};

var Bar = function (options) {
  console.log('Bar#create');
  this._cache = options || {};
  this.option = Option.create(this._cache);
};

module.exports = {
  Foo: Foo,
  Bar: Bar
};