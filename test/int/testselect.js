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
module.exports = function(SVG) {
  describe('Test SVG()$() methods:', () => {
    //
    describe('Test SVG().select():', () => {
      it('Expects SVG("#app10").$("text") to return the SVG node "<text></text>."', () => {
        const node = SVG('#app10').$('text')[0].outerHTML;
        expect(node).to.be.a('string').that.is.equal('<text></text>');
      });
    });

    describe('Test SVG().parent():', () => {
      it('Expects SVG("#app10").$("text").parent() to return the SVG node "<rect><text></text></rect>."', () => {
        const node = SVG('#app10').$('text').parent()[0].outerHTML;
        expect(node).to.be.a('string').that.is.equal('<rect><text></text></rect>');
      });
    });
  });
};
