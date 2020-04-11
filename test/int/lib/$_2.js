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

  describe('Test the methods append, appendBefore, appendAfter, appendHTML:', () => {
    it('Expects $() to own the property "append" that is a function.', () => {
      expect(svg.$()).to.own.property('append').that.is.a('function');
    });

    it('Expects $() to own the property "appendBefore" that is a function.', () => {
      expect(svg.$()).to.own.property('appendBefore').that.is.a('function');
    });

    it('Expects $() to own the property "appendAfter" that is a function.', () => {
      expect(svg.$()).to.own.property('appendAfter').that.is.a('function');
    });

    it('Expects $() to own the property "appendHTML" that is a function.', () => {
      expect(svg.$()).to.own.property('appendHTML').that.is.a('function');
    });

    it('Expects $("doesnotexist").append("path") to return the first parent.', () => {
      expect(svg.$('doesnotexist').append('path').id).to.be.a('string').that.is.equal(svg.$()._root.id);
    });

    it('Expects $().append("path") to add the child "<path></path>".', () => {
      expect(svg.$().append('path')[0].outerHTML).to.be.a('string').that.is.equal('<path></path>');
    });

    it('Expects $("doesnotexist").appendBefore("circle", "path") to return the first parent.', () => {
      expect(svg.$('doesnotexist').appendBefore('circle', 'path').id).to.be.a('string').that.is.equal(svg.$()._root.id);
    });

    it('Expects $().appendBefore("circle", "path") to add the child "<circle></circle>" as the first child.', () => {
      svg.$().appendBefore('circle', 'path');
      const el0 = svg.$()[0].firstElementChild;
      expect(el0.outerHTML).to.be.a('string').that.is.equal('<circle></circle>');
    });

    it('Expects $("doesnotexist").appendAfter("rect", "path") to return the first parent.', () => {
      expect(svg.$('doesnotexist').appendAfter('rect', 'path').id).to.be.a('string').that.is.equal(svg.$()._root.id);
    });

    it('Expects $().appendAfter("rect", "path") to add the child "<rect></rect>" as the last child.', () => {
      svg.$().appendAfter('rect', 'path');
      const el0 = svg.$()[0].lastElementChild;
      expect(el0.outerHTML).to.be.a('string').that.is.equal('<rect></rect>');
    });

    it('Expects $("circle").append("path") to add path as the first child of "circle".', () => {
      svg.$('circle').append('path');
      const el0 = svg.$('circle')[0];
      expect(el0.outerHTML).to.be.a('string').that.is.equal('<circle><path></path></circle>');
    });

    it('Expects $().appendHTML() to return the first parent.', () => {
      expect(svg.$().appendHTML().id).to.be.a('string').that.is.equal(svg.$()._root.id);
    });

    it('Expects $().appendHTML("<div></div>") to add "<body><div></div></body>" as the first child.', () => {
      const el0 = svg.$().appendHTML('<div></div>')[0];
      expect(el0.outerHTML).to.be.a('string').that.is.equal('<body><div></div></body>');
    });
  });
};
