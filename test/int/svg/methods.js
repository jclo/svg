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

  describe('Test the SVG().$() methods attr, remattr and text:', () => {
    it('Expects svg.$().append("rect") to create the first child "<rect></rect>".', () => {
      svg.$().append('rect');
      const child = svg.$()[0].firstElementChild;
      expect(child.outerHTML).to.be.a('string').that.is.equal('<rect></rect>');
    });

    it('Expects svg.$("rect").attr("width", 100) to add the attribute "width" to the first child.', () => {
      svg.$('rect').attr('width', 100);
      const child = svg.$()[0].firstElementChild;
      expect(child.getAttribute('width')).to.be.a('string').that.is.equal('100');
    });

    it('Expects svg.$("rect").getAttribute("width") to return the value "100".', () => {
      expect(svg.$('rect').getAttribute('width')).to.be.a('string').that.is.equal('100');
    });

    it('Expects svg.$("doesnotexist").attr("width", 100) to return null.', () => {
      expect(svg.$('doesnotexist').attr('width', 100)[0]).to.be.equal(null);
    });

    it('Expects svg.$("rect").rmattr("width") to return the node "<rect></rect>".', () => {
      expect(svg.$('rect').rmattr('width')[0].outerHTML).to.be.a('string').that.is.equal('<rect></rect>');
    });

    it('Expects svg.$("doesnotexist").rmattr("width") to return null.', () => {
      expect(svg.$('doesnotexist').rmattr('width')[0]).to.be.equal(null);
    });

    it('Expects svg.$().append("text") to create the node "<text></text>".', () => {
      expect(svg.$().append('text')[0].outerHTML).to.be.a('string').that.is.equal('<text></text>');
    });

    it('Expects svg.$("text").text("text message") to return "<text>text message</text>".', () => {
      svg.$('text').text('text message');
      expect(svg.$('text')[0].outerHTML).to.be.a('string').that.is.equal('<text>text message</text>');
    });
  });
};
