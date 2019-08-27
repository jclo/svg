/* eslint */

'use strict';

module.exports = {
  dist: './_dist',
  libdir: './lib',
  libname: 'SVG',
  parent: 'this',
  noparent: '-noparent',
  index: './index.js',
  // These are the Javascript files required to build the library. Choose one
  // pattern among these ones.
  /* eslint-disable no-multi-spaces */
  src: [
    // These three files (_header, tree.js and extend.js) must be declared in
    // this order as they create the umd module, define the object tree and
    // the function to fill the tree!
    './src/_header',
    './src/tree.js',
    './src/lib/extend.js',

    './src/private/animation.js',
    './src/private/attributes.js',
    './src/private/draw.js',
    './src/private/event.js',
    './src/private/staticmethods.js',
    './src/private/svgu.js',
    './src/private/text.js',
    './src/svg.js',

    // This file must always be the last one as it closes the umd module.
    './src/_footer',
  ],
  /* eslint-enable no-multi-spaces */
  license: ['/*! ****************************************************************************',
    ' * {{lib:name}} v{{lib:version}}',
    ' *',
    ' * {{lib:description}}.',
    ' * (you can download it from npm or github repositories)',
    ' * Copyright (c) 2019 {{lib:author}} <{{lib:email}}> ({{lib:url}}).',
    ' * Released under the MIT license. You may obtain a copy of the License',
    ' * at: http://www.opensource.org/licenses/mit-license.php).',
    ' * ************************************************************************** */',
    ''].join('\n'),
};
