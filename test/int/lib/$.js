// ESLint declarations:
/* global describe, it */
/* eslint  one-var: 0, semi-style: 0, no-underscore-dangle: 0,
  no-unused-expressions: 0 */


// -- Vendor Modules
const { expect } = require('chai')
    ;


// -- Local Modules
const test1 = require('./$_1')
    , test2 = require('./$_2')
    , test3 = require('./$_3')
    , test4 = require('./$_4')
    , test5 = require('./$_5')
    , test6 = require('./$_6')
    , test7 = require('./$_7')
    ;


// -- Local Constants


// -- Local Variables


// -- Main
module.exports = function(SVG) {
  const [, $] = SVG._setTestMode();
  const el = document.getElementById('app$1').firstElementChild;
  const svg = { id: el.id, _root: el, $ };

  describe('Test the library $.js:', () => {
    //
    it('Expects "$" to be a function.', () => {
      expect(svg.$).to.be.a('function');
    });

    it('Expects $() to return an object.', () => {
      expect(svg.$()).to.be.an('object');
    });

    it('Expects $() to own 36 properties.', () => {
      expect(Object.getOwnPropertyNames(svg.$())).to.be.an('array').that.has.lengthOf(36);
    });

    it('Expects $() to own the property "id" that is a string.', () => {
      expect(svg.$()).to.own.property('id').that.is.a('string').that.is.equal(el.id);
    });

    it('Expects $() to own the property "0".', () => {
      expect(svg.$()).to.own.property('0');
    });

    it('Expects the property "0" to be an SVGElement that has the property "id".', () => {
      expect(svg.$()[0].id).to.be.a('string').that.is.equal(el.id);
    });

    it('Expects $() to own the property "_root".', () => {
      expect(svg.$()).to.own.property('_root');
    });

    it('Expects the property "_root" to be an SVGElement that has the property "id".', () => {
      expect(svg.$()._root.id).to.be.a('string').that.is.equal(el.id);
    });

    describe('Test $() methods:', () => {
      test1(svg, el);
      test2(SVG, 'app$2');
      test3(SVG, 'app$3');
      test4(SVG, 'app$4');
      test5(SVG, 'app$5');
      test6(SVG, 'app$6');
      test7(SVG, 'app$7');
    });
  });
};
