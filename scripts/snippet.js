/**
 * Minify this script for use in DDNA Studio
 * https://www.digitalocean.com/community/tools/minify
 */
var SM_CONFIG = {};

var w = window;
var d = document;

var s = d.createElement('script');
s.type = 'text/javascript';
s.async = false;
s.defer = true;

// update to public CDN path before minifying
s.src = '../soulmachines.js';

s.onload = () => {
  w.sm.configure(SM_CONFIG);
};

w.addEventListener('DOMContentLoaded', () => {
  var ps = d.getElementsByTagName('script')[0];
  ps.parentNode.insertBefore(s, ps);
});
