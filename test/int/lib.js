// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, semi-style: 0, no-underscore-dangle: 0 */


// -- Vendor Modules
const { expect } = require('chai')
    ;


// -- Local Modules


// -- Local Constants


// -- Local Variables


// -- Main
module.exports = function(SVG, libname, version) {
  describe('SVG introspection:', () => {
    describe('Test the nature of SVG:', () => {
      it('Expects SVG to be a function.', () => {
        expect(SVG).to.be.a('function');
      });

      it('Expects SVG to own 9 custom properties.', () => {
        expect(Object.keys(SVG)).to.be.an('array').that.has.lengthOf(9);
      });

      describe('Check the owned generic custom properties:', () => {
        it(`Expects SVG to own the property "NAME" whose value is "${libname}".`, () => {
          expect(SVG).to.own.property('NAME').that.is.equal(libname);
        });

        it(`Expects SVG to own the property "VERSION" whose value is "${version}".`, () => {
          expect(SVG).to.own.property('VERSION');
        });

        it('Expects SVG to own the property "_setTestMode" that is a function.', () => {
          expect(SVG).to.own.property('_setTestMode').that.is.a('function');
        });

        it('Expects SVG to own the property "noConflict" that is a function.', () => {
          expect(SVG).to.own.property('noConflict').that.is.a('function');
        });

        describe('Test the owned generic custom properties:', () => {
          it('Expects the property "_setTestMode" to return an array with 2 items.', () => {
            expect(SVG._setTestMode()).to.be.an('array').that.has.lengthOf(2);
          });

          it('Expects the property "noConflict" to return a function.', () => {
            expect(SVG.noConflict()).to.be.a('function');
          });
        });
      });

      describe('Check the owned specific custom properties:', () => {
        it('Expects SVG to own the property "transformAttrToObj" that is a function.', () => {
          expect(SVG).to.own.property('transformAttrToObj').that.is.a('function');
        });

        it('Expects SVG to own the property "transformAttrToStr" that is a function.', () => {
          expect(SVG).to.own.property('transformAttrToStr').that.is.a('function');
        });

        it('Expects SVG to own the property "getArc" that is a function.', () => {
          expect(SVG).to.own.property('getArc').that.is.a('function');
        });

        it('Expects SVG to own the property "getLine" that is a function.', () => {
          expect(SVG).to.own.property('getLine').that.is.a('function');
        });

        it('Expects SVG to own the property "getMultipolyline" that is a function.', () => {
          expect(SVG).to.own.property('getMultipolyline').that.is.a('function');
        });

        describe('Test the owned specifc custom properties:', () => {
          it('Expects ... to be done later on!', () => {
            expect(true).to.be.equal(true);
          });
        });
      });
    });

    describe('Test SVG constructor:', () => {
      const o = SVG();
      const op = Object.getOwnPropertyNames(o);
      const io = Object.keys(Object.getPrototypeOf(o));

      it('Expects the function SVG to return an object.', () => {
        expect(o).to.be.an('object');
      });

      it('Expects SVG object to own 4 properties.', () => {
        expect(op).to.be.an('array').that.has.lengthOf(4);
      });

      it('Expects SVG object to inherit 2 properties.', () => {
        expect(io).to.be.an('array').that.has.lengthOf(2);
      });

      describe('Check the owned generic properties:', () => {
        it('Expects SVG object to own the property "_library" that is an object.', () => {
          expect(o).to.own.property('_library').that.is.an('object');
        });

        describe('Test the owned generic properties:', () => {
          it('Expects the property "_library" to own two properties.', () => {
            expect(Object.keys(o.whoami())).to.be.an('array').that.has.lengthOf(2);
          });
          it(`Expects the property "_library" to own the property "name" whose value is "${libname}".`, () => {
            expect(o.whoami()).to.own.property('name').that.is.equal(libname);
          });
          it(`Expects the property "_library" to own the property "version" whose value is "${version}".`, () => {
            expect(o.whoami()).to.own.property('version').that.is.equal(version);
          });
        });
      });

      describe('Check the inherited generic properties:', () => {
        it('Expects SVG object to inherit the property "whoami" that is a function.', () => {
          expect(o).to.have.property('whoami').that.is.a('function');
        });

        describe('Test the inherited generic properties:', () => {
          it('Expects the property "whoami" to return an object.', () => {
            expect(o.whoami()).to.be.an('object');
          });
          it('Expects this object to own two properties.', () => {
            expect(Object.keys(o.whoami())).to.be.an('array').that.has.lengthOf(2);
          });
          it(`Expects this object to own the property "name" whose value is "${libname}".`, () => {
            expect(o.whoami()).to.own.property('name').that.is.equal(libname);
          });
          it(`Expects this object to own the property "version" whose value is "${version}".`, () => {
            expect(o.whoami()).to.own.property('version').that.is.equal(version);
          });
        });
      });

      describe('Check the owned specific properties:', () => {
        it('Expects SVG object to own the property id.', () => {
          expect(o).to.own.property('id');
        });

        it('Expects SVG object to own the property _root.', () => {
          expect(o).to.own.property('_root');
        });

        it('Expects SVG object to own the property _SVG.', () => {
          expect(o).to.own.property('_SVG');
        });

        describe('Test the owned specific properties:', () => {
          it('Expects ... to be done later on!', () => {
            expect(true).to.be.equal(true);
          });
        });
      });

      describe('Check the inherited specific properties:', () => {
        it('Expects SVG object to inherit the property "$" that is a function.', () => {
          expect(o).to.have.property('$').that.is.a('function');
        });

        describe('Test the inherited specific properties:', () => {
          it('Expects ... to be done later on!', () => {
            expect(true).to.be.equal(true);
          });
        });
      });
    });
  });
};
