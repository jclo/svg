/* ***************************************************************************
 *
 * Implements utility functions used jsvg.js.
 *
 * svgu.js is just a literal object that contains a set of functions. It
 * can't be intantiated.
 *
 * Private Functions:
 *  . _getBrowser                 finds the browser type,
 *  . _create                     creates the SVG Node in the DOM,
 *
 *
 * Public Static Methods:
 *  . getBrowser                  finds the browser type,
 *  . create                      creates the SVG Node in the DOM,
 *
 *
 *
 * @namespace    TSVG.SVGU.Public
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
  const Root = TSVG.SVGU.Public;


  // -- Local modules


  // -- Local constants


  // -- Local variables


  // -- Private Functions ----------------------------------------------------

  /**
   * Finds the browser type.
   *
   * @function ()
   * @private
   * @param {}              -,
   * @returns {String}      returns the type of browser (modern or old),
   * @throws {Object}       throws an error if the browser doesn't support neither
   *                        the 'Event' constructor nor the 'createEvent' method,
   * @since 0.0.0
   */
  /* eslint-disable no-unused-vars */
  function _getBrowser() {
    let browser
      , event
      ;

    // Check if the browser supports the 'Event' constructor:
    try {
      browser = 'modern';
      event = new Event('event');
    } catch (e) {
      browser = 'old';
      // Check if the browser supports the 'createEvent' method:
      try {
        event = document.createEvent('Event');
      } catch (ev) {
        // This browser doesn't support never the 'Event' constructor, nor
        // the 'createEvent' method:
        browser = 'not supported';
        throw new Error('This type of browser is not supported!');
      }
    }
    return browser;
  }
  /* eslint-enable no-unused-vars */

  /**
   * Creates the SVG Node in the DOM if it doesn't exist.
   *
   * Nota:
   * Mutates this.svgRootNode and this.svgElement.
   *
   * @function (arg1, arg2)
   * @private
   * @param {Object}        the SVG element,
   * @param {String}        the ID of the node parent surrounding the SVG node,
   * @returns {}            -,
   * @since 0.0.0
   */
  /* eslint-disable no-param-reassign, prefer-destructuring */
  function _create(that, id) {
    let svg
      ;

    // First, check that is selector is real and attached to an DOM node:
    if (typeof id !== 'string' || document.getElementById(id) === null) {
      that[0] = null;
      that.svgRoot = null;
      return;
    }

    // Then, check that this SVG node doesn't exist:
    const isSVG = document.getElementById(id).getElementsByTagNameNS(SVG_NS, 'svg')[0];
    if (!isSVG || isSVG.length === 0) {
      // Ok, it doesn't exist, we can create it:
      svg = document.createElementNS(SVG_NS, 'svg');
      svg.setAttributeNS(null, 'version', '1.1');
      svg.setAttributeNS('http://www.w3.org/2000/xmlns/', 'xmlns', SVG_NS);
      svg.setAttributeNS('http://www.w3.org/2000/xmlns/', 'xmlns:xlink', XLINK_NS);
      that[0] = document.getElementById(id).appendChild(svg);
      that.svgRoot = that[0];
    } else {
      // It already exists, do not overwrite it!
      that[0] = isSVG;
      that.svgRoot = that[0];
    }
  }
  /* eslint-enable no-param-reassign, prefer-destructuring */


  // -- Public Static Methods ------------------------------------------------

  extend(Root, {

    /**
     * Finds the browser type.
     *
     * @method ()
     * @public
     * @param {}            -,
     * @returns {String}    returns the type of browser (modern or old),
     * @since 0.0.0
     */
    getBrowser() {
      return _getBrowser();
    },

    /**
     * Creates the SVG Node in the DOM if it doesn't exist.
     *
     * @method (arg1, arg2)
     * @public
     * @param {Object}      the SVG element,
     * @param {String}      the ID of the node parent surrounding the SVG node,
     * @returns {}          -,
     * @since 0.0.0
     */
    create(that, id) {
      return _create(that, id);
    },
  });
}());
/* eslint-enable one-var, semi-style, no-underscore-dangle */
