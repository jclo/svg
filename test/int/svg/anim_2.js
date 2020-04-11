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
  describe('Test the animation on transform rotate, scale and translate:', () => {
    const svg = SVG(app);

    const rotate = {
      type: 'rotate',
      start: 0,
      stop: 180,
      duration: 1000,
      easing: 'linear',
      frequency: 50,
    };

    const scale = {
      type: 'scale',
      start: { x: 0, y: 0 },
      stop: { x: 10, y: 20 },
      duration: 1000,
      easing: 'linear',
      frequency: 50,
    };

    const translate = {
      type: 'translate',
      start: { x: 0, y: 0 },
      stop: { x: 100, y: -200 },
      duration: 1000,
      easing: 'linear',
      frequency: 50,
    };

    svg.$()
      .append('g')
      .attr('transform', 'translate(200, 200)')
      .append('rect')
      .attr('transform', 'rotate(0) scale(0, 0) translate(0, 0)')
      // .attr('transform', trans)
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 100)
      .attr('height', 100)
    ;

    it('Expects "transform="rotate(x)" to vary from 0 to 180 in 1s.', (done) => {
      svg.$('rect').attr('transform', rotate);

      setTimeout(() => {
        const tr = SVG.transformAttrToObj(svg.$('rect').getAttribute('transform'));
        expect(tr.rotate.a).to.be.a('number').that.is.equal(180);
        done();
      }, 1300);
    });

    it('Expects "transform="scale(x,y)" to vary from 0,0 to 10,20 in 1s.', (done) => {
      svg.$('rect').attr('transform', scale);

      setTimeout(() => {
        const tr = SVG.transformAttrToObj(svg.$('rect').getAttribute('transform'));
        expect(tr.scale.x).to.be.a('number').that.is.equal(10);
        expect(tr.scale.y).to.be.a('number').that.is.equal(20);
        done();
      }, 1300);
    });

    it('Expects "transform="translate(x,y)" to vary from 0,0 to 100,-200 in 1s.', (done) => {
      svg.$('rect').attr('transform', translate);

      setTimeout(() => {
        const tr = SVG.transformAttrToObj(svg.$('rect').getAttribute('transform'));
        expect(Math.round(tr.translate.x)).to.be.a('number').that.is.equal(100);
        expect(Math.round(tr.translate.y)).to.be.a('number').that.is.equal(-200);
        done();
      }, 1300);
    });
  });
};
