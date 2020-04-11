/** ************************************************************************
 *
 * Provides a subset of the overslash library.
 *
 * _.js is just a literal object that contains a set of functions. It
 * can't be intantiated.
 *
 *
 * Private Functions:
 *  . none,
 *
 *
 * Public Static Methods:
 *  . extend                      extends the passed-in object with new methods,
 *
 *  . isUndefined                 is a given variable undefined?
 *  . isNull                      is a given value null?
 *  . isBoolean                   is a given value a boolean?
 *  . isString                    is a given value a string?
 *  . isNumber                    is a given value a number?
 *  . isObject                    is a given variable an object?
 *  . isLiteralObject             is a given variable a literal object?
 *  . isFunction                  is a given variable a function?
 *  . isArray                     is a given value an array?
 *
 *  . linear                      linear easing method,
 *
 *
 *
 * @namespace    -
 * @dependencies none
 * @exports      -
 * @author       -
 * @since        0.0.0
 * @version      -
 * ********************************************************************** */
/* global */
/* eslint-disable one-var, semi-style, no-underscore-dangle */


// -- Vendor Modules


// -- Local Modules


// -- Local Constants


// -- Local Variables


// -- Public Static Methods ------------------------------------------------

const _ = {

  /**
   * Extends the passed-in object with new methods.
   *
   * Nota: this function mutates object.
   *
   * @function (arg1, arg2)
   * @private
   * @param {Object}        the object to extend,
   * @param {Object}        an object containing a set of methods,
   * @returns {}            -,
   * @since 0.0.0
   */
  extend(object, methods) {
    const keys = Object.keys(methods);
    for (let i = 0; i < keys.length; i++) {
      /* eslint-disable-next-line no-param-reassign */
      object[keys[i]] = methods[keys[i]];
    }
    return object;
  },

  /**
   * Is a given variable undefined?
   *
   * @method (arg1)
   * @public
   * @param {Object}        the object to test,
   * @returns {Boolean}     returns true or false,
   * @since 0.0.0
   */
  isUndefined(obj) {
    return obj === undefined;
  },

  /**
   * Is a given value null?
   *
   * @method (arg1)
   * @public
   * @param {Object}        the object to test,
   * @returns {Boolean}     returns true or false,
   * @since 0.0.0
   */
  isNull(obj) {
    return obj === null;
  },

  /**
   * Is a given value a boolean?
   *
   * @method (arg1)
   * @public
   * @param {Object}        the object to test,
   * @returns {Boolean}     returns true or false,
   * @since 0.0.0
   */
  isBoolean(obj) {
    return obj === true || obj === false || Object.prototype.toString.call(obj) === '[object Boolean]';
  },

  /**
   * Is a given value a string?
   *
   * @method (arg1)
   * @public
   * @param {Object}        the object to test,
   * @returns {Boolean}     returns true or false,
   * @since 0.0.0
   */
  isString(obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
  },

  /**
   * Is a given value a number?
   *
   * @method (arg1)
   * @public
   * @param {Object}        the object to test,
   * @returns {Boolean}     returns true or false,
   * @since 0.0.0
   */
  isNumber(obj) {
    return Object.prototype.toString.call(obj) === '[object Number]';
  },

  /**
   * Is a given variable an object?
   * (copied from: http://underscorejs.org)
   *
   * @method (arg1)
   * @public
   * @param {Object}        the object to test,
   * @returns {Boolean}     returns true or false,
   * @since 0.0.0
   */
  isObject(obj) {
    const type = typeof obj;
    return (type === 'function' || type === 'object') && !!obj;
  },

  /**
   * Is a given variable a literal object?
   *
   * @method (arg1)
   * @private
   * @param {Object}        the object to test,
   * @returns {Boolean}     returns true or false,
   * @since 0.0.3
   */
  isLiteralObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
  },

  /**
   * Is a given variable a function?
   *
   * @method (arg1)
   * @public
   * @param {Object}        the object to test,
   * @returns {Boolean}     returns true or false,
   * @since 0.0.0
   */
  isFunction(obj) {
    return Object.prototype.toString.call(obj) === '[object Function]';
  },

  /**
   * Is a given value an array?
   * (Delegates to ECMA5's native Array.isArray.)
   * (copied from: http://underscorejs.org)
   *
   * @method (arg1)
   * @public
   * @param {Object}        the object to test,
   * @returns {Boolean}     returns true or false,
   * @since 0.0.0
   */
  isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  },

  /**
   * Computes the intermediate values according to a linear progression.
   *
   * @method (arg1, arg2, arg3, arg4)
   * @public
   * @param {Number}        the current time,
   * @param {Number}        the beginning value,
   * @param {Number}        the change in value,
   * @param {Number}        the duration,
   * @returns {Number}      returns the computed value,
   */
  elinear(t, b, c, d) {
    return (c * t) / d + b;
  },
};


// -- Export
export default _;

/* eslint-enable one-var, semi-style, no-underscore-dangle */
