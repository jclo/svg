// ESLint declarations:
/* global describe, it */
/* eslint  one-var: 0, semi-style: 0, no-underscore-dangle: 0,
  no-unused-expressions: 0 */


// -- Vendor Modules
const { expect } = require('chai')
    ;

// -- Local Modules


// -- Local Constants


// -- Local Variables


// -- Main
module.exports = function(SVG) {
  const [_] = SVG._setTestMode();
  // Test the lib:

  describe('Test the library _.js:', () => {
    //
    it('Expects "_" to be an object.', () => {
      expect(_).to.be.an('object');
    });

    it('Expects "_" to own 11 properties.', () => {
      expect(Object.getOwnPropertyNames(_)).to.be.an('array').that.has.lengthOf(11);
    });

    describe('Test the method _.extend():', () => {
      const o = _.extend({ a: 1 }, { b: 2, c: 3 });
      const keys = Object.keys(o);

      it('Expects _ to own the property "extend" a function.', () => {
        expect(_).to.own.property('extend').that.is.a('function');
      });

      it('Expects "_.extend({ a: 1}, {b: 2, c: 3 })" to return an object.', () => {
        expect(o).to.be.an('object');
      });

      it('Expects it to own three properties.', () => {
        expect(keys).to.be.an('array').that.has.lengthOf(3);
      });

      it('Expects it to own the property "a" equal to 1.', () => {
        expect(o).to.own.property('a').that.is.equal(1);
      });

      it('Expects it to own the property "b" equal to 2.', () => {
        expect(o).to.own.property('b').that.is.equal(2);
      });

      it('Expects it to own the property "c" equal to 3.', () => {
        expect(o).to.own.property('c').that.is.equal(3);
      });
    });

    describe('Test the method _.isUndefined():', () => {
      it('Expects _ to own the property "isUndefined" a function.', () => {
        expect(_).to.own.property('isUndefined').that.is.a('function');
      });

      it('Expects "_.isUndefined(undefined)" to return true.', () => {
        expect(_.isUndefined(undefined)).to.be.true;
      });

      it('Expects "_.isUndefined(true)" to return false.', () => {
        expect(_.isUndefined(true)).to.be.false;
      });
    });

    describe('Test the method _.isNull():', () => {
      it('Expects _ to own the property "isNull" a function.', () => {
        expect(_).to.own.property('isNull').that.is.a('function');
      });

      it('Expects "_.isNull(null)" to return true.', () => {
        expect(_.isNull(null)).to.be.true;
      });

      it('Expects "_.isNull(true)" to return false.', () => {
        expect(_.isNull(true)).to.be.false;
      });
    });

    describe('Test the method _.isBoolean():', () => {
      it('Expects _ to own the property "isBoolean" a function.', () => {
        expect(_).to.own.property('isBoolean').that.is.a('function');
      });

      it('Expects "_.isBoolean(true)" to return true.', () => {
        expect(_.isBoolean(true)).to.be.true;
      });

      it('Expects "_.isBoolean(1)" to return false.', () => {
        expect(_.isBoolean(1)).to.be.false;
      });
    });

    describe('Test the method _.isString():', () => {
      it('Expects _ to own the property "isString" a function.', () => {
        expect(_).to.own.property('isString').that.is.a('function');
      });

      it('Expects "_.isString("abc")" to return true.', () => {
        expect(_.isString('abc')).to.be.true;
      });

      it('Expects "_.isString(1)" to return false.', () => {
        expect(_.isString(1)).to.be.false;
      });
    });

    describe('Test the method _.isNumber():', () => {
      it('Expects _ to own the property "isNumber" a function.', () => {
        expect(_).to.own.property('isNumber').that.is.a('function');
      });

      it('Expects "_.isNumber(123)" to return true.', () => {
        expect(_.isNumber(123)).to.be.true;
      });

      it('Expects "_.isNumber("123")" to return false.', () => {
        expect(_.isNumber('123')).to.be.false;
      });
    });

    describe('Test the method _.isObject():', () => {
      it('Expects _ to own the property "isObject" a function.', () => {
        expect(_).to.own.property('isObject').that.is.a('function');
      });

      it('Expects "_.isObject([])" to return true.', () => {
        expect(_.isObject([])).to.be.true;
      });

      it('Expects "_.isObject("123")" to return false.', () => {
        expect(_.isObject('123')).to.be.false;
      });
    });

    describe('Test the method _.isLiteralObject():', () => {
      it('Expects _ to own the property "isLiteralObject" a function.', () => {
        expect(_).to.own.property('isLiteralObject').that.is.a('function');
      });

      it('Expects "_.isLiteralObject({})" to return true.', () => {
        expect(_.isLiteralObject({})).to.be.true;
      });

      it('Expects "_.isLiteralObject([])" to return false.', () => {
        expect(_.isLiteralObject([])).to.be.false;
      });
    });

    describe('Test the method _.isFunction():', () => {
      it('Expects _ to own the property "isFunction" a function.', () => {
        expect(_).to.own.property('isFunction').that.is.a('function');
      });

      it('Expects "_.isFunction(function a(){})" to return true.', () => {
        function a() {}
        expect(_.isFunction(a)).to.be.true;
      });

      it('Expects "_.isFunction([])" to return false.', () => {
        expect(_.isFunction([])).to.be.false;
      });
    });

    describe('Test the method _.isArray():', () => {
      it('Expects _ to own the property "isArray" a function.', () => {
        expect(_).to.own.property('isArray').that.is.a('function');
      });


      it('Expects "_.isArray([])" to return true.', () => {
        expect(_.isArray([])).to.be.true;
      });

      it('Expects "_.isArray({})" to return false.', () => {
        expect(_.isArray({})).to.be.false;
      });
    });

    describe('Test the method _.elinear():', () => {
      it('Expects _ to own the property "elinear" a function.', () => {
        expect(_).to.own.property('elinear').that.is.a('function');
      });

      it('Expects _.elinear(1, 1, 1, 1) to return 0.5.', () => {
        expect(_.elinear(1, 1, 1, 1)).to.be.a('number').that.is.equal(2);
      });
    });
  });
};
