/* global describe, it */
/* eslint  one-var: 0, import/no-extraneous-dependencies: 1, no-unused-expressions: 0,
  semi-style: 0 */


// -- Node modules
const { expect } = require('chai')
    ;


// -- Local modules


// -- Local constants


// -- Local variables


// -- Main
module.exports = function(SVG) { // append, appendhtml, replace, remove
  describe('Test SVG().$() non chaining methods:', () => {
    //
    describe('Test SVG().createEvent():', () => {
      it('Expects SVG("#app80").createEvent() to return an object.', () => {
        // Not supported by JSDOM?
        // expect(SVG('#app80').append('text').createEvent()).to.be.an('object');
      });
    });

    describe('Test SVG().$().query():', () => {
      it('Expects SVG("#app81").$().query("text") to return <text></text>.', () => {
        /* eslint-disable indent */
        const elem = SVG('#app81').$()
                      .append('rect')
                      .append('text')
                      .parent()
                      .query('text')
                      ;
        /* eslint-enable indent */
        expect(elem.outerHTML).to.be.a('string').that.is.equal('<text></text>');
      });
    });

    describe('Test SVG().$().getElement():', () => {
      it('Expects SVG("#app82").$().select("text").getElement().outerHTML to return <text></text>.', () => {
        const elem = SVG('#app82').$().append('text').getElement();
        expect(elem.outerHTML).to.be.a('string').that.is.equal('<text></text>');
      });
    });

    describe('Test SVG().$().getAttribute():', () => {
      it('Expects SVG("#app83").[...].getAttribute("height") to return 100.', () => {
        const value = SVG('#app83').$()
          .append('text')
          .attr('height', '100')
          .getAttribute('height')
        ;
        expect(value).to.be.a('string').that.is.equal('100');
      });
    });

    describe('Test SVG().$().getComputedStyle():', () => {
      it('Expects SVG("#app84").[...].getComputedStyle() to return a CSSStyleDeclaration object.', () => {
        const o = SVG('#app84').$().append('text').getComputedStyle();
        expect(o).to.be.an('object');
        expect(o.color).not.to.be.undefined;
      });
    });

    describe('Test SVG().$().getPropertyValue():', () => {
      it('Expects getPropertyValue to return the value of the object returned by getComputedStyle.', () => {
        expect(SVG('#app84').$().select('text').getPropertyValue('color')).to.be.a('string');
      });
    });

    describe('Test SVG().$().getSize():', () => {
      it('Expects SVG("#app85").[...].getSize() to return { width: 0, height: 0 }.', () => {
        const o = SVG('#app85').$().append('text').getSize();
        expect(o.height).to.be.a('number').that.is.equal(0);
        expect(o.width).to.be.a('number').that.is.equal(0);
      });
    });

    describe('Test SVG().trigger():', () => {
      //
    });
  });
};
