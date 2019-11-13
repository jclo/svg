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

'use strict';

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
