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
module.exports = function() {
  describe('Test SVG() methods:', () => {
    //
    describe('Test SVG().select():', () => {
      it('Expects SVG("#app10").select("text") to return the SVG node "<text></text>."', () => {
        const node = SVG('#app10').select('text')[0].outerHTML;
        expect(node).to.be.a('string').that.is.equal('<text></text>');
      });
    });

    describe('Test SVG().parent():', () => {
      it('Expects SVG("#app10").select("text", true).parent() to return the SVG node "<rect><text></text></rect>."', () => {
        const node = SVG('#app10').select('text').parent()[0].outerHTML;
        expect(node).to.be.a('string').that.is.equal('<rect><text></text></rect>');
      });
    });
  });
};
