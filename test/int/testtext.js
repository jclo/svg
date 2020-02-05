/* global describe, it */
/* eslint  one-var: 0, import/no-extraneous-dependencies: 1, no-unused-expressions: 0,
  semi-style: 0 */


// -- Node modules
const { expect } = require('chai')
    ;


// -- Local modules


// -- Local constants


// -- Local variables


// -- Main
module.exports = function(SVG, dom) { // append, appendhtml, replace, remove
  describe('Test SVG().$ methods (next):', () => {
    //
    describe('Test SVG().$().text():', () => {
      it('Expects SVG("#app60").$().append("text").text("Hello!") to append this SVG element.', () => {
        SVG('#app60').$().append('text').text('Hello!');
        const node = dom.window.document.getElementById('app60').firstChild.firstChild.outerHTML;
        const s = '<text>Hello!</text>';
        expect(node).to.be.a('string').that.is.equal(s);
      });
    });

    describe('Test SVG().$().text().animate():', () => {
      it('Expects with .text({ start:0, stop: 0, d: 0 }) the animation to stop immediately.', (done) => {
        SVG('#app61').$()
          .append('text')
          .animate()
          .text(0)
          .text({ start: 0, stop: 0, d: 0 })
        ;
        setTimeout(() => {
          const node = dom.window.document.getElementById('app61').firstChild.firstChild.innerHTML;
          const value = parseInt(node, 10);
          expect(value).to.be.a('number').that.is.equal(0);
          done();
        }, 200);
      });

      it('Expects with .text({ start:0, stop: 0, d: 100 }) the animation to stop immediately.', (done) => {
        SVG('#app62').$()
          .append('text')
          .animate()
          .text(0)
          .text({ start: 0, stop: 0, d: 100 })
        ;
        setTimeout(() => {
          const node = dom.window.document.getElementById('app62').firstChild.firstChild.innerHTML;
          const value = parseInt(node, 10);
          expect(value).to.be.a('number').that.is.equal(0);
          done();
        }, 200);
      });

      it('Expects with .text({ start:0, stop: 100, d: 1000 }) the text value to be lower than 100 after 0.5s.', (done) => {
        SVG('#app63').$()
          .append('text')
          .animate()
          .text(0)
          .text({ start: 0, stop: 100, d: 1000 })
        ;
        setTimeout(() => {
          const node = dom.window.document.getElementById('app63').firstChild.firstChild.innerHTML;
          const value = parseInt(node, 10);
          expect(value).to.be.a('number').that.is.above(0);
          expect(value).to.be.a('number').that.is.below(100);
          done();
        }, 500);
      });

      it('Expects with .text({ start:0, stop: 100, d: 1000 }) the text value to be equal to 100 after 1s.', (done) => {
        SVG('#app64').$()
          .append('text')
          .animate()
          .text(0)
          .text({ start: 0, stop: 100, d: 1000 })
        ;
        setTimeout(() => {
          const node = dom.window.document.getElementById('app64').firstChild.firstChild.innerHTML;
          const value = parseInt(node, 10);
          expect(value).to.be.a('number').that.is.equal(100);
          done();
        }, 1100);
      });
    });
  });
};
