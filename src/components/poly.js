/** ************************************************************************
 *
 * Implements the Poly SVG static methods.
 *
 * poly.js is just a literal object that contains a set of functions.
 * It can't be intantiated.
 *
 *
 * Private Functions:
 *  . _getArc                     returns an arc path,
 *  . _getLine                    returns a polyline path,
 *  . _getMultipolyline           returns a set of polyline paths,
 *
 *
 * Public Static Methods:
 *  . getArc                      returns an arc path,
 *  . getLine                     draws polygonal lines,
 *  . getMultipolyline            returns polyline paths,
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
  if (Object.prototype.toString.call(shape) === '[object Array]') {
    let path = '';
    shape.forEach((obj) => {
      if (obj.x !== null && obj.y !== null) {
        if (path === '') {
          path = `M${obj.x}, ${obj.y}`;
        } else {
          path += `L${obj.x},${obj.y}`;
        }
      }
    });
    if (closed === true) { path += 'Z'; }
    return path;
  }
  return null;
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
  if (Object.prototype.toString.call(shape) !== '[object Array]') {
    return null;
  }

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
          subpath = `M${shape[i][j].x},${shape[i][j].y}`;
        } else {
          subpath += `L${shape[i][j].x}, ${shape[i][j].y}`;
        }
      }
    }
    if (closed === true) { subpath += 'z'; }
    path += subpath;
  }
  return path;
}


// -- Public Static Methods ------------------------------------------------

const Poly = {

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
   * @param {Object}        a set of array of points (x, y) defining the polyline,
   * @param {Boolean}       true if it is a polygon (closed path),
   * @returns {String}      returns the SVG path,
   * @since 0.0.0
   */
  getMultipolyline(shape, closed) {
    return _getMultipolyline(shape, closed);
  },
};


// -- Export
export default Poly;

/* eslint-enable one-var, semi-style, no-underscore-dangle */
