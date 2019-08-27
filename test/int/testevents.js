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
  /**
   * The test is limited to check that the methods exist.
   */
  describe('Test SVG() methods (next):', () => {
    //
    describe('Test SVG().listen():', () => {
      it('Expects SVG("#app40").select("text").listen(fn) to attach an event handler.', () => {
        const fn = function() {};
        expect(SVG('#app40').select('text').listen(fn)).to.be.an('object');
      });
    });

    describe('Test SVG().unlisten():', () => {
      it('Expects SVG("#app40").select("text").unlisten(fn) to remove the event handler.', () => {
        const fn = function() {};
        expect(SVG('#app40').select('text').unlisten(fn)).to.be.an('object');
      });
    });
  });
};
