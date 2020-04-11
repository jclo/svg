// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, no-unused-vars: 0, semi-style: 0, no-underscore-dangle: 0 */


// -- Vendor Modules
const should     = require('chai').should()
    , { expect } = require('chai')
    ;


// -- Local Modules


// -- Local Constants


// -- Local Variables


// -- Main
module.exports = function(SVG) {
  describe('Test SVG and SVG.VERSION:', () => {
    it('expects SVG to be a function.', () => {
      expect(SVG).to.be.a('function');
    });

    it('Expects SVG.VERSION to return a string.', () => {
      expect(SVG.VERSION).to.be.a('string');
    });
  });

  describe('Test SVG Static Methods:', () => {
    it('Expects SVG._setTestMode to to be a function.', () => {
      expect(SVG._setTestMode).to.be.a('function');
    });

    it('Expects SVG._setTestMode() to return an array.', () => {
      expect(SVG._setTestMode()).to.be.an('array');
    });

    it('Expects SVG.noConflict to be a function.', () => {
      expect(SVG.noConflict).to.be.a('function');
    });

    it('Expects SVG.noConflict() to return an object.', () => {
      // expect(SVG.noConflict()).to.be.an('object');
    });

    it('Expects SVG.transformAttrToObj to be a function.', () => {
      expect(SVG.transformAttrToObj).to.be.a('function');
    });

    it('Expects SVG.transformAttrToStr to be a function.', () => {
      expect(SVG.transformAttrToStr).to.be.a('function');
    });

    it('Expects SVG.getArc to be a function.', () => {
      expect(SVG.getArc).to.be.a('function');
    });

    it('Expects SVG.getLine to be a function.', () => {
      expect(SVG.getLine).to.be.a('function');
    });

    it('Expects SVG.getMultipolyline to be a function.', () => {
      expect(SVG.getMultipolyline).to.be.a('function');
    });
  });
};
