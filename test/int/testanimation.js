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
module.exports = function(SVG, dom) {
  describe('Test SVG() methods (next):', () => {
    describe('Test SVG().animate():', () => {
      it('Expects SVG("#app30").$("text").animate() to attach easing and frequency to it.', () => {
        SVG('#app30').$('text').animate();
        const el = dom.window.document.getElementById('app30').querySelector('text');
        expect(el.easing).to.be.a('function');
        expect(el.frequency).to.be.a('number').that.is.equal(40);
      });

      it('Expects SVG("#app30").$("text").animate(fn, 1000) to attach easing and frequency to it.', () => {
        const fn = function() {};
        SVG('#app30').$('text').animate(fn, 1000);
        const el = dom.window.document.getElementById('app30').querySelector('text');
        expect(el.easing).to.be.a('function');
        expect(el.frequency).to.be.a('number').that.is.equal(1);
      });
    });
  });
};
