/* ***************************************************************************
 *
 * Adds or Updates the SVG node attributes.
 *
 * attributes.js is just a literal object that contains a set of functions. It
 * can't be intantiated.
 *
 * Private Functions:
 *  . _attr                       adds an attribute to the selected SVG element,
 *
 *
 * Public Static Methods:
 *  . attr                        adds an attribute to the selected SVG element,
 *
 *
 *
 * @namespace    SV.Methods.Attr.Public
 * @dependencies none
 * @exports      -
 * @author       -
 * @since        0.0.0
 * @version      -
 * ************************************************************************ */
/* eslint-disable no-underscore-dangle */

'use strict';

(function() {
  // IIFE

  // -- Module path
  const Root = SV.Methods.Attr.Public;


  // -- Local modules
  const Anim = SV.Anim.Public;


  // -- Local constants


  // -- Local variables


  // -- Private Functions ----------------------------------------------------

  /**
   * Adds an attribute to the selected SVG element.
   *
   * @function (arg1, arg2, arg3)
   * @private
   * @param {Object}        the SVG element,
   * @param {String}        the name of the attribute,
   * @param {Object}        the value of the attribute or the params for the animation,
   * @returns {}            -,
   * @since 0.0.0
   */
  function _attr(el, attr, value) {
    switch (typeof value) {
      // Add the requested attribute to this element:
      case 'string':
      case 'number':
        el.setAttributeNS(null, attr, value);
        break;

      case 'object':
        // Proceed with an animation:
        switch (attr) {
          // ...
          // case 'd':
          //   Anim.dAnimationRun(el, value);
          //   break;

          // Transform animations:
          case 'transform':
            switch (value.type) {
              // Rotate animation:
              case 'rotate':
                Anim.rotateRun(el, value);
                break;

              // Scale animation:
              case 'scale':
                Anim.scaleRun(el, value);
                break;

              // Smooth linear animation:
              case 'translate':
                Anim.translateRun(el, value);
                break;

              default:
                throw new Error(`The animation is not supported for the transform ${value.type}!`);
            }
            break;

          default:
            throw new Error(`The animation is not supported for the attribute ${attr}!`);
        }
        break;

      default:
        // Ignore!
    }
  }


  // -- Public Static Methods ------------------------------------------------

  _.extend(Root, {

    /**
     * Adds an attribute to the selected SVG element.
     *
     * @method (arg1, arg2, arg3)
     * @public
     * @param {Object}      the SVG object,
     * @param {String}      the name of the attribute,
     * @param {Object}      the value of the attribute or the params for the animation,
     * @returns {}          -,
     * @since 0.0.0
     */
    attr(el, attr, value) {
      _attr(el, attr, value);
    },
  });
}());
/* eslint-enable no-underscore-dangle */
