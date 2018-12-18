"use strict";
/**
 * Created by laurence-ho on 29/06/17.
 */
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
Object.defineProperty(exports, "__esModule", { value: true });
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/** Evergreen browsers require these. **/
require("core-js/es6/reflect");
require("core-js/es7/reflect");
/** ALL Firefox browsers require the following to support `@angular/animation`. **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
require("zone.js/dist/zone"); // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`. 

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvbHlmaWxscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7R0FjRzs7QUFFSDs7R0FFRztBQUVILG1FQUFtRTtBQUNuRSwrQkFBK0I7QUFDL0IsK0JBQStCO0FBQy9CLGlDQUFpQztBQUNqQyxrQ0FBa0M7QUFDbEMsb0NBQW9DO0FBQ3BDLCtCQUErQjtBQUMvQiw2QkFBNkI7QUFDN0IsK0JBQStCO0FBQy9CLDZCQUE2QjtBQUM3Qiw4QkFBOEI7QUFDOUIsK0JBQStCO0FBQy9CLDRCQUE0QjtBQUM1Qiw0QkFBNEI7QUFFNUIsK0VBQStFO0FBQy9FLG9FQUFvRTtBQUVwRSw0RUFBNEU7QUFDNUUsOEVBQThFO0FBRzlFLHlDQUF5QztBQUN6QywrQkFBNkI7QUFDN0IsK0JBQTZCO0FBRzdCLG1GQUFtRjtBQUNuRiw4RUFBOEU7QUFJOUU7O0dBRUc7QUFDSCw2QkFBMkIsQ0FBRSw2QkFBNkI7QUFJMUQ7O0dBRUc7QUFFSDs7O0dBR0c7QUFDSCxvREFBb0QiLCJmaWxlIjoicG9seWZpbGxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgbGF1cmVuY2UtaG8gb24gMjkvMDYvMTcuXHJcbiAqL1xyXG4vKipcclxuICogVGhpcyBmaWxlIGluY2x1ZGVzIHBvbHlmaWxscyBuZWVkZWQgYnkgQW5ndWxhciBhbmQgaXMgbG9hZGVkIGJlZm9yZSB0aGUgYXBwLlxyXG4gKiBZb3UgY2FuIGFkZCB5b3VyIG93biBleHRyYSBwb2x5ZmlsbHMgdG8gdGhpcyBmaWxlLlxyXG4gKlxyXG4gKiBUaGlzIGZpbGUgaXMgZGl2aWRlZCBpbnRvIDIgc2VjdGlvbnM6XHJcbiAqICAgMS4gQnJvd3NlciBwb2x5ZmlsbHMuIFRoZXNlIGFyZSBhcHBsaWVkIGJlZm9yZSBsb2FkaW5nIFpvbmVKUyBhbmQgYXJlIHNvcnRlZCBieSBicm93c2Vycy5cclxuICogICAyLiBBcHBsaWNhdGlvbiBpbXBvcnRzLiBGaWxlcyBpbXBvcnRlZCBhZnRlciBab25lSlMgdGhhdCBzaG91bGQgYmUgbG9hZGVkIGJlZm9yZSB5b3VyIG1haW5cclxuICogICAgICBmaWxlLlxyXG4gKlxyXG4gKiBUaGUgY3VycmVudCBzZXR1cCBpcyBmb3Igc28tY2FsbGVkIFwiZXZlcmdyZWVuXCIgYnJvd3NlcnM7IHRoZSBsYXN0IHZlcnNpb25zIG9mIGJyb3dzZXJzIHRoYXRcclxuICogYXV0b21hdGljYWxseSB1cGRhdGUgdGhlbXNlbHZlcy4gVGhpcyBpbmNsdWRlcyBTYWZhcmkgPj0gMTAsIENocm9tZSA+PSA1NSAoaW5jbHVkaW5nIE9wZXJhKSxcclxuICogRWRnZSA+PSAxMyBvbiB0aGUgZGVza3RvcCwgYW5kIGlPUyAxMCBhbmQgQ2hyb21lIG9uIG1vYmlsZS5cclxuICpcclxuICogTGVhcm4gbW9yZSBpbiBodHRwczovL2FuZ3VsYXIuaW8vZG9jcy90cy9sYXRlc3QvZ3VpZGUvYnJvd3Nlci1zdXBwb3J0Lmh0bWxcclxuICovXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIEJST1dTRVIgUE9MWUZJTExTXHJcbiAqL1xyXG5cclxuLyoqIElFOSwgSUUxMCBhbmQgSUUxMSByZXF1aXJlcyBhbGwgb2YgdGhlIGZvbGxvd2luZyBwb2x5ZmlsbHMuICoqL1xyXG4vLyBpbXBvcnQgJ2NvcmUtanMvZXM2L3N5bWJvbCc7XHJcbi8vIGltcG9ydCAnY29yZS1qcy9lczYvb2JqZWN0JztcclxuLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9mdW5jdGlvbic7XHJcbi8vIGltcG9ydCAnY29yZS1qcy9lczYvcGFyc2UtaW50JztcclxuLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9wYXJzZS1mbG9hdCc7XHJcbi8vIGltcG9ydCAnY29yZS1qcy9lczYvbnVtYmVyJztcclxuLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9tYXRoJztcclxuLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9zdHJpbmcnO1xyXG4vLyBpbXBvcnQgJ2NvcmUtanMvZXM2L2RhdGUnO1xyXG4vLyBpbXBvcnQgJ2NvcmUtanMvZXM2L2FycmF5JztcclxuLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9yZWdleHAnO1xyXG4vLyBpbXBvcnQgJ2NvcmUtanMvZXM2L21hcCc7XHJcbi8vIGltcG9ydCAnY29yZS1qcy9lczYvc2V0JztcclxuXHJcbi8qKiBJRTEwIGFuZCBJRTExIHJlcXVpcmVzIHRoZSBmb2xsb3dpbmcgZm9yIE5nQ2xhc3Mgc3VwcG9ydCBvbiBTVkcgZWxlbWVudHMgKi9cclxuLy8gaW1wb3J0ICdjbGFzc2xpc3QuanMnOyAgLy8gUnVuIGBucG0gaW5zdGFsbCAtLXNhdmUgY2xhc3NsaXN0LmpzYC5cclxuXHJcbi8qKiBJRTEwIGFuZCBJRTExIHJlcXVpcmVzIHRoZSBmb2xsb3dpbmcgdG8gc3VwcG9ydCBgQGFuZ3VsYXIvYW5pbWF0aW9uYC4gKi9cclxuLy8gaW1wb3J0ICd3ZWItYW5pbWF0aW9ucy1qcyc7ICAvLyBSdW4gYG5wbSBpbnN0YWxsIC0tc2F2ZSB3ZWItYW5pbWF0aW9ucy1qc2AuXHJcblxyXG5cclxuLyoqIEV2ZXJncmVlbiBicm93c2VycyByZXF1aXJlIHRoZXNlLiAqKi9cclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9yZWZsZWN0JztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNy9yZWZsZWN0JztcclxuXHJcblxyXG4vKiogQUxMIEZpcmVmb3ggYnJvd3NlcnMgcmVxdWlyZSB0aGUgZm9sbG93aW5nIHRvIHN1cHBvcnQgYEBhbmd1bGFyL2FuaW1hdGlvbmAuICoqL1xyXG4vLyBpbXBvcnQgJ3dlYi1hbmltYXRpb25zLWpzJzsgIC8vIFJ1biBgbnBtIGluc3RhbGwgLS1zYXZlIHdlYi1hbmltYXRpb25zLWpzYC5cclxuXHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiBab25lIEpTIGlzIHJlcXVpcmVkIGJ5IEFuZ3VsYXIgaXRzZWxmLlxyXG4gKi9cclxuaW1wb3J0ICd6b25lLmpzL2Rpc3Qvem9uZSc7ICAvLyBJbmNsdWRlZCB3aXRoIEFuZ3VsYXIgQ0xJLlxyXG5cclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIEFQUExJQ0FUSU9OIElNUE9SVFNcclxuICovXHJcblxyXG4vKipcclxuICogRGF0ZSwgY3VycmVuY3ksIGRlY2ltYWwgYW5kIHBlcmNlbnQgcGlwZXMuXHJcbiAqIE5lZWRlZCBmb3I6IEFsbCBidXQgQ2hyb21lLCBGaXJlZm94LCBFZGdlLCBJRTExIGFuZCBTYWZhcmkgMTBcclxuICovXHJcbi8vIGltcG9ydCAnaW50bCc7ICAvLyBSdW4gYG5wbSBpbnN0YWxsIC0tc2F2ZSBpbnRsYC4iXX0=
