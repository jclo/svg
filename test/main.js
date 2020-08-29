// ESLint declarations:
/* global describe */
/* eslint one-var: 0, semi-style: 0, no-underscore-dangle: 0 */


// -- Vendor Modules
const { JSDOM } = require('jsdom')
    ;


// -- Local Modules
const // SVG    = require('../index')
    SVG       = require('../src/svg').default
    // , pack = require('../package.json')
    , testlib = require('./int/lib')
    , test_   = require('./int/lib/_')
    , test$   = require('./int/lib/$')
    , test2   = require('./int/svg/main')
    , test3   = require('./int/svg/methods')
    , test4   = require('./int/svg/static')
    , test5   = require('./int/svg/anim')
    ;


// -- Local Constants
const libname = 'SVG';


// -- Local Variables


// -- Main

// Create a Virtual DOM:
const HTML = `
<!DOCTYPE html>
  <html>
    <head>
    </head>
    <body>
      <div id="app$1"><svg id="ity6qtjl" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"></svg></div>
      <div id="app$2"><svg id="ity6qtjl" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"></svg></div>
      <div id="app$3"><svg id="ity6qtjl" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"></svg></div>
      <div id="app$4"><svg id="ity6qtjl" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"></svg></div>
      <div id="app$5"><svg id="ity6qtjl" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"></svg></div>
      <div id="app$6"><svg id="ity6qtjl" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"></svg></div>
      <div id="app$7"><svg id="ity6qtjl" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"></svg></div>

      <div id="app1"></div>
      <div id="app2"></div>
      <div id="app3"></div>

      <div id="appanim1"></div>
      <div id="appanim2"></div>
    </body>
  </html>
`;

const dom = new JSDOM(HTML);
global.window = dom.window;
global.document = dom.window.document;
global.navigator = { userAgent: 'node.js' };

// Nota:
// If you choose 'SVG = require('../index')', 'display-coverage' will
// show the coverage of all the library in one file.
//
// If you want to display the coverage file by file, you must choose
// 'SVG = require('../src/prototypal').default'. But, in this case,
// the build isn't done, so you should pass '{{lib:name}}' as libname and
// '{{lib:version}}' as the library version.

describe('Test SVG:', () => {
  testlib(SVG, '{{lib:name}}', '{{lib:version}}');
  // testlib(SVG, libname, pack.version);

  // Start testing the libraries _.js and $.js:
  test_(SVG);
  test$(SVG);

  // Now test the object SVG():
  test2(SVG, '#app1');
  test3(SVG, '#app2');
  test4(SVG, '#app3');

  // Test the animation:
  test5(SVG);
});
