/* global describe, it */
/* eslint  one-var: 0, no-unused-expressions: 0, semi-style: 0 */

'use strict';

// -- Node modules
const { expect } = require('chai')
    ;

// -- Local modules
const SVG = require('../../index.js')
    ;

// -- Local constants


// -- Local variables


// -- Main
module.exports = function() {
  describe('Test SVG functions:', () => {
    //
    describe('Text SVG.transformAttrToStr():', () => {
      // Translate:
      it('Expects SVG.transformAttrToStr({ translate: {} }) to return an empty string.', () => {
        const tr = { translate: {} };
        expect(SVG.transformAttrToStr(tr)).to.be.a('string').that.is.empty;
      });
      it('Expects SVG.transformAttrToStr({ translate: { x: "0", y: "0" } }) to return an empty string.', () => {
        const tr = { translate: { x: '0', y: '0' } };
        expect(SVG.transformAttrToStr(tr)).to.be.a('string').that.is.empty;
      });
      it('Expects SVG.transformAttrToStr({ translate: {x: 0} }) to return the string "translate(0, 0)".', () => {
        const tr = { translate: { x: 0 } };
        expect(SVG.transformAttrToStr(tr)).to.be.a('string').that.is.equal('translate(0, 0)');
      });
      it('Expects SVG.transformAttrToStr({ translate: { x: 0, y: "1" } }) to return the string "translate(0, 0)".', () => {
        const tr = { translate: { x: 0, y: '1' } };
        expect(SVG.transformAttrToStr(tr)).to.be.a('string').that.is.equal('translate(0, 0)');
      });
      it('Expects SVG.transformAttrToStr({ translate: { x: 1 } }) to return the string "translate(1, 0)".', () => {
        const tr = { translate: { x: 1 } };
        expect(SVG.transformAttrToStr(tr)).to.be.a('string').that.is.equal('translate(1, 0)');
      });
      it('Expects SVG.transformAttrToStr({ translate: { x: 1, y: 2 } }) to return the string "translate(1, 2)".', () => {
        const tr = { translate: { x: 1, y: 2 } };
        expect(SVG.transformAttrToStr(tr)).to.be.a('string').that.is.equal('translate(1, 2)');
      });

      // Scale:
      it('Expects SVG.transformAttrToStr({ scale: {} }) to return an empty string.', () => {
        const tr = { scale: {} };
        expect(SVG.transformAttrToStr(tr)).to.be.a('string').that.is.empty;
      });
      it('Expects SVG.transformAttrToStr({ scale: { x: "0", y: "0" } }) to return an empty string.', () => {
        const tr = { scale: { x: '0', y: '0' } };
        expect(SVG.transformAttrToStr(tr)).to.be.a('string').that.is.empty;
      });
      it('Expects SVG.transformAttrToStr({ scale: { x: 0 } }) to return the string "scale(0, 0)".', () => {
        const tr = { scale: { x: 0 } };
        expect(SVG.transformAttrToStr(tr)).to.be.a('string').that.is.equal('scale(0, 0)');
      });
      it('Expects SVG.transformAttrToStr({ scale: { x: 0, y:"1" } }) to return the string "scale(0, 0)".', () => {
        const tr = { scale: { x: 0, y: '1' } };
        expect(SVG.transformAttrToStr(tr)).to.be.a('string').that.is.equal('scale(0, 0)');
      });
      it('Expects SVG.transformAttrToStr({ scale: { x: 1 } }) to return the string "scale(1, 1)".', () => {
        const tr = { scale: { x: 1 } };
        expect(SVG.transformAttrToStr(tr)).to.be.a('string').that.is.equal('scale(1, 1)');
      });
      it('Expects SVG.transformAttrToStr({ scale: { x: 1, y: 2 } }) to return the string "scale(1, 2)".', () => {
        const tr = { scale: { x: 1, y: 2 } };
        expect(SVG.transformAttrToStr(tr)).to.be.a('string').that.is.equal('scale(1, 2)');
      });

      // Rotate:
      it('Expects SVG.transformAttrToStr({ rotate: {} }) to return an empty string.', () => {
        const tr = { rotate: {} };
        expect(SVG.transformAttrToStr(tr)).to.be.a('string').that.is.empty;
      });
      it('Expects SVG.transformAttrToStr({ rotate: { a: "90" } }) to return an empty string.', () => {
        const tr = { rotate: { a: '90' } };
        expect(SVG.transformAttrToStr(tr)).to.be.a('string').that.is.empty;
      });
      it('Expects SVG.transformAttrToStr({ rotate: { a: 0 } }) to return the string "rotate(0)".', () => {
        const tr = { rotate: { a: 0 } };
        expect(SVG.transformAttrToStr(tr)).to.be.a('string').that.is.equal('rotate(0)');
      });
      it('Expects SVG.transformAttrToStr({ rotate: { a: 90 } }) to return the string "rotate(90)".', () => {
        const tr = { rotate: { a: 90 } };
        expect(SVG.transformAttrToStr(tr)).to.be.a('string').that.is.equal('rotate(90)');
      });

      it('Expects SVG.transformAttrToStr({ rotate: { cx: 0, cy: 0 } }) to return an empty string.', () => {
        const tr = { rotate: { cx: 0, cy: 0 } };
        expect(SVG.transformAttrToStr(tr)).to.be.a('string').that.is.empty;
      });

      it('Expects SVG.transformAttrToStr({ rotate: { a: 90 cx: "0" } }) to return the string "rotate(90)".', () => {
        const tr = { rotate: { a: 90, cx: '0' } };
        expect(SVG.transformAttrToStr(tr)).to.be.a('string').that.is.equal('rotate(90)');
      });
      it('Expects SVG.transformAttrToStr({ rotate: { a: 90 cx: 0 } }) to return the string "rotate(90, 0, 0)".', () => {
        const tr = { rotate: { a: 90, cx: 0 } };
        expect(SVG.transformAttrToStr(tr)).to.be.a('string').that.is.equal('rotate(90, 0, 0)');
      });
      it('Expects SVG.transformAttrToStr({ rotate: { a: 90 cx: 1 } }) to return the string "rotate(90, 1, 1)".', () => {
        const tr = { rotate: { a: 90, cx: 1 } };
        expect(SVG.transformAttrToStr(tr)).to.be.a('string').that.is.equal('rotate(90, 1, 1)');
      });
      it('Expects SVG.transformAttrToStr({ rotate: { a: 90 cx: 1, cy: "0" } }) to return the string "rotate(90, 1, 1)".', () => {
        const tr = { rotate: { a: 90, cx: 1, cy: '0' } };
        expect(SVG.transformAttrToStr(tr)).to.be.a('string').that.is.equal('rotate(90, 1, 1)');
      });
      it('Expects SVG.transformAttrToStr({ rotate: { a: 90 cx: 1, cy: 0 } }) to return the string "rotate(90, 1, 0)".', () => {
        const tr = { rotate: { a: 90, cx: 1, cy: 0 } };
        expect(SVG.transformAttrToStr(tr)).to.be.a('string').that.is.equal('rotate(90, 1, 0)');
      });

      // SkewX:
      it('Expects SVG.transformAttrToStr({ skewX: null }) to return an empty string.', () => {
        const tr = { skewX: null };
        expect(SVG.transformAttrToStr(tr)).to.be.a('string').that.is.empty;
      });
      it('Expects SVG.transformAttrToStr({ skewX: "0" }) to return an empty string.', () => {
        const tr = { skewX: '0' };
        expect(SVG.transformAttrToStr(tr)).to.be.a('string').that.is.empty;
      });
      it('Expects SVG.transformAttrToStr({ skewX: 0 }) to return the string "skewX(0)".', () => {
        const tr = { skewX: 0 };
        expect(SVG.transformAttrToStr(tr)).to.be.a('string').that.is.equal('skewX(0)');
      });
      it('Expects SVG.transformAttrToStr({ skewX: 1 }) to return the string "skewX(1)".', () => {
        const tr = { skewX: 1 };
        expect(SVG.transformAttrToStr(tr)).to.be.a('string').that.is.equal('skewX(1)');
      });

      // SkewY:
      it('Expects SVG.transformAttrToStr({ skewY: null }) to return an empty string.', () => {
        const tr = { skewY: null };
        expect(SVG.transformAttrToStr(tr)).to.be.a('string').that.is.empty;
      });
      it('Expects SVG.transformAttrToStr({ skewY: "0" }) to return an empty string.', () => {
        const tr = { skewY: '0' };
        expect(SVG.transformAttrToStr(tr)).to.be.a('string').that.is.empty;
      });
      it('Expects SVG.transformAttrToStr({ skewY: 0 }) to return the string "skewY(0)".', () => {
        const tr = { skewY: 0 };
        expect(SVG.transformAttrToStr(tr)).to.be.a('string').that.is.equal('skewY(0)');
      });
      it('Expects SVG.transformAttrToStr({ skewY: 1 }) to return the string "skewY(1)".', () => {
        const tr = { skewY: 1 };
        expect(SVG.transformAttrToStr(tr)).to.be.a('string').that.is.equal('skewY(1)');
      });

      // Composite:
      /* eslint-disable object-curly-newline */
      it('Expects SVG.transformAttrToStr({ ...args } }) to return the string "...args".', () => {
        const tr = { translate: { x: 10, y: 20 }, scale: { x: 50 }, rotate: { a: 90 }, skewX: 567 };
        const s = 'translate(10, 20) scale(50, 50) rotate(90) skewX(567)';
        expect(SVG.transformAttrToStr(tr)).to.be.a('string').that.is.equal(s);
      });
      /* eslint-enable object-curly-newline */
    });
  });
};
