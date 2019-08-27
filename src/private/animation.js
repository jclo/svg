/* ***************************************************************************
 *
 * Performs the animations.
 *
 * animation.js is just a literal object that contains a set of functions. It
 * can't be intantiated.
 *
 * Private Functions:
 *  . _dAnimationRun              performs the animation,
 *  . _rotateAnimationRun         rotates the SVG element,
 *  . _scaleAnimationRun          scales the SVG element,
 *  . _translateAnimationRun      translates the SVG element,
 *  . _textAnimationRun           updates the text value from initial to final value,
 *
 *
 * Public Static Methods:
 *  . easingLinear                computes the values according to the linear progression,
 *  . dAnimationRun               performs the animation,
 *  . rotateAnimationRun          rotates the SVG element,
 *  . scaleAnimationRun           scales the SVG element,
 *  . translateAnimationRun       translates the SVG element,
 *  . textAnimationRun            updates the text value from initial to final value,
 *
 *
 *
 * @namespace    TSVG.Anim.Public
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
  const Root = TSVG.Anim.Public;


  // -- Local modules


  // -- Local constants


  // -- Local variables


  // -- Private Functions ----------------------------------------------------

  /**
   * Performs the animation.
   *
   * object: { type: '', start: '', stop: '', d: '', fn: '' }
   *   type is equal to 'd',
   *   start is equal to the starting point,
   *   stop is equal to the end point,
   *   and d is equal to the duration in ms,
   *   fn is the transfert function that produces the 'd' value.
   *
   * @function (arg1, arg2)
   * @private
   * @param {Object}        the SVG object,
   * @param {Object}        the animation to perform,
   * @returns {}            -,
   * @since 0.0.0
   */
  /* istanbul ignore next */
  function _dAnimationRun(that, anim) {
    const el         = that[0]
        , { easing } = el
        ;

    // Set event:
    el.event = that.createEvent();

    // Set animation params:
    const d = {
      value: 0,
      start: typeof anim.start === 'number' ? anim.start : 0,
      stop: typeof anim.start === 'number' ? anim.stop : 180,
      t: 0,
      duration: typeof anim.d === 'number' ? anim.d : 2000,
      // fn: (val) => {
      // return SVG.draw.arc(0, val, 100, 80);
      // }
      fn: (val) => { SVG.draw.arc(0, val, 100, 80); },
    };
    if (typeof anim.fn === 'function') {
      d.fn = anim.fn;
    }

    // Run:
    el.isAnimationOn = true; // deprecated
    that.setMessage('isAnimationOn', true);

    const timer = setInterval(() => {
      // Compute the next step:
      d.t += el.frequency;
      // Abort if overflow or if no change in the position:
      if (d.t > d.duration || d.stop === d.start) { d.t = d.duration; }
      d.value = easing(d.t, d.start, (d.stop - d.start), d.duration);
      if (d.duration === 0) { d.value = d.start; }

      // Display arc.
      el.setAttributeNS(null, 'd', d.fn(d.value));

      // Is animation over?
      if (d.t === d.duration) {
        clearInterval(timer);
        el.isAnimationOn = false; // deprecated
        that.setMessage('isAnimationOn', false);
        el.dispatchEvent(el.event);
      }
    }, el.frequency);
  }

  /**
   * Rotates the SVG element.
   *
   * object: { type: '', start: '', stop: '', d: '' }
   *   type is equal to 'rotate',
   *   start is equal to the starting point in degrees,
   *   stop is equal to the end point in degrees,
   *   and d is equal to the duration in ms.
   *
   * @function (arg1, arg2)
   * @private
   * @param {Object}        the SVG object,
   * @param {Object}        the rotation to perform,
   * @returns {}            -,
   * @since 0.0.0
   */
  /* istanbul ignore next */
  function _rotateAnimationRun(that, anim) {
    const el         = that[0]
        , { easing } = el
        ;

    // Set event:
    el.event = that.createEvent();

    // Set animation params:
    const arc = {
      a: 0,
      start: typeof anim.start === 'number' ? anim.start : 0,
      stop: typeof anim.stop === 'number' ? anim.stop : 180,
      t: 0,
      duration: typeof anim.d === 'number' ? anim.d : 2000,
    };

    // Run:
    el.isAnimationOn = true; // deprecated.
    that.setMessage('isAnimationOn', true);
    const timer = setInterval(() => {
      // Compute the next step.
      arc.t += el.frequency;
      // Abort if overflow or if no change in the position.
      if (arc.t > arc.duration || arc.stop === arc.start) { arc.t = arc.duration; }
      arc.a = easing(arc.t, arc.start, (arc.stop - arc.start), arc.duration);

      // Retrieve transform attributes, set new rotation value and update.
      const transform = SVG.transformAttrToObj(el.getAttribute('transform'));
      transform.rotate.a = arc.a;
      el.setAttributeNS(null, 'transform', SVG.transformAttrToStr(transform));

      if (arc.t === arc.duration) {
        clearInterval(timer);
        el.isAnimationOn = false; // deprecated.
        that.setMessage('isAnimationOn', false);
        el.dispatchEvent(el.event);
      }
    }, el.frequency);
  }

  /**
   * Scales the SVG element.
   *
   * object: { type: '', x0: '', y0: '', x1: '', y1: '', d: '' }
   *   type is equal to scale,
   *   x0 & y0 are the initial values,
   *   x1 & y1 are the final values,
   *   and d is equal to the duration in ms.
   *   scaleAnimationRun: function(that, anim) {
   *     //
   *   },
   *
   * @function (arg1, arg2)
   * @private
   * @param {Object}        the SVG object,
   * @param {Object}        the scaling to perform,
   * @returns {}            -,
   * @since 0.0.0
   */
  /* istanbul ignore next */
  function _scaleAnimationRun(that, anim) {
    const el         = that[0]
        , { easing } = el
        ;

    const scale = {
      x0: typeof anim.x0 === 'number' ? anim.x0 : 0,
      y0: typeof anim.y0 === 'number' ? anim.y0 : 0,
      x1: typeof anim.x1 === 'number' ? anim.x1 : 1,
      y1: typeof anim.y1 === 'number' ? anim.y1 : 1,
      x: 0,
      y: 0,
      t: 0,
      duration: typeof anim.d === 'number' ? anim.d : 2000,
    };

    // Run:
    const timer = setInterval(() => {
      // Compute the next step:
      scale.t += el.frequency;
      if (scale.t > scale.duration) { scale.t = scale.duration; }
      scale.x = easing(scale.t, scale.x0, (scale.x1 - scale.x0), scale.duration);
      scale.y = easing(scale.t, scale.y0, (scale.y1 - scale.y0), scale.duration);

      // Retrieve transform attributes, set new scale value and update.
      const transform = SVG.transformAttrToObj(el.getAttribute('transform'));
      transform.scale.x = scale.x;
      transform.scale.y = scale.y;
      el.setAttributeNS(null, 'transform', SVG.transformAttrToStr(transform));

      if (scale.t === scale.duration) {
        clearInterval(timer);
      }
    }, el.frequency);
  }

  /**
   * Translates the SVG element.
   *
   * object = { type: '', x: '', y: '', d: '' }
   *  type is equal to 'translate',
   *  x & y are the destination values,
   *  and d is equal to the duration in ms.
   *
   * @function (arg1, arg2)
   * @private
   * @param {Object}        the SVG object,
   * @param {Object}        the translation to perform,
   * @returns {}            -,
   * @since 0.0.0
   */
  /* eslint-disable max-len, no-restricted-properties */
  /* istanbul ignore next */
  function _translateAnimationRun(that, anim) {
    const el         = that[0]
        , { easing } = el

      // , transform
      // , translate
      // , vector
      // , timer
      ;

    // Set event:
    el.event = that.createEvent();

    // Retrieve transform attributes to get original translate position.
    const transform = SVG.transformAttrToObj(that[0].getAttribute('transform'));
    const translate = {
      x0: transform.translate.x,
      y0: transform.translate.y,
    };

    const vector = {
      x: 0,
      y: 0,
      length: Math.sqrt(Math.pow((anim.x - translate.x0), 2) + Math.pow((anim.y - translate.y0), 2)),
      arc: Math.atan((anim.y - translate.y0) / (anim.x - translate.x0)),
      t: 0,
      duration: 2000,
      // Be careful, the arc value is infinite if the selected element
      // is the same.
    };
    if (anim.x - translate.x0 < 0) { vector.arc += -Math.PI; }
    if (vector.length === 0) { vector.arc = 0; }
    if (typeof anim.d === 'number') { vector.duration = anim.d; }

    // Run:
    // Another element is selected. Start moving tooltip.
    el.isAnimationOn = true; // deprecated.
    that.setMessage('isAnimationOn', true);

    const timer = setInterval(() => {
      // Compute the next step:
      vector.t += el.frequency;
      if (vector.t > vector.duration) { vector.t = vector.duration; }
      vector.x = (easing(vector.t, 0, vector.length, vector.duration) * Math.cos(vector.arc)) + translate.x0;
      vector.y = (easing(vector.t, 0, vector.length, vector.duration) * Math.sin(vector.arc)) + translate.y0;

      // Retrieve the transform attributes, set the new position value and update:
      const trform = SVG.transformAttrToObj(el.getAttribute('transform'));
      trform.translate.x = vector.x;
      trform.translate.y = vector.y;
      el.setAttributeNS(null, 'transform', SVG.transformAttrToStr(trform));

      // Stop the timer if 'isAnimationOn' is turned false
      // or if destination point reached.
      if (el.isAnimationOn === false || that.getMessage('isAnimationOn') === false) {
        clearInterval(timer);
      } else if (vector.t === vector.duration) {
        // Destination point is reached. Stop the animation:
        clearInterval(timer);
        el.isAnimationOn = false; // deprecated.
        that.setMessage('isAnimationOn', false);
        el.dispatchEvent(el.event);
      }
    }, el.frequency);
  }
  /* eslint-enable max-len, no-restricted-properties */

  /**
   * Updates dynamically the text value from the initial to the final value.
   *
   * anim = { type: '', start: '', stop: '', d: '' }
   * @function (arg1, arg2)
   * @private
   * @param {Object}        the SVG object,
   * @param {Object}        the animation parameters,
   * @returns {}            -,
   * @since 0.0.0
   */
  function _textAnimationRun(that, anim) {
    const el         = that[0]
        , { easing } = el
        , digit      = {
          value: 0,
          start: typeof anim.start === 'number' ? anim.start : 0,
          stop: typeof anim.stop === 'number' ? anim.stop : 0,
          t: 0,
          duration: typeof anim.d === 'number' ? anim.d : 2000,
        }
        ;

    // Run:
    const timer = setInterval(() => {
      // Compute the next step:
      digit.t += el.frequency;
      // Abort if overflow or if no change in the position.
      if (digit.t > digit.duration || digit.stop === digit.start) {
        digit.t = digit.duration;
      }
      digit.value = easing(digit.t, digit.start, (digit.stop - digit.start), digit.duration);
      if (digit.duration === 0) {
        digit.value = digit.start;
      }

      // Display the new digit value:
      el.textContent = digit.value.toFixed(0);

      // is animation over?
      if (digit.t === digit.duration) {
        clearInterval(timer);
      }
    }, el.frequency);
  }


  // -- Public Static Methods ------------------------------------------------

  extend(Root, {

    /**
     * Computes the intermediate values according to a linear progression.
     *
     * @method (arg1, arg2, arg3, arg4)
     * @public
     * @param {Number}      the current time,
     * @param {Number}      the beginning value,
     * @param {Number}      the change in value,
     * @param {Number}      the duration,
     * @returns {Number}    returns the computed value,
     */
    easingLinear(t, b, c, d) {
      return ((c * t) / d) + b;
    },

    /**
     * Performs the animation.
     *
     * @method (arg1, arg2)
     * @public
     * @param {Object}      the SVG object,
     * @param {Object}      the animation to perform,
     * @returns {}          -,
     * @since 0.0.0
     */
    /* istanbul ignore next */
    dAnimationRun(that, anim) {
      _dAnimationRun(that, anim);
    },

    /**
     * Rotates the SVG element.
     *
     * @method (arg1, arg2)
     * @public
     * @param {Object}      the SVG object,
     * @param {Object}      the rotation to perform,
     * @returns {}          -,
     * @since 0.0.0
     */
    /* istanbul ignore next */
    rotateAnimationRun(that, anim) {
      _rotateAnimationRun(that, anim);
    },

    /**
     * Scales the SVG element;
     *
     * @method (arg1, arg2)
     * @public
     * @param {Object}      the SVG object,
     * @param {Object}      the scaling to perform,
     * @returns {}          -,
     * @since 0.0.0
     */
    /* istanbul ignore next */
    scaleAnimationRun(that, anim) {
      _scaleAnimationRun(that, anim);
    },

    /**
     * Translates the SVG Element.
     *
     * @method (arg1, arg2)
     * @public
     * @param {Object}      the SVG object,
     * @param {Object}      the translation to perform,
     * @returns {}          -,
     * @since 0.0.0
     */
    /* istanbul ignore next */
    translateAnimationRun(that, anim) {
      _translateAnimationRun(that, anim);
    },

    /**
     * Updates dynamically the text value from the initial to the final value.
     *
     * @method (arg1, arg2)
     * @public
     * @param {Object}      the SVG object,
     * @param {Object}      the animation parameters,
     * @returns {}          -,
     * @since 0.0.0
     */
    textAnimationRun(that, anim) {
      _textAnimationRun(that, anim);
    },
  });
}());
/* eslint-enable one-var, semi-style, no-underscore-dangle */
