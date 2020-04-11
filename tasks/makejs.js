/* eslint  one-var: 0, import/no-extraneous-dependencies: 0, semi-style: 0 */


// -- Vendor Modules
const { src, dest, series } = require('gulp')
    , del     = require('del')
    , concat  = require('gulp-concat')
    , Kadoo   = require('kadoo')
    , replace = require('gulp-replace')
    ;


// -- Local Modules
const pack   = require('../package.json')
    , config = require('./config')
    ;


// -- Local Constants
const destination = config.libdir
    , { source }  = config
    , { name }    = config
    , { version } = pack
    ;


// -- Local Variables


// -- Gulp Private Tasks

// Removes the previous version.
function clean(done) {
  del.sync(destination);
  done();
}

// Creates the library.
function dolib() {
  const kadoo = Kadoo(source);

  return kadoo.bundle()
    .pipe(replace('{{lib:version}}', version))
    .pipe(concat(`${name}.js`))
    .pipe(dest(destination))
  ;
}

// Remove extra global.
// (keep the first global only)
function rmextraglob() {
  return src(`${destination}/${name}.js`)
    .pipe(replace(/\/\* global/, '/* gloobal'))
    .pipe(replace(/\/\* global[\w$_\s,]+\*\//g, '/* - */'))
    .pipe(replace(/\/\* gloobal/, '/* global'))
    .pipe(dest(destination))
  ;
}

// Remove extra 'use strict'.
// (keep the two first only)
function rmextrastrict() {
  return src(`${destination}/${name}.js`)
    .pipe(replace(/use strict/, 'use_strict'))
    .pipe(replace(/use strict/, 'use_strict'))
    .pipe(replace(/'use strict';/g, '/* - */'))
    .pipe(replace(/use_strict/g, 'use strict'))
    .pipe(dest(destination))
  ;
}


// -- Gulp Public Task(s)
module.exports = series(clean, dolib, rmextraglob, rmextrastrict);
