// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, no-unused-vars: 0, semi-style: 0, no-underscore-dangle: 0 */


// -- Vendor Modules
const should     = require('chai').should()
    , { expect } = require('chai')
    ;


// -- Local Modules
const test1 = require('./anim_1')
    , test2 = require('./anim_2')
    ;


// -- Local Constants


// -- Local Variables


// -- Main
module.exports = function(SVG) {
  describe('Test the animation:', () => {
    test1(SVG, 'appanim1');
    test2(SVG, 'appanim2');
  });
};
