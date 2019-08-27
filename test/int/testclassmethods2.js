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


// -- Main
module.exports = function() {
  describe('Test SVG functions (next):', () => {
    //
    describe('Test SVG.transformAttrToObj();', () => {
      it('Expects SVG.transformAttrToObj() without arguments to return an object.', () => {
        expect(SVG.transformAttrToObj()).to.be.an('object');
      });
      it('Expects this object to have all its own properties with the null value.', () => {
        const obj = SVG.transformAttrToObj();
        expect(obj).to.have.property('translate').that.is.a('null');
        expect(obj).to.have.property('scale').that.is.a('null');
        expect(obj).to.have.property('rotate').that.is.a('null');
        expect(obj).to.have.property('matrix').that.is.a('null');
        expect(obj).to.have.property('skewX').that.is.a('null');
        expect(obj).to.have.property('skewY').that.is.a('null');
      });
      it('Expects SVG.transformAttrToObj("") with an empty string to return an object.', () => {
        expect(SVG.transformAttrToObj('')).to.be.an('object');
      });
      it('Expects this object to have all its own properties with the null value.', () => {
        const obj = SVG.transformAttrToObj();
        expect(obj).to.have.property('translate').that.is.a('null');
        expect(obj).to.have.property('scale').that.is.a('null');
        expect(obj).to.have.property('rotate').that.is.a('null');
        expect(obj).to.have.property('matrix').that.is.a('null');
        expect(obj).to.have.property('skewX').that.is.a('null');
        expect(obj).to.have.property('skewY').that.is.a('null');
      });

      // Translate:
      it('Expects SVG.transformAttrToObj("translate()") to return an object.', () => {
        expect(SVG.transformAttrToObj('translate()')).to.be.an('object');
      });
      it('Expects this object to have the property translate equal to {x: null, y: null}.', () => {
        const obj = SVG.transformAttrToObj('translate()');
        expect(obj).to.have.property('translate');
        expect(obj.translate).to.have.property('x').that.is.a('null');
        expect(obj.translate).to.have.property('y').that.is.a('null');
      });
      it('Expects SVG.transformAttrToObj("translate(1)") to return an object.', () => {
        expect(SVG.transformAttrToObj('translate(1)')).to.be.an('object');
      });
      it('Expects this object to have the property translate equal to {x: 1, y: 1}.', () => {
        const obj = SVG.transformAttrToObj('translate(1)');
        expect(obj).to.have.property('translate');
        expect(obj.translate).to.have.property('x').that.is.equal(1);
        expect(obj.translate).to.have.property('y').that.is.equal(1);
      });
      it('Expects SVG.transformAttrToObj("translate(1, 2)") to return an object.', () => {
        expect(SVG.transformAttrToObj('translate(1, 2)')).to.be.an('object');
      });
      it('Expects this object to have the property translate equal to {x: 1, y: 2}.', () => {
        const obj = SVG.transformAttrToObj('translate(1, 2)');
        expect(obj).to.have.property('translate');
        expect(obj.translate).to.have.property('x').that.is.equal(1);
        expect(obj.translate).to.have.property('y').that.is.equal(2);
      });

      // Scale:
      it('Expects SVG.transformAttrToObj("scale()") to return an object.', () => {
        expect(SVG.transformAttrToObj('scale()')).to.be.an('object');
      });
      it('Expects this object to have the property scale equal to {x: null, y: null}.', () => {
        const obj = SVG.transformAttrToObj('scale()');
        expect(obj).to.have.property('scale');
        expect(obj.scale).to.have.property('x').that.is.a('null');
        expect(obj.scale).to.have.property('y').that.is.a('null');
      });
      it('Expects SVG.transformAttrToObj("scale(1)") to return an object.', () => {
        expect(SVG.transformAttrToObj('scale(1)')).to.be.an('object');
      });
      it('Expects this object to have the property scale equal to {x: 1, y: 1}.', () => {
        const obj = SVG.transformAttrToObj('scale(1)');
        expect(obj).to.have.property('scale');
        expect(obj.scale).to.have.property('x').that.is.equal(1);
        expect(obj.scale).to.have.property('y').that.is.equal(1);
      });
      it('Expects SVG.transformAttrToObj("scale(1, 2)") to return an object.', () => {
        expect(SVG.transformAttrToObj('scale(1, 2)')).to.be.an('object');
      });
      it('Expects this object to have the property scale equal to {x: 1, y: 2}.', () => {
        const obj = SVG.transformAttrToObj('scale(1, 2)');
        expect(obj).to.have.property('scale');
        expect(obj.scale).to.have.property('x').that.is.equal(1);
        expect(obj.scale).to.have.property('y').that.is.equal(2);
      });

      // Rotate:
      it('Expects SVG.transformAttrToObj("rotate()") to return an object.', () => {
        expect(SVG.transformAttrToObj('rotate()')).to.be.an('object');
      });
      it('Expects this object to have the property rotate equal to {a: null, cx: null, cy: null}.', () => {
        const obj = SVG.transformAttrToObj('rotate()');
        expect(obj).to.have.property('rotate');
        expect(obj.rotate).to.have.property('a').that.is.a('null');
        expect(obj.rotate).to.have.property('cx').that.is.a('null');
        expect(obj.rotate).to.have.property('cy').that.is.a('null');
      });
      it('Expects SVG.transformAttrToObj("rotate(90)") to return an object.', () => {
        expect(SVG.transformAttrToObj('rotate(90)')).to.be.an('object');
      });
      it('Expects this object to have the property rotate equal to {a: 90, cx: null, cy: null}.', () => {
        const obj = SVG.transformAttrToObj('rotate(90)');
        expect(obj).to.have.property('rotate');
        expect(obj.rotate).to.have.property('a').that.is.equal(90);
        expect(obj.rotate).to.have.property('cx').that.is.a('null');
        expect(obj.rotate).to.have.property('cy').that.is.a('null');
      });
      it('Expects SVG.transformAttrToObj("rotate(90, 10)") to return an object.', () => {
        expect(SVG.transformAttrToObj('rotate(90, 10)')).to.be.an('object');
      });
      it('Expects this object to have the property rotate equal to {a: 90, cx: 10, cy: 10}.', () => {
        const obj = SVG.transformAttrToObj('rotate(90, 10)');
        expect(obj).to.have.property('rotate');
        expect(obj.rotate).to.have.property('a').that.is.equal(90);
        expect(obj.rotate).to.have.property('cx').that.is.equal(10);
        expect(obj.rotate).to.have.property('cy').that.is.equal(10);
      });
      it('Expects SVG.transformAttrToObj("rotate(90, 10, 20)") to return an object.', () => {
        expect(SVG.transformAttrToObj('rotate(90, 10, 20)')).to.be.an('object');
      });
      it('Expects this object to have the property rotate equal to {a: 90, cx: 10, cy: 20}.', () => {
        const obj = SVG.transformAttrToObj('rotate(90, 10, 20)');
        expect(obj).to.have.property('rotate');
        expect(obj.rotate).to.have.property('a').that.is.equal(90);
        expect(obj.rotate).to.have.property('cx').that.is.equal(10);
        expect(obj.rotate).to.have.property('cy').that.is.equal(20);
      });

      // SkewX:
      it('Expects SVG.transformAttrToObj("skewX()") to return an object.', () => {
        expect(SVG.transformAttrToObj('skewX()')).to.be.an('object');
      });
      it('Expects this object to have the property skewX that is null}.', () => {
        expect(SVG.transformAttrToObj('skewX()')).to.have.property('skewX').that.is.a('null');
      });

      it('Expects SVG.transformAttrToObj("skewX(10)") to return an object.', () => {
        expect(SVG.transformAttrToObj('skewX(10)')).to.be.an('object');
      });
      it('Expects this object to have the property skewX that is equal to 10}.', () => {
        expect(SVG.transformAttrToObj('skewX(10)')).to.have.property('skewX').that.is.equal(10);
      });

      // SkewY:
      it('Expects SVG.transformAttrToObj("skewY()") to return an object.', () => {
        expect(SVG.transformAttrToObj('skewY()')).to.be.an('object');
      });
      it('Expects this object to have the property skewY that is null}.', () => {
        expect(SVG.transformAttrToObj('skewY()')).to.have.property('skewY').that.is.a('null');
      });

      it('Expects SVG.transformAttrToObj("skewY(10)") to return an object.', () => {
        expect(SVG.transformAttrToObj('skewY(10)')).to.be.an('object');
      });
      it('Expects this object to have the property skewY that is equal to 10}.', () => {
        expect(SVG.transformAttrToObj('skewY(10)')).to.have.property('skewY').that.is.equal(10);
      });

      // Matrix:
      it('Expects SVG.transformAttrToObj("Matrix()") to return an object.', () => {
        expect(SVG.transformAttrToObj('Matrix()')).to.be.an('object');
      });
      it('Expects this object to have the property matrix that is null}.', () => {
        expect(SVG.transformAttrToObj('matrix()')).to.have.property('matrix').that.is.a('null');
      });

      it('Expects SVG.transformAttrToObj("Matrix(1, 2, 3, 4, 5, 6)") to return an object.', () => {
        expect(SVG.transformAttrToObj('Matrix(1, 2, 3, 4, 5, 6)')).to.be.an('object');
      });
      it('Expects this object to have the property matrix that is null}.', () => {
        expect(SVG.transformAttrToObj('matrix(1, 2, 3, 4, 5, 6)')).to.have.property('matrix').that.is.a('null');
      });
    });
  });
};
