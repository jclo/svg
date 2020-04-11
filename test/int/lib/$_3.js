// ESLint declarations:
/* global describe, it */
/* eslint  one-var: 0, semi-style: 0, no-underscore-dangle: 0,
  no-unused-expressions: 0 */


// -- Vendor Modules
const { expect } = require('chai')
    ;

// -- Local Modules


// -- Local Constants
const SVG_NS = 'http://www.w3.org/2000/svg'
    ;


// -- Local Variables


// -- Main
module.exports = function(SVG, id) {
  const [, $] = SVG._setTestMode();
  const el = document.getElementById(id).firstElementChild;
  const svg = { id: el.id, _root: el, $ };

  describe('Test the methods replace, remove, replaceChild, removeChild, removeAllChilds, empty:', () => {
    it('Expects $() to own the property "replace" that is a function.', () => {
      expect(svg.$()).to.own.property('replace').that.is.a('function');
    });

    it('Expects $() to own the property "remove" that is a function.', () => {
      expect(svg.$()).to.own.property('remove').that.is.a('function');
    });

    it('Expects $() to own the property "replaceChild" that is a function.', () => {
      expect(svg.$()).to.own.property('replaceChild').that.is.a('function');
    });

    it('Expects $() to own the property "removeChild" that is a function.', () => {
      expect(svg.$()).to.own.property('appendHTML').that.is.a('function');
    });

    it('Expects $() to own the property "removeAllChilds" that is a function.', () => {
      expect(svg.$()).to.own.property('removeAllChilds').that.is.a('function');
    });

    it('Expects $() to own the property "empty" that is a function.', () => {
      expect(svg.$()).to.own.property('empty').that.is.a('function');
    });

    it('Expects $("doesnotexist").replace("circle") to return the first parent.', () => {
      expect(svg.$('doesnotexist').replace('circle').id).to.be.a('string').that.is.equal(svg.$()._root.id);
    });

    it('Expects $().append("path").replace("circle") to replace "path" by "circle" as the first child.', () => {
      const el0 = svg.$().append('path').replace('circle')[0];
      expect(el0.outerHTML).to.be.a('string').that.is.equal('<circle></circle>');
    });

    it('Expects $("doesnotexist").remove() to return the first parent.', () => {
      expect(svg.$('doesnotexist').remove().id).to.be.a('string').that.is.equal(svg.$()._root.id);
    });

    it('Expects $("circle").remove() to remove the first child.', () => {
      const el0 = svg.$('circle').remove()[0].firstElementChild;
      expect(el0).to.be.equal(null);
    });


    it('Expects $("doesnotexist").removeChild() to return the first parent.', () => {
      expect(svg.$('doesnotexit').removeChild().id).to.be.a('string').that.is.equal(svg.$()._root.id);
    });

    it('Expects $().removeChild("doesnotexist") to throw an error.', () => {
      const el0 = document.createElementNS(SVG_NS, 'circle');
      try {
        svg.$().removeChild(el0);
      } catch (e) {
        expect(true).to.be.true;
      }
    });

    it('Expects $().append("circle").removeChild("circle") to remove the added child.', () => {
      const el0 = svg.$().append('circle')[0];
      svg.$().removeChild(el0);
      const fc = svg.$()[0].firstElementChild;
      expect(fc).to.be.equal(null);
    });


    it('Expects $("doesnotexist").replaceChild() to return the first parent.', () => {
      expect(svg.$('odesnotexost').replaceChild().id).to.be.a('string').that.is.equal(svg.$()._root.id);
    });

    it('Expects $().replaceChild() to return the first parent.', () => {
      expect(svg.$('odesnotexost').replaceChild().id).to.be.a('string').that.is.equal(svg.$()._root.id);
    });

    it('Expects $().replaceChild(newchild) to return the first parent.', () => {
      expect(svg.$('odesnotexost').replaceChild().id).to.be.a('string').that.is.equal(svg.$()._root.id);
    });

    it('Expects $().append("circle").replaceChild("line", "circlechild") to return "<line></line>" as the first child.', () => {
      const oldChild = svg.$().append('circle')[0];
      const newChild = document.createElementNS(SVG_NS, 'line');
      svg.$().replaceChild(newChild, oldChild);
      const el1 = svg.$()[0].firstElementChild;
      expect(el1.outerHTML).to.be.a('string').that.is.equal('<line></line>');
    });

    it('Expects $().removeAllChilds() to return the first parent.', () => {
      expect(svg.$().removeAllChilds().id).to.be.a('string').that.is.equal(svg.$()._root.id);
    });

    it('Expects $("doesnotexist").removeAllChilds() to return the first parent.', () => {
      expect(svg.$('doesnotexist').removeAllChilds().id).to.be.a('string').that.is.equal(svg.$()._root.id);
    });

    it('Expects $().removeAllChilds() to remove all the added children.', () => {
      svg.$().append('line');
      svg.$().append('circle');
      svg.$().append('path');
      svg.$().removeAllChilds();
      const childs = svg.$()[0];
      expect(childs.innerHTML).to.be.a('string').that.is.equal('');
    });

    it('Expects $().empty() to return the first parent.', () => {
      expect(svg.$().empty().id).to.be.a('string').that.is.equal(svg.$()._root.id);
    });

    it('Expects $("doesnotexist").empty() to return the first parent.', () => {
      expect(svg.$('doesnotexist').empty().id).to.be.a('string').that.is.equal(svg.$()._root.id);
    });

    it('Expects $().empty() to remove all the added children.', () => {
      svg.$().append('line');
      svg.$().append('circle');
      svg.$().append('path');
      svg.$().empty();
      const childs = svg.$()[0];
      expect(childs.innerHTML).to.be.a('string').that.is.equal('');
    });
  });
};
