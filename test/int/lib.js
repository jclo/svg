// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, semi-style: 0, no-underscore-dangle: 0 */


// -- Vendor Modules
const { expect } = require('chai')
    ;


// -- Local Modules


// -- Local Constants
// Number of owned custom properties added by your library,
// number of owned and inherited properties added by your library (instance),
// number of items returned by '_setTestMode'.
const LIBPROPS = 5
    , OWNPROPS = 3
    , INHPROPS = 1
    , TESTMODE = 2
    ;


// -- Local Variables


// -- Main
module.exports = function(SVG, libname, version, type) {
  describe('SVG introspection:', () => {
    describe('Test the nature of SVG:', () => {
      it('Expects SVG to be a function.', () => {
        expect(SVG).to.be.a('function');
      });

      it(`Expects SVG to own ${4 + LIBPROPS} custom properties.`, () => {
        expect(Object.keys(SVG)).to.be.an('array').that.has.lengthOf(4 + LIBPROPS);
      });


      // -- This section must not be modified --
      // NAME, VERSION, _library, _setTestMode, noConflict
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
          it(`Expects the property "_setTestMode" to return an array with ${TESTMODE} item(s).`, () => {
            expect(SVG._setTestMode()).to.be.an('array').that.has.lengthOf(TESTMODE);
          });

          it('Expects the property "noConflict" to return a function.', () => {
            expect(SVG.noConflict()).to.be.a('function');
          });
        });


        // -- This section must  be adapted --
        // Add here the owned properties added by your library.
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

          describe('Test the owned specific custom properties:', () => {
            it('Expects SVG the property ... to be completed or ... removed!', () => {
              expect(true).to.be.equal(true);
            });
          });
        });
      });
    });


    describe('Test SVG constructor:', () => {
      if (type === 'with new') {
        it('Expects SVG() without the operator "new" to throw an error.', () => {
          try {
            SVG();
          } catch (e) {
            expect(e.message).to.be.a('string').that.is.equal('SVG needs to be called with the new keyword!');
          }
        });
      }

      const o = type === 'with new' ? new SVG() : SVG();
      const op = Object.getOwnPropertyNames(o);
      const io = Object.keys(Object.getPrototypeOf(o));

      it('Expects the function SVG to return an object.', () => {
        expect(o).to.be.an('object');
      });

      it(`Expects SVG object to own ${1 + OWNPROPS} property(ies).`, () => {
        expect(op).to.be.an('array').that.has.lengthOf(1 + OWNPROPS);
      });


      // -- This section must not be modified --
      // _library
      describe('Check the owned generic properties:', () => {
        it('Expects SVG object to own the property "_library" that is an object.', () => {
          expect(o).to.own.property('_library').that.is.an('object');
        });

        describe('Test the owned generic properties:', () => {
          it('Expects the property "_library" to own two properties.', () => {
            expect(Object.keys(o._library)).to.be.an('array').that.has.lengthOf(2);
          });
          it(`Expects the property "_library" to own the property "name" whose value is "${libname}".`, () => {
            expect(o._library).to.own.property('name').that.is.equal(libname);
          });
          it(`Expects the property "_library" to own the property "version" whose value is "${version}".`, () => {
            expect(o._library).to.own.property('version').that.is.equal(version);
          });
        });


        // -- This section must be adapted --
        // Add here the owned properties added by your library.
        describe('Check the owned specific custom properties:', () => {
          it('Expects SVG object to own the property id.', () => {
            expect(o).to.own.property('id');
          });

          it('Expects SVG object to own the property _root.', () => {
            expect(o).to.own.property('_root');
          });

          it('Expects SVG object to own the property _SVG.', () => {
            expect(o).to.own.property('_SVG');
          });

          describe('Test the owned specific custom properties:', () => {
            it('Expects SVG the property ... to be completed or ... removed!', () => {
              expect(true).to.be.equal(true);
            });
          });
        });
      });


      // -- This section must not be modified --
      // whoami
      describe('Check the inherited generic properties:', () => {
        it(`Expects SVG object to inherit ${1 + INHPROPS} property(ies).`, () => {
          expect(io).to.be.an('array').that.has.lengthOf(1 + INHPROPS);
        });

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


      // -- This section must be adapted --
      // Replace here 'getString' and 'getArray' by the inherited properties
      // added by your library.
      describe('Check the inherited specific properties:', () => {
        it('Expects SVG object to inherit the property "$" that is a function.', () => {
          expect(o).to.have.property('$').that.is.a('function');
        });
      });
    });
  });
};
