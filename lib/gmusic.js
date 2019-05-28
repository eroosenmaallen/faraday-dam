/** @file       lib/gmusic.js
 *  @author     Eddie Roosenmaallen <silvermoon82@gmail.com>
 *  @date       May 2017
 *
 *  This file provides an interface to Google Music
 */

const pm = new (require('playmusic'));


async function login() {
  const creds = {}
  
  
  
  pm.init(creds, function() {});
}
