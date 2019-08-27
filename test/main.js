// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, no-unused-vars: 0, import/no-extraneous-dependencies: 0, semi-style: 0 */

'use strict';

// -- Node modules
const { JSDOM } = require('jsdom')
    ;

// -- Local modules
const SVG    = require('../index.js')
    , testsvg = require('./int/testsvg.js')
    , testfn = require('./int/testclassmethods.js')
    , testfn2 = require('./int/testclassmethods2.js')
    , testfn3 = require('./int/testclassmethods3.js')
    , testselect = require('./int/testselect.js')
    , testdom = require('./int/testdom.js')
    , testanimation = require('./int/testanimation.js')
    , testevents = require('./int/testevents.js')
    , testattrs = require('./int/testattrs.js')
    , testtext = require('./int/testtext.js')
    , testclass = require('./int/testclass.js')
    , testnonchainingmethods = require('./int/testnonchainingmethods')
    ;

// -- Local constants
// Create a Virtual DOM:
const HTML = `
  <!DOCTYPE html>
  <html>
    <head></head>
    <body>
      <div id="app1"></div>
      <div id="app2"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="500" height="500"></svg></div>

      <div id="app10"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect><text></text></rect></svg></div>

      <div id="app20"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"></svg></div>
      <div id="app21"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect></rect></svg></div>
      <div id="app22"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect></rect></svg></div>
      <div id="app23"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"></svg></div>
      <div id="app24"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect></rect></svg></div>
      <div id="app25"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect></rect><text></text></svg></div>
      <div id="app26"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect></rect><text></text></svg></div>

      <div id="app30"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><text></text></svg></div>

      <div id="app40"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><text></text></svg></div>

      <div id="app50"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect></rect></svg></div>
      <div id="app51"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect></rect></svg></div>

      <div id="app60"></div>
      <div id="app61"></div>
      <div id="app62"></div>
      <div id="app63"></div>
      <div id="app64"></div>

      <div id="app70"></div>
      <div id="app71"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect class="abc"></rect></svg></div>
      <div id="app72"></div>
      <div id="app73"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect class="def"></rect></svg></div>

      <div id="app80"></div>
      <div id="app81"></div>
      <div id="app82"></div>
      <div id="app83"></div>
      <div id="app84"></div>
      <div id="app85"></div>
      <div id="app86"></div>
      <div id="app87"></div>
      <div id="app88"></div>
      <div id="app89"></div>

      <div id="app90"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><text></text></svg></div>
      <div id="app91"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><text class="hi hello"></text></svg></div>


    </body>
  </html>
`;
const dom = new JSDOM(HTML);
global.window = dom.window;
global.document = dom.window.document;
global.navigator = { userAgent: 'node.js' };

// -- Local variables


// -- Main

describe('SVG', () => {
  // Test SVG object:
  testsvg(dom);
  // Test Methods of class:
  testfn(dom);
  testfn2();
  testfn3();
  // Test Chaining Methods:
  testselect();
  testdom(dom);
  testanimation(dom);
  testevents();
  testattrs(dom);
  testtext(dom);
  testclass(dom);
  // Test Non Chaining Methods:
  testnonchainingmethods(dom);
});
