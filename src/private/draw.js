/* ***************************************************************************
 *
 * Implements SVG.draw methods.
 *
 * draw.js is just a literal object that contains a set of functions. It
 * can't be intantiated.
 *
 * Private Functions:
 *  . _arc                        draws an arc,
 *  . _line                       draws polygonal lines (deprecated),
 *  . _multipolyline              draws a set of polylines,
 *
 *
 * Public Static Methods:
 *  . arc                         draws an arc,
 *  . line                        draws polygonal lines (deprecated),
 *  . multipolyline               draws a set of polylines,
 *
 *
 *
 * @namespace    TSVG.Methods.Static.Draw.Public
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
  const Root = TSVG.Methods.Static.Draw.Public;


  // -- Local modules


  // -- Local constants


  // -- Local variables


  // -- Private Functions ----------------------------------------------------

  /**
   * Draws an arc.
   *
   * The returned path has the following format:
   *   'Mx0,y0 Arx,ry 0 sweepflag x1,y1 L x1,y1 Arx,ry 0 sweepflag x0,y0 Z'
   *
   * @function (arg1, arg2, arg3, arg4)
   * @private
   * @param {Number}        start angle in radius,
   * @param {Number}        stop angle,
   * @param {Number}        external radius,
   * @param {Number}        internal radius,
   * @returns {String}      returns the SVG path,
   * @since 0.0.0
   */
  /* eslint-disable no-param-reassign, operator-assignment, vars-on-top */
  /* istanbul ignore next */
  function _arc(startAngle, stopAngle, outerRadius, innerRadius) {
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
   * @param {Object}        a set of points (x, y) defining the polygonal line,
   * @param {Boolean}       true if it is a polygon (closed path),
   * @returns {String}      returns the SVG path,
   * @since 0.0.0
   */
  /* istanbul ignore next */
  function _line(shape, closed) {
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
   * Draws a set of polylines.
   *
   * The polylines array looks like:
   *   [ [{x: n, y: n}, {}, {}, ... {}], [{...}], [{...}] ]
   * The returned path has the following format:
   *   'Mx0,y0 Lx1,y1 .... Lxn,yn Mx0,y0 ...'
   *
   * @method (arg1, arg2)
   * @public
   * @param {Object}        a set of array of points (x, y) defining
   *                        the polygonal line,
   * @param {Boolean}       true if it is a polygon (closed path),
   * @returns {String}      returns the SVG path,
   * @since 0.0.0
   */
  /* istanbul ignore next */
  function _multipolyline(shape, closed) {
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


  // -- Public Static Methods ------------------------------------------------

  extend(Root, {

    /**
     * Draws an arc.
     *
     * @method (arg1, arg2, arg3, arg4)
     * @public
     * @param {Number}      start angle in radius,
     * @param {Number}      Stop angle,
     * @param {Number}      external radius,
     * @param {Number}      internal radius,
     * @returns {String}    returns the SVG path,
     * @since 0.0.0
     */
    /* istanbul ignore next */
    arc(startAngle, stopAngle, outerRadius, innerRadius) {
      return _arc(startAngle, stopAngle, outerRadius, innerRadius);
    },

    /**
     * Draws polygonal lines (deprecated, use multipolyline instead).
     *
     * @method (arg1, arg2)
     * @public
     * @param {Object}      a set of points (x, y) defining the polygonal line,
     * @param {Boolean}     true if it is a polygon (closed path),
     * @returns {String}    returns the SVG path,
     * @since 0.0.0
     */
    /* istanbul ignore next */
    line(shape, closed) {
      return _line(shape, closed);
    },

    /**
     * Draws a set of polylines.
     *
     * @function (arg1, arg2)
     * @public
     * @param {Object}      a set of points (x, y) defining the polygonal line,
     * @param {Boolean}     true if it is a polygon (closed path),
     * @returns {String}    returns the SVG path,
     * @since 0.0.0
     */
    /* istanbul ignore next */
    multipolyline(shape, closed) {
      return _multipolyline(shape, closed);
    },
  });
}());
/* eslint-enable one-var, semi-style, no-underscore-dangle */
