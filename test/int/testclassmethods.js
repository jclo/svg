/* global describe, it */
/* eslint  one-var: 0, no-unused-expressions: 0, semi-style: 0 */

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
module.exports = function(dom) {
  describe('Test SVG functions:', () => {
    //
    describe('Text SVG.addClass():', () => {
      const el = dom.window.document.getElementById('app90').querySelector('text');
      it('Expects SVG.addClass("hello") to add the class "hello".', () => {
        SVG.addClass(el, 'hello');
        expect(el.getAttributeNS(null, 'class')).to.be.a('string').that.is.equal('hello');
      });
      it('Expects SVG.addClass("hi") to add a second class "hi".', () => {
        SVG.addClass(el, 'hi');
        expect(el.getAttributeNS(null, 'class')).to.be.a('string').that.is.equal('hello hi');
      });
      //
    });

    describe('Test SVG.removeClass():', () => {
      const el = dom.window.document.getElementById('app91').querySelector('text');
      it('Expects SVG.removeClass("hi") to remove the class "hi".', () => {
        SVG.removeClass(el, 'hi');
        expect(el.getAttributeNS(null, 'class')).to.be.a('string').that.is.equal('hello');
      });
      it('Expects SVG.removeClass("hello") to remove the class "hello".', () => {
        SVG.removeClass(el, 'hello');
        expect(el.getAttributeNS(null, 'class')).to.be.a('string').that.is.empty;
      });
    });
  });
};
