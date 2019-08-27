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
    describe('Test SVG().alink():', () => {
      it('Expects SVG("#app50").select("rect").alink(attr, url) to attach an url attribute.', () => {
        expect(SVG('#app50').select('rect').alink('href', '#')).to.be.an('object');
      });
    });

    describe('Test SVG().attr():', () => {
      it('Expects SVG("#app51").select("rect").attr("x", "100")... to add attributes.', () => {
        SVG('#app51')
          .select('rect')
          .attr('x', '100').attr('y', '100')
          .attr('width', '200')
          .attr('height', '200')
        ;
        const node = dom.window.document.getElementById('app51').firstChild.firstChild.outerHTML;
        const s = '<rect x="100" y="100" width="200" height="200"></rect>';
        expect(node).to.be.a('string').that.is.equal(s);
      });
    });

    describe('Test SVG().rmattr():', () => {
      it('Expects SVG("#app51").select("rect").rmattr()... to remove the previously added attributes.', () => {
        SVG('#app51')
          .select('rect')
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
