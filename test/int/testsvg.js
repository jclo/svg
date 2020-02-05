/* global describe, it */
/* eslint  one-var: 0, semi-style: 0, no-underscore-dangle: 0 */


// -- Node modules
const { expect } = require('chai')
    ;


// -- Local modules


// -- Local constants


// -- Local variables


// -- Main
module.exports = function(SVG) {
  describe('Test SVG:', () => {
    it('Expects SVG.VERSION to return a string.', () => {
      expect(SVG.VERSION).to.be.a('string');
    });

    it('Expects SVG._setTestMode to return an object.', () => {
      expect(SVG._setTestMode()).to.be.an('object');
    });

    it('Expects SVG.noConflit to be a function.', () => {
      expect(SVG.noConflict).to.be.a('function');
    });

    it('Expects SVG.noConflit() to return a function.', () => {
      expect(SVG.noConflict()).to.be.a('function');
    });

    it('Expects SVG() to return an object.', () => {
      expect(SVG()).to.be.an('object');
    });
  });

  // describe('Test SVG():', () => {
  //   it('Expects SVG() to return an object with the property [0] to be null.', () => {
  //     expect(SVG()[0]).to.be.a('null');
  //   });
  //
  //   it('Expects SVG() to return an object with the property "id" that is null.', () => {
  //     expect(SVG()).to.own.property('id').that.is.a('null');
  //   });
  //
  //   it('Expects SVG() to return an object with the property "rootSVG" that is null.', () => {
  //     expect(SVG()).to.own.property('svgRoot').that.is.a('null');
  //   });
  // });
  //
  // describe('Test SVG([]):', () => {
  //   it('Expects SVG([]) to return an object with the property [0] to be null.', () => {
  //     expect(SVG([])[0]).to.be.a('null');
  //   });
  //
  //   it('Expects SVG([]) to return an object with the property "id" that is [].', () => {
  //     expect(SVG([])).to.own.property('id').that.is.an('array').that.has.lengthOf(0);
  //   });
  //
  //   it('Expects SVG([]) to return an object with the property "rootSVG" that is null.', () => {
  //     expect(SVG([])).to.own.property('svgRoot').that.is.a('null');
  //   });
  // });
  //
  // describe('Test SVG("#app."):', () => {
  //   it('Expects SVG("#app1") to return an object.', () => {
  //     expect(SVG('#app1')).to.be.an('object');
  //   });
  //
  //   it('Expects SVG("#app1") to insert "<svg version="1.1" xmlns="..." xmlns:xlink="..."></svg>" as the firstChild.', () => {
  //     const svg = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"></svg>';
  //     expect(dom.window.document.getElementById('app1').firstChild.outerHTML).to.be.a('string').that.is.equal(svg);
  //   });
  //
  //   it('Expects SVG("#app2") not to overwrite the already existing SVG node.', () => {
  //     const svg = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="500" height="500"></svg>';
  //     SVG('#app2');
  //     expect(dom.window.document.getElementById('app2').firstChild.outerHTML).to.be.a('string').that.is.equal(svg);
  //   });
  // });
};
