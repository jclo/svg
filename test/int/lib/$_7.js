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

  describe('Test the methods query, getElement, children, getAttribute:', () => {
    it('Expects $() to own the property "query" that is a function.', () => {
      expect(svg.$()).to.own.property('query').that.is.a('function');
    });

    it('Expects $() to own the property "getElement" that is a function.', () => {
      expect(svg.$()).to.own.property('getElement').that.is.a('function');
    });

    it('Expects $() to own the property "children" that is a function.', () => {
      expect(svg.$()).to.own.property('children').that.is.a('function');
    });

    it('Expects $() to own the property "getAttribute" that is a function.', () => {
      expect(svg.$()).to.own.property('getAttribute').that.is.a('function');
    });

    it('Expects $().query() to return null.', () => {
      expect(svg.$().query()).to.be.equal(null);
    });

    it('Expects $().query("circle") to return null.', () => {
      expect(svg.$().query('circle')).to.be.equal(null);
    });

    it('Expects $("doesnotexist").query("circle") to return null.', () => {
      expect(svg.$('doesnotexist').query('circle')).to.be.equal(null);
    });

    it('Expects $().append("circle") & $().query("circle") to return "<circle></circle>".', () => {
      svg.$().append('circle');
      expect(svg.$().query('circle').outerHTML).to.be.a('string').that.is.equal('<circle></circle>');
    });

    it('Expects $("circle").getElement() to return the "<circle></circle>".', () => {
      expect(svg.$('circle').getElement().outerHTML).to.be.a('string').that.is.equal('<circle></circle>');
    });

    it('Expects $("doesnotexist").getElement() to return null.', () => {
      expect(svg.$('doesnotexist').getElement()).to.be.equal(null);
    });

    it('Expects $().children() to return an HTMLCollection.', () => {
      expect(svg.$().children()).to.be.an('HTMLCollection');
    });

    it('Expects this HTMLCollection to contain one element.', () => {
      expect(svg.$().children().length).to.be.a('number').that.is.equal(1);
    });

    it('Expects this element to be "<circle></circle>".', () => {
      const el0 = svg.$().children().item(0);
      expect(el0.outerHTML).to.be.a('string').that.is.equal('<circle></circle>');
    });

    it('Expects $("doesnotexist").children() to return null.', () => {
      expect(svg.$('doesnotexist').children()).to.be.equal(null);
    });


    it('Expects $().getAttribute() to return null.', () => {
      expect(svg.$().getAttribute()).to.be.equal(null);
    });

    it('Expects $("doesnotexist").getAttribute() to return null.', () => {
      expect(svg.$('doesnotexist').getAttribute()).to.be.equal(null);
    });

    it('Expects $().getAttribute(id) to return the id of the first parent.', () => {
      expect(svg.$().getAttribute('id')).to.be.a('string').that.is.equal(svg.$()._root.id);
    });


    it('Expects $("doesnotexist").getComputedStyle() to return null.', () => {
      expect(svg.$('doesnotexist').getComputedStyle()).to.be.equal(null);
    });

    it('Expects $().getComputedStyle() to return a CSSStyleDeclaration.', () => {
      expect(svg.$().getComputedStyle()).to.be.an('object');
    });

    it('Expects $("doesnotexist").getPropertyValue("font-size") to return null.', () => {
      expect(svg.$('doesnotexist').getPropertyValue('font-size')).to.be.equal(null);
    });

    it('Expects $().getPropertyValue("font-size") to return "16px".', () => {
      expect(svg.$().getPropertyValue('font-size')).to.be.a('string').that.is.equal('');
    });

    it('Expects $("doesnotexist").getSize() to return null.', () => {
      expect(svg.$('doesnotexist').getSize()).to.be.equal(null);
    });

    it('Expects $().getSize() to return an object.', () => {
      expect(svg.$().getSize()).to.be.an('object');
    });

    it('Expects this object to own two properties.', () => {
      expect(Object.getOwnPropertyNames(svg.$().getSize())).to.be.an('array').that.has.lengthOf(2);
    });

    it('Expects it to own the property "width" that is a number.', () => {
      expect(svg.$().getSize()).to.own.property('width').that.is.a('number');
    });

    it('Expects it to own the property "height" that is a number.', () => {
      expect(svg.$().getSize()).to.own.property('height').that.is.a('number');
    });

    it('Expects $("doesnotexist").getBbox() to return null.', () => {
      expect(svg.$('doesnotexist').getBbox()).to.be.equal(null);
    });

    it('Expects $().getBbox() to return an object.', () => {
      expect(svg.$().getBbox()).to.be.an('object');
    });

    it('Expects this object to own four properties.', () => {
      expect(Object.getOwnPropertyNames(svg.$().getBbox())).to.be.an('array').that.has.lengthOf(4);
    });

    it('Expects it to own the property "top" that is a number.', () => {
      expect(svg.$().getBbox()).to.own.property('top').that.is.a('number');
    });

    it('Expects it to own the property "left" that is a number.', () => {
      expect(svg.$().getBbox()).to.own.property('left').that.is.a('number');
    });

    it('Expects it to own the property "width" that is a number.', () => {
      expect(svg.$().getBbox()).to.own.property('width').that.is.a('number');
    });

    it('Expects it to own the property "height" that is a number.', () => {
      expect(svg.$().getBbox()).to.own.property('height').that.is.a('number');
    });
  });
};
