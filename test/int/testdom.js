/* global describe, it */
/* eslint  one-var: 0, semi-style: 0 */

'use strict';

// -- Node modules
const { expect } = require('chai')
    ;

// -- Local modules
const SVG = require('../../index.js')
    ;

// -- Local constants


// -- Local variables


// -- Main
module.exports = function(dom) { // append, appendhtml, replace, remove
  describe('Test SVG() methods (next):', () => {
    //
    describe('Test SVG().append():', () => {
      it('Expects SVG("#app20").append("rect") to append "<rect></rect>" as the first child.', () => {
        SVG('#app20').append('rect');
        const el = dom.window.document.getElementById('app20');
        const firstChild = el.querySelector('rect').outerHTML;
        expect(firstChild).to.be.a('string').that.is.equal('<rect></rect>');
      });
    });

    describe('Test SVG().appendBefore():', () => {
      it('Expects SVG("#app21").appendBefore("text", "rect") to append "<text></text>" as the first child.', () => {
        SVG('#app21').appendBefore('text', 'rect');
        const el = dom.window.document.getElementById('app21');
        const firstChild = el.firstChild.firstChild.outerHTML;
        expect(firstChild).to.be.a('string').that.is.equal('<text></text>');
      });
    });

    describe('Test SVG().appendAfter():', () => {
      it('Expects SVG("#app22").appendAfter("text", "rect") to append "<text></text>" as the last child.', () => {
        SVG('#app22').appendAfter('text', 'rect');
        const el = dom.window.document.getElementById('app22');
        const lastChild = el.firstChild.lastChild.outerHTML;
        expect(lastChild).to.be.a('string').that.is.equal('<text></text>');
      });
    });

    describe('Test SVG().appendHTML():', () => {
      it('Expects SVG("#app23").appendHTML("<div><h1>Hello!</h1></div>") to insert this XMLString as a foreignObject.', () => {
        const xmlString = '<div><h1>Hello!</h1></div>';
        const foreignObject = '<body><div><h1>Hello!</h1></div></body>';
        SVG('#app23').append('foreignObject').appendHTML(xmlString);
        const el = dom.window.document.getElementById('app23').firstChild.firstChild.firstChild.outerHTML;
        expect(el).to.be.a('string').that.is.equal(foreignObject);
      });
    });

    describe('Test SVG().replace():', () => {
      it('Expects SVG("#app24").select("rect").replace("text") to append "<text></text>" as the first child.', () => {
        const child = SVG('#app24').select('rect').replace('text')[0].outerHTML;
        const firstChild = dom.window.document.getElementById('app24').firstChild.firstChild.outerHTML;
        expect(firstChild).to.be.a('string').that.is.equal(child);
      });
    });

    describe('Test SVG().remove():', () => {
      it('Expects SVG("#app25").select("rect").remove() to return "<text></text>" as the first child.', () => {
        SVG('#app25').select('rect').remove();
        const firstChild = dom.window.document.getElementById('app25').firstChild.firstChild.outerHTML;
        expect(firstChild).to.be.a('string').that.is.equal('<text></text>');
      });
    });

    describe('Test SVG().removeAllChilds():', () => {
      it('Expects SVG("#app26").removeAllChilds() to return "null" as the first child.', () => {
        SVG('#app26').removeAllChilds();
        const { firstChild } = dom.window.document.getElementById('app26').firstChild;
        expect(firstChild).to.be.null;
      });
    });
  });
};
