# SVG

[![NPM version][npm-image]][npm-url]
[![Travis CI][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependencies status][dependencies-image]][dependencies-url]
[![Dev Dependencies status][devdependencies-image]][devdependencies-url]
[![License][license-image]](LICENSE.md)
<!--- [![node version][node-image]][node-url] -->

[![NPM install][npm-install-image]][npm-install-url]

SVG is a tiny Javascript library intended to create and manage SVG elements in the DOM. SVG is designed to be embedded in another library. SVG is intended to run on ECMAScript 2015 (ES6) compliant browsers.


## Quick Startup

You can create an SVG node inside a `div` by typing:

```javascript
// SVG is built upon the prototypal pattern, you don't need the operator 'new'.
var svg = SVG('#svg');
```

If you have a look to the DOM, you will see:

```html
<div id="svg">
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"></svg>
</div>
```

Then, you can fill your `SVG` node:

```Javascript
var svg = SVG('#svg');

// Append a rectangle:
svg
  .append('rect')
  .attr('x', 100)
  .attr('y', 100)
  .attr('width', 100)
  .attr('height', 100)
;
```

You get:

```html
<div id="svg">
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <rect x="100" y="100" width="100" height="100"></rect>
  </svg>
</div>
```


## API

## Static methods

SVG provides a set of static methods. You can use by typing:

```javascript
SVG.noConflict();
```

| Static Methods          | Description |
|:------------------------|:------------|
| noConflict              | returns the SVG variable to its previous owner |
| transformAttrToObj      | converts an SVG transform attributes string to an object |
| transformAttrToStr      | converts an SVG transform attributes string to an object |
| draw.getArc             | draws an arc |
| draw.getLine            | draws polygonal lines |
| draw.getMultipolyline   | draws a set of polylines |



## Create an SVG object:

| Constructor | Description |
|:------------|:------------|
| SVG('#id') | creates the SVG object and insert an SVG node inside a DIV |


## Chaining Methods

| Chaining Methods  | Description |
|:------------------|:------------|
| firstParent       | moves to the first parent |
| parent            | moves to parent SVG element |
| previous          | selects the previous sibbling element |
| next              | selects the next sibbling element |
| select            | selects an SVG element |
| append            | appends an SVG element and selects it |
| appendBefore      | appends an SVG element before the reference SVG element and selects it |
| appendAfter       | appends an SVG element after the reference SVG element and selects it |
| appendHTML        | appends a foreignObject to svg and selects it |
| replace           | replaces the current SVG element |
| remove            | removes the given SVG element |
| removeChild       | removes the passed-in child element,
| replaceChild      | replaces a child by another,
| removeAllChilds   | removes all the children from the selected element |
| empty             | removeAllChilds alias |
| listen            | attaches an event listener to the SVG element |
| listenOnce        | attaches a fired once event listener to the SVG element |
| unlisten          | removes an event listener to the SVG element |
| alink             | adds a link attribute to the SVG selected element |
| attr              | adds attributes to the selected SVG element |
| rmattr            | removes the given attribute from the selected SVG element |
| text              | adds text to the selected SVG element |
| addClass          | adds a class value to the selected SVG element |
| removeClass       | removes a class value to the selected SVG element |
| toggleClass       | toggles a class value to the selected SVG element |

*chaining methods return **this***.


## Non Chaining Methods

| Non Chaining Methods  | Description |
|:----------------------|:------------|
|  query                | returns the first matching element or null |
|  getElement           | returns the selected SVG element |
| children              | returns the children HTMLCollection |
|  getAttribute         | returns the attribute value |
|  getComputedStyle     | returns the style applied to this element |
|  getPropertyValue     | returns the value of the specified property |
|  getSize              | returns the width and height of this element |
|  getBbox              | returns the bounding boxes |


## License

[MIT](LICENSE.md).

<!--- URls -->

[npm-image]: https://img.shields.io/npm/v/@mobilabs/svg.svg?style=flat-square
[npm-install-image]: https://nodei.co/npm/@mobilabs/svg.png?compact=true
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[download-image]: https://img.shields.io/npm/dm/@mobilabs/svg.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/jclo/svg.svg?style=flat-square
[coveralls-image]: https://img.shields.io/coveralls/jclo/svg/master.svg?style=flat-square
[dependencies-image]: https://david-dm.org/jclo/svg/status.svg?theme=shields.io
[devdependencies-image]: https://david-dm.org/jclo/svg/dev-status.svg?theme=shields.io
[license-image]: https://img.shields.io/npm/l/@mobilabs/svg.svg?style=flat-square

[npm-url]: https://www.npmjs.com/package/@mobilabs/svg
[npm-install-url]: https://nodei.co/npm/@mobilabs/svg
[node-url]: http://nodejs.org/download
[download-url]: https://www.npmjs.com/package/@mobilabs/svg
[travis-url]: https://travis-ci.org/jclo/svg
[coveralls-url]: https://coveralls.io/github/jclo/svg?branch=master
[dependencies-url]: https://david-dm.org/jclo/svg
[devdependencies-url]: https://david-dm.org/jclo/svg?type=dev
[license-url]: http://opensource.org/licenses/MIT
