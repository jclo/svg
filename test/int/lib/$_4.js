// ESLint declarations:
/* global describe, it */
/* eslint  one-var: 0, semi-style: 0, no-underscore-dangle: 0,
  no-unused-expressions: 0 */


// -- Vendor Modules
const { expect } = require('chai')
    ;

// -- Local Modules


// -- Local Constants


// -- Local Variables


// -- Main
module.exports = function(SVG, id) {
  const [, $] = SVG._setTestMode();
  const el = document.getElementById(id).firstElementChild;
  const svg = { id: el.id, _root: el, $ };

  describe('Test the methods listen, listenOnce, unlisten:', () => {
    it('Expects $() to own the property "listen" that is a function.', () => {
      expect(svg.$()).to.own.property('listen').that.is.a('function');
    });

    it('Expects $() to own the property "listenOnce" that is a function.', () => {
      expect(svg.$()).to.own.property('listenOnce').that.is.a('function');
    });

    it('Expects $() to own the property "unlisten" that is a function.', () => {
      expect(svg.$()).to.own.property('unlisten').that.is.a('function');
    });

    it('Expects $().listen() to return the first parent.', () => {
      expect(svg.$().listen().id).to.be.a('string').that.is.equal(svg.$()._root.id);
    });

    it('Expects $().listen("event", handler) to return the first parent.', () => {
      function handler() {}
      expect(svg.$().listen('event', handler).id).to.be.a('string').that.is.equal(svg.$()._root.id);
    });

    it('Expects $().listenOnce() to return the first parent.', () => {
      expect(svg.$().listenOnce().id).to.be.a('string').that.is.equal(svg.$()._root.id);
    });

    it('Expects $().listenOnce("event", handler) to return the first parent.', () => {
      function handler() {}
      expect(svg.$().listenOnce('event', handler).id).to.be.a('string').that.is.equal(svg.$()._root.id);
    });

    it('Expects $().unlisten() to return the first parent.', () => {
      expect(svg.$().unlisten().id).to.be.a('string').that.is.equal(svg.$()._root.id);
    });

    it('Expects $().unlisten("event", handler) to return the first parent.', () => {
      function handler() {}
      expect(svg.$().unlisten('event', handler).id).to.be.a('string').that.is.equal(svg.$()._root.id);
    });

    it('Expects $().listenOnce("test", handler) to get the event "test".', (done) => {
      function handler(e) {
        expect(e.type).to.be.a('string').that.is.equal('test');
        done();
      }
      const event = new window.Event('test', { bubbles: true });
      svg.$().append('circle').listenOnce('test', handler);
      svg.$('circle')[0].dispatchEvent(event);
    });
  });
};
