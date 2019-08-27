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
 *  . tex t                       adds a text to the selected SVG element,
 *
 *
 *
 * @namespace    TSVG.Methods.Text.Public
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
  const Root = TSVG.Methods.Text.Public;


  // -- Local modules
  const Anim = TSVG.Anim.Public
      ;

  // -- Local constants


  // -- Local variables


  // -- Private Functions ----------------------------------------------------

  /**
   * Adds a text to the selected SVG element.
   *
   * @function (arg1, arg2)
   * @private
   * @param {Object}        the SVG object,
   * @param {Object}        the text or the the params for the animation,
   * @returns {}            -,
   * @since 0.0.0
   */
  function _text(that, value) {
    switch (typeof value) {
      case 'number':
      case 'string':
        /* eslint-disable-next-line no-param-reassign */
        that[0].textContent = value;
        break;

      case 'object':
        Anim.textAnimationRun(that, value);
        break;

      default:
        break;
    }
  }


  // -- Public Static Methods ------------------------------------------------

  extend(Root, {

    /**
     * Adds a text to the selected SVG element.
     *
     * @method (arg1, arg2)
     * @public
     * @param {Object}      the SVG object,
     * @param {Object}      the text or the the params for the animation,
     * @returns {}          -,
     * @since 0.0.0
     */
    text(that, value) {
      _text(that, value);
    },
  });
}());
/* eslint-enable one-var, semi-style, no-underscore-dangle */
