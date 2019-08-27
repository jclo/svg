/* ***************************************************************************
 *
 * Creates an Event.
 *
 * event.js is just a literal object that contains a set of functions. It
 * can't be intantiated.
 *
 * Private Functions:
 *  . _create                     creates the event 'animationOver',
 *
 *
 * Public Static Methods:
 *  . create                      creates the event 'animationOver',
 *
 *
 *
 * @namespace    TSVG.Event.Public
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
  const Root = TSVG.Event.Public;


  // -- Local modules


  // -- Local constants


  // -- Local variables


  // -- Private Functions ----------------------------------------------------

  /**
   * Creates the event 'animationOver'.
   *
   * @function (arg1)
   * @private
   * @param {Object}        the SVG object,
   * @returns {Object}      returns the event object,
   * @since 0.0.0
   */
  /* istanbul ignore next */
  function _create(that) {
    const eventType = 'animationOver';
    let event;

    // Check it is new:
    if (!that[0].event) {
      // New event:
      switch (that.browser) {
        case 'modern':
          event = new Event(eventType);
          break;

        case 'old':
          event = document.createEvent('Event');
          event.initEvent(eventType, true, true);
          break;

        default:
          throw new Error('This type of browser is not supported!');
      }
      return event;
    }
    // Event already attached:
    return that[0].event;
  }


  // -- Public Static Methods ------------------------------------------------

  extend(Root, {

    /**
     * Creates the event 'animationOver'.
     *
     * @method (arg1)
     * @public
     * @param {Object}      the SVG object,
     * @returns {Object}    returns the event object,
     * @since 0.0.0
     */
    /* istanbul ignore next */
    create(that) {
      return _create(that);
    },
  });
}());
/* eslint-enable one-var, semi-style, no-underscore-dangle */
