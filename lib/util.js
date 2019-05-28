/** @file       lib/util.js
 *  @author     Eddie Roosenmaallen <silvermoon82@gmail.com>
 *  @date       May 2019
 *
 *  This module exports utility functions useful across Faraday
 *
 */

const fs = require('fs');
const path = require('path');
const homedir = require('homedir');

const baseDir = path.join(homedir(), '.faraday-dam');

function file(filename) {
  return path.join(baseDir, filename);
}

function fileExists(filename) {
 const file = path.join(baseDir, filename);
 
 return fs.existsSync(file);
}

function loadJSON(filename, defaults = {}) {
  const file = path.join(baseDir, filename);
  
  if (!fs.existsSync(file)) {
    console.warn(`${file} does not exist; returning default`)
    return defaults;
  }
  
  return JSON.parse(fs.readFileSync(file, 'utf-8'))
}

function saveJSON(filename, object) {
  const file = path.join(baseDir, filename);
  
  return fs.writeFileSync(file, JSON.stringify(object), 'utf-8');
}

module.exports = {
  file,         // for debug only!
  fileExists,
  loadJSON,
  saveJSON,
}
