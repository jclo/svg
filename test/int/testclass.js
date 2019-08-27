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
    describe('Test SVG().addClass():', () => {
      it('Expects SVG("#app70").append("rect").addClass("aaa") to add the class name "aaa".', () => {
        SVG('#app70').append('rect').addClass('aaa');
        const { classList } = dom.window.document.getElementById('app70').firstChild.firstChild;
        expect(classList.length).to.be.a('number').that.is.equal(1);
        expect(classList[0]).to.be.a('string').that.is.equal('aaa');
      });

      it('Expects SVG("#app70").addClass("bbb") to add the class name "bbb".', () => {
        SVG('#app70').select('rect').addClass('bbb');
        const { classList } = dom.window.document.getElementById('app70').firstChild.firstChild;
        expect(classList.length).to.be.a('number').that.is.equal(2);
        expect(classList[0]).to.be.a('string').that.is.equal('aaa');
        expect(classList[1]).to.be.a('string').that.is.equal('bbb');
      });

      it('Expects SVG("#app71").removeClass("abc") to remove the class name "abc".', () => {
        SVG('#app71').removeClass('abc');
        const { classList } = dom.window.document.getElementById('app71').firstChild.firstChild;
        expect(classList.length).to.be.a('number').that.is.equal(1);
      });

      it('Expects SVG("#app72").append("rect").select("rect").toggleClass("cde") to add the class name "cde".', () => {
        SVG('#app72').append('rect').toggleClass('cde');
        const { classList } = dom.window.document.getElementById('app72').firstChild.firstChild;
        expect(classList.length).to.be.a('number').that.is.equal(1);
        expect(classList[0]).to.be.a('string').that.is.equal('cde');
      });

      it('Expects SVG("#app73").toggleClass("def") to remove the class name "def".', () => {
        SVG('#app73').select('rect').toggleClass('def');
        const { classList } = dom.window.document.getElementById('app73').firstChild.firstChild;
        expect(classList.length).to.be.a('number').that.is.equal(0);
      });
    });
  });
};
