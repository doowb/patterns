
var debug = require('debug')('example:option');
var extend = require('lodash').extend;

module.exports.create = function (options) {

  options = options || {};
  var instance = null;

  var Option = function (key, value) {
    var len = arguments.length;

    if (instance === null && !(this instanceof Option)) {
      debug('creating new instance', len, arguments);
      switch (len) {
        case 0: instance = new Option(); break;
        case 1: instance = new Option(key); break;
        case 2: instance = new Option(key, value); break;
      }
    }

    if (instance !== null && !(this instanceof Option)) {
      debug('using instance', len, arguments);
      switch (len) {
        case 0:
          return instance.get();
          break;
        case 1:
          if (typeof key === 'string') {
            return instance.get(key);
          } else {
            return instance.set(key);
          }
          break;
        case 2:
          return instance.set.apply(instance, arguments);
          break;
      }
    }

    debug('new instance constructor', len, arguments);
    this.cache = options;

  };

  Option.get = function (key) {
    debug('Option#get', arguments);
    if (arguments.length === 0) {
      return Option();
    }
    return Option(key);
  };


  Option.prototype.get = function(key) {
    debug('Option#prototype#get', arguments);
    if (arguments.length === 0) {
      return this.cache;
    }
    return this.cache[key];
  };

  Option.set = function (key, value) {
    debug('Option#set', arguments);
    if (arguments.length === 1) {
      return Option(key);
    }
    return Option(key, value);
  };

  Option.prototype.set = function(key, value) {
    debug('Option#prototype#set', arguments);
    if (typeof key === 'string') {
      this.cache[key] = value;
      return this;
    }
    extend(this.cache, key);
    return this;
  };

  return Option;
};