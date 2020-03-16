/** ****************************************************************************
 * SVG v0.0.5
 *
 * A tiny Javascript library intended to create and manage SVG elements in the DOM.
 * (you can download it from npm or github repositories)
 * Copyright (c) 2020 Mobilabs <contact@mobilabs.fr> (http://www.mobilabs.fr).
 * Released under the MIT license. You may obtain a copy of the License
 * at: http://www.opensource.org/licenses/mit-license.php).
 * Built from ES6lib v0.0.9.
 * ************************************************************************** */
// ESLint declarations
/* global */
/* eslint strict: ["error", "function"] */
(function(root, factory) {
  /* istanbul ignore next */
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([''], factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    /* eslint-disable-next-line no-param-reassign */
    module.exports = factory(root);
    // This is a hack to attach the lib to the browser root when this lib is
    // included inside another lib and the whole is browserifyied:
    /* eslint-disable-next-line no-param-reassign */
    if (root.SVG === null) root.SVG = factory(root);
  } else {
    // Browser globals.
    /* eslint-disable-next-line no-param-reassign */
    root.SVG = factory(root);
  }
}({{lib:parent}}, (root) => {
  // This is the list of the constants that are defined at the global level of
  // this module and are accessible to all. So, they are considered as reserved
  // words for this library.
  // const SV
  /* eslint-disable one-var, semi-style */
  const SVG_NS = 'http://www.w3.org/2000/svg'
      , XLINK_NS = 'http://www.w3.org/1999/xlink'
      ;

  let SVG
    , _
    ;
  /* eslint-enable one-var, semi-style */

  /* ***************************************************************************
   *
   * Tree is an internal object that links all the internal modules.
   *
   * tree.js is just a literal object that contains a set of functions. It
   * can't be intantiated.
   *
   *
   * @namespace SVG
   * @exports   -
   * @author    -
   * @since     0.0.0
   * @version   -
   * ************************************************************************ */
  /* - */

  const SV = {
    Dollar: {
      Public: {},
    },
    SVG: {
      Public: {},
    },
    Anim: {
      Public: {},
    },
    Methods: {
      Static: {
        Public: {},
      },
      Attr: {
        Public: {},
      },
      Text: {
        Public: {},
      },
    },
  };
  /* - */

  /* ***************************************************************************
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
   * @namespace    SVG
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* eslint-disable one-var, semi-style, no-underscore-dangle */

  (function() {
    // IIFE

    // -- Module path


    // -- Local modules
    const $ = SV.Dollar.Public
        , S = SV.SVG.Public
        , SM = SV.Methods.Static.Public
        ;


    // -- Local constants
    // Saves the previous value of the library variable, so that it can be
    // restored later on, if noConflict is used.
    const previousSVG = root.SVG;


    // -- Local variables
    let methods;


    // -- Public

    /**
     * Creates the SVG object.
     *
     * @constructor (arg1)
     * @public
     * @param {String}        the selector id or class,
     * @returns {Object}      returns the SVG object,
     * @since 0.0.0
     */
    SVG = function(selector) {
      const obj = Object.create(_.extend(methods, $));
      const { id, _root } = S.create(selector);
      obj.id = id;
      obj._root = _root;
      obj._SVG = SVG;
      return obj;
    };


    // -- Private & Public Static Methods --------------------------------------


    /**
     * Returns the internal objects for testing purpose.
     *
     * @method ()
     * @private
     * @param {}            -,
     * @returns {Object}    returns TV tree,
     * @since 0.0.0
     */
    SVG._setTestMode = function() {
      return SV;
    };

    /**
     * Returns a reference to this SVG object.
     *
     * Nota:
     * Running SVG in noConflic mode, returns the SVG variable to its
     * previous owner.
     *
     * @method ()
     * @public
     * @param {}            -,
     * @returns {Object}    returns the SVG object,
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
     * @param {String}        the SVG transform atributes string,
     * @returns {Object}      returns the transform attributes,
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
     * @param {String}        the SVG transform atributes string,
     * @returns {Object}      returns the transform attributes,
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
     * @param {Number}        start angle in radius,
     * @param {Number}        Stop angle,
     * @param {Number}        external radius,
     * @param {Number}        internal radius,
     * @returns {String}      returns the SVG path,
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
     * @param {Object}        a set of points (x, y) defining the polygonal line,
     * @param {Boolean}       true if it is a polygon (closed path),
     * @returns {String}      returns the SVG path,
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
     * @param {Object}        a set of array of points (x, y) defining
     *                        the polygonal line,
     * @param {Boolean}       true if it is a polygon (closed path),
     * @returns {String}      returns the SVG path,
     * @since 0.0.0
     */
    SVG.getMultipolyline = function(shape, closed) {
      return SM.getMultipolyline(shape, closed);
    };


    // -- Public Methods -------------------------------------------------------

    methods = {
      // none yet!
    };


    // Attaches a constant to View that provides the version of the lib.
    SVG.VERSION = '{{lib:version}}';
  }());
  /* eslint-enable one-var, semi-style, no-underscore-dangle */

  /* ***************************************************************************
   *
   * Provides a subset of the overslash library.
   *
   * _.js is just a literal object that contains a set of functions. It
   * can't be intantiated.
   *
   * Private Functions:
   *  . none,
   *
   *
   * Public Static Methods:
   *  . extend                      extends the passed-in object with new methods,
   *
   *  . isUndefined                 is a given variable undefined?
   *  . isNull                      is a given value null?
   *  . isBoolean                   is a given value a boolean?
   *  . isString                    is a given value a string?
   *  . isNumber                    is a given value a number?
   *  . isObject                    is a given variable an object?
   *  . isLiteralObject             is a given variable a literal object?
   *  . isFunction                  is a given variable a function?
   *  . isArray                     is a given value an array?
   *
   *  . linear                      linear easing method,
   *
   *
   *
   * @namespace    -
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* - */

  (function() {
    // IIFE

    // -- Module path


    // -- Local modules


    // -- Local constants


    // -- Local variables


    // -- Public Methods -------------------------------------------------------

    _ = {

      /**
       * Extends the passed-in object with new methods.
       *
       * Nota: this function mutates object.
       *
       * @function (arg1, arg2)
       * @private
       * @param {Object}      the object to extend,
       * @param {Object}      an object containing a set of methods,
       * @returns {}          -,
       * @since 0.0.0
       */
      extend(object, methods) {
        const keys = Object.keys(methods);
        for (let i = 0; i < keys.length; i++) {
          /* eslint-disable-next-line no-param-reassign */
          object[keys[i]] = methods[keys[i]];
        }
        return object;
      },

      /**
       * Is a given variable undefined?
       *
       * @method (arg1)
       * @public
       * @param {Object}      the object to test,
       * @returns {Boolean}   returns true or false,
       * @since 0.0.0
       */
      isUndefined(obj) {
        return obj === undefined;
      },

      /**
       * Is a given value null?
       *
       * @method (arg1)
       * @public
       * @param {Object}      the object to test,
       * @returns {Boolean}   returns true or false,
       * @since 0.0.0
       */
      isNull(obj) {
        return obj === null;
      },

      /**
       * Is a given value a boolean?
       *
       * @method (arg1)
       * @public
       * @param {Object}      the object to test,
       * @returns {Boolean}   returns true or false,
       * @since 0.0.0
       */
      isBoolean(obj) {
        return obj === true || obj === false || Object.prototype.toString.call(obj) === '[object Boolean]';
      },

      /**
       * Is a given value a string?
       *
       * @method (arg1)
       * @public
       * @param {Object}      the object to test,
       * @returns {Boolean}   returns true or false,
       * @since 0.0.0
       */
      isString(obj) {
        return Object.prototype.toString.call(obj) === '[object String]';
      },

      /**
       * Is a given value a number?
       *
       * @method (arg1)
       * @public
       * @param {Object}      the object to test,
       * @returns {Boolean}   returns true or false,
       * @since 0.0.0
       */
      isNumber(obj) {
        return Object.prototype.toString.call(obj) === '[object Number]';
      },

      /**
       * Is a given variable an object?
       * (copied from: http://underscorejs.org)
       *
       * @method (arg1)
       * @public
       * @param {Object}      the object to test,
       * @returns {Boolean}   returns true or false,
       * @since 0.0.0
       */
      isObject(obj) {
        const type = typeof obj;
        return (type === 'function' || type === 'object') && !!obj;
      },

      /**
       * Is a given variable a literal object?
       *
       * @method (arg1)
       * @private
       * @param {Object}      the object to test,
       * @returns {Boolean}   returns true or false,
       * @since 0.0.3
       */
      isLiteralObject(obj) {
        return Object.prototype.toString.call(obj) === '[object Object]';
      },

      /**
       * Is a given variable a function?
       *
       * @method (arg1)
       * @public
       * @param {Object}      the object to test,
       * @returns {Boolean}   returns true or false,
       * @since 0.0.0
       */
      isFunction(obj) {
        return Object.prototype.toString.call(obj) === '[object Function]';
      },

      /**
       * Is a given value an array?
       * (Delegates to ECMA5's native Array.isArray.)
       * (copied from: http://underscorejs.org)
       *
       * @method (arg1)
       * @public
       * @param {Object}      the object to test,
       * @returns {Boolean}   returns true or false,
       * @since 0.0.0
       */
      isArray(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
      },

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
      elinear(t, b, c, d) {
        return (c * t) / d + b;
      },
    };
  }());
  /* - */

  /* ***************************************************************************
   *
   * Implements the methods to manipulate the DOM.
   *
   * $.js is just an object that contains a set of methods. It implements the
   * pattern factory. Thus, $(sel) returns the selected node and the methods
   * listed below.
   *
   * Private Functions:
   *  . none,
   *
   *
   * Private Variables:
   *  . id                          the id of the svg node,
   *  . [0]                         the selected svg children,
   *  . _root                       the svg node,
   *
   *
   * Constructor:
   *  . $                           creates the component,
   *
   *
   * Public Chaining Methods:
   *  . firstParent                 moves to the svg node,
   *  . parent                      moves to the parent,
   *  . previous                    selects the previous sibbling element,
   *  . next                        selects the next sibbling element,
   *  . select                      selects an SVG element,
   *  . append                      appends an SVG element and selects it,
   *  . appendBefore                appends a new SVG el. before the reference SVG el.,
   *  . appendAfter                 appends a new SVG el. after the reference SVG el.,
   *  . appendHTML                  appends a foreignObject to svg and selects it,
   *  . replace                     replaces the current SVG element,
   *  . remove                      removes the given SVG element,
   *  . removeChild                 removes the passed-in child element,
   *  . replaceChild                replaces a child by another,
   *  . removeAllChilds             removes all the childs from the selected element,
   *  . empty                       removes all the childs from the selected element
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
   *  . query                       returns the first matching element or null,
   *  . getElement                  returns the selected SVG element,
   *  . children                    returns the children HTMLCollection,
   *  . getAttribute                returns the attribute value,
   *  . getComputedStyle            returns the style applied to this element,
   *  . getPropertyValue            returns the value of the specified property,
   *  . getSize                     returns the width and height of this element,
   *  . getBbox                     returns the bounding boxes,
   *
   *
   *
   * @namespace    SV.Dollar.Public
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* eslint-disable one-var, semi-style, no-underscore-dangle */

  (function() {
    // IIFE

    // -- Module path
    const Root = SV.Dollar.Public;


    // -- Local modules
    const Attr = SV.Methods.Attr.Public
        , Text = SV.Methods.Text.Public
        ;


    // -- Local constants


    // -- Local variables


    // -- Public ---------------------------------------------------------------

    /**
     * Select a child element.
     *
     * @constructor (arg1)
     * @public
     * @param {String}        the selector,
     * @returns {Object}      returns the $() object,
     * @since 0.0.0
     */
    function $(selector) {
      const { id } = this
          , { _root } = this
          ; // unique id!


      // -- Public Chaining Methods --------------------------------------------

      /**
       * Returns to the root parent if defined.
       *
       * @method ()
       * @public
       * @param {}            -,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      const firstParent = function() {
        if (this._root) {
          this[0] = this._root;
        }
        return this;
      };

      /**
       * Returns to the parent element.
       *
       * @method ()
       * @public
       * @param {}            -,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      const parent = function() {
        if (this.root) {
          // As a root parent is defined, we stop at it.
          if (this[0] !== this.root) {
            this[0] = this[0].parentNode;
          }
        } else {
          this[0] = this[0].parentNode;
        }
        return this;
      };

      /**
       * Selects the previous element sibbling.
       *
       * @method ()
       * @public
       * @param {}            -,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      const previous = function() {
        this[0] = this[0].previousElementSibling;
        return this;
      };

      /**
       * Selects the next element sibbling.
       *
       * @method ()
       * @public
       * @param {}            -,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      const next = function() {
        this[0] = this[0].nextElementSibling;
        return this;
      };

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
      const select = function(element) {
        this[0] = this[0].querySelector(element);
        return this;
      };

      /**
       * Appends a new SVG element and selects it.
       *
       * @method (arg1)
       * @public
       * @param {Object}      the SVG element to add,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      const append = function(svgElement) {
        const el = document.createElementNS(SVG_NS, svgElement);
        this[0] = this[0].appendChild(el);
        return this;
      };

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
      const appendBefore = function(newSvgElement, svgElement) {
        const newChild = document.createElementNS(SVG_NS, newSvgElement)
            , child = this[0].querySelector(svgElement)
            ;

        this[0].insertBefore(newChild, child);
        this[0] = newChild;
        return this;
      };

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
      const appendAfter = function(newSvgElement, svgElement) {
        const newChild = document.createElementNS(SVG_NS, newSvgElement)
            , child = this[0].querySelector(svgElement).nextElementSibling
            ;

        this[0].insertBefore(newChild, child);
        this[0] = newChild;
        return this;
      };

      /**
       * Appends a foreignObject to svg and selects it.
       *
       * @method (arg1)
       * @public
       * @param {String}      the serialized html block,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      const appendHTML = function(xmlString) {
        if (typeof xmlString !== 'string') return this;

        const body = document.createElementNS('http://www.w3.org/1999/xhtml', 'body');
        body.innerHTML = xmlString;
        this[0] = this[0].appendChild(body);
        return this;
      };

      /**
       * Replaces the selected SVG element.
       *
       * @method (arg1)
       * @public
       * @param {Object}      the new SVG element,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      const replace = function(svgElement) {
        const el = document.createElementNS(SVG_NS, svgElement);
        this[0].parentNode.replaceChild(el, this[0]);
        this[0] = el;
        return this;
      };

      /**
       * Removes the selected SVG element.
       *
       * @method ()
       * @public
       * @param {}            -,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      const remove = function() {
        let parento;
        if (this[0]) {
          parento = this[0].parentNode;
          parento.removeChild(this[0]);
          this[0] = parento;
        }
        return this;
      };

      /**
       * Removes the passed-in child element.
       *
       * @method (arg1)
       * @public
       * @param {Object}      the child element to remove,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      const removeChild = function(child) {
        if (child) {
          this[0].removeChild(child);
        }
        return this;
      };

      /**
       * Replaces a child by another.
       *
       * @method (arg1, arg2)
       * @public
       * @param {Object}      the new node element,
       * @param {Object}      the node element to replace,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      const replaceChild = function(newChild, child) {
        if (newChild) {
          this[0].replaceChild(newChild, child);
        }
        return this;
      };

      /**
       * Removes all the childs from the selected SVG element.
       *
       * @method ()
       * @public
       * @param {}            -,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      const removeAllChilds = function() {
        while (this[0].firstChild) {
          this[0].removeChild(this[0].firstChild);
        }
        return this;
      };

      /**
       * Removes all the childs from the selected SVG element.
       *
       * @method ()
       * @public
       * @param {}            -,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      const empty = function() {
        while (this[0].firstChild) {
          this[0].removeChild(this[0].firstChild);
        }
        return this;
      };

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
      const listen = function(event, handler) {
        if (typeof event === 'string' && typeof handler === 'function') {
          this[0].addEventListener(event, handler);
        }
        return this;
      };

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
      const listenOnce = function(event, handler) {
        const el = this[0];
        function localHandler(e) {
          el.removeEventListener(event, localHandler);
          handler(e);
        }
        if (typeof event === 'string' && typeof handler === 'function') {
          el.addEventListener(event, localHandler);
        }
        return this;
      };

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
      const unlisten = function(event, handler) {
        if (typeof event === 'string' && typeof handler === 'function') {
          this[0].removeEventListener(event, handler);
        }
        return this;
      };

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
      const alink = function(attr, url) {
        // this[0].setAttributeNS(XLINK_NS, 'xlink:' + attr, url);
        this[0].setAttributeNS(XLINK_NS, `xlink:${attr}`, url);
        return this;
      };

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
      const attr = function(attribute, value) {
        if (!this[0]) {
          /* eslint-disable-next-line no-console */
          console.log('warning: this.svgElement is null!');
          return this;
        }
        Attr.attr(this[0], attribute, value);
        return this;
      };

      /**
       * Removes the given attribute to the selected SVG element.
       *
       * @method (arg1)
       * @public
       * @param {String}      the attribute to remove,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      const rmattr = function(attribute) {
        this[0].removeAttributeNS(null, attribute);
        return this;
      };

      /**
       * Adds a text to the selected SVG element.
       *
       * @method (arg1)
       * @public
       * @param {Object}      the text or the the params for the animation,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      const text = function(value) {
        Text.text(this[0], value);
        return this;
      };

      /**
       * Adds a class value to the selected SVG element.
       *
       * @method (arg1)
       * @public
       * @param {String}      the value of the class attribute,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      const addClass = function(className) {
        let list = this[0].getAttributeNS(null, 'class');
        // list = list ? list + ' ' + className : className;
        list = list ? `${list} ${className}` : className;
        this[0].setAttributeNS(null, 'class', list);
        return this;
      };

      /**
       * Removes a class value from the selected SVG element.
       *
       * @method (arg1)
       * @public
       * @param {String}      the value of the class attribute,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      const removeClass = function(className) {
        let list = this[0].getAttributeNS(null, 'class');

        if (list) {
          // Remove the class and the extra leading and
          // trailing white spaces if any:
          list = list.replace(className, '').replace(/(^\s+|\s+$)/g, '');
          this[0].setAttributeNS(null, 'class', list);
        }
        return this;
      };

      /**
       * Adds/Removes a class name to the selected SVG element.
       *
       * @method (arg1)
       * @public
       * @param {String}      the value of the class attribute,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      const toggleClass = function(className) {
        const list = this[0].getAttributeNS(null, 'class');

        if (list && list.match(className)) {
          this.removeClass(className);
          return this;
        }
        this.addClass(className);
        return this;
      };


      // -- Public Non Chaining Methods ----------------------------------------

      /**
       * Returns the first element that matches or null.
       *
       * @method (arg1)
       * @public
       * @param {String}      the css selector,
       * @returns {Object}    the selected SVG element or null,
       * @since 0.0.0
       */
      const query = function(css) {
        return this[0].querySelector(css);
      };

      /**
       * Returns the selected SVG element.
       *
       * @method ()
       * @public
       * @param {}            -,
       * @returns {Object}    the selected SVG element,
       * @since 0.0.0
       */
      const getElement = function() {
        return this[0];
      };

      /**
       * Returns the children HTMLCollection.
       *
       * @method ()
       * @public
       * @param {}            -,
       * @returns {Object}    returns the children HTMLCollection,
       * @since 0.0.0
       */
      const children = function() {
        return this[0].children;
      };

      /**
       * Returns the attribute of the selected SVG element.
       *
       * @method (arg1)
       * @public
       * @param {String}      the name of the attribute,
       * @returns {Object}    returns the attribute value or null,
       * @since 0.0.0
       */
      const getAttribute = function(attribute) {
        return this[0] ? this[0].getAttribute(attribute) : null;
      };

      /**
       * Returns the computed style of the selected SVG element.
       *
       * @method ()
       * @public
       * @param {}   -
       * @returns {Object}    returns the object computed style,
       * @since 0.0.0
       */
      const getComputedStyle = function() {
        return window.getComputedStyle(this[0]);
      };

      /**
       * Returns the property value of the style object.
       *
       * @method (arg1)
       * @public
       * @param {Object}      the style property,
       * @returns {String}    returns the style value,
       * @since 0.0.0
       */
      const getPropertyValue = function(css) {
        return this.getPropertyValue(css);
      };

      /**
       * Returns the size (bounding boxes) of the selected SVG element.
       *
       * @method ()
       * @public
       * @param {}            -
       * @returns {Object}    returns the width and height of the SVG element,
       * @since 0.0.0
       */
      const getSize = function() {
        return {
          width: this[0].getBoundingClientRect().width,
          height: this[0].getBoundingClientRect().height,
        };
      };

      /**
       * Returns the size (bounding boxes) of the selected SVG element.
       *
       * @method ()
       * @public
       * @param {}            -
       * @returns {Object}    returns the width and height of the SVG element,
       * @since 0.0.0
       */
      const getBbox = function() {
        return {
          top: this[0].getBoundingClientRect().top,
          left: this[0].getBoundingClientRect().left,
          width: this[0].getBoundingClientRect().width,
          height: this[0].getBoundingClientRect().height,
        };
      };


      // -- Main
      return {
        id,
        0: selector ? _root.querySelector(selector) : _root,
        _root,

        firstParent,
        parent,
        previous,
        next,
        select,
        append,
        appendBefore,
        appendAfter,
        appendHTML,
        replace,
        remove,
        removeChild,
        replaceChild,
        removeAllChilds,
        empty,
        listen,
        listenOnce,
        unlisten,
        alink,
        attr,
        rmattr,
        text,
        addClass,
        removeClass,
        toggleClass,
        query,
        getElement,
        children,
        getAttribute,
        getComputedStyle,
        getPropertyValue,
        getSize,
        getBbox,
      };
    }


    // Exports $.
    _.extend(Root, { $ });
  }());
  /* eslint-enable one-var, semi-style, no-underscore-dangle */

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

  /* ***************************************************************************
   *
   * Adds or Updates the SVG node attributes.
   *
   * attributes.js is just a literal object that contains a set of functions. It
   * can't be intantiated.
   *
   * Private Functions:
   *  . _attr                       adds an attribute to the selected SVG element,
   *
   *
   * Public Static Methods:
   *  . attr                        adds an attribute to the selected SVG element,
   *
   *
   *
   * @namespace    SV.Methods.Attr.Public
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* eslint-disable no-underscore-dangle */

  (function() {
    // IIFE

    // -- Module path
    const Root = SV.Methods.Attr.Public;


    // -- Local modules
    const Anim = SV.Anim.Public;


    // -- Local constants


    // -- Local variables


    // -- Private Functions ----------------------------------------------------

    /**
     * Adds an attribute to the selected SVG element.
     *
     * @function (arg1, arg2, arg3)
     * @private
     * @param {Object}        the SVG element,
     * @param {String}        the name of the attribute,
     * @param {Object}        the value of the attribute or the params for the animation,
     * @returns {}            -,
     * @since 0.0.0
     */
    function _attr(el, attr, value) {
      switch (typeof value) {
        // Add the requested attribute to this element:
        case 'string':
        case 'number':
          el.setAttributeNS(null, attr, value);
          break;

        case 'object':
          // Proceed with an animation:
          switch (attr) {
            // ...
            // case 'd':
            //   Anim.dAnimationRun(el, value);
            //   break;

            // Transform animations:
            case 'transform':
              switch (value.type) {
                // Rotate animation:
                case 'rotate':
                  Anim.rotateRun(el, value);
                  break;

                // Scale animation:
                case 'scale':
                  Anim.scaleRun(el, value);
                  break;

                // Smooth linear animation:
                case 'translate':
                  Anim.translateRun(el, value);
                  break;

                default:
                  throw new Error(`The animation is not supported for the transform ${value.type}!`);
              }
              break;

            default:
              throw new Error(`The animation is not supported for the attribute ${attr}!`);
          }
          break;

        default:
          // Ignore!
      }
    }


    // -- Public Static Methods ------------------------------------------------

    _.extend(Root, {

      /**
       * Adds an attribute to the selected SVG element.
       *
       * @method (arg1, arg2, arg3)
       * @public
       * @param {Object}      the SVG object,
       * @param {String}      the name of the attribute,
       * @param {Object}      the value of the attribute or the params for the animation,
       * @returns {}          -,
       * @since 0.0.0
       */
      attr(el, attr, value) {
        _attr(el, attr, value);
      },
    });
  }());
  /* eslint-enable no-underscore-dangle */

  /* ***************************************************************************
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
   * @namespace    SV.Methods.Static.Public
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* eslint-disable one-var, semi-style, no-underscore-dangle */

  (function() {
    // IIFE

    // -- Module path
    const Root = SV.Methods.Static.Public;


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

    /**
     * Returns an arc path.
     *
     * The returned path has the following format:
     *   'Mx0,y0 Arx,ry 0 sweepflag x1,y1 L x1,y1 Arx,ry 0 sweepflag x0,y0 Z'
     *
     * @function (arg1, arg2, arg3, arg4)
     * @private
     * @param {Number}      start angle in radius,
     * @param {Number}      Stop angle,
     * @param {Number}      external radius,
     * @param {Number}      internal radius,
     * @returns {String}    returns the SVG path,
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
     * @param {Object}        a set of points (x, y) defining the polygonal line,
     * @param {Boolean}       true if it is a polygon (closed path),
     * @returns {String}      returns the SVG path,
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
     * @param {Object}        a set of array of points (x, y) defining
     *                        the polygonal line,
     * @param {Boolean}       true if it is a polygon (closed path),
     * @returns {String}      returns the SVG path,
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


    // -- Public Methods -------------------------------------------------------

    _.extend(Root, {

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
       * @method (arg1)
       * @public
       * @param {String}      the SVG transform atributes string,
       * @returns {Object}    returns the transform attributes,
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
       * @param {Number}      start angle in radius,
       * @param {Number}      Stop angle,
       * @param {Number}      external radius,
       * @param {Number}      internal radius,
       * @returns {String}    returns the SVG path,
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
       * @param {Object}      a set of points (x, y) defining the polygonal line,
       * @param {Boolean}     true if it is a polygon (closed path),
       * @returns {String}    returns the SVG path,
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
       * @param {Object}      a set of array of points (x, y) defining
       *                      the polygonal line,
       * @param {Boolean}     true if it is a polygon (closed path),
       * @returns {String}    returns the SVG path,
       * @since 0.0.0
       */
      getMultipolyline(shape, closed) {
        return _getMultipolyline(shape, closed);
      },
    });
  }());
  /* eslint-enable one-var, semi-style, no-underscore-dangle */

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

  /* ***************************************************************************
   *
   * Implements the text methods.
   *
   * text.js is just a literal object that contains a set of functions. It
   * can't be intantiated.
   *
   * Private Functions:
   *  . _text                       adds a text to the selected SVG element,
   *
   *
   * Public Static Methods:
   *  . text                        adds a text to the selected SVG element,
   *
   *
   *
   * @namespace    SV.Methods.Text.Public
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* eslint-disable one-var, semi-style, no-underscore-dangle */

  (function() {
    // IIFE

    // -- Module path
    const Root = SV.Methods.Text.Public;


    // -- Local modules
    const Anim = SV.Anim.Public
        ;

    // -- Local constants


    // -- Local variables


    // -- Private Functions ----------------------------------------------------

    /**
     * Adds a text to the selected SVG element.
     *
     * @function (arg1, arg2)
     * @private
     * @param {Object}        the SVG element,
     * @param {Object}        the text or the the params for the animation,
     * @returns {}            -,
     * @since 0.0.0
     */
    function _text(el, value) {
      switch (typeof value) {
        case 'number':
        case 'string':
          /* eslint-disable-next-line no-param-reassign */
          el.textContent = value;
          break;

        case 'object':
          Anim.textRun(el, value);
          break;

        default:
          break;
      }
    }


    // -- Public Static Methods ------------------------------------------------

    _.extend(Root, {

      /**
       * Adds a text to the selected SVG element.
       *
       * @method (arg1, arg2)
       * @public
       * @param {Object}      the SVG element,
       * @param {Object}      the text or the the params for the animation,
       * @returns {}          -,
       * @since 0.0.0
       */
      text(el, value) {
        _text(el, value);
      },
    });
  }());
  /* eslint-enable one-var, semi-style, no-underscore-dangle */

  // Returns the library name:
  return SVG;
}));