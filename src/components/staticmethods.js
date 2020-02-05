/** ****************************************************************************
 *
 * Implements the SVG static methods.
 *
 * staticmethods.js is just a literal object that contains a set of functions.
 * it can't be intantiated.
 *
 * Private Functions:
 *  . _transformAttrToObj         converts a SVG transform from string to object,
 *  . _transformAttrToStr         converts a SVG transform from object to string,
 *  . _getArc                     returns an arc path,
 *  . _getLine                    returns a polyline path,
 *  . _getMultipolyline           returns a set of polyline paths,
 *
 *
 * Public Static Methods:
 *  . transformAttrToObj          converts a SVG transform from string to object,
 *  . transformAttrToStr          converts a SVG transform from object to string,
 *  . getArc                      returns an arc path,
 *  . getLine                     draws polygonal lines,
 *  . getMultipolyline            returns polyline paths,
 *
 *
 *
 * @namespace    SVG.src.components.staticmethods
 * @dependencies none
 * @exports      -
 * @author       -
 * @since        0.0.0
 * @version      -
 * ************************************************************************** */
/* eslint-disable one-var, semi-style, no-underscore-dangle */


// -- Vendor modules


// -- Local modules


// -- Local constants


// -- Local variables


// -- Private Functions --------------------------------------------------------

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

/**
 * Returns an arc path.
 *
 * The returned path has the following format:
 *   'Mx0,y0 Arx,ry 0 sweepflag x1,y1 L x1,y1 Arx,ry 0 sweepflag x0,y0 Z'
 *
 * @function (arg1, arg2, arg3, arg4)
 * @private
 * @param {Number}          start angle in radius,
 * @param {Number}          stop angle,
 * @param {Number}          external radius,
 * @param {Number}          internal radius,
 * @returns {String}        returns the SVG path,
 * @since 0.0.0
 */
/* eslint-disable no-param-reassign, operator-assignment, vars-on-top */
function _getArc(startAngle, stopAngle, outerRadius, innerRadius) {
  startAngle = startAngle !== undefined ? startAngle : 0;
  stopAngle = stopAngle !== undefined ? stopAngle : 0;
  outerRadius = outerRadius !== undefined ? outerRadius : 0;
  startAngle = startAngle % (2 * Math.PI);
  if (startAngle > (2 * Math.PI)) { startAngle = startAngle % (2 * Math.PI); }
  if (stopAngle > (2 * Math.PI)) { stopAngle = stopAngle % (2 * Math.PI); }

  let sweepflag = 0;
  if (Math.abs(stopAngle - startAngle) > Math.PI) { sweepflag = 1; }
  const x0 = Math.cos(startAngle);
  const y0 = Math.sin(startAngle);
  const x1 = Math.cos(stopAngle);
  const y1 = Math.sin(stopAngle);

  /* eslint-disable-next-line prefer-template */
  const outerArc = 'M' + (x0 * outerRadius) + ',' + (y0 * outerRadius) + 'A' + outerRadius + ',' + outerRadius + ' ' + 0 + ' ' + sweepflag + ',' + 1 + ' ' + (x1 * outerRadius) + ',' + (y1 * outerRadius);
  let innerArc = '';
  if (innerRadius !== undefined) {
    /* eslint-disable-next-line prefer-template */
    innerArc = 'L' + (x1 * innerRadius) + ',' + (y1 * innerRadius) + 'A' + innerRadius + ',' + innerRadius + ' ' + 0 + ' ' + sweepflag + ',' + 0 + ' ' + (x0 * innerRadius) + ',' + (y0 * innerRadius) + 'Z';
  }
  return outerArc + innerArc;
}
/* eslint-enable no-param-reassign, operator-assignment, vars-on-top */

/**
 * Draws polygonal lines (deprecated, use multipolyline instead).
 *
 * The returned path has the following format:
 *   'Mx0,y0 Lx1,y1 .... Lxn,yn'
 *
 * @function (arg1, arg2)
 * @private
 * @param {Object}          a set of points (x, y) defining the polygonal line,
 * @param {Boolean}         true if it is a polygon (closed path),
 * @returns {String}        returns the SVG path,
 * @since 0.0.0
 */
function _getLine(shape, closed) {
  let path = '';
  shape.forEach((obj) => {
    if (obj.x !== null && obj.y !== null) {
      if (path === '') {
        // path = 'M' + obj.x + ',' + obj.y;
        path = `M${obj.x}, ${obj.y}`;
      } else {
        // path += 'L' + obj.x + ',' + obj.y;
        path += `L${obj.x},${obj.y}`;
      }
    }
  });
  if (closed === true) { path += 'Z'; }
  return path;
}

/**
 * Returns polyline paths.
 *
 * The polylines array looks like:
 *   [ [{x: n, y: n}, {}, {}, ... {}], [{...}], [{...}] ]
 * The returned path has the following format:
 *   'Mx0,y0 Lx1,y1 .... Lxn,yn Mx0,y0 ...'
 *
 * @function (arg1, arg2)
 * @private
 * @param {Object}          a set of array of points (x, y) defining
 *                          the polygonal line,
 * @param {Boolean}         true if it is a polygon (closed path),
 * @returns {String}        returns the SVG path,
 * @since 0.0.0
 */
function _getMultipolyline(shape, closed) {
  let path
    , subpath
    , i
    , j
    ;

  path = '';
  for (i = 0; i < shape.length; i++) {
    subpath = '';
    for (j = 0; j < shape[i].length; j++) {
      if (shape[i][j].x !== null && shape[i][j].y !== null) {
        if (subpath === '') {
          // subpath = 'M' + shape[i][j].x + ',' + shape[i][j].y;
          subpath = `M${shape[i][j].x},${shape[i][j].y}`;
        } else {
          // subpath += 'L' + shape[i][j].x + ',' + shape[i][j].y;
          subpath += `L${shape[i][j].x}, ${shape[i][j].y}`;
        }
      }
    }
    if (closed === true) { subpath += 'z'; }
    path += subpath;
  }
  return path;
}


// -- Public Methods -----------------------------------------------------------

const Static = {

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

  /**
   * Returns an arc path.
   *
   * @method (arg1, arg2, arg3, arg4)
   * @public
   * @param {Number}        start angle in radius,
   * @param {Number}        stop angle,
   * @param {Number}        external radius,
   * @param {Number}        internal radius,
   * @returns {String}      returns the SVG path,
   * @since 0.0.0
   */
  getArc(startAngle, stopAngle, outerRadius, innerRadius) {
    return _getArc(startAngle, stopAngle, outerRadius, innerRadius);
  },

  /**
   * Draws polygonal lines (deprecated, use multipolyline instead).
   *
   * @method (arg1, arg2)
   * @public
   * @param {Object}        a set of points (x, y) defining the polygonal line,
   * @param {Boolean}       true if it is a polygon (closed path),
   * @returns {String}      returns the SVG path,
   * @since 0.0.0
   */
  getLine(shape, closed) {
    return _getLine(shape, closed);
  },

  /**
   * Returns polyline paths.
   *
   * @method (arg1, arg2)
   * @public
   * @param {Object}        a set of array of points (x, y) defining
   *                        the polygonal line,
   * @param {Boolean}       true if it is a polygon (closed path),
   * @returns {String}      returns the SVG path,
   * @since 0.0.0
   */
  getMultipolyline(shape, closed) {
    return _getMultipolyline(shape, closed);
  },
};


// Export
export default Static;

/* eslint-enable one-var, semi-style, no-underscore-dangle */
