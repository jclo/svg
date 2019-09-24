/* ***************************************************************************
 *
 * Creates the SVG node.
 *
 * svg.js is just a literal object that contains a set of functions. It
 * can't be intantiated.
 *
 * Private Functions:
 *  . _create                     creates the SVG node,
 *
 *
 * Public Static Methods:
 *  . create                      creates the SVG node,
 *
 *
 *
 * @namespace    SV.SVG.Public
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
  const Root = SV.SVG.Public;


  // -- Local modules


  // -- Local constants


  // -- Local variables


  // -- Private Methods ------------------------------------------------------

  /**
   * Creates the SVG node.
   *
   * @function (arg1)
   * @private
   * @param {String}      the id or class selector,
   * @returns {String}    returns the unique id of the svg node,
   * @since 0.0.0
   */
  function _create(selector) {
    const sel = typeof selector === 'string' ? selector : 'body'
        , el = document.querySelector(sel)
        , node = el || document.querySelector('body')
        ;

    let _root;
    // create a unique id:
    let id = `i${Math.random().toString(36).substr(2, 7)}`;

    // Check that the svg node doesn't exist:
    const isSVG = node.getElementsByTagNameNS(SVG_NS, 'svg')[0];
    if (!isSVG || isSVG.length === 0) {
      // Ok, it doesn't exist, we can create it:
      const svg = document.createElementNS(SVG_NS, 'svg');
      svg.setAttributeNS(null, 'id', id);
      svg.setAttributeNS(null, 'version', '1.1');
      svg.setAttributeNS('http://www.w3.org/2000/xmlns/', 'xmlns', SVG_NS);
      svg.setAttributeNS('http://www.w3.org/2000/xmlns/', 'xmlns:xlink', XLINK_NS);
      node.appendChild(svg);
      _root = svg;
    } else {
      // It already exists, do not overwrite it!
      id = isSVG.getAttributeNS(null, 'id');
      _root = isSVG;
    }
    return { id, _root };
  }


  // -- Public Static Methods ------------------------------------------------

  _.extend(Root, {

    /**
     * Creates the SVG node.
     *
     * @method (arg1)
     * @public
     * @param {String}      the id or class selector,
     * @returns {String}    returns the unique id of the svg node,
     * @since 0.0.0
     */
    create(selector) {
      return _create(selector);
    },
  });
}());
/* eslint-enable one-var, semi-style, no-underscore-dangle */
