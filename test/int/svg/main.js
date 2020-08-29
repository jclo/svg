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
module.exports = function(SVG, app) {
  const svg = SVG(app);

  describe('Test the SVG() function:', () => {
    it('Expects SVG to be a function.', () => {
      expect(SVG).to.be.a('function');
    });

    it('Expects SVG(app) to return an object.', () => {
      expect(svg).to.be.an('object');
    });

    it('Expects SVG(app) to create an svg node.', () => {
      const svgnode = document.querySelector(app).firstElementChild;
      expect(svgnode.tagName).to.be.a('string').that.is.equal('svg');
    });

    it('Expects the property _root to reference this svg node.', () => {
      const svgnode = document.querySelector(app).firstElementChild;
      expect(svgnode).to.be.equal(svg._root);
    });

    it('Expects this svg node to own the attribute "id" that is a string of 8 chars.', () => {
      expect(svg._root.getAttribute('id')).to.be.a('string').that.has.lengthOf(8);
    });

    it('Expects this svg node id attribute and SVG(app).id to be the same thing.', () => {
      expect(svg._root.id).to.be.equal(svg.id);
    });

    it('Expects this svg node to own the attribute "version" that is a string equal to "1.1".', () => {
      expect(svg._root.getAttribute('version')).to.be.a('string').that.is.equal('1.1');
    });

    it('Expects this svg node to own the attribute "xmlns" that is a string equal to "http://www.w3.org/2000/svg".', () => {
      expect(svg._root.getAttribute('xmlns')).to.be.a('string').that.is.equal('http://www.w3.org/2000/svg');
    });

    it('Expects this svg node to own the attribute "xmlns:xlink" that is a string equal to "http://www.w3.org/1999/xlink".', () => {
      expect(svg._root.getAttribute('xmlns:xlink')).to.be.a('string').that.is.equal('http://www.w3.org/1999/xlink');
    });

    it('Expects SVG(app) to inherit of the property "$" that is a function.', () => {
      expect(svg.$).to.be.a('function');
    });

    it('Expects SVG(app).$() to return an object.', () => {
      expect(svg.$()).to.be.an('object');
    });

    it('Expects this object to own the property "0" that reference the same svg node as SVG(app)._root.', () => {
      expect(svg.$()[0]).to.be.equal(svg._root);
    });

    it('Expects a second SVG(app) call not to create a new svg node but reference the same.', () => {
      const svg2 = SVG(app);
      expect(svg2._root).to.be.equal(svg._root);
    });
  });
};
