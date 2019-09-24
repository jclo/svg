/* ***************************************************************************
 *
 * Implements the text methods.
 *
 * text.js is just a literal object that contains a set of functions. It
 * can't be intantiated.
 *
 * Private Functions:
 *  . _text                       adds a text to the selected SVG element,
 *
 *
 * Public Static Methods:
 *  . text                        adds a text to the selected SVG element,
 *
 *
 *
 * @namespace    SV.Methods.Text.Public
 * @dependencies none
 * @exports      -
 * @author       -
 * @since        0.0.0
 * @version      -
 * ************************************************************************ */
/* eslint-disable one-var, semi-style, no-underscore-dangle */

'use strict';

(function() {
  // IIFE

  // -- Module path
  const Root = SV.Methods.Text.Public;


  // -- Local modules
  const Anim = SV.Anim.Public
      ;

  // -- Local constants


  // -- Local variables


  // -- Private Functions ----------------------------------------------------

  /**
   * Adds a text to the selected SVG element.
   *
   * @function (arg1, arg2)
   * @private
   * @param {Object}        the SVG element,
   * @param {Object}        the text or the the params for the animation,
   * @returns {}            -,
   * @since 0.0.0
   */
  function _text(el, value) {
    switch (typeof value) {
      case 'number':
      case 'string':
        /* eslint-disable-next-line no-param-reassign */
        el.textContent = value;
        break;

      case 'object':
        Anim.textRun(el, value);
        break;

      default:
        break;
    }
  }


  // -- Public Static Methods ------------------------------------------------

  _.extend(Root, {

    /**
     * Adds a text to the selected SVG element.
     *
     * @method (arg1, arg2)
     * @public
     * @param {Object}      the SVG element,
     * @param {Object}      the text or the the params for the animation,
     * @returns {}          -,
     * @since 0.0.0
     */
    text(el, value) {
      _text(el, value);
    },
  });
}());
/* eslint-enable one-var, semi-style, no-underscore-dangle */
