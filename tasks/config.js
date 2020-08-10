/* eslint one-var: 0, semi-style: 0 */


// -- Vendor Modules


// -- Local Modules
const pack = require('../package.json');


// -- Local Constants
const libname = 'SVG'
    , name    = libname.replace(/\s+/g, '').toLowerCase()
    , source  = './src/svg.js'
    ;


// -- Local Variables


// -- Main

module.exports = {
  ES6GLOB: '$__ES6GLOB',
  dist: './_dist',
  libdir: './lib',
  libname,
  name,

  // This is the entry javascript file of your library.
  source,
  index: './index.js',
  distlink: `./_dist/lib/${name}.js`,

  get license() {
    return ['/*! ****************************************************************************',
      ` * ${libname} v${pack.version}`,
      ' *',
      ` * ${pack.description}.`,
      ' * (you can download it from npm or github repositories)',
      ` * Copyright (c) ${(new Date()).getFullYear()} ${pack.author.name} <${pack.author.email}> (${pack.author.url}).`,
      ' * Released under the MIT license. You may obtain a copy of the License',
      ' * at: http://www.opensource.org/licenses/mit-license.php).',
      ' * Built from ES6Kadoo v0.0.0-beta.9.',
      ' * ************************************************************************** */',
      ''].join('\n');
  },
};
