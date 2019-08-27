/* eslint-disable max-len */
/* ***************************************************************************
 *
 * Defines the SVG library.
 *
 * prototypal.js is built upon the Prototypal Instantiation pattern. It
 * returns an object by calling its constructor. It doesn't use the new
 * keyword.
 *
 * Private Functions:
 *  . none,
 *
 *
 * Constructor:
 *  . SVG                         creates and returns the SVG object,
 *
 *
 * Public Static Methods:
 *  . noConflict                  returns the JSVG variable to its previous owner,
 *  . addClass                    adds an attribute of class to the SVG element,
 *  . removeClass                 removes an attribute of class to the SVG element,
 *  . transformAttrToObj          converts a SVG transform attributes string to an object,
 *  . transformAttrToStr          converts a SVG transform attributes string to an object,
 *  . draw.arc                    draws an arc,
 *  . draw.line                   draws polygonal lines (deprecated),
 *  . draw.multipolyline          draws a set of polylines,
 *
 *
 * * Public Chaining methods:
 *  . select                      selects an SVG element,
 *  . parent                      moves to parent SVG element,
 *  . firstParent                 moves to the first parent,
 *  . append                      appends an SVG element and selects it,
 *  . appendBefore                appends a new SVG el. before the reference SVG el.,
 *  . appendAfter                 appends a new SVG el. after the reference SVG el.,
 *  . appendHTML                  appends a foreignObject to svg and selects it,
 *  . replace                     replaces the current SVG element,
 *  . remove                      removes the given SVG element,
 *  . removeAllChilds             removes all the childs of the selected element,
 *  . animate                     sets animation transition parameters,
 *  . listen                      attaches an event listener to the SVG element,
 *  . listenOnce                  attaches a fired once event listener to the SVG element,
 *  . unlisten                    removes an event listener to the SVG element,
 *  . alink                       adds a link attribute to the SVG selected element,
 *  . attr                        adds attributes to the selected SVG element,
 *  . rmattr                      removes the given attribute from the selected SVG element,
 *  . text                        adds text to the selected SVG element,
 *  . addClass                    adds a class value to the selected SVG element,
 *  . removeClass                 removes a class value to the selected SVG element,
 *  . toggleClass                 toggles a class value to the selected SVG element,
 *
 *
 * Public Non Chaining Methods:
 *  . createEvent                 returns 'animationOver' event,
 *  . query                       returns the first matching element or null,
 *  . getElement                  returns the selected SVG element,
 *  . getAttribute                returns the attribute value,
 *  . getComputedStyle            returns the style applied to this element,
 *  . getPropertyValue            returns the value of the specified property,
 *  . getSize                     returns the width and height of this element,
 *  . getAnimationStatus          returns the animation status w.r.t. this SVG element (deprecated),
 *  . stopAnimation               sets isAnimationOn to false (deprecated),
 *  . getAttachedEvent            returns the non native event attached to this SVG element,
 *  . trigger                     triggers the event attached to this SVG element,
 *  . setMessage                  attachs or set a message to this SVG element,
 *  . getMessage                  returns the message value attached to this SVG element,
 *
 *
 *
 * @namespace    SVG
 * @dependencies none
 * @exports      -
 * @author       -
 * @since        0.0.0
 * @version      -
 * ************************************************************************ */
/* eslint-enable max-len */
/* eslint-disable one-var, semi-style */

'use strict';

