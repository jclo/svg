// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, no-unused-vars: 0, semi-style: 0, no-underscore-dangle: 0 */


// -- Vendor Modules
const should     = require('chai').should()
    , { expect } = require('chai')
    ;


// -- Local Modules
const test1 = require('./static_1')
    , test2 = require('./static_2')
    , test3 = require('./static_3')
    ;


// -- Local Constants


// -- Local Variables


// -- Main
module.exports = function(SVG, app) {
  const svg = SVG(app);

  describe('Test the SVG static methods:', () => {
    test1(SVG);
    test2(SVG);
    test3(SVG);
  });
};
