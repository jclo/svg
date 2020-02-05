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
module.exports = function(SVG, dom) { // append, appendhtml, replace, remove
  describe('Test SVG().$() methods (next):', () => {
    //
    describe('Test SVG().$().alink():', () => {
      it('Expects SVG("#app50").$("rect").alink(attr, url) to attach an url attribute.', () => {
        expect(SVG('#app50').$('rect').alink('href', '#')).to.be.an('object');
      });
    });

    describe('Test SVG().$().attr():', () => {
      it('Expects SVG("#app51").$("rect").attr("x", "100")... to add attributes.', () => {
        SVG('#app51').$('rect')
          .attr('x', '100').attr('y', '100')
          .attr('width', '200')
          .attr('height', '200')
        ;
        const node = dom.window.document.getElementById('app51').firstChild.firstChild.outerHTML;
        const s = '<rect x="100" y="100" width="200" height="200"></rect>';
        expect(node).to.be.a('string').that.is.equal(s);
      });
    });

    describe('Test SVG().$().rmattr():', () => {
      it('Expects SVG("#app51").$("rect").rmattr()... to remove the previously added attributes.', () => {
        SVG('#app51').$('rect')
          .rmattr('x').rmattr('y')
          .rmattr('width')
          .rmattr('height')
        ;
        const node = dom.window.document.getElementById('app51').firstChild.firstChild.outerHTML;
        const s = '<rect></rect>';
        expect(node).to.be.a('string').that.is.equal(s);
      });
    });
  });
};
