/** ****************************************************************************
 *
 * Defines the SVG object.
 *
 * svg.js is built upon the Prototypal Instantiation pattern. It
 * returns an object by calling its constructor. It doesn't use the new
 * keyword.
 *
 * Private Functions:
 *  . none,
 *
 *
 * Constructor:
 *  . SVG                         creates the SVG object,
 *
 *
 * Private Static Methods:
 *  . _setTestMode                returns the internal objects for testing purpose,
 *
 *
 * Public Static Methods:
 *  . noConflict                  returns a reference to this SVG object,
 *  . transformAttrToObj          converts a SVG transform attributes string to an object,
 *  . transformAttrToStr          converts a SVG transform attributes object to a string,
 *  . getArc                      returns an arc path,
 *  . getLine                     draws polygonal lines,
 *  . getMultipolyline            returns polyline paths,
 *
 *
 * Public Methods:
 *  . none yet,
 *
 *
 *
 * @namespace    SVG.src.svg
 * @dependencies none
 * @exports      -
 * @author       -
 * @since        0.0.0
 * @version      -
 * ************************************************************************** */
/* global root */
/* eslint-disable one-var, semi-style, no-underscore-dangle */


// -- Vendor modules


// -- Local modules
import $ from './components/dollar';
import S from './components/svg';
import SM from './components/staticmethods';


// -- Local constants
// Saves the previous value of the library variable, so that it can be
// restored later on, if noConflict is used.
const previousSVG = root.SVG;


// -- Local variables
let methods;


// -- Public -------------------------------------------------------------------

/**
 * Creates the SVG object.
 *
 * @constructor (arg1)
 * @public
 * @param {String}          the selector id or class,
 * @returns {Object}        returns the SVG object,
 * @since 0.0.0
 */
const SVG = function(selector) {
  const obj = Object.create(methods);
  obj.$ = $;
  const { id, _root } = S.create(selector);
  obj.id = id;
  obj._root = _root;
  obj._SVG = SVG;
  return obj;
};


// -- Private Static Methods ---------------------------------------------------

/**
 * Returns the internal objects for testing purpose.
 *
 * @method ()
 * @private
 * @param {}                -,
 * @returns {Object}        returns TV tree,
 * @since 0.0.0
 */
SVG._setTestMode = function() {
  return {};
};


// -- Public Static Methods ----------------------------------------------------

/**
 * Returns a reference to this SVG object.
 *
 * Nota:
 * Running SVG in noConflic mode, returns the SVG variable to its
 * previous owner.
 *
 * @method ()
 * @public
 * @param {}                -,
 * @returns {Object}        returns the SVG object,
 * @since 0.0.0
 */
SVG.noConflict = function() {
  /* eslint-disable-next-line no-param-reassign */
  root.SVG = previousSVG;
  return this;
};

/**
 * Converts a SVG transform attributes string to an object.
 *
 * @method (arg1)
 * @public
 * @param {String}          the SVG transform atributes string,
 * @returns {Object}        returns the transform attributes,
 * @since 0.0.0
 */
SVG.transformAttrToObj = function(transform) {
  return SM.transformAttrToObj(transform);
};

/**
 * Converts a SVG transform attributes string to an object.
 *
 * @method (arg1)
 * @public
 * @param {String}          the SVG transform atributes string,
 * @returns {Object}        returns the transform attributes,
 * @since 0.0.0
 */
SVG.transformAttrToStr = function(tr) {
  return SM.transformAttrToStr(tr);
};

/**
 * Returns an arc path.
 *
 * The returned path has the following format:
 *   'Mx0,y0 Arx,ry 0 sweepflag x1,y1 L x1,y1 Arx,ry 0 sweepflag x0,y0 Z'
 *
 * @method (arg1, arg2, arg3, arg4)
 * @public
 * @param {Number}          start angle in radius,
 * @param {Number}          stop angle,
 * @param {Number}          external radius,
 * @param {Number}          internal radius,
 * @returns {String}        returns the SVG path,
 * @since 0.0.0
 */
SVG.getArc = function(startAngle, stopAngle, outerRadius, innerRadius) {
  return SM.getArc(startAngle, stopAngle, outerRadius, innerRadius);
};

/**
 * Draws polygonal lines (deprecated, use multipolyline instead).
 *
 * The returned path has the following format:
 *   'Mx0,y0 Lx1,y1 .... Lxn,yn'
 *
 * @method (arg1, arg2)
 * @public
 * @param {Object}          a set of points (x, y) defining the polygonal line,
 * @param {Boolean}         true if it is a polygon (closed path),
 * @returns {String}        returns the SVG path,
 * @since 0.0.0
 */
SVG.getLine = function(shape, closed) {
  return SM.getLine(shape, closed);
};

/**
 * Returns polyline paths.
 *
 * The polylines array looks like:
 *   [ [{x: n, y: n}, {}, {}, ... {}], [{...}], [{...}] ]
 * The returned path has the following format:
 *   'Mx0,y0 Lx1,y1 .... Lxn,yn Mx0,y0 ...'
 *
 * @method (arg1, arg2)
 * @public
 * @param {Object}          a set of array of points (x, y) defining
 *                          the polygonal line,
 * @param {Boolean}         true if it is a polygon (closed path),
 * @returns {String}        returns the SVG path,
 * @since 0.0.0
 */
SVG.getMultipolyline = function(shape, closed) {
  return SM.getMultipolyline(shape, closed);
};


// -- Public Methods -----------------------------------------------------------

methods = {
  // none yet!
};


// Attaches a constant to View that provides the version of the lib.
SVG.VERSION = '{{lib:version}}';


// -- Export
export default SVG;

/* eslint-enable one-var, semi-style, no-underscore-dangle */
