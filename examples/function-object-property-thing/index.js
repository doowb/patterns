/*!
 * patterns <https://github.com/doowb/patterns>
 *
 * Copyright (c) 2014 Brian Woodward, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var inspect = function (obj) {
  return require('util').inspect(obj, null, 10);
}

var consumer = require('./consumer');
var Foo = consumer.Foo;
var Bar = consumer.Bar;

var foo = new Foo();
var bar = new Bar({
  bar: 'baz',
  bang: 'boop'
});

foo.option({
  bar: 'baz',
  bang: 'boop'
});

console.log('-- after initial load--');
console.log();

console.log('foo', foo);
console.log('foo.option("bar")', foo.option('bar'));
console.log('foo.option("bang")', foo.option('bang'));
console.log('foo.option.get("bar")', foo.option.get('bar'));
console.log('foo.option.get("bang")', foo.option.get('bang'));
console.log();

console.log('bar', bar);
console.log('bar.option("bar")', bar.option('bar'));
console.log('bar.option("bang")', bar.option('bang'));
console.log('bar.option.get("bar")', bar.option.get('bar'));
console.log('bar.option.get("bang")', bar.option.get('bang'));
console.log();

console.log('-- after updates--');
console.log();

foo.option('bar', 'foo-baz');
foo.option.set('bang', 'foo-boom');

bar.option('bar', 'bar-baz');
bar.option.set('bang', 'bar-boom');

console.log('foo', foo);
console.log('foo.option("bar")', foo.option('bar'));
console.log('foo.option("bang")', foo.option('bang'));
console.log('foo.option.get("bar")', foo.option.get('bar'));
console.log('foo.option.get("bang")', foo.option.get('bang'));
console.log();

console.log('bar', bar);
console.log('bar.option("bar")', bar.option('bar'));
console.log('bar.option("bang")', bar.option('bang'));
console.log('bar.option.get("bar")', bar.option.get('bar'));
console.log('bar.option.get("bang")', bar.option.get('bang'));
console.log();

