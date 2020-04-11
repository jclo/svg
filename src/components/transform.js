/** ************************************************************************
 *
 * Implements the Transform SVG static methods.
 *
 * transform.js is just a literal object that contains a set of functions.
 * It can't be intantiated.
 *
 *
 * Private Functions:
 *  . _transformAttrToObj         converts a SVG transform from string to object,
 *  . _transformAttrToStr         converts a SVG transform from object to string,
 *
 *
 * Public Static Methods:
 *  . transformAttrToObj          converts a SVG transform from string to object,
 *  . transformAttrToStr          converts a SVG transform from object to string,
 *
 *
 *
 * @namespace    -
 * @dependencies none
 * @exports      -
 * @author       -
 * @since        0.0.0
 * @version      -
 * ********************************************************************** */
/* global */
/* eslint-disable one-var, semi-style, no-underscore-dangle */


// -- Vendor Modules


// -- Local Modules


// -- Local Constants


// -- Local Variables


// -- Private Functions ----------------------------------------------------

/**
 * Converts a SVG transform attributes string to an object.
 *
 * @function (arg1)
 * @private
 * @param {String}          the SVG transform atributes string,
 * @returns {Object}        returns the transform attributes,
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
 * @param {String}          the SVG transform atributes string,
 * @returns {Object}        returns the transform attributes,
 * @since 0.0.0
 */
function _transformAttrToStr(tr) {
  if (!tr || Object.prototype.toString.call(tr) !== '[object Object]') {
    return null;
  }

  let s = '';

  // Translate:
  if (tr.translate) {
    if (typeof tr.translate.x === 'number' && typeof tr.translate.y === 'number') {
      s += `translate(${tr.translate.x}, ${tr.translate.y}) `;
    } else if (typeof tr.translate.x === 'number') {
      s += `translate(${tr.translate.x}, ${0}) `;
    } else if (typeof tr.translate.y === 'number') {
      s += `translate(${0}, ${tr.translate.y}) `;
    } else {
      s += `translate(${0}, ${0}) `;
    }
  }

  // Scale:
  if (tr.scale) {
    if (typeof tr.scale.x === 'number' && typeof tr.scale.y === 'number') {
      s += `scale(${tr.scale.x}, ${tr.scale.y}) `;
    } else if (typeof tr.scale.x === 'number') {
      s += `scale(${tr.scale.x}, ${0}) `;
    } else if (typeof tr.scale.y === 'number') {
      s += `scale(${0}, ${tr.scale.y}) `;
    } else {
      s += `scale(${0}, ${0}) `;
    }
  }

  // Rotate:
  if (tr.rotate) {
    if (typeof tr.rotate.a === 'number') {
      s += `rotate(${tr.rotate.a}`;
    } else {
      s += `rotate(${0}`;
    }
    if (typeof tr.rotate.cx === 'number' && typeof tr.rotate.cy === 'number') {
      s += `, ${tr.rotate.cx}, ${tr.rotate.cy}) `;
    } else if (typeof tr.rotate.cx === 'number') {
      s += `, ${tr.rotate.cx}) `;
    } else if (typeof tr.rotate.cy === 'number') {
      s += `, 0, ${tr.rotate.cy}) `;
    } else {
      s += ') ';
    }
  }

  // SkewX:
  if (tr.skewX) {
    if (typeof tr.skewX === 'number') {
      s += `skewX(${tr.skewX}) `;
    } else {
      s += `skewX(${0}) `;
    }
  }

  // SkewY:
  if (tr.skewY) {
    if (typeof tr.skewY === 'number') {
      s += `skewY(${tr.skewY}) `;
    } else {
      s += `skewY(${0}) `;
    }
  }

  // matrix not implemented!
  // -

  // Return a clean string (no leading/trailing blanck spaces):
  return s.replace(/(^\s+|\s+$)/g, '');
}


// -- Public Static Methods ------------------------------------------------

const TRANS = {

  /**
   * Converts a SVG transform attributes string to an object.
   *
   * @method (arg1)
   * @public
   * @param {String}        the SVG transform atributes string,
   * @returns {Object}      returns the transform attributes,
   * @since 0.0.0
   */
  transformAttrToObj(transform) {
    return _transformAttrToObj(transform);
  },

  /**
   * Converts a SVG transform attributes string to an object.
   *
   * @method (arg1)
   * @public
   * @param {String}        the SVG transform atributes string,
   * @returns {Object}      returns the transform attributes,
   * @since 0.0.0
   */
  transformAttrToStr(tr) {
    return _transformAttrToStr(tr);
  },
};


// -- Export
export default TRANS;

/* eslint-enable one-var, semi-style, no-underscore-dangle */