(function() {
  // IIFE

  // -- Module path


  // -- Local modules
  const StaticM = TSVG.Methods.Static.Public
      , Draw    = TSVG.Methods.Static.Draw.Public
      , Util    = TSVG.SVGU.Public
      , Attr    = TSVG.Methods.Attr.Public
      , Text    = TSVG.Methods.Text.Public
      , Anim    = TSVG.Anim.Public
      , Event   = TSVG.Event.Public
      ;


  // -- Local constants
  // Saves the previous value of the library variable, so that it can be
  // restored later on, if noConflict is used.
  const previousSVG = root.SVG
      ;


  // -- Local variables
  let methods
    ;


  // -- Public ---------------------------------------------------------------

  /**
   * Returns the SVG object.
   * (Prototypal Instantiation Pattern)
   *
   * @constructor (arg1)
   * @public
   * @param {String}        the selector id,
   * @returns {Object}      returns the SVG object,
   * @since 0.0.0
   */
  /* eslint-disable no-multi-spaces */
  SVG = function(selector) {
    const obj = Object.create(methods);
    obj.browser = Util.getBrowser();   // Find type of browser (support Event or not),
    obj.id = null;                     // the id of the node surrounding the SVG node,
    obj[0] = null;                     // the selected svg element,
    obj.svgRoot = null;                // the svg root node,
    if (selector) {
      obj.id = selector.slice(1);
      Util.create(obj, obj.id);
    }

    return obj;
  };
  /* eslint-enable no-multi-spaces */

  // Attaches a constant to ESLib that provides the version of the lib.
  SVG.VERSION = '{{lib:version}}';


  // -- Public Static Methods ------------------------------------------------

  /**
   * Returns a reference to this SVG object.
   *
   * Nota:
   * Running SVG in noConflic mode, returns the SVG variable to its
   _ previous owner.
   *
   * @method ()
   * @public
   * @param {}              -,
   * @returns {String}      returns the SVG object,
   * @since 0.0.0
   */
  /* istanbul ignore next */
  SVG.noConflict = function() {
    /* eslint-disable-next-line no-param-reassign */
    root.SVG = previousSVG;
    return this;
  };

  /**
   * Adds an attribute of class to the SVG element.
   *
   * @method (arg1, arg2)
   * @public
   * @param {Object}        the SVG element,
   * @param {String}        the class name,
   * @returns {}            -,
   * @since 0.0.0
   */
  SVG.addClass = function(target, className) {
    StaticM.addClass(target, className);
  };

  /**
   * Removes an attribute of class to the SVG element.
   *
   * @method (arg1, arg2)
   * @public
   * @param {Object}        the SVG element,
   * @param {String}        the class name,
   * @returns {}            -,
   * @since 0.0.0
   */
  SVG.removeClass = function(target, className) {
    StaticM.removeClass(target, className);
  };

  /**
   * Converts a SVG transform attributes string to an object.
   *
   * @method (arg1)
   * @public
   * @param {String}        the SVG transform atributes string,
   * @returns {Object}      returns the transform attributes,
   * @since 0.0.0
   */
  SVG.transformAttrToObj = function(transform) {
    return StaticM.transformAttrToObj(transform);
  };

  /**
   * Converts a SVG transform attributes string to an object.
   *
   * @method (arg1)
   * @public
   * @param {String}        the SVG transform atributes string,
   * @returns {Object}      returns the transform attributes,
   * @since 0.0.0
   */
  SVG.transformAttrToStr = function(tr) {
    return StaticM.transformAttrToStr(tr);
  };

  SVG.draw = {

    /**
     * Draws an arc.
     *
     * The returned path has the following format:
     *   'Mx0,y0 Arx,ry 0 sweepflag x1,y1 L x1,y1 Arx,ry 0 sweepflag x0,y0 Z'
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
      return Draw.arc(startAngle, stopAngle, outerRadius, innerRadius);
    },

    /**
     * Draws polygonal lines (deprecated, use multipolyline instead).
     *
     * The returned path has the following format:
     *   'Mx0,y0 Lx1,y1 .... Lxn,yn'
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
      return Draw.line(shape, closed);
    },

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
     * @param {Object}      a set of array of points (x, y) defining
     *                      the polygonal line,
     * @param {Boolean}     true if it is a polygon (closed path),
     * @returns {String}    returns the SVG path,
     * @since 0.0.0
     */
    /* istanbul ignore next */
    multipolyline(shape, closed) {
      return Draw.multipolyline(shape, closed);
    },
  };


  // -- Public Methods -------------------------------------------------------

  methods = {

    /**
     * Selects the given SVG Element,
     *
     * @method (arg1, arg2)
     * @public
     * @param {Object}      the SVG element to select,
     * @param {Boolean}     'true' if selected element should become the 'root',
     * @returns {Object}    returns this,
     * @since 0.0.0
     */
    select(element) {
      this[0] = this[0].querySelector(element);
      return this;
    },

    /**
     * Returns to parent node.
     *
     * @method ()
     * @public
     * @returns {Object}    returns this,
     * @since 0.0.0
     */
    parent() {
      if (this[0].parentNode) {
        this[0] = this[0].parentNode;
        return this;
      }
      /* istanbul ignore next */
      throw new Error('This SVG element has no parent!');
    },

    /**
     * Returns to the first parent node.
     *
     * @method ()
     * @public
     * @returns {Object}    returns this,
     * @since 0.0.0
     */
    /* istanbul ignore next */
    firstParent() {
      this[0] = this.svgRoot;
      return this;
    },

    /**
     * Appends a new SVG element and selects it.
     *
     * @method (arg1)
     * @public
     * @param {Object}      the SVG element to add,
     * @returns {Object}    returns this,
     * @since 0.0.0
     */
    append(svgElement) {
      const el = document.createElementNS(SVG_NS, svgElement);
      this[0] = this[0].appendChild(el);
      return this;
    },

    /**
     * Appends a new SVG element before the passed-in SVG element.
     *
     * @method (arg1, arg2)
     * @public
     * @param {Object}      the SVG element to add,
     * @param {Object}      the reference SVG element,
     * @returns {Object}    returns this,
     * @since 0.0.0
     */
    appendBefore(newSvgElement, svgElement) {
      const newChild = document.createElementNS(SVG_NS, newSvgElement)
          , child = this[0].querySelector(svgElement)
          ;

      this[0].insertBefore(newChild, child);
      this[0] = newChild;
      return this;
    },

    /**
     * Appends a new SVG element after the passed-in SVG element.
     *
     * @method (arg1, arg2)
     * @public
     * @param {Object}      the SVG element to add,
     * @param {Object}      the reference SVG element,
     * @returns {Object}    returns this,
     * @since 0.0.0
     */
    appendAfter(newSvgElement, svgElement) {
      const newChild = document.createElementNS(SVG_NS, newSvgElement)
          , child = this[0].querySelector(svgElement).nextElementSibling
          ;

      this[0].insertBefore(newChild, child);
      this[0] = newChild;
      return this;
    },

    /**
     * Appends a foreignObject to svg and selects it.
     *
     * @method (arg1)
     * @public
     * @param {String}      the serialized html block,
     * @returns {Object}    returns this,
     * @since 0.0.0
     */
    appendHTML(xmlString) {
      if (typeof xmlString !== 'string') return this;

      const body = document.createElementNS('http://www.w3.org/1999/xhtml', 'body');
      body.innerHTML = xmlString;
      this[0] = this[0].appendChild(body);
      return this;
    },

    /**
     * Replaces the selected SVG element.
     *
     * @method (arg1)
     * @public
     * @param {Object}      the new SVG element,
     * @returns {Object}    returns this,
     * @since 0.0.0
     */
    replace(svgElement) {
      const el = document.createElementNS(SVG_NS, svgElement);
      this[0].parentNode.replaceChild(el, this[0]);
      this[0] = el;
      return this;
    },

    /**
     * Removes the selected SVG element.
     *
     * @method ()
     * @public
     * @param {}            -,
     * @returns {Object}    returns this,
     * @since 0.0.0
     */
    remove() {
      let parent;
      if (this[0]) {
        parent = this[0].parentNode;
        parent.removeChild(this[0]);
        this[0] = parent;
      }
      return this;
    },

    /**
     * Removes all the childs of the selected SVG element.
     *
     * @method ()
     * @public
     * @param {}            -,
     * @returns {Object}    returns this,
     * @since 0.0.0
     */
    removeAllChilds() {
      while (this[0].firstChild) {
        this[0].removeChild(this[0].firstChild);
      }
      return this;
    },

    /**
     * Associates the animation attributes to the selected SVG element.
     *
     * @method (arg1, arg2)
     * @public
     * @param {String}      the animation 'method',
     * @param {Number}      the number of frames per second,
     * @returns {Object}    returns this,
     * since 0.0.0
     */
    animate(easing, framesPerSecond) {
      if (typeof easing === 'function') {
        this[0].easing = easing;
      } else {
        this[0].easing = Anim.easingLinear;
      }
      this[0].frequency = (1000 / framesPerSecond) || 40;
      return this;
    },

    /**
     * Attachs a listen handler to the selected SVG element.
     *
     * @method (arg1, arg2)
     * @public
     * @param {String}      the 'event',
     * @param {Object}      the handler,
     * @returns {Object}    returns this,
     * @since 0.0.0
     */
    /* istanbul ignore next */
    listen(event, handler) {
      if (typeof event === 'string' && typeof handler === 'function') {
        this[0].addEventListener(event, handler);
      }
      return this;
    },

    /**
     * Attachs a listen handler to the selected SVG element.
     *
     * @method (arg1, arg2)
     * @public
     * @param {String}      the 'event',
     * @param {Object}      the handler,
     * @returns {Object}    returns this,
     * @since 0.0.0
     */
    /* istanbul ignore next */
    listenOnce(event, handler) {
      const el = this[0];
      function localHandler(e) {
        el.removeEventListener(event, localHandler);
        handler(e);
      }
      if (typeof event === 'string' && typeof handler === 'function') {
        el.addEventListener(event, localHandler);
      }
      return this;
    },

    /**
     * Remove a listen handler to the selected SVG element.
     *
     * @method (arg1, arg2)
     * @public
     * @param {String}    the 'event',
     * @param {Object}    the handler,
     * @returns {Object}  returns this,
     * @since 0.0.0
     */
    /* istanbul ignore next */
    unlisten(event, handler) {
      if (typeof event === 'string' && typeof handler === 'function') {
        this[0].removeEventListener(event, handler);
      }
      return this;
    },

    /**
     * Adds a link attribute to the selected element,
     *
     * @method (arg1, arg2)
     * @public
     * @param {String}      the type of link attribute,
     * @param {String}      the url,
     * @returns {Object}    returns this,
     * @since 0.0.0
     */
    alink(attr, url) {
      // this[0].setAttributeNS(XLINK_NS, 'xlink:' + attr, url);
      this[0].setAttributeNS(XLINK_NS, `xlink:${attr}`, url);
      return this;
    },

    /**
     * Adds an attribute to the selected SVG element.
     *
     * @method (arg1, arg2)
     * @public
     * @param {String}      the name of the attribute,
     * @param {Object}      the value of the attribute or the params for the animation,
     * @returns {Object}    returns this,
     * @since 0.0.0
     */
    attr(attr, value) {
      if (!this[0]) {
        console.log('warning: this.svgElement is null!');
        return this;
      }
      Attr.attr(this, attr, value);
      return this;
    },

    /**
     * Removes the given attribute to the selected SVG element.
     *
     * @method (arg1)
     * @public
     * @param {String}      the attribute to remove,
     * @returns {Object}    returns this,
     * @since 0.0.0
     */
    rmattr(attr) {
      this[0].removeAttributeNS(null, attr);
      return this;
    },

    /**
     * Adds a text to the selected SVG element.
     *
     * @method (arg1)
     * @public
     * @param {Object}      the text or the the params for the animation,
     * @returns {Object}    returns this,
     * @since 0.0.0
     */
    text(value) {
      Text.text(this, value);
      return this;
    },

    /**
     * Adds a class value to the selected SVG element.
     *
     * @method (arg1)
     * @public
     * @param {String}      the value of the class attribute,
     * @returns {Object}    returns this,
     * @since 0.0.0
     */
    addClass(className) {
      let list = this[0].getAttributeNS(null, 'class');
      // list = list ? list + ' ' + className : className;
      list = list ? `${list} ${className}` : className;
      this[0].setAttributeNS(null, 'class', list);
      return this;
    },

    /**
     * Removes a class value from the selected SVG element.
     *
     * @method (arg1)
     * @public
     * @param {String}      the value of the class attribute,
     * @returns {Object}    returns this,
     * @since 0.0.0
     */
    removeClass(className) {
      let list = this[0].getAttributeNS(null, 'class');

      if (list) {
        // Remove the class and the extra leading and trailing white spaces if any:
        list = list.replace(className, '').replace(/(^\s+|\s+$)/g, '');
        this[0].setAttributeNS(null, 'class', list);
      }
      return this;
    },

    /**
     * Adds/Removes a class name to the selected SVG element.
     *
     * @method (arg1)
     * @public
     * @param {String}      the value of the class attribute,
     * @returns {Object}    returns this,
     * @since 0.0.0
     */
    toggleClass(className) {
      const list = this[0].getAttributeNS(null, 'class');

      if (list && list.match(className)) {
        this.removeClass(className);
        return this;
      }
      this.addClass(className);
      return this;
    },

    /**
     * Creates the event 'animationOver'.
     *
     * @method ()
     * @public
     * @param {}   -
     * @returns {Object}    returns the event object,
     * @since 0.0.0
     */
    /* istanbul ignore next */
    createEvent() {
      return Event.create(this);
    },

    /**
     * Returns the first element that matches or null.
     *
     * @method (arg1)
     * @public
     * @param {String}      the css selector,
     * @returns {Object}    the selected SVG element or null,
     * @since 0.0.0
     */
    query(css) {
      return this[0].querySelector(css);
    },

    /**
     * Returns the selected SVG element.
     *
     * @method ()
     * @public
     * @param {}            -,
     * @returns {Object}    the selected SVG element,
     * @since 0.0.0
     */
    getElement() {
      return this[0];
    },

    /**
     * Returns the attribute of the selected SVG element.
     *
     * @method (arg1)
     * @public
     * @param {String}      the name of the attribute,
     * @returns {Object}    returns the attribute value or null,
     * @since 0.0.0
     */
    getAttribute(attribute) {
      return this[0] ? this[0].getAttribute(attribute) : null;
    },

    /**
     * Returns the computed style of the selected SVG element.
     *
     * @method ()
     * @public
     * @param {}   -
     * @returns {Object}    returns the object computed style,
     * @since 0.0.0
     */
    getComputedStyle() {
      return window.getComputedStyle(this[0]);
    },

    /**
     * Returns the property value of the style object.
     *
     * @method (arg1)
     * @public
     * @param {Object}      the style property,
     * @returns {String}    returns the style value,
     * @since 0.0.0
     */
    /* istanbul ignore next */
    getPropertyValue(css) {
      return this.getPropertyValue(css);
    },

    /**
     * Returns the size (bounding boxes) of the selected SVG element.
     *
     * @method ()
     * @public
     * @param {}   -
     * @returns {Object}  returns the width and height of the SVG element,
     * @since 0.0.0
     */
    getSize() {
      return {
        width: this[0].getBoundingClientRect().width,
        height: this[0].getBoundingClientRect().height,
      };
    },

    /**
     * Returns the animation status of the selected SVG element,
     * (deprecated)
     * @method ()
     * @public
     * @param {}   -
     * @returns {Boolean} returns true or false,
     * @since 0.0.0
     */
    getAnimationStatus() {
      return this[0].isAnimationOn;
    },

    /**
     * Set the animation status of the selected element to false.
     * (deprecated)
     * @method ()
     * @public
     * @param {}   -
     * @returns {Boolean}   returns true or false,
     * @since 0.0.0
     */
    /* istanbul ignore next */
    stopAnimation() {
      if (this[0].isAnimationOn) {
        this[0].isAnimationOn = false;
        return true;
      }
      return false;
    },

    /**
     * Returns the event attached to the selected SVG element.
     *
     * @method ()
     * @public
     * @param {}   -
     * @returns {Object}   returns the attached event,
     * @since 0.0.0
     */
    getAttachedEvent() {
      return this[0].event;
    },

    /**
     * Dispatches the event.
     *
     * @method (arg1)
     * @public
     * @param {Object}      the 'event' object,
     * @returns {}          -,
     * @since 0.0.0
     */
    /* istanbul ignore next */
    trigger(event) {
      this[0].dispatchEvent(event);
    },

    /**
     * Attachs or sets a message to this element.
     *
     * @method (arg1, arg2)
     * @public
     * @param {String}      the message name,
     * @param {Boolean}     the message value,
     * @returns {}          -,
     * @since 0.0.0
     */
    setMessage(msg, status) {
      let array = this[0].message
        , obj
        ;

      if (array === undefined || !array.isArray) {
        this[0].message = [];
        array = this[0].message;
      }

      if (array[0] === undefined || array[0][msg] === undefined) {
        obj = {};
        obj[msg] = status;
        array.push(obj);
      } else {
        array[0][msg] = status;
      }
      return this;
    },

    /**
     * Returns the message value,
     *
     * @method (arg1)
     * @public
     * @param {String}      the message name,
     * @returns {Boolean}   the message value,
     * @since 0.0.0
     */
    getMessage(msg) {
      const array = this[0].message;
      if (array === undefined || array[0] === undefined || array[0][msg] === undefined) {
        return null;
      }
      return this[0].message[0][msg];
    },
  };
}());
