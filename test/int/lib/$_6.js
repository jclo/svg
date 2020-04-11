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

  describe('Test the methods addClass, removeClass, toggleClass:', () => {
    it('Expects $() to own the property "addClass" that is a function.', () => {
      expect(svg.$()).to.own.property('addClass').that.is.a('function');
    });

    it('Expects $() to own the property "removeClass" that is a function.', () => {
      expect(svg.$()).to.own.property('removeClass').that.is.a('function');
    });

    it('Expects $() to own the property "toggleClass" that is a function.', () => {
      expect(svg.$()).to.own.property('toggleClass').that.is.a('function');
    });


    it('Expects $("doesnotexist").addClass() to return the first parent.', () => {
      expect(svg.$('doesnotexist').addClass().id).to.be.a('string').that.is.equal(svg.$()._root.id);
    });

    it('Expects $().append("circle").addClass("a") to add a the first child "<circle class="a"</circle>.', () => {
      svg.$().append('circle').addClass('a');
      const el0 = svg.$()[0].firstElementChild;
      expect(el0.outerHTML).to.be.a('string').that.is.equal('<circle class="a"></circle>');
    });

    it('Expects $("circle").addClass("b") to modify the first child as "<circle class="a b"</circle>".', () => {
      svg.$('circle').addClass('b');
      const el0 = svg.$()[0].firstElementChild;
      expect(el0.outerHTML).to.be.a('string').that.is.equal('<circle class="a b"></circle>');
    });


    it('Expects $("doesnotexist").removeClass() to return the first parent.', () => {
      expect(svg.$('doesnotexist').removeClass().id).to.be.a('string').that.is.equal(svg.$()._root.id);
    });

    it('Expects $("circle").removeClass("b") to modify the first child as "<circle class="a"</circle>".', () => {
      svg.$('circle').removeClass('b');
      const el0 = svg.$()[0].firstElementChild;
      expect(el0.outerHTML).to.be.a('string').that.is.equal('<circle class="a"></circle>');
    });

    it('Expects $("circle").removeClass("a") to modify the first child as "<circle class=""</circle>".', () => {
      svg.$('circle').removeClass('a');
      const el0 = svg.$()[0].firstElementChild;
      expect(el0.outerHTML).to.be.a('string').that.is.equal('<circle class=""></circle>');
    });


    it('Expects $("doesnotexist").toggleClass() to return the first parent.', () => {
      expect(svg.$('doesnotexist').toggleClass().id).to.be.a('string').that.is.equal(svg.$()._root.id);
    });

    it('Expects $("circle").toggleClass("to") to modify the first child as "<circle class="to"</circle>".', () => {
      svg.$('circle').toggleClass('to');
      const el0 = svg.$()[0].firstElementChild;
      expect(el0.outerHTML).to.be.a('string').that.is.equal('<circle class="to"></circle>');
    });

    it('Expects $("circle").toggleClass("to") to modify the first child as "<circle class=""</circle>".', () => {
      svg.$('circle').toggleClass('to');
      const el0 = svg.$()[0].firstElementChild;
      expect(el0.outerHTML).to.be.a('string').that.is.equal('<circle class=""></circle>');
    });
  });
};
