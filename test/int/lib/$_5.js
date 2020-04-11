// ESLint declarations:
/* global describe, it */
/* eslint  one-var: 0, semi-style: 0, no-underscore-dangle: 0,
  no-unused-expressions: 0 */


// -- Vendor Modules
const { expect } = require('chai')
    ;

// -- Local Modules


// -- Local Constants


// -- Local Variables


// -- Main
module.exports = function(SVG, id) {
  const [, $] = SVG._setTestMode();
  const el = document.getElementById(id).firstElementChild;
  const svg = { id: el.id, _root: el, $ };

  describe('Test the methods alink, attr, rmattr, text:', () => {
    it('Expects $() to own the property "alink" that is a function.', () => {
      expect(svg.$()).to.own.property('alink').that.is.a('function');
    });

    it('Expects $() to own the property "attr" that is a function.', () => {
      expect(svg.$()).to.own.property('attr').that.is.a('function');
    });

    it('Expects $() to own the property "rmattr" that is a function.', () => {
      expect(svg.$()).to.own.property('rmattr').that.is.a('function');
    });

    it('Expects $() to own the property "text" that is a function.', () => {
      expect(svg.$()).to.own.property('text').that.is.a('function');
    });


    it('Expects $().alink() to return the first parent.', () => {
      expect(svg.$().alink().id).to.be.a('string').that.is.equal(svg.$()._root.id);
    });

    it('Expects $("doesnotexist").alink() to return the first parent.', () => {
      expect(svg.$('doesnotexist').alink().id).to.be.a('string').that.is.equal(svg.$()._root.id);
    });

    it('Expects $().alink("href", "#") to return the first parent.', () => {
      expect(svg.$().alink('href', '#').id).to.be.a('string').that.is.equal(svg.$()._root.id);
    });

    it('Expects $().{...}.alink("href", "#") to add "<text><a xlink:href="#"></a></text>" as the first child.', () => {
      svg.$().append('text').append('a').alink('href', '#');
      expect(svg.$()[0].innerHTML).to.be.a('string').that.is.equal('<text><a xlink:href="#"></a></text>');
    });
  });
};
