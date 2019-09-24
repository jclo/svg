/* ***************************************************************************
 *
 * Performs the animations.
 *
 * animation.js is just a literal object that contains a set of functions. It
 * can't be intantiated.
 *
 * Private Functions:
 *  . _rotateRun                  rotates the SVG element,
 *  . _scaleRun                   scales the SVG element,
 *  . _translateRun               translates the SVG element,
 *  . _textRun                    updates the text value from initial to final value,
 *
 *
 * Public Static Methods:
 *  . rotateRun                   rotates the SVG element,
 *  . scaleRun                    scales the SVG element,
 *  . translateRun                translates the SVG element,
 *  . textRun                     updates the text value from initial to final value,
 *
 *
 *
 * @namespace    SV.Anim.Public
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
  const Root = SV.Anim.Public;


  // -- Local modules


  // -- Local constants


  // -- Local variables


  // -- Private Functions ----------------------------------------------------

  /**
   * Rotates the SVG element.
   *
   * Nota:
   * The animation object must contain the following properties:
   * {
   *   start: the value (if omitted, start from current position),
   *   stop: the final value,
   *   duration: the elapsed time,
   *   frequency: the refresh frequency (in pulse per second),
   *   easing: the easing formula,
   * }
   *
   * @function (arg1, arg2)
   * @private
   * @param {Object}        the SVG element,
   * @param {Object}        the rotation to perform,
   * @returns {}            -,
   * @since 0.0.0
   */
  function _rotateRun(el, anim) {
    const r = {
      a: 0,
      t: 0,
      start: _.isNumber(anim.start) ? anim.start : null,
      stop: _.isNumber(anim.stop) ? anim.stop : 180,
      period: _.isNumber(anim.frequency) ? 1000 / anim.frequency : 10,
      easing: _.isFunction(anim.easing) ? anim.easing : _.elinear,
      duration: _.isNumber(anim.duration) ? anim.duration : 2000,
    };

    // If anim.start is undefined, we start from the current value:
    if (_.isNull(r.start)) {
      const transform = SVG.transformAttrToObj(el.getAttribute('transform'));
      r.start = _.isObject(transform.scale) && _.isNumber(transform.scale.a)
        ? transform.scale.a
        : 180;
    }

    const timer = setInterval(() => {
      // Compute the next step:
      r.t += r.period;
      // Abort if overflow or if no change in the position.
      if (r.t > r.duration || r.stop === r.start) { r.t = r.duration; }
      r.a = r.easing(r.t, r.start, (r.stop - r.start), r.duration);

      // Retrieve transform attributes, set new rotation value and update.
      const transform = SVG.transformAttrToObj(el.getAttribute('transform'));
      transform.rotate.a = r.a;
      el.setAttributeNS(null, 'transform', SVG.transformAttrToStr(transform));

      if (r.t === r.duration) {
        clearInterval(timer);
      }
    }, r.period);
  }

  /**
   * Scales the SVG element.
   *
   * Nota:
   * The animation object must contain the following properties:
   * {
   *   start: the initial x, y values (if omitted, start from current position),
   *   stop: the final x, y values,
   *   duration: the elapsed time,
   *   frequency: the refresh frequency (in pulse per second),
   *   easing: the easing formula,
   * }
   *
   * @function (arg1, arg2)
   * @private
   * @param {Object}        the SVG object,
   * @param {Object}        the scaling to perform,
   * @returns {}            -,
   * @since 0.0.0
   */
  function _scaleRun(el, anim) {
    const s = {
      x: 0,
      y: 0,
      t: 0,
      x0: _.isObject(anim.start) && _.isNumber(anim.start.x) ? anim.start.x : null,
      y0: _.isObject(anim.start) && _.isNumber(anim.start.y) ? anim.start.y : null,
      x1: _.isObject(anim.stop) && _.isNumber(anim.stop.x) ? anim.stop.x : 1,
      y1: _.isObject(anim.stop) && _.isNumber(anim.stop.y) ? anim.stop.y : 1,
      period: _.isNumber(anim.frequency) ? 1000 / anim.frequency : 10,
      easing: _.isFunction(anim.easing) ? anim.easing : _.elinear,
      duration: _.isNumber(anim.duration) ? anim.duration : 2000,
    };

    // if anim.start.x or anim.start.y is undefined, the scaling operation
    // starts from the current value:
    const transform = SVG.transformAttrToObj(el.getAttribute('transform'));
    if (_.isNull(s.x0) || _.isNull(s.y0)) {
      s.x0 = _.isObject(transform.scale) && _.isNumber(transform.scale.x)
        ? transform.scale.x
        : 0;
      s.y0 = _.isObject(transform.scale) && _.isNumber(transform.scale.y)
        ? transform.scale.y
        : 0;
    }

    // Run:
    const timer = setInterval(() => {
      // Compute the next step:
      s.t += s.period;
      if (s.t > s.duration) { s.t = s.duration; }
      s.x = s.easing(s.t, s.x0, (s.x1 - s.x0), s.duration);
      s.y = s.easing(s.t, s.y0, (s.y1 - s.y0), s.duration);

      // Retrieve transform attributes, set new scale value and update.
      const tr = SVG.transformAttrToObj(el.getAttribute('transform'));
      tr.scale.x = s.x;
      tr.scale.y = s.y;
      el.setAttributeNS(null, 'transform', SVG.transformAttrToStr(tr));

      if (s.t === s.duration) {
        clearInterval(timer);
      }
    }, s.period);
  }

  /**
   * Translates the SVG element.
   *
   * Nota:
   * The animation object must contain the following properties:
   * {
   *   start: the initial x, y values (if omitted, start from current position),
   *   stop: the final x, y values,
   *   duration: the elapsed time,
   *   frequency: the refresh frequency (in pulse per second),
   *   easing: the easing formula,
   * }
   *
   * @function (arg1, arg2)
   * @private
   * @param {Object}        the SVG element,
   * @param {Object}        the translation to perform,
   * @returns {}            -,
   * @since 0.0.0
   */
  function _translateRun(el, anim) {
    const v = {
      x: 0,
      y: 0,
      t: 0,
      length: null,
      arc: null,
      period: _.isNumber(anim.frequency) ? 1000 / anim.frequency : 10,
      easing: _.isFunction(anim.easing) ? anim.easing : _.elinear,
      duration: _.isNumber(anim.duration) ? anim.duration : 2000,
    };

    let x0
      , y0
      ;

    // Translate starts from the passed-in value or the current position:
    if (anim.start && _.isNumber(anim.start.x) && _.isNumber(anim.start.y)) {
      x0 = anim.start.x;
      y0 = anim.start.y;
    } else {
      const transform = SVG.transformAttrToObj(el.getAttribute('transform'));
      x0 = _.isObject(transform.translate) && _.isNumber(transform.translate.x)
        ? transform.translate.x
        : 0;
      y0 = _.isObject(transform.translate) && _.isNumber(transform.translate.y)
        ? transform.translate.x
        : 0;
    }

    /* eslint-disable-next-line no-restricted-properties */
    v.length = Math.sqrt(Math.pow((anim.stop.x - x0), 2) + Math.pow((anim.stop.y - y0), 2));
    v.arc = Math.atan((anim.stop.y - y0) / (anim.stop.x - x0));
    if (anim.stop.x - x0 < 0) v.arc += -Math.PI;
    if (v.length === 0) v.arc = 0;

    const timer = setInterval(() => {
      // Compute the next step:
      v.t += v.period;
      if (v.t > v.duration) v.t = v.duration;
      v.x = (v.easing(v.t, 0, v.length, v.duration) * Math.cos(v.arc)) + x0;
      v.y = (v.easing(v.t, 0, v.length, v.duration) * Math.sin(v.arc)) + y0;

      // Retrieve the transform attributes, set the new position value and update:
      const trform = SVG.transformAttrToObj(el.getAttribute('transform'));
      trform.translate.x = v.x;
      trform.translate.y = v.y;
      el.setAttributeNS(null, 'transform', SVG.transformAttrToStr(trform));

      // Stop the timer if destination point reached.
      if (v.t === v.duration) {
        clearInterval(timer);
      }
    }, v.period);
  }

  /**
   * Updates dynamically the text value from the initial to the final value.
   *
   * Nota:
   * The animation object must contain the following properties:
   * {
   *   start: the initial value,
   *   stop: the final value,
   *   duration: the elapsed time,
   *   frequency: the refresh frequency (in pulse per second),
   *   easing: the easing formula,
   * }
   *
   * @function (arg1, arg2)
   * @private
   * @param {Object}        the SVG object,
   * @param {Object}        the animation parameters,
   * @returns {}            -,
   * @since 0.0.0
   */
  function _textRun(el, anim) {
    const d = {
      period: _.isNumber(anim.frequency) ? 1000 / anim.frequency : 10,
      easing: _.isFunction(anim.easing) ? anim.easing : _.elinear,
      value: 0,
      start: _.isNumber(anim.start) ? anim.start : 0,
      stop: _.isNumber(anim.stop) ? anim.stop : 0,
      t: 0,
      duration: _.isNumber(anim.duration) ? anim.duration : 2000,
    };

    // Run:
    const timer = setInterval(() => {
      // Compute the next step:
      d.t += d.period;
      // Abort if overflow or if no change in the position.
      if (d.t > d.duration || d.stop === d.start) {
        d.t = d.duration;
      }
      d.value = d.easing(d.t, d.start, (d.stop - d.start), d.duration);
      if (d.duration === 0) {
        d.value = d.start;
      }

      // Display the new digit value:
      /* eslint-disable-next-line no-param-reassign */
      el.textContent = d.value.toFixed(0);

      // is animation over?
      if (d.t === d.duration) {
        clearInterval(timer);
      }
    }, d.period);
  }


  // -- Public Static Methods ------------------------------------------------

  _.extend(Root, {

    /**
     * Rotates the SVG element.
     *
     * @method (arg1, arg2)
     * @public
     * @param {Object}      the SVG element,
     * @param {Object}      the rotation to perform,
     * @returns {}          -,
     * @since 0.0.0
     */
    rotateRun(el, anim) {
      _rotateRun(el, anim);
    },

    /**
     * Scales the SVG element;
     *
     * @method (arg1, arg2)
     * @public
     * @param {Object}      the SVG element,
     * @param {Object}      the scaling to perform,
     * @returns {}          -,
     * @since 0.0.0
     */
    scaleRun(el, anim) {
      _scaleRun(el, anim);
    },

    /**
     * Translates the SVG Element.
     *
     * @method (arg1, arg2)
     * @public
     * @param {Object}      the SVG element,
     * @param {Object}      the translation to perform,
     * @returns {}          -,
     * @since 0.0.0
     */
    translateRun(el, anim) {
      _translateRun(el, anim);
    },

    /**
     * Updates dynamically the text value from the initial to the final value.
     *
     * @method (arg1, arg2)
     * @public
     * @param {Object}      the SVG element,
     * @param {Object}      the animation parameters,
     * @returns {}          -,
     * @since 0.0.0
     */
    textRun(el, anim) {
      _textRun(el, anim);
    },
  });
}());
/* eslint-enable one-var, semi-style, no-underscore-dangle */
