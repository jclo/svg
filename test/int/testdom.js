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
  describe('Test SVG().$ methods (next):', () => {
    //
    describe('Test SVG().$().append():', () => {
      it('Expects SVG("#app20").$().append("rect") to append "<rect></rect>" as the first child.', () => {
        SVG('#app20').$().append('rect');
        const el = dom.window.document.getElementById('app20');
        const firstChild = el.querySelector('rect').outerHTML;
        expect(firstChild).to.be.a('string').that.is.equal('<rect></rect>');
      });
    });

    describe('Test SVG().$().appendHTML():', () => {
      it('Expects SVG("#app21").$().appendHTML("<div><h1>Hello!</h1></div>") to insert this XMLString as a foreignObject.', () => {
        const xmlString = '<div><h1>Hello!</h1></div>';
        const foreignObject = '<body><div><h1>Hello!</h1></div></body>';
        SVG('#app21').$().append('foreignObject').appendHTML(xmlString);
        const el = dom.window.document.getElementById('app21').firstChild.firstChild.firstChild.outerHTML;
        expect(el).to.be.a('string').that.is.equal(foreignObject);
      });
    });

    describe('Test SVG().$().replace():', () => {
      it('Expects SVG("#app22").$().select("rect").replace("text") to append "<text></text>" as the first child.', () => {
        const child = SVG('#app22').$().select('rect').replace('text')[0].outerHTML;
        const firstChild = dom.window.document.getElementById('app22').firstChild.firstChild.outerHTML;
        expect(firstChild).to.be.a('string').that.is.equal(child);
      });
    });

    describe('Test SVG().$().remove():', () => {
      it('Expects SVG("#app23").$().select("rect").remove() to return "<text></text>" as the first child.', () => {
        SVG('#app23').$().select('rect').remove();
        const firstChild = dom.window.document.getElementById('app23').firstChild.firstChild.outerHTML;
        expect(firstChild).to.be.a('string').that.is.equal('<text></text>');
      });
    });

    describe('Test SVG().$().removeAllChilds():', () => {
      it('Expects SVG("#app24").$().removeAllChilds() to return "null" as the first child.', () => {
        SVG('#app24').$().removeAllChilds();
        const { firstChild } = dom.window.document.getElementById('app24').firstChild;
        expect(firstChild).to.be.null;
      });
    });
  });
};
