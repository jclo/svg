/* global describe, it */
/* eslint  one-var: 0, semi-style: 0 */

'use strict';

// -- Node modules
const { expect } = require('chai')
    ;

// -- Local modules
const SVG = require('../../index.js')
    ;

// -- Local constants


// -- Local variables

/*
*  . transformAttrToObj          converts a SVG transform attributes string to an object,
*  . transformAttrToStr          converts a SVG transform attributes object to a string,
*  . getArc                      returns an arc path,
*  . multipolyline               returns polyline paths,
*/

/*
rotate: null,
  matrix: null,
  skewX: null,
  skewY: null }
*/

// -- Main
module.exports = function() {

console.log(SVG.transformAttrToStr({ translate: { x: 0, y: 1 }, scale: { x: 2, y: 3 }, rotate: { a: 90 } }));


  describe('Test SVG Static Methods:', () => {
    describe('Test SVG.transformAttrToObj:', () => {
      it('Expects SVG.transformAttrToObj to be a function.', () => {
        expect(SVG.transformAttrToObj).to.be.a('function');
      });

      const tr = SVG.transformAttrToObj('translate(0, 1) scale(2, 3) rotate(90)');
      it('Expects SVG.transformAttrToObj("translate(0, 1) scale(2, 3)") to return an object.', () => {
        expect(tr).to.be.an('object');
      });

      it('Expects this object to own the property "translate".', () => {
        expect(tr).to.be.have.property('translate').that.is.an('object');
      });

      it('Expects the property "translate" to own the property "x" that is equal to 0.', () => {
        expect(tr.translate).to.be.have.property('x').that.is.a('Number').that.is.equal(0);
      });

      it('Expects the property "translate" to own the property "y" that is equal to 1.', () => {
        expect(tr.translate).to.be.have.property('y').that.is.a('Number').that.is.equal(1);
      });

      it('Expects this object to own the property "scale".', () => {
        expect(tr).to.be.have.property('scale').that.is.an('object');
      });

      it('Expects the property "scale" to own the property "x" that is equal to 2.', () => {
        expect(tr.scale).to.be.have.property('x').that.is.a('Number').that.is.equal(2);
      });

      it('Expects the property "scale" to own the property "y" that is equal to 3.', () => {
        expect(tr.scale).to.be.have.property('y').that.is.a('Number').that.is.equal(3);
      });

      it('Expects this object to own the property "rotate".', () => {
        expect(tr).to.be.have.property('rotate').that.is.an('object');
      });

      // { a: 90, cx: null, cy: null }
      it('Expects the property "rotate" to own the property "a" that is equal to 90.', () => {
        expect(tr.rotate).to.be.have.property('a').that.is.a('Number').that.is.equal(90);
      });
    });

    describe('Test SVG.transformAttrToStr:', () => {
      const tr = SVG.transformAttrToStr(
        { translate: { x: 0, y: 1 }, scale: { x: 2, y: 3 }, rotate: { a: 90 } },
      );

      it('Expects SVG.transformAttrToStr to be a function.', () => {
        expect(SVG.transformAttrToStr).to.be.a('function');
      });

      it('Expects SVG.transformAttrToStr({ translate: { x: 0, y: 1 }, scale: { x: 2, y: 3 }, rotate: { a: 90 } }) to return a string.', () => {
        expect(tr).to.be.an('string');
      });

      it('Expects this string to be equal to "translate(0, 1) scale(2, 3) rotate(90)".', () => {
        expect(tr).to.be.an('string').that.is.equal('translate(0, 1) scale(2, 3) rotate(90)');
      });
    });

    describe('Test SVG.getArc:', () => {
      it('Expects SVG.getArc to be a function.', () => {
        expect(SVG.getArc).to.be.a('function');
      });
    });

    describe('Test SVG.getLine:', () => {
      it('Expects SVG.line to be a function.', () => {
        expect(SVG.getLine).to.be.a('function');
      });
    });

    describe('Test SVG.getMultipolyline:', () => {
      it('Expects SVG.multipolyline to be a function.', () => {
        expect(SVG.getMultipolyline).to.be.a('function');
      });
    });
  });
};
