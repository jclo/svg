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
module.exports = function(svg, el) {
  // we use 'app$1' has it hasn't been altered yet:
  describe('Test the methods firstParent, parent, previous, next and select:', () => {
    const el1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    el1.setAttribute('id', 'id001');
    const el2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    el2.setAttribute('id', 'id002');
    const el3 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    el3.setAttribute('id', 'id003');
    el.appendChild(el1);
    el.appendChild(el2);
    el.appendChild(el3);

    it('Expects $() to own the property "firstParent" that is a function.', () => {
      expect(svg.$()).to.own.property('firstParent').that.is.a('function');
    });

    it('Expects $() to own the property "parent" that is a function.', () => {
      expect(svg.$()).to.own.property('parent').that.is.a('function');
    });

    it('Expects $() to own the property "previous" that is a function.', () => {
      expect(svg.$()).to.own.property('previous').that.is.a('function');
    });

    it('Expects $() to own the property "next" that is a function.', () => {
      expect(svg.$()).to.own.property('next').that.is.a('function');
    });

    it('Expects $() to own the property "select" that is a function.', () => {
      expect(svg.$()).to.own.property('select').that.is.a('function');
    });


    it('Expects $().firstParent() not to change the value of $()[0].', () => {
      const el0 = svg.$()[0];
      const el01 = svg.$().firstParent()[0];
      expect(el0 === el01).to.be.true;
    });

    it('Expects $().parent().parent() not to change the value of $()[0].', () => {
      const el0 = svg.$()[0];
      const el01 = svg.$().parent().parent()[0];
      expect(el0 === el01).to.be.true;
    });

    it('Expects $().previous() not to change the value of $()[0].', () => {
      const el0 = svg.$()[0];
      const el01 = svg.$().previous()[0];
      expect(el0 === el01).to.be.true;
    });

    it('Expects $().next() not to change the value of $()[0].', () => {
      const el0 = svg.$()[0];
      const el01 = svg.$().next()[0];
      expect(el0 === el01).to.be.true;
    });

    it('Expects $("#id002") to select the second child element.', () => {
      expect(svg.$('#id002')[0].id).to.be.a('string').that.is.equal('id002');
    });

    it('Expects $().select("#id002") to select the second child element.', () => {
      expect(svg.$().select('#id002')[0].id).to.be.a('string').that.is.equal('id002');
    });

    it('Expects $("#id002").previous() to select the first child element.', () => {
      expect(svg.$('#id002').previous()[0].id).to.be.a('string').that.is.equal('id001');
    });

    it('Expects $("#id002").next() to select the third child element.', () => {
      expect(svg.$('#id002').next()[0].id).to.be.a('string').that.is.equal('id003');
    });

    it('Expects $().select("#id002").parent() to select the root parent.', () => {
      expect(svg.$().select('#id002').parent()[0].id).to.be.a('string').that.is.equal(svg.$()._root.id);
    });

    it('Expects $().select("#id002").firstParent() to select the root parent.', () => {
      expect(svg.$().select('#id002').firstParent()[0].id).to.be.a('string').that.is.equal(svg.$()._root.id);
    });

    it('Expects $("doesnotexist") to return first parent.', () => {
      expect(svg.$('doesnotexist').id).to.be.a('string').that.is.equal(svg.$()._root.id);
    });
    it('Expects $("doesnotexist")[0] to return null.', () => {
      expect(svg.$('doesnotexist')[0]).to.be.equal(null);
    });

    it('Expects $("doesnotexist").parent() to return first parent.', () => {
      expect(svg.$('doesnotexist').parent().id).to.be.a('string').that.is.equal(svg.$()._root.id);
    });

    it('Expects $("doesnotexist").parent()[0] to return null.', () => {
      expect(svg.$('doesnotexist').parent()[0]).to.be.equal(null);
    });
    it('Expects $("doesnotexist").firstParent() to return first parent.', () => {
      expect(svg.$('doesnotexist').firstParent().id).to.be.a('string').that.is.equal(svg.$()._root.id);
    });

    it('Expects $("doesnotexist").previous() to return first parent.', () => {
      expect(svg.$('doesnotexist').previous().id).to.be.a('string').that.is.equal(svg.$()._root.id);
    });
    it('Expects $("doesnotexist").previous()[0] to return null.', () => {
      expect(svg.$('doesnotexist').previous()[0]).to.be.equal(null);
    });

    it('Expects $("doesnotexist").next() to return first parent.', () => {
      expect(svg.$('doesnotexist').parent().id).to.be.a('string').that.is.equal(svg.$()._root.id);
    });
    it('Expects $("doesnotexist").nexr()[0] to return null.', () => {
      expect(svg.$('doesnotexist').next()[0]).to.be.equal(null);
    });
  });
};
