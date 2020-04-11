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
  describe('Test SVG.getArc():', () => {
    it('Expects SVG.getArc(0, 3.14*2, 100) to return a string.', () => {
      expect(SVG.getArc(0, 3.14 * 2, 100)).to.be.a('string');
    });

    it('Expects this string to start with "M100,0A100,100".', () => {
      expect(SVG.getArc(0, 3.14 * 2, 100).startsWith('M100,0A100,100')).to.be.true;
    });

    it('Expects SVG.getArc(0, 3.14*2, 100, 0) to return a string.', () => {
      expect(SVG.getArc(0, 3.14 * 2, 100, 0)).to.be.a('string');
    });

    it('Expects this string to start with "M100,0A100,100".', () => {
      expect(SVG.getArc(0, 3.14 * 2, 100, 0).startsWith('M100,0A100,100')).to.be.true;
    });
  });


  describe('Test SVG.getLine():', () => {
    const rect = [{x:0,y:0},{x:100,y:0},{x:100,y:100},{x:0,y:100}];

    it('Expects SVG.getLine() to return null.', () => {
      expect(SVG.getLine()).to.be.equal(null);
    });

    it('Expects SVG.getLine(rect) to return a string.', () => {
      expect(SVG.getLine(rect)).to.be.a('string');
    });

    it('Expects this string to be "M0, 0L100,0L100,100L0,100" for a rect of 100,100.', () => {
      const d = SVG.getLine(rect);
      expect(d).to.be.equal('M0, 0L100,0L100,100L0,100');
    });

    it('Expects SVG.getLine(rect, true) to return a string.', () => {
      expect(SVG.getLine(rect, true)).to.be.a('string');
    });

    it('Expects this string to be "M0, 0L100,0L100,100L0,100Z" for a rect of 100,100.', () => {
      const d = SVG.getLine(rect, true);
      expect(d).to.be.equal('M0, 0L100,0L100,100L0,100Z');
    });
  });


  describe('Test SVG.getMultipolyline():', () => {
    const rect = [[{x:0,y:0},{x:100,y:0},{x:100,y:100},{x:0,y:100}]];

    it('Expects SVG.getMultipolyline() to return null.', () => {
      expect(SVG.getMultipolyline()).to.be.equal(null);
    });

    it('Expects SVG.getMultipolyline(rect) to return a string.', () => {
      expect(SVG.getMultipolyline(rect)).to.be.a('string');
    });

    it('Expects this string to be "M0,0L100, 0L100, 100L0, 100" for a rect of 100,100.', () => {
      const d = SVG.getMultipolyline(rect);
      expect(d).to.be.equal('M0,0L100, 0L100, 100L0, 100');
    });

    it('Expects SVG.getMultipolyline(rect, true) to return a string.', () => {
      expect(SVG.getMultipolyline(rect, true)).to.be.a('string');
    });

    it('Expects this string to be "M0,0L100, 0L100, 100L0, 100z" for a rect of 100,100.', () => {
      const d = SVG.getMultipolyline(rect, true);
      expect(d).to.be.equal('M0,0L100, 0L100, 100L0, 100z');
    });
  });
};
