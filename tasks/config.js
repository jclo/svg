/* eslint one-var: 0, semi-style: 0 */


// -- Vendor modules


// -- Local modules
const pack = require('../package.json');


// -- Local constants
const libname     = 'SVG'
    , source      = './src/svg.js'
    , exportname  = 'SVG'
    ;


// -- Local variables


// -- Main

module.exports = {
  dist: './_dist',
  libdir: './lib',
  libname,
  // This is the entry javascript file of your library.
  source,
  export: exportname,
  index: './index.js',
  distlink: `./lib/${libname}.js`,

  /* eslint-enable no-multi-spaces */
  get license() {
    return ['/*! ****************************************************************************',
      ` * ${libname} v${pack.version}`,
      ' *',
      ` * ${pack.description}.`,
      ' * (you can download it from npm or github repositories)',
      ` * Copyright (c) ${(new Date()).getFullYear()} ${pack.author.name} <${pack.author.email}> (${pack.author.url}).`,
      ' * Released under the MIT license. You may obtain a copy of the License',
      ' * at: http://www.opensource.org/licenses/mit-license.php).',
      ' * Built from ES6Pakket v0.0.1-alpha.1.',
      ' * ************************************************************************** */',
      ''].join('\n');
  },
};
