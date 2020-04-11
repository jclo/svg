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
  describe('Test SVG.transformAttrToObj():', () => {
    const trobj1 = SVG.transformAttrToObj('');
    const trobj2 = SVG.transformAttrToObj('translate()');
    const trobj3 = SVG.transformAttrToObj('scale()');
    const trobj4 = SVG.transformAttrToObj('rotate()');


    it('Expects SVG.transformAttrToObj() to return an object.', () => {
      expect(SVG.transformAttrToObj()).to.be.an('object');
    });

    it('Expects SVG.transformAttrToObj("") to return an object.', () => {
      expect(trobj1).to.be.an('object');
    });

    it('Expects this object to own 6 properties.', () => {
      expect(Object.getOwnPropertyNames(trobj1)).to.be.an('array').that.has.lengthOf(6);
    });

    it('Expects this object to own the property "matrix" that is null.', () => {
      expect(trobj1).to.own.property('matrix').that.is.equal(null);
    });

    it('Expects this object to own the property "rotate" that is null.', () => {
      expect(trobj1).to.own.property('rotate').that.is.equal(null);
    });

    it('Expects this object to own the property "scale" that is null.', () => {
      expect(trobj1).to.own.property('scale').that.is.equal(null);
    });

    it('Expects this object to own the property "skewX" that is null.', () => {
      expect(trobj1).to.own.property('skewX').that.is.equal(null);
    });

    it('Expects this object to own the property "skewY" that is null.', () => {
      expect(trobj1).to.own.property('skewX').that.is.equal(null);
    });

    it('Expects this object to own the property "translate" that is null.', () => {
      expect(trobj1).to.own.property('translate').that.is.equal(null);
    });

    // Translate:
    it('Expects SVG.transformAttrToObj("translate()") to return an object.', () => {
      expect(trobj2).to.be.an('object');
    });

    it('Expects this object to own the property "translate".', () => {
      expect(trobj2).to.own.property('translate');
    });

    it('Expects the property translate to own two properties.', () => {
      expect(Object.getOwnPropertyNames(trobj2.translate)).to.be.an('array').that.has.lengthOf(2);
    });

    it('Expects it to own the property "x" that is null.', () => {
      expect(trobj2.translate).to.own.property('x').that.is.equal(null);
    });

    it('Expects it to own the property "y" that is null.', () => {
      expect(trobj2.translate).to.own.property('y').that.is.equal(null);
    });

    it('Expects SVG.transformAttrToObj("translate(-10)") to return { x: -10, y: -10 }.', () => {
      const obj = SVG.transformAttrToObj('translate(-10)').translate;
      expect(obj.x).to.be.equal(-10);
      expect(obj.y).to.be.equal(-10);
    });

    it('Expects SVG.transformAttrToObj("translate(-10, 10)") to return { x: -10, y: 10 }.', () => {
      const obj = SVG.transformAttrToObj('translate(-10, 10)').translate;
      expect(obj.x).to.be.equal(-10);
      expect(obj.y).to.be.equal(10);
    });


    // Scale:
    it('Expects SVG.transformAttrToObj("scale()") to return an object.', () => {
      expect(trobj3).to.be.an('object');
    });

    it('Expects this object to own the property "scale".', () => {
      expect(trobj3).to.own.property('rotate');
    });

    it('Expects the property scale to own two properties.', () => {
      expect(Object.getOwnPropertyNames(trobj3.scale)).to.be.an('array').that.has.lengthOf(2);
    });

    it('Expects it to own the property "x" that is null.', () => {
      expect(trobj3.scale).to.own.property('x').that.is.equal(null);
    });

    it('Expects it to own the property "y" that is null.', () => {
      expect(trobj3.scale).to.own.property('y').that.is.equal(null);
    });

    it('Expects SVG.transformAttrToObj("scale(-10)") to return { x: -10, y: -10 }.', () => {
      const obj = SVG.transformAttrToObj('scale(-10)').scale;
      expect(obj.x).to.be.equal(-10);
      expect(obj.y).to.be.equal(-10);
    });

    it('Expects SVG.transformAttrToObj("scale(-10, 10)") to return { x: -10, y: 10 }.', () => {
      const obj = SVG.transformAttrToObj('scale(-10, 10)').scale;
      expect(obj.x).to.be.equal(-10);
      expect(obj.y).to.be.equal(10);
    });

    // Rotate:
    it('Expects SVG.transformAttrToObj("rotate()") to return an object.', () => {
      expect(trobj4).to.be.an('object');
    });

    it('Expects this object to own the property "rotate".', () => {
      expect(trobj4).to.own.property('rotate');
    });

    it('Expects the property rotate to own three properties.', () => {
      expect(Object.getOwnPropertyNames(trobj4.rotate)).to.be.an('array').that.has.lengthOf(3);
    });

    it('Expects it to own the property "a" that is null.', () => {
      expect(trobj4.rotate).to.own.property('a').that.is.equal(null);
    });

    it('Expects it to own the property "cx" that is null.', () => {
      expect(trobj4.rotate).to.own.property('cx').that.is.equal(null);
    });

    it('Expects it to own the property "cy" that is null.', () => {
      expect(trobj4.rotate).to.own.property('cy').that.is.equal(null);
    });

    it('Expects SVG.transformAttrToObj("rotate(90)") to return { a: 90, cx: null, cy: null }.', () => {
      const obj = SVG.transformAttrToObj('rotate(90)').rotate;
      expect(obj.a).to.be.equal(90);
      expect(obj.cx).to.be.equal(null);
      expect(obj.cy).to.be.equal(null);
    });

    it('Expects SVG.transformAttrToObj("rotate(90, -10)") to return { a: 90, cx: -10, cy: -10 }.', () => {
      const obj = SVG.transformAttrToObj('rotate(90, -10)').rotate;
      expect(obj.a).to.be.equal(90);
      expect(obj.cx).to.be.equal(-10);
      expect(obj.cy).to.be.equal(-10);
    });

    it('Expects SVG.transformAttrToObj("rotate(90, -10, 10)") to return { a: 90, cx: -10, cy: 10 }.', () => {
      const obj = SVG.transformAttrToObj('rotate(90, -10, 10)').rotate;
      expect(obj.a).to.be.equal(90);
      expect(obj.cx).to.be.equal(-10);
      expect(obj.cy).to.be.equal(10);
    });

    // skewX
    it('Expects SVG.transformAttrToObj("skewX()") to return null.', () => {
      expect(SVG.transformAttrToObj('skewX()').skewX).to.be.equal(null);
    });

    it('Expects SVG.transformAttrToObj("skewX("a")") to return null.', () => {
      expect(SVG.transformAttrToObj('skewX("a")').skewX).to.be.equal(null);
    });

    it('Expects SVG.transformAttrToObj("skewX(10)") to return 10.', () => {
      expect(SVG.transformAttrToObj('skewX(10)').skewX).to.be.equal(10);
    });

    // skewY
    it('Expects SVG.transformAttrToObj("skewY()") to return null.', () => {
      expect(SVG.transformAttrToObj('skewY()').skewY).to.be.equal(null);
    });

    it('Expects SVG.transformAttrToObj("skewY("a")") to return null.', () => {
      expect(SVG.transformAttrToObj('skewY("a")').skewY).to.be.equal(null);
    });

    it('Expects SVG.transformAttrToObj("skewY(10)") to return 10.', () => {
      expect(SVG.transformAttrToObj('skewY(10)').skewY).to.be.equal(10);
    });

    // Matrix
    it('Expects SVG.transformAttrToObj("matrix()") to return null.', () => {
      expect(SVG.transformAttrToObj('matrix()').matrix).to.be.equal(null);
    });

    it('Expects SVG.transformAttrToObj("matrix(1)") to return null.', () => {
      expect(SVG.transformAttrToObj('matrix(1)').matrix).to.be.equal(null);
    });
  });
};
