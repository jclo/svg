/* ***************************************************************************
 *
 * Implements the SVG static methods.
 *
 * staticmethods.js is just a literal object that contains a set of functions.
 * It can't be intantiated.
 *
 * Private Functions:
 *  . _transformAttrToObj         converts a SVG transform attr. string to an object,
 *  . _transformAttrToStr         converts a SVG transform attr. string to an object,
 *
 *
 * Public Static Methods:
 *  . addClass                    adds an attribute of class to the SVG element,
 *  . removeClass                 removes an attribute of class from the SVG element,
 *  . transformAttrToObj          converts a SVG transform attr. string to an object,
 *  . transformAttrToStr          converts a SVG transform attr. string to an object,
 *
 *
 *
 * @namespace    TSVG.Methods.Static.Public
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
  const Root = TSVG.Methods.Static.Public;


  // -- Local modules


  // -- Local constants


  // -- Local variables


  // -- Private Functions ----------------------------------------------------

  /**
   * Converts a SVG transform attributes string to an object.
   *
   * @function (arg1)
   * @private
   * @param {String}        the SVG transform atributes string,
   * @returns {Object}      returns the transform attributes,
   * @since 0.0.0
   */
  /* eslint-disable one-var-declaration-per-line */
  function _transformAttrToObj(transform) {
    const tr = typeof transform === 'string' ? transform : ''
      ;

    const regexN = /[+-]?((?:[1-9]\d*|0)(?:\.\d*)?|\.\d+)([eE][+-]?\d+)?/g;
    const regexTr = /translate(.*?)\)/;
    const regexSc = /scale(.*?)\)/;
    const regexRo = /rotate(.*?)\)/;
    const regexSkX = /skewX(.*?)\)/;
    const regexSkY = /skewY(.*?)\)/;
    const regexMtx = /matrix(.*?)\)/;

    const translate = tr.match(regexTr) === null
      ? null
      : (function() {
        let x, y;
        const t = tr.match(regexTr)[0].match(regexN);
        if (!t) {
          x = null;
          y = null;
        } else if (t.length === 1) {
          x = parseFloat(t[0], 10);
          y = x;
        } else {
          x = parseFloat(t[0], 10);
          y = parseFloat(t[1], 10);
        }
        return {
          x,
          y,
        };
      }());

    const scale = tr.match(regexSc) === null
      ? null
      : (function() {
        let x, y;
        const s = tr.match(regexSc)[0].match(regexN);
        if (!s) {
          x = null;
          y = null;
        } else if (s.length === 1) {
          x = parseFloat(s[0], 10);
          y = x;
        } else {
          x = parseFloat(s[0], 10);
          y = parseFloat(s[1], 10);
        }
        return {
          x,
          y,
        };
      }());

    const rotate = tr.match(regexRo) === null
      ? null
      : (function() {
        let a, cx, cy;
        const r = tr.match(regexRo)[0].match(regexN);
        if (!r) {
          a = null;
          cx = null;
          cy = null;
        } else if (r.length === 1) {
          a = parseFloat(r[0], 10);
          cx = null;
          cy = null;
        } else if (r.length === 2) {
          a = parseFloat(r[0], 10);
          cx = parseFloat(r[1], 10);
          cy = cx;
        } else {
          a = parseFloat(r[0], 10);
          cx = parseFloat(r[1], 10);
          cy = parseFloat(r[2], 10);
        }
        return {
          a,
          cx,
          cy,
        };
      }());

    const skewX = tr.match(regexSkX) === null
      ? null
      : (function() {
        const sk = tr.match(regexSkX)[0].match(regexN);
        if (sk) {
          return parseFloat(tr.match(regexSkX)[0].match(regexN)[0], 10);
        }
        return null;
      }());

    const skewY = tr.match(regexSkY) === null
      ? null
      : (function() {
        const sk = tr.match(regexSkY)[0].match(regexN);
        if (sk) {
          return parseFloat(tr.match(regexSkY)[0].match(regexN)[0], 10);
        }
        return null;
      }());

    // Not implemented.
    const matrix = tr.match(regexMtx) === null
      ? null
      : null;

    return {
      translate,
      scale,
      rotate,
      matrix,
      skewX,
      skewY,
    };
  }
  /* eslint-enable one-var-declaration-per-line */

  /**
   * Converts a SVG transform attributes string to an object.
   *
   * @function (arg1)
   * @private
   * @param {String}        the SVG transform atributes string,
   * @returns {Object}      returns the transform attributes,
   * @since 0.0.0
   */
  /* eslint-disable prefer-template */
  function _transformAttrToStr(tr) {
    let s = ''
      ;

    // Translate:
    if (tr.translate && typeof tr.translate.x === 'number') {
      if (typeof tr.translate.y === 'number') {
        s += 'translate(' + tr.translate.x + ', ' + tr.translate.y + ') ';
      } else {
        // if y isn't provided, it is assumed to 0:
        s += 'translate(' + tr.translate.x + ', ' + 0 + ') ';
      }
    }

    // Scale:
    if (tr.scale && typeof tr.scale.x === 'number') {
      if (typeof tr.scale.y === 'number') {
        s += 'scale(' + tr.scale.x + ', ' + tr.scale.y + ') ';
      } else {
        // if y isn't provided, it is assumed to be equal to x:
        s += 'scale(' + tr.scale.x + ', ' + tr.scale.x + ') ';
      }
    }

    // Rotate:
    if (tr.rotate && typeof tr.rotate.a === 'number') {
      if (typeof tr.rotate.cx === 'number' && typeof tr.rotate.cy === 'number') {
        s += 'rotate(' + tr.rotate.a + ', ' + tr.rotate.cx + ', ' + tr.rotate.cy + ') ';
      } else if (typeof tr.rotate.cx === 'number') {
        // if y isn't provided, it is assumed to be equal to x:
        s += 'rotate(' + tr.rotate.a + ', ' + tr.rotate.cx + ', ' + tr.rotate.cx + ') ';
      } else {
        s += 'rotate(' + tr.rotate.a + ') ';
      }
    }

    // SkewX:
    if (typeof tr.skewX === 'number') {
      s += 'skewX(' + tr.skewX + ') ';
    }

    // SkewY:
    if (typeof tr.skewY === 'number') {
      s += 'skewY(' + tr.skewY + ') ';
    }

    // matrix not implemented!
    // -

    // Return a clean string (no leading/trailing blanck spaces):
    return s.replace(/(^\s+|\s+$)/g, '');
  }
  /* eslint-enable prefer-template */


  // -- Public Static Methods ------------------------------------------------

  extend(Root, {

    /**
     * Adds an attribute of class to the SVG element.
     *
     * @method (arg1, arg2)
     * @public
     * @param {Object}      the SVG element,
     * @param {String}      the class name,
     * @returns {}          -,
     * @since 0.0.0
     */
    addClass(target, className) {
      let list = target.getAttributeNS(null, 'class');
      // list = list ? list + ' ' + className : className;
      list = list ? `${list} ${className}` : className;
      target.setAttributeNS(null, 'class', list);
    },

    /**
     * Removes an attribute of class from the SVG element.
     *
     * @method (arg1, arg2)
     * @public
     * @param {Object}      the SVG element,
     * @param {String}      the class name,
     * @returns {}          -,
     * @since 0.0.0
     */
    removeClass(target, className) {
      let list = target.getAttributeNS(null, 'class');

      // Remove the class and the extra leading and trailing white spaces if any:
      list = list.replace(className, '').replace(/(^\s+|\s+$)/g, '');
      target.setAttributeNS(null, 'class', list);
    },

    /**
     * Converts a SVG transform attributes string to an object.
     *
     * @method (arg1)
     * @public
     * @param {String}      the SVG transform atributes string,
     * @returns {Object}    returns the transform attributes,
     * @since 0.0.0
     */
    transformAttrToObj(transform) {
      return _transformAttrToObj(transform);
    },

    /**
     * Converts a SVG transform attributes string to an object.
     *
     * @function (arg1)
     * @public
     * @param {String}      the SVG transform atributes string,
     * @returns {Object}    returns the transform attributes,
     * @since 0.0.0
     */
    transformAttrToStr(tr) {
      return _transformAttrToStr(tr);
    },
  });
}());
/* eslint-enable one-var, semi-style, no-underscore-dangle */
