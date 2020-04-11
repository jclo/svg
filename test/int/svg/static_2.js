// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, no-unused-vars: 0, semi-style: 0, no-underscore-dangle: 0,
  no-unused-expressions: 0 */


// -- Vendor Modules
const should     = require('chai').should()
    , { expect } = require('chai')
    ;


// -- Local Modules


// -- Local Constants


// -- Local Variables


// -- Main
module.exports = function(SVG) {
  describe('Test SVG.transformAttrToStr():', () => {
    it('Expects SVG.transformAttrToStr() to return null.', () => {
      expect(SVG.transformAttrToStr()).to.be.equal(null);
    });

    it('Expects SVG.transformAttrToStr(1) to return null.', () => {
      expect(SVG.transformAttrToStr(1)).to.be.equal(null);
    });

    it('Expects SVG.transformAttrToStr({}) to return an empty string.', () => {
      expect(SVG.transformAttrToStr({})).to.be.a('string').that.is.empty;
    });


    // Translate
    it('Expects SVG.transformAttrToStr({ translate: {}}) to return "translate(0, 0)".', () => {
      expect(SVG.transformAttrToStr({ translate: {} })).to.be.a('string')
        .that.is.equal('translate(0, 0)');
    });

    it('Expects SVG.transformAttrToStr({ translate: { x: 1 }}) to return "translate(1, 0)".', () => {
      expect(SVG.transformAttrToStr({ translate: { x: 1 } })).to.be.a('string')
        .that.is.equal('translate(1, 0)');
    });

    it('Expects SVG.transformAttrToStr({ translate: { y: 1 }}) to return "translate(0, 1)".', () => {
      expect(SVG.transformAttrToStr({ translate: { y: 1 } })).to.be.a('string')
        .that.is.equal('translate(0, 1)');
    });

    it('Expects SVG.transformAttrToStr({ translate: { x: 1, y: -1 }}) to return "translate(1, -1)".', () => {
      expect(SVG.transformAttrToStr({ translate: { x: 1, y: -1 } })).to.be.a('string')
        .that.is.equal('translate(1, -1)');
    });


    // Scale
    it('Expects SVG.transformAttrToStr({ scale: {}}) to return "scale(0, 0)".', () => {
      expect(SVG.transformAttrToStr({ scale: {} })).to.be.a('string')
        .that.is.equal('scale(0, 0)');
    });

    it('Expects SVG.transformAttrToStr({ scale: { x: 1 }}) to return "scale(1, 0)".', () => {
      expect(SVG.transformAttrToStr({ scale: { x: 1 } })).to.be.a('string')
        .that.is.equal('scale(1, 0)');
    });

    it('Expects SVG.transformAttrToStr({ scale: { y: 1 }}) to return "scale(0, 1)".', () => {
      expect(SVG.transformAttrToStr({ scale: { y: 1 } })).to.be.a('string')
        .that.is.equal('scale(0, 1)');
    });

    it('Expects SVG.transformAttrToStr({ scale: { x: 1, y: -1 }}) to return "scale(1, -1)".', () => {
      expect(SVG.transformAttrToStr({ scale: { x: 1, y: -1 } })).to.be.a('string')
        .that.is.equal('scale(1, -1)');
    });


    // Rotate
    it('Expects SVG.transformAttrToStr({ rotate: {}}) to return "rotate(0)".', () => {
      expect(SVG.transformAttrToStr({ rotate: {} })).to.be.a('string')
        .that.is.equal('rotate(0)');
    });

    it('Expects SVG.transformAttrToStr({ rotate: { a: "90" }}) to return "rotate(0)".', () => {
      expect(SVG.transformAttrToStr({ rotate: { a: '90' } })).to.be.a('string')
        .that.is.equal('rotate(0)');
    });

    it('Expects SVG.transformAttrToStr({ rotate: { a: 90 }}) to return "rotate(90)".', () => {
      expect(SVG.transformAttrToStr({ rotate: { a: 90 } })).to.be.a('string')
        .that.is.equal('rotate(90)');
    });


    it('Expects SVG.transformAttrToStr({ rotate: { cx: "10" }}) to return "rotate(0)".', () => {
      expect(SVG.transformAttrToStr({ rotate: { cx: '10' } })).to.be.a('string')
        .that.is.equal('rotate(0)');
    });

    it('Expects SVG.transformAttrToStr({ rotate: { cx: 10 }}) to return "rotate(0, 10)".', () => {
      expect(SVG.transformAttrToStr({ rotate: { cx: 10 } })).to.be.a('string')
        .that.is.equal('rotate(0, 10)');
    });


    it('Expects SVG.transformAttrToStr({ rotate: { cy: "-10" }}) to return "rotate(0)".', () => {
      expect(SVG.transformAttrToStr({ rotate: { cy: '-10' } })).to.be.a('string')
        .that.is.equal('rotate(0)');
    });

    it('Expects SVG.transformAttrToStr({ rotate: { cy: -10 }}) to return "rotate(0, 0, -10)".', () => {
      expect(SVG.transformAttrToStr({ rotate: { cy: -10 } })).to.be.a('string')
        .that.is.equal('rotate(0, 0, -10)');
    });

    it('Expects SVG.transformAttrToStr({ rotate: { a: 90, cx: 10, cy: -10 }}) to return "rotate(90, 10, -10)".', () => {
      expect(SVG.transformAttrToStr({ rotate: { a: 90, cx: 10, cy: -10 } })).to.be.a('string')
        .that.is.equal('rotate(90, 10, -10)');
    });

    it('Expects SVG.transformAttrToStr({ rotate: { a: 90, cx: "10", cy: -10 }}) to return "rotate(90, 0, -10)".', () => {
      expect(SVG.transformAttrToStr({ rotate: { a: 90, cx: '10', cy: -10 } })).to.be.a('string')
        .that.is.equal('rotate(90, 0, -10)');
    });

    it('Expects SVG.transformAttrToStr({ rotate: { a: 90, cx: 10, cy: "-10" }}) to return "rotate(90, 10)".', () => {
      expect(SVG.transformAttrToStr({ rotate: { a: 90, cx: 10, cy: '-10' } })).to.be.a('string')
        .that.is.equal('rotate(90, 10)');
    });

    it('Expects SVG.transformAttrToStr({ rotate: { a: 90, cx: "10", cy: "-10" }}) to return "rotate(0)".', () => {
      expect(SVG.transformAttrToStr({ rotate: { a: 90, cx: '10', cy: '-10' } })).to.be.a('string')
        .that.is.equal('rotate(90)');
    });


    // skewX
    it('Expects SVG.transformAttrToStr({ skewX: "a") to return "skewX(0)".', () => {
      expect(SVG.transformAttrToStr({ skewX: 'a' })).to.be.a('string')
        .that.is.equal('skewX(0)');
    });

    it('Expects SVG.transformAttrToStr({ skewX: 10) to return "skewX(10)".', () => {
      expect(SVG.transformAttrToStr({ skewX: 10 })).to.be.a('string')
        .that.is.equal('skewX(10)');
    });


    // skewY
    it('Expects SVG.transformAttrToStr({ skewY: "a") to return "skewY(0)".', () => {
      expect(SVG.transformAttrToStr({ skewY: 'a' })).to.be.a('string')
        .that.is.equal('skewY(0)');
    });

    it('Expects SVG.transformAttrToStr({ skewY: 10) to return "skewY(10)".', () => {
      expect(SVG.transformAttrToStr({ skewY: 10 })).to.be.a('string')
        .that.is.equal('skewY(10)');
    });
  });
};
