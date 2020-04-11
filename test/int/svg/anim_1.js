// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, no-unused-vars: 0, semi-style: 0, no-underscore-dangle: 0 */


// -- Vendor Modules
const should     = require('chai').should()
    , { expect } = require('chai')
    ;


// -- Local Modules


// -- Local Constants


// -- Local Variables


// -- Main
module.exports = function(SVG, app) {
  describe('Test the animation for the $().text():', () => {
    const svg = SVG(app);

    const anim = {
      start: 0,
      stop: 100,
      duration: 1000,
      easing: 'linear',
      frequency: 50,
    };

    it('Expects svg.$().text({ start: 0, stop: 100, ...} to display value increasing from 0 to 100).', (done) => {
      svg.$().append('text').text(anim);

      setTimeout(() => {
        expect(svg.$('text')[0].textContent).to.be.a('string').that.is.equal('100');
        done();
      }, 1300);
    });
  });
};
