/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(32);

	__webpack_require__(35);

	__webpack_require__(41);

	__webpack_require__(100);

	__webpack_require__(70);

	__webpack_require__(87);

	__webpack_require__(37);

	__webpack_require__(43);

	__webpack_require__(73);

	__webpack_require__(76);

	__webpack_require__(39);

	__webpack_require__(45);

	__webpack_require__(47);

	__webpack_require__(54);

	__webpack_require__(56);

	__webpack_require__(64);

	__webpack_require__(58);

	__webpack_require__(66);

	__webpack_require__(85);

	__webpack_require__(79);

	__webpack_require__(60);

	__webpack_require__(102);

	__webpack_require__(104);

	__webpack_require__(62);

	__webpack_require__(68);

	__webpack_require__(82);

	__webpack_require__(22);

	__webpack_require__(92);

	__webpack_require__(106);

	__webpack_require__(29);

	__webpack_require__(34);

	__webpack_require__(72);

	__webpack_require__(75);

	__webpack_require__(78);

	__webpack_require__(81);

	__webpack_require__(108);

	__webpack_require__(84);

	__webpack_require__(24);

	__webpack_require__(94);

	$(function () {
		var sidebar_state = -1; //-1 is the meaning of hiding
		var if_use = true;
		init_button();
		init_side_state();
		$(window).resize(init_sidebar);

		function init_button() {
			$('.masthead .ui.dropdown').dropdown({
				on: 'hover'
			});

			$(".sidebar_click").click(function () {
				$('.profile_sidebar.sidebar').sidebar('setting', 'dimPage', false).sidebar('setting', 'closable', false).sidebar('toggle');

				if (if_use) {
					$(".reismann_logo").toggle(500, function () {
						sidebar_state = -sidebar_state;
						if_use = true;
					});
				} else {
					sidebar_state = -sidebar_state;
					if_use = true;
				}
			});

			$('.ui.accordion').accordion();
		}

		function init_side_state() {
			if (window_width() <= 992) {
				sidebar_state = -1;
			} else {
				sidebar_state = 1;
			}
		}

		function init_sidebar() {
			if (if_use && sidebar_state > 0 && window_width() <= 992) {
				if_use = false;
				$(".sidebar_click").click();
			}
			if (if_use && sidebar_state < 0 && window_width() > 992) {
				if_use = false;
				$(".sidebar_click").click();
			}
		}

		function window_width() {
			var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
			return parseInt(w);
		}
	});

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 23 */,
/* 24 */
/***/ function(module, exports) {

	/*!
	 * # Semantic UI 2.1.8 - Accordion
	 * http://github.com/semantic-org/semantic-ui/
	 *
	 *
	 * Copyright 2015 Contributors
	 * Released under the MIT license
	 * http://opensource.org/licenses/MIT
	 *
	 */
	"use strict";

	!(function (e, n, t, i) {
	  "use strict";e.fn.accordion = function (t) {
	    var o,
	        a = e(this),
	        s = new Date().getTime(),
	        r = [],
	        c = arguments[0],
	        l = "string" == typeof c,
	        u = [].slice.call(arguments, 1);n.requestAnimationFrame || n.mozRequestAnimationFrame || n.webkitRequestAnimationFrame || n.msRequestAnimationFrame || function (e) {
	      setTimeout(e, 0);
	    };return a.each(function () {
	      var d,
	          g,
	          m = e.isPlainObject(t) ? e.extend(!0, {}, e.fn.accordion.settings, t) : e.extend({}, e.fn.accordion.settings),
	          f = m.className,
	          p = m.namespace,
	          v = m.selector,
	          b = m.error,
	          h = "." + p,
	          y = "module-" + p,
	          C = a.selector || "",
	          O = e(this),
	          x = O.find(v.title),
	          A = O.find(v.content),
	          F = this,
	          T = O.data(y);g = { initialize: function initialize() {
	          g.debug("Initializing", O), g.bind.events(), m.observeChanges && g.observeChanges(), g.instantiate();
	        }, instantiate: function instantiate() {
	          T = g, O.data(y, g);
	        }, destroy: function destroy() {
	          g.debug("Destroying previous instance", O), O.off(h).removeData(y);
	        }, refresh: function refresh() {
	          x = O.find(v.title), A = O.find(v.content);
	        }, observeChanges: function observeChanges() {
	          "MutationObserver" in n && (d = new MutationObserver(function (e) {
	            g.debug("DOM tree modified, updating selector cache"), g.refresh();
	          }), d.observe(F, { childList: !0, subtree: !0 }), g.debug("Setting up mutation observer", d));
	        }, bind: { events: function events() {
	            g.debug("Binding delegated events"), O.on(m.on + h, v.trigger, g.event.click);
	          } }, event: { click: function click() {
	            g.toggle.call(this);
	          } }, toggle: function toggle(n) {
	          var t = n !== i ? "number" == typeof n ? x.eq(n) : e(n).closest(v.title) : e(this).closest(v.title),
	              o = t.next(A),
	              a = o.hasClass(f.animating),
	              s = o.hasClass(f.active),
	              r = s && !a,
	              c = !s && a;g.debug("Toggling visibility of content", t), r || c ? m.collapsible ? g.close.call(t) : g.debug("Cannot close accordion content collapsing is disabled") : g.open.call(t);
	        }, open: function open(n) {
	          var t = n !== i ? "number" == typeof n ? x.eq(n) : e(n).closest(v.title) : e(this).closest(v.title),
	              o = t.next(A),
	              a = o.hasClass(f.animating),
	              s = o.hasClass(f.active),
	              r = s || a;return r ? void g.debug("Accordion already open, skipping", o) : (g.debug("Opening accordion content", t), m.onOpening.call(o), m.exclusive && g.closeOthers.call(t), t.addClass(f.active), o.stop(!0, !0).addClass(f.animating), m.animateChildren && (e.fn.transition !== i && O.transition("is supported") ? o.children().transition({ animation: "fade in", queue: !1, useFailSafe: !0, debug: m.debug, verbose: m.verbose, duration: m.duration }) : o.children().stop(!0, !0).animate({ opacity: 1 }, m.duration, g.resetOpacity)), void o.slideDown(m.duration, m.easing, function () {
	            o.removeClass(f.animating).addClass(f.active), g.reset.display.call(this), m.onOpen.call(this), m.onChange.call(this);
	          }));
	        }, close: function close(n) {
	          var t = n !== i ? "number" == typeof n ? x.eq(n) : e(n).closest(v.title) : e(this).closest(v.title),
	              o = t.next(A),
	              a = o.hasClass(f.animating),
	              s = o.hasClass(f.active),
	              r = !s && a,
	              c = s && a;!s && !r || c || (g.debug("Closing accordion content", o), m.onClosing.call(o), t.removeClass(f.active), o.stop(!0, !0).addClass(f.animating), m.animateChildren && (e.fn.transition !== i && O.transition("is supported") ? o.children().transition({ animation: "fade out", queue: !1, useFailSafe: !0, debug: m.debug, verbose: m.verbose, duration: m.duration }) : o.children().stop(!0, !0).animate({ opacity: 0 }, m.duration, g.resetOpacity)), o.slideUp(m.duration, m.easing, function () {
	            o.removeClass(f.animating).removeClass(f.active), g.reset.display.call(this), m.onClose.call(this), m.onChange.call(this);
	          }));
	        }, closeOthers: function closeOthers(n) {
	          var t,
	              o,
	              a,
	              s = n !== i ? x.eq(n) : e(this).closest(v.title),
	              r = s.parents(v.content).prev(v.title),
	              c = s.closest(v.accordion),
	              l = v.title + "." + f.active + ":visible",
	              u = v.content + "." + f.active + ":visible";m.closeNested ? (t = c.find(l).not(r), a = t.next(A)) : (t = c.find(l).not(r), o = c.find(u).find(l).not(r), t = t.not(o), a = t.next(A)), t.length > 0 && (g.debug("Exclusive enabled, closing other content", t), t.removeClass(f.active), a.removeClass(f.animating).stop(!0, !0), m.animateChildren && (e.fn.transition !== i && O.transition("is supported") ? a.children().transition({ animation: "fade out", useFailSafe: !0, debug: m.debug, verbose: m.verbose, duration: m.duration }) : a.children().stop(!0, !0).animate({ opacity: 0 }, m.duration, g.resetOpacity)), a.slideUp(m.duration, m.easing, function () {
	            e(this).removeClass(f.active), g.reset.display.call(this);
	          }));
	        }, reset: { display: function display() {
	            g.verbose("Removing inline display from element", this), e(this).css("display", ""), "" === e(this).attr("style") && e(this).attr("style", "").removeAttr("style");
	          }, opacity: function opacity() {
	            g.verbose("Removing inline opacity from element", this), e(this).css("opacity", ""), "" === e(this).attr("style") && e(this).attr("style", "").removeAttr("style");
	          } }, setting: function setting(n, t) {
	          if ((g.debug("Changing setting", n, t), e.isPlainObject(n))) e.extend(!0, m, n);else {
	            if (t === i) return m[n];m[n] = t;
	          }
	        }, internal: function internal(n, t) {
	          return g.debug("Changing internal", n, t), t === i ? g[n] : void (e.isPlainObject(n) ? e.extend(!0, g, n) : g[n] = t);
	        }, debug: function debug() {
	          m.debug && (m.performance ? g.performance.log(arguments) : (g.debug = Function.prototype.bind.call(console.info, console, m.name + ":"), g.debug.apply(console, arguments)));
	        }, verbose: function verbose() {
	          m.verbose && m.debug && (m.performance ? g.performance.log(arguments) : (g.verbose = Function.prototype.bind.call(console.info, console, m.name + ":"), g.verbose.apply(console, arguments)));
	        }, error: function error() {
	          g.error = Function.prototype.bind.call(console.error, console, m.name + ":"), g.error.apply(console, arguments);
	        }, performance: { log: function log(e) {
	            var n, t, i;m.performance && (n = new Date().getTime(), i = s || n, t = n - i, s = n, r.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: F, "Execution Time": t })), clearTimeout(g.performance.timer), g.performance.timer = setTimeout(g.performance.display, 500);
	          }, display: function display() {
	            var n = m.name + ":",
	                t = 0;s = !1, clearTimeout(g.performance.timer), e.each(r, function (e, n) {
	              t += n["Execution Time"];
	            }), n += " " + t + "ms", C && (n += " '" + C + "'"), (console.group !== i || console.table !== i) && r.length > 0 && (console.groupCollapsed(n), console.table ? console.table(r) : e.each(r, function (e, n) {
	              console.log(n.Name + ": " + n["Execution Time"] + "ms");
	            }), console.groupEnd()), r = [];
	          } }, invoke: function invoke(n, t, a) {
	          var s,
	              r,
	              c,
	              l = T;return t = t || u, a = F || a, "string" == typeof n && l !== i && (n = n.split(/[\. ]/), s = n.length - 1, e.each(n, function (t, o) {
	            var a = t != s ? o + n[t + 1].charAt(0).toUpperCase() + n[t + 1].slice(1) : n;if (e.isPlainObject(l[a]) && t != s) l = l[a];else {
	              if (l[a] !== i) return r = l[a], !1;if (!e.isPlainObject(l[o]) || t == s) return l[o] !== i ? (r = l[o], !1) : (g.error(b.method, n), !1);l = l[o];
	            }
	          })), e.isFunction(r) ? c = r.apply(a, t) : r !== i && (c = r), e.isArray(o) ? o.push(c) : o !== i ? o = [o, c] : c !== i && (o = c), r;
	        } }, l ? (T === i && g.initialize(), g.invoke(c)) : (T !== i && T.invoke("destroy"), g.initialize());
	    }), o !== i ? o : this;
	  }, e.fn.accordion.settings = { name: "Accordion", namespace: "accordion", debug: !1, verbose: !1, performance: !0, on: "click", observeChanges: !0, exclusive: !0, collapsible: !0, closeNested: !1, animateChildren: !0, duration: 350, easing: "easeOutQuad", onOpening: function onOpening() {}, onOpen: function onOpen() {}, onClosing: function onClosing() {}, onClose: function onClose() {}, onChange: function onChange() {}, error: { method: "The method you called is not defined" }, className: { active: "active", animating: "animating" }, selector: { accordion: ".accordion", title: ".title", trigger: ".title", content: ".content" } }, e.extend(e.easing, { easeOutQuad: function easeOutQuad(e, n, t, i, o) {
	      return -i * (n /= o) * (n - 2) + t;
	    } });
	})(jQuery, window, document);

/***/ },
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["jQuery"] = __webpack_require__(30);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["$"] = __webpack_require__(31);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v2.2.3
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-04-05T19:26Z
	 */

	(function( global, factory ) {

		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//"use strict";
	var arr = [];

	var document = window.document;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var support = {};



	var
		version = "2.2.3",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android<4.1
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// Start with an empty selector
		selector: "",

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?

				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :

				// Return all the elements in a clean array
				slice.call( this );
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {

			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			var realStringObj = obj && obj.toString();
			return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
		},

		isPlainObject: function( obj ) {
			var key;

			// Not plain objects:
			// - Any object or value whose internal [[Class]] property is not "[object Object]"
			// - DOM nodes
			// - window
			if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}

			// Not own constructor property must be Object
			if ( obj.constructor &&
					!hasOwn.call( obj, "constructor" ) &&
					!hasOwn.call( obj.constructor.prototype || {}, "isPrototypeOf" ) ) {
				return false;
			}

			// Own properties are enumerated firstly, so to speed up,
			// if last one is own, then all properties are own
			for ( key in obj ) {}

			return key === undefined || hasOwn.call( obj, key );
		},

		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}

			// Support: Android<4.0, iOS<6 (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			var script,
				indirect = eval;

			code = jQuery.trim( code );

			if ( code ) {

				// If the code includes a valid, prologue position
				// strict mode pragma, execute code by injecting a
				// script tag into the document.
				if ( code.indexOf( "use strict" ) === 1 ) {
					script = document.createElement( "script" );
					script.text = code;
					document.head.appendChild( script ).parentNode.removeChild( script );
				} else {

					// Otherwise, avoid the DOM node creation, insertion
					// and removal by using an indirect global eval

					indirect( code );
				}
			}
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE9-11+
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android<4.1
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	// JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}
	/* jshint ignore: end */

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: iOS 8.2 (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.2.1
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-10-17
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,
		rescape = /'|\\/g,

		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, nidselect, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rescape, "\\$&" );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
						while ( i-- ) {
							groups[i] = nidselect + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");

		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( (parent = document.defaultView) && parent.top !== parent ) {
			// Support: IE 11
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( document.createComment("") );
			return !div.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},

			"disabled": function( elem ) {
				return elem.disabled === true;
			},

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( (oldCache = uniqueCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ dir ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;



	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			} );

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );

		}

		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i,
				len = this.length,
				ret = [],
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						// Support: Blackberry 4.6
						// gEBID returns nodes no longer in the document (#6963)
						if ( elem && elem.parentNode ) {

							// Inject the element directly into the jQuery object
							this.length = 1;
							this[ 0 ] = elem;
						}

						this.context = document;
						this.selector = selector;
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;

			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( pos ?
						pos.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnotwhite = ( /\S+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this === promise ? newDefer.promise() : this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Keep pipe for back-compat
			promise.pipe = promise.then;

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];

				// promise[ done | fail | progress ] = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add( function() {

						// state = [ resolved | rejected ]
						state = stateString;

					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}

				// deferred[ resolve | reject | notify ]
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,

				// the count of uncompleted subordinates
				remaining = length !== 1 ||
					( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

				// the master Deferred.
				// If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );
						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},

				progressValues, progressContexts, resolveContexts;

			// Add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.progress( updateFunc( i, progressContexts, progressValues ) )
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject );
					} else {
						--remaining;
					}
				}
			}

			// If we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}

			return deferred.promise();
		}
	} );


	// The deferred used on DOM ready
	var readyList;

	jQuery.fn.ready = function( fn ) {

		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );

			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	} );

	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {

			readyList = jQuery.Deferred();

			// Catch cases where $(document).ready() is called
			// after the browser event has already occurred.
			// Support: IE9-10 only
			// Older IE sometimes signals "interactive" too soon
			if ( document.readyState === "complete" ||
				( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

				// Handle it asynchronously to allow scripts the opportunity to delay ready
				window.setTimeout( jQuery.ready );

			} else {

				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed );

				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed );
			}
		}
		return readyList.promise( obj );
	};

	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		register: function( owner, initial ) {
			var value = initial || {};

			// If it is a node unlikely to be stringify-ed or looped over
			// use plain assignment
			if ( owner.nodeType ) {
				owner[ this.expando ] = value;

			// Otherwise secure it in a non-enumerable, non-writable property
			// configurability must be true to allow the property to be
			// deleted with the delete operator
			} else {
				Object.defineProperty( owner, this.expando, {
					value: value,
					writable: true,
					configurable: true
				} );
			}
			return owner[ this.expando ];
		},
		cache: function( owner ) {

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( !acceptData( owner ) ) {
				return {};
			}

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			if ( typeof data === "string" ) {
				cache[ data ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :
				owner[ this.expando ] && owner[ this.expando ][ key ];
		},
		access: function( owner, key, value ) {
			var stored;

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				stored = this.get( owner, key );

				return stored !== undefined ?
					stored : this.get( owner, jQuery.camelCase( key ) );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i, name, camel,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key === undefined ) {
				this.register( owner );

			} else {

				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {

					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = key.concat( key.map( jQuery.camelCase ) );
				} else {
					camel = jQuery.camelCase( key );

					// Try the string as a key before any manipulation
					if ( key in cache ) {
						name = [ key, camel ];
					} else {

						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						name = camel;
						name = name in cache ?
							[ name ] : ( name.match( rnotwhite ) || [] );
					}
				}

				i = name.length;

				while ( i-- ) {
					delete cache[ name[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <= 35-45+
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://code.google.com/p/chromium/issues/detail?id=378607
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :

						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data, camelKey;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// with the key as-is
					data = dataUser.get( elem, key ) ||

						// Try to find dashed key if it exists (gh-2779)
						// This is for 2.2.x only
						dataUser.get( elem, key.replace( rmultiDash, "-$&" ).toLowerCase() );

					if ( data !== undefined ) {
						return data;
					}

					camelKey = jQuery.camelCase( key );

					// Attempt to get data from the cache
					// with the key camelized
					data = dataUser.get( elem, camelKey );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, camelKey, undefined );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				camelKey = jQuery.camelCase( key );
				this.each( function() {

					// First, attempt to store a copy or reference of any
					// data that might've been store with a camelCased key.
					var data = dataUser.get( this, camelKey );

					// For HTML5 data-* attribute interop, we have to
					// store property names with dashes in a camelCase form.
					// This might not apply to all properties...*
					dataUser.set( this, camelKey, value );

					// *... In the case of properties that might _actually_
					// have dashes, we need to also store a copy of that
					// unchanged property.
					if ( key.indexOf( "-" ) > -1 && data !== undefined ) {
						dataUser.set( this, key, value );
					}
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHidden = function( elem, el ) {

			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" ||
				!jQuery.contains( elem.ownerDocument, elem );
		};



	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() { return tween.cur(); } :
				function() { return jQuery.css( elem, prop, "" ); },
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([\w:-]+)/ );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );



	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	// Support: IE9
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {

		// Support: IE9-11+
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
				[];

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {

					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0-4.3, Safari<=5.1
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Safari<=5.1, Android<4.2
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE<=11+
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();


	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE9
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( event ) {

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );

			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Support (at least): Chrome, IE9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox<=42+
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		// Includes some event props shared by KeyEvent and MouseEvent
		props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
			"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

		fixHooks: {},

		keyHooks: {
			props: "char charCode key keyCode".split( " " ),
			filter: function( event, original ) {

				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}

				return event;
			}
		},

		mouseHooks: {
			props: ( "button buttons clientX clientY offsetX offsetY pageX pageY " +
				"screenX screenY toElement" ).split( " " ),
			filter: function( event, original ) {
				var eventDoc, doc, body,
					button = original.button;

				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;

					event.pageX = original.clientX +
						( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
						( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY +
						( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
						( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}

				return event;
			}
		},

		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}

			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];

			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

			event = new jQuery.Event( originalEvent );

			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}

			// Support: Cordova 2.5 (WebKit) (#13255)
			// All events should have a target; Cordova deviceready doesn't
			if ( !event.target ) {
				event.target = document;
			}

			// Support: Safari 6.0+, Chrome<28
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}

			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android<4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://code.google.com/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {
		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

		// Support: IE 10-11, Edge 10240+
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

			elem.getElementsByTagName( "tbody" )[ 0 ] ||
				elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
			elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android<4.1, PhantomJS<2
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {

		// Keep domManip exposed until 3.0 (gh-2225)
		domManip: domManip,

		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: QtWebKit
				// .get() because push.apply(_, arraylike) throws
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );


	var iframe,
		elemdisplay = {

			// Support: Firefox
			// We have to pre-define these values for FF (#10227)
			HTML: "block",
			BODY: "block"
		};

	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */

	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

			display = jQuery.css( elem[ 0 ], "display" );

		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();

		return display;
	}

	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];

		if ( !display ) {
			display = actualDisplay( nodeName, doc );

			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {

				// Use the already-created iframe if possible
				iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
					.appendTo( doc.documentElement );

				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = iframe[ 0 ].contentDocument;

				// Support: IE
				doc.write();
				doc.close();

				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}

			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}

		return display;
	}
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};


	var documentElement = document.documentElement;



	( function() {
		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE9-11+
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {
			div.style.cssText =

				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild( container );
		}

		jQuery.extend( support, {
			pixelPosition: function() {

				// This test is executed only once but we still do memoizing
				// since we can use the boxSizingReliable pre-computing.
				// No need to check if the test was already performed, though.
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {

				// Support: Android 4.0-4.3
				// We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
				// since that compresses better and they're computed together anyway.
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {

				// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return reliableMarginLeftVal;
			},
			reliableMarginRight: function() {

				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// This support function is only executed once so no memoizing is needed.
				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );

				// Reset CSS: box-sizing; display; margin; border; padding
				marginDiv.style.cssText = div.style.cssText =

					// Support: Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;box-sizing:content-box;" +
					"display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				documentElement.appendChild( container );

				ret = !parseFloat( window.getComputedStyle( marginDiv ).marginRight );

				documentElement.removeChild( container );
				div.removeChild( marginDiv );

				return ret;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

		// Support: Opera 12.1x only
		// Fall back to style even without computed
		// computed is undefined for elems on document fragments
		if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// Support: IE9
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// http://dev.w3.org/csswg/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE9-11+
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,

		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	function setPositiveNumber( elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?

			// If we already have the right measurement, avoid augmentation
			4 :

			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Support: IE11 only
		// In IE 11 fullscreen elements inside of an iframe have
		// 100x too small dimensions (gh-1764).
		if ( document.msFullscreenElement && window.top !== window ) {

			// Support: IE11 only
			// Running getBoundingClientRect on a disconnected node
			// in IE throws an error.
			if ( elem.getClientRects().length ) {
				val = Math.round( elem.getBoundingClientRect()[ name ] * 100 );
			}
		}

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {

			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;

		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			values[ index ] = dataPriv.get( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {

				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}

				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] = dataPriv.access(
						elem,
						"olddisplay",
						defaultDisplay( elem.nodeName )
					);
				}
			} else {
				hidden = isHidden( elem );

				if ( display !== "none" || !hidden ) {
					dataPriv.set(
						elem,
						"olddisplay",
						hidden ? display : jQuery.css( elem, "display" )
					);
				}
			}
		}

		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}

		return elements;
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// Support: IE9-11+
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					style[ name ] = value;
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
						elem.offsetWidth === 0 ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// Support: Android 2.3
	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				return swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back Compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE9-10 do not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );

			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				dataPriv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
				style.display = "inline-block";
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// If there is dataShow left over from a stopped hide or show
					// and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}

		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", {} );
			}

			// Store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done( function() {
					jQuery( elem ).hide();
				} );
			}
			anim.done( function() {
				var prop;

				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}

		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
			style.display = display;
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length ; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {
		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ?
			opt.duration : opt.duration in jQuery.fx.speeds ?
				jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		window.clearInterval( timerId );

		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: iOS<=5.1, Android<=4.2+
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE<=11+
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: Android<=2.3
		// Options inside disabled selects are incorrectly marked as disabled
		select.disabled = true;
		support.optDisabled = !opt.disabled;

		// Support: IE<=11+
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					propName = jQuery.propFix[ name ] || name;

					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {

						// Set corresponding property to false
						elem[ propName ] = false;
					}

					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




	var rclass = /[\t\r\n\f]/g;

	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g,
		rspaces = /[\x20\t\r\n\f]+/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?

						// Handle most common string cases
						ret.replace( rreturn, "" ) :

						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ?
									!option.disabled : option.getAttribute( "disabled" ) === null ) &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];
						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true

					// Previously, `originalEvent: {}` was set here, so stopPropagation call
					// would not be triggered on donor event, since in our own
					// jQuery.event.stopPropagation function we had a check for existence of
					// originalEvent.stopPropagation method, so, consequently it would be a noop.
					//
					// But now, this "simulate" function is used only for events
					// for which stopPropagation() is noop, so there is no need for that anymore.
					//
					// For the 1.x branch though, guard for "click" and "submit"
					// events is still used, but was moved to jQuery.event.stopPropagation function
					// because `originalEvent` should point to the original event for the constancy
					// with other events and for more focused logic
				}
			);

			jQuery.event.trigger( e, null, elem );

			if ( e.isDefaultPrevented() ) {
				event.preventDefault();
			}
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );




	support.focusin = "onfocusin" in window;


	// Support: Firefox
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome, Safari
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );



	// Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON = function( data ) {
		return JSON.parse( data + "" );
	};


	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE9
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

			// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// The jqXHR state
				state = 0,

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {

									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;

			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" ).replace( rhash, "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE8-11+
				// IE throws exception if url is malformed, e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE8-11+
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?

						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :

						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( state === 2 ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );

					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Called once
				if ( state === 2 ) {
					return;
				}

				// State is "done" now
				state = 2;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapAll( html.call( this, i ) );
				} );
			}

			if ( this[ 0 ] ) {

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function() {
			return this.parent().each( function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			} ).end();
		}
	} );


	jQuery.expr.filters.hidden = function( elem ) {
		return !jQuery.expr.filters.visible( elem );
	};
	jQuery.expr.filters.visible = function( elem ) {

		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		// Use OR instead of AND as the element is not visible if either is true
		// See tickets #10406 and #13132
		return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
	};




	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {

				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE9
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE9
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );

					// Support: IE9
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	// Keep a copy of the old load method
	var _load = jQuery.fn.load;

	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}

		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var docElem, win,
				elem = this[ 0 ],
				box = { top: 0, left: 0 },
				doc = elem && elem.ownerDocument;

			if ( !doc ) {
				return;
			}

			docElem = doc.documentElement;

			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}

			box = elem.getBoundingClientRect();
			win = getWindow( doc );
			return {
				top: box.top + win.pageYOffset - docElem.clientTop,
				left: box.left + win.pageXOffset - docElem.clientLeft
			};
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari<7-8+, Chrome<37-44+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		} );
	} );


	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		},
		size: function() {
			return this.length;
		}
	} );

	jQuery.fn.andSelf = jQuery.fn.addBack;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}



	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}

	return jQuery;
	}));


/***/ },
/* 32 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 33 */,
/* 34 */
/***/ function(module, exports) {

	/*!
	 * # Semantic UI 2.1.8 - Site
	 * http://github.com/semantic-org/semantic-ui/
	 *
	 *
	 * Copyright 2015 Contributors
	 * Released under the MIT license
	 * http://opensource.org/licenses/MIT
	 *
	 */
	"use strict";

	!(function (e, n, o, i) {
	  e.site = e.fn.site = function (t) {
	    var s,
	        r,
	        a = new Date().getTime(),
	        c = [],
	        l = arguments[0],
	        u = "string" == typeof l,
	        d = [].slice.call(arguments, 1),
	        f = e.isPlainObject(t) ? e.extend(!0, {}, e.site.settings, t) : e.extend({}, e.site.settings),
	        m = f.namespace,
	        g = f.error,
	        b = "module-" + m,
	        p = e(o),
	        v = p,
	        h = this,
	        y = v.data(b);return s = { initialize: function initialize() {
	        s.instantiate();
	      }, instantiate: function instantiate() {
	        s.verbose("Storing instance of site", s), y = s, v.data(b, s);
	      }, normalize: function normalize() {
	        s.fix.console(), s.fix.requestAnimationFrame();
	      }, fix: { console: (function (_console) {
	          function console() {
	            return _console.apply(this, arguments);
	          }

	          console.toString = function () {
	            return _console.toString();
	          };

	          return console;
	        })(function () {
	          s.debug("Normalizing window.console"), console !== i && console.log !== i || (s.verbose("Console not available, normalizing events"), s.disable.console()), "undefined" != typeof console.group && "undefined" != typeof console.groupEnd && "undefined" != typeof console.groupCollapsed || (s.verbose("Console group not available, normalizing events"), n.console.group = function () {}, n.console.groupEnd = function () {}, n.console.groupCollapsed = function () {}), "undefined" == typeof console.markTimeline && (s.verbose("Mark timeline not available, normalizing events"), n.console.markTimeline = function () {});
	        }), consoleClear: function consoleClear() {
	          s.debug("Disabling programmatic console clearing"), n.console.clear = function () {};
	        }, requestAnimationFrame: function requestAnimationFrame() {
	          s.debug("Normalizing requestAnimationFrame"), n.requestAnimationFrame === i && (s.debug("RequestAnimationFrame not available, normalizing event"), n.requestAnimationFrame = n.requestAnimationFrame || n.mozRequestAnimationFrame || n.webkitRequestAnimationFrame || n.msRequestAnimationFrame || function (e) {
	            setTimeout(e, 0);
	          });
	        } }, moduleExists: function moduleExists(n) {
	        return e.fn[n] !== i && e.fn[n].settings !== i;
	      }, enabled: { modules: function modules(n) {
	          var o = [];return n = n || f.modules, e.each(n, function (e, n) {
	            s.moduleExists(n) && o.push(n);
	          }), o;
	        } }, disabled: { modules: function modules(n) {
	          var o = [];return n = n || f.modules, e.each(n, function (e, n) {
	            s.moduleExists(n) || o.push(n);
	          }), o;
	        } }, change: { setting: function setting(n, o, t, r) {
	          t = "string" == typeof t ? "all" === t ? f.modules : [t] : t || f.modules, r = r !== i ? r : !0, e.each(t, function (i, t) {
	            var a,
	                c = s.moduleExists(t) ? e.fn[t].settings.namespace || !1 : !0;s.moduleExists(t) && (s.verbose("Changing default setting", n, o, t), e.fn[t].settings[n] = o, r && c && (a = e(":data(module-" + c + ")"), a.length > 0 && (s.verbose("Modifying existing settings", a), a[t]("setting", n, o))));
	          });
	        }, settings: function settings(n, o, t) {
	          o = "string" == typeof o ? [o] : o || f.modules, t = t !== i ? t : !0, e.each(o, function (o, i) {
	            var r;s.moduleExists(i) && (s.verbose("Changing default setting", n, i), e.extend(!0, e.fn[i].settings, n), t && m && (r = e(":data(module-" + m + ")"), r.length > 0 && (s.verbose("Modifying existing settings", r), r[i]("setting", n))));
	          });
	        } }, enable: { console: function console() {
	          s.console(!0);
	        }, debug: function debug(e, n) {
	          e = e || f.modules, s.debug("Enabling debug for modules", e), s.change.setting("debug", !0, e, n);
	        }, verbose: function verbose(e, n) {
	          e = e || f.modules, s.debug("Enabling verbose debug for modules", e), s.change.setting("verbose", !0, e, n);
	        } }, disable: { console: function console() {
	          s.console(!1);
	        }, debug: function debug(e, n) {
	          e = e || f.modules, s.debug("Disabling debug for modules", e), s.change.setting("debug", !1, e, n);
	        }, verbose: function verbose(e, n) {
	          e = e || f.modules, s.debug("Disabling verbose debug for modules", e), s.change.setting("verbose", !1, e, n);
	        } }, console: function console(e) {
	        if (e) {
	          if (y.cache.console === i) return void s.error(g.console);s.debug("Restoring console function"), n.console = y.cache.console;
	        } else s.debug("Disabling console function"), y.cache.console = n.console, n.console = { clear: function clear() {}, error: function error() {}, group: function group() {}, groupCollapsed: function groupCollapsed() {}, groupEnd: function groupEnd() {}, info: function info() {}, log: function log() {}, markTimeline: function markTimeline() {}, warn: function warn() {} };
	      }, destroy: function destroy() {
	        s.verbose("Destroying previous site for", v), v.removeData(b);
	      }, cache: {}, setting: function setting(n, o) {
	        if (e.isPlainObject(n)) e.extend(!0, f, n);else {
	          if (o === i) return f[n];f[n] = o;
	        }
	      }, internal: function internal(n, o) {
	        if (e.isPlainObject(n)) e.extend(!0, s, n);else {
	          if (o === i) return s[n];s[n] = o;
	        }
	      }, debug: function debug() {
	        f.debug && (f.performance ? s.performance.log(arguments) : (s.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), s.debug.apply(console, arguments)));
	      }, verbose: function verbose() {
	        f.verbose && f.debug && (f.performance ? s.performance.log(arguments) : (s.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), s.verbose.apply(console, arguments)));
	      }, error: function error() {
	        s.error = Function.prototype.bind.call(console.error, console, f.name + ":"), s.error.apply(console, arguments);
	      }, performance: { log: function log(e) {
	          var n, o, i;f.performance && (n = new Date().getTime(), i = a || n, o = n - i, a = n, c.push({ Element: h, Name: e[0], Arguments: [].slice.call(e, 1) || "", "Execution Time": o })), clearTimeout(s.performance.timer), s.performance.timer = setTimeout(s.performance.display, 500);
	        }, display: function display() {
	          var n = f.name + ":",
	              o = 0;a = !1, clearTimeout(s.performance.timer), e.each(c, function (e, n) {
	            o += n["Execution Time"];
	          }), n += " " + o + "ms", (console.group !== i || console.table !== i) && c.length > 0 && (console.groupCollapsed(n), console.table ? console.table(c) : e.each(c, function (e, n) {
	            console.log(n.Name + ": " + n["Execution Time"] + "ms");
	          }), console.groupEnd()), c = [];
	        } }, invoke: function invoke(n, o, t) {
	        var a,
	            c,
	            l,
	            u = y;return o = o || d, t = h || t, "string" == typeof n && u !== i && (n = n.split(/[\. ]/), a = n.length - 1, e.each(n, function (o, t) {
	          var r = o != a ? t + n[o + 1].charAt(0).toUpperCase() + n[o + 1].slice(1) : n;if (e.isPlainObject(u[r]) && o != a) u = u[r];else {
	            if (u[r] !== i) return c = u[r], !1;if (!e.isPlainObject(u[t]) || o == a) return u[t] !== i ? (c = u[t], !1) : (s.error(g.method, n), !1);u = u[t];
	          }
	        })), e.isFunction(c) ? l = c.apply(t, o) : c !== i && (l = c), e.isArray(r) ? r.push(l) : r !== i ? r = [r, l] : l !== i && (r = l), c;
	      } }, u ? (y === i && s.initialize(), s.invoke(l)) : (y !== i && s.destroy(), s.initialize()), r !== i ? r : this;
	  }, e.site.settings = { name: "Site", namespace: "site", error: { console: "Console cannot be restored, most likely it was overwritten outside of module", method: "The method you called is not defined." }, debug: !1, verbose: !1, performance: !0, modules: ["accordion", "api", "checkbox", "dimmer", "dropdown", "embed", "form", "modal", "nag", "popup", "rating", "shape", "sidebar", "state", "sticky", "tab", "transition", "visit", "visibility"], siteNamespace: "site", namespaceStub: { cache: {}, config: {}, sections: {}, section: {}, utilities: {} } }, e.extend(e.expr[":"], { data: e.expr.createPseudo ? e.expr.createPseudo(function (n) {
	      return function (o) {
	        return !!e.data(o, n);
	      };
	    }) : function (n, o, i) {
	      return !!e.data(n, i[3]);
	    } });
	})(jQuery, window, document);

/***/ },
/* 35 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 36 */,
/* 37 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 38 */,
/* 39 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 40 */,
/* 41 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 42 */,
/* 43 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 44 */,
/* 45 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 46 */,
/* 47 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 55 */,
/* 56 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 57 */,
/* 58 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 59 */,
/* 60 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 61 */,
/* 62 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 63 */,
/* 64 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 65 */,
/* 66 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 67 */,
/* 68 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 69 */,
/* 70 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 71 */,
/* 72 */
/***/ function(module, exports) {

	/*!
	 * # Semantic UI 2.1.8 - Checkbox
	 * http://github.com/semantic-org/semantic-ui/
	 *
	 *
	 * Copyright 2015 Contributors
	 * Released under the MIT license
	 * http://opensource.org/licenses/MIT
	 *
	 */
	"use strict";

	!(function (e, n, t, i) {
	  "use strict";e.fn.checkbox = function (o) {
	    var a,
	        c = e(this),
	        r = c.selector || "",
	        d = new Date().getTime(),
	        l = [],
	        s = arguments[0],
	        u = "string" == typeof s,
	        b = [].slice.call(arguments, 1);return c.each(function () {
	      var c,
	          h,
	          g = e.extend(!0, {}, e.fn.checkbox.settings, o),
	          p = g.className,
	          f = g.namespace,
	          k = g.selector,
	          m = g.error,
	          v = "." + f,
	          y = "module-" + f,
	          C = e(this),
	          x = e(this).children(k.label),
	          w = e(this).children(k.input),
	          I = w[0],
	          S = !1,
	          D = !1,
	          E = C.data(y),
	          O = this;h = { initialize: function initialize() {
	          h.verbose("Initializing checkbox", g), h.create.label(), h.bind.events(), h.set.tabbable(), h.hide.input(), h.observeChanges(), h.instantiate(), h.setup();
	        }, instantiate: function instantiate() {
	          h.verbose("Storing instance of module", h), E = h, C.data(y, h);
	        }, destroy: function destroy() {
	          h.verbose("Destroying module"), h.unbind.events(), h.show.input(), C.removeData(y);
	        }, fix: { reference: function reference() {
	            C.is(k.input) && (h.debug("Behavior called on <input> adjusting invoked element"), C = C.closest(k.checkbox), h.refresh());
	          } }, setup: function setup() {
	          h.set.initialLoad(), h.is.indeterminate() ? (h.debug("Initial value is indeterminate"), h.indeterminate()) : h.is.checked() ? (h.debug("Initial value is checked"), h.check()) : (h.debug("Initial value is unchecked"), h.uncheck()), h.remove.initialLoad();
	        }, refresh: function refresh() {
	          x = C.children(k.label), w = C.children(k.input), I = w[0];
	        }, hide: { input: function input() {
	            h.verbose("Modfying <input> z-index to be unselectable"), w.addClass(p.hidden);
	          } }, show: { input: function input() {
	            h.verbose("Modfying <input> z-index to be selectable"), w.removeClass(p.hidden);
	          } }, observeChanges: function observeChanges() {
	          "MutationObserver" in n && (c = new MutationObserver(function (e) {
	            h.debug("DOM tree modified, updating selector cache"), h.refresh();
	          }), c.observe(O, { childList: !0, subtree: !0 }), h.debug("Setting up mutation observer", c));
	        }, attachEvents: function attachEvents(n, t) {
	          var i = e(n);t = e.isFunction(h[t]) ? h[t] : h.toggle, i.length > 0 ? (h.debug("Attaching checkbox events to element", n, t), i.on("click" + v, t)) : h.error(m.notFound);
	        }, event: { click: function click(n) {
	            var t = e(n.target);return t.is(k.input) ? void h.verbose("Using default check action on initialized checkbox") : t.is(k.link) ? void h.debug("Clicking link inside checkbox, skipping toggle") : (h.toggle(), w.focus(), void n.preventDefault());
	          }, keydown: function keydown(e) {
	            var n = e.which,
	                t = { enter: 13, space: 32, escape: 27 };n == t.escape ? (h.verbose("Escape key pressed blurring field"), w.blur(), D = !0) : e.ctrlKey || n != t.space && n != t.enter ? D = !1 : (h.verbose("Enter/space key pressed, toggling checkbox"), h.toggle(), D = !0);
	          }, keyup: function keyup(e) {
	            D && e.preventDefault();
	          } }, check: function check() {
	          h.should.allowCheck() && (h.debug("Checking checkbox", w), h.set.checked(), h.should.ignoreCallbacks() || (g.onChecked.call(I), g.onChange.call(I)));
	        }, uncheck: function uncheck() {
	          h.should.allowUncheck() && (h.debug("Unchecking checkbox"), h.set.unchecked(), h.should.ignoreCallbacks() || (g.onUnchecked.call(I), g.onChange.call(I)));
	        }, indeterminate: function indeterminate() {
	          return h.should.allowIndeterminate() ? void h.debug("Checkbox is already indeterminate") : (h.debug("Making checkbox indeterminate"), h.set.indeterminate(), void (h.should.ignoreCallbacks() || (g.onIndeterminate.call(I), g.onChange.call(I))));
	        }, determinate: function determinate() {
	          return h.should.allowDeterminate() ? void h.debug("Checkbox is already determinate") : (h.debug("Making checkbox determinate"), h.set.determinate(), void (h.should.ignoreCallbacks() || (g.onDeterminate.call(I), g.onChange.call(I))));
	        }, enable: function enable() {
	          return h.is.enabled() ? void h.debug("Checkbox is already enabled") : (h.debug("Enabling checkbox"), h.set.enabled(), void g.onEnabled.call(I));
	        }, disable: function disable() {
	          return h.is.disabled() ? void h.debug("Checkbox is already disabled") : (h.debug("Disabling checkbox"), h.set.disabled(), void g.onDisabled.call(I));
	        }, get: { radios: function radios() {
	            var n = h.get.name();return e('input[name="' + n + '"]').closest(k.checkbox);
	          }, otherRadios: function otherRadios() {
	            return h.get.radios().not(C);
	          }, name: function name() {
	            return w.attr("name");
	          } }, is: { initialLoad: function initialLoad() {
	            return S;
	          }, radio: function radio() {
	            return w.hasClass(p.radio) || "radio" == w.attr("type");
	          }, indeterminate: function indeterminate() {
	            return w.prop("indeterminate") !== i && w.prop("indeterminate");
	          }, checked: function checked() {
	            return w.prop("checked") !== i && w.prop("checked");
	          }, disabled: function disabled() {
	            return w.prop("disabled") !== i && w.prop("disabled");
	          }, enabled: function enabled() {
	            return !h.is.disabled();
	          }, determinate: function determinate() {
	            return !h.is.indeterminate();
	          }, unchecked: function unchecked() {
	            return !h.is.checked();
	          } }, should: { allowCheck: function allowCheck() {
	            return h.is.determinate() && h.is.checked() && !h.should.forceCallbacks() ? (h.debug("Should not allow check, checkbox is already checked"), !1) : g.beforeChecked.apply(I) === !1 ? (h.debug("Should not allow check, beforeChecked cancelled"), !1) : !0;
	          }, allowUncheck: function allowUncheck() {
	            return h.is.determinate() && h.is.unchecked() && !h.should.forceCallbacks() ? (h.debug("Should not allow uncheck, checkbox is already unchecked"), !1) : g.beforeUnchecked.apply(I) === !1 ? (h.debug("Should not allow uncheck, beforeUnchecked cancelled"), !1) : !0;
	          }, allowIndeterminate: function allowIndeterminate() {
	            return h.is.indeterminate() && !h.should.forceCallbacks() ? (h.debug("Should not allow indeterminate, checkbox is already indeterminate"), !1) : g.beforeIndeterminate.apply(I) === !1 ? (h.debug("Should not allow indeterminate, beforeIndeterminate cancelled"), !1) : !0;
	          }, allowDeterminate: function allowDeterminate() {
	            return h.is.determinate() && !h.should.forceCallbacks() ? (h.debug("Should not allow determinate, checkbox is already determinate"), !1) : g.beforeDeterminate.apply(I) === !1 ? (h.debug("Should not allow determinate, beforeDeterminate cancelled"), !1) : !0;
	          }, forceCallbacks: function forceCallbacks() {
	            return h.is.initialLoad() && g.fireOnInit;
	          }, ignoreCallbacks: function ignoreCallbacks() {
	            return S && !g.fireOnInit;
	          } }, can: { change: function change() {
	            return !(C.hasClass(p.disabled) || C.hasClass(p.readOnly) || w.prop("disabled") || w.prop("readonly"));
	          }, uncheck: function uncheck() {
	            return "boolean" == typeof g.uncheckable ? g.uncheckable : !h.is.radio();
	          } }, set: { initialLoad: function initialLoad() {
	            S = !0;
	          }, checked: function checked() {
	            return h.verbose("Setting class to checked"), C.removeClass(p.indeterminate).addClass(p.checked), h.is.radio() && h.uncheckOthers(), !h.is.indeterminate() && h.is.checked() ? void h.debug("Input is already checked, skipping input property change") : (h.verbose("Setting state to checked", I), w.prop("indeterminate", !1).prop("checked", !0), void h.trigger.change());
	          }, unchecked: function unchecked() {
	            return h.verbose("Removing checked class"), C.removeClass(p.indeterminate).removeClass(p.checked), !h.is.indeterminate() && h.is.unchecked() ? void h.debug("Input is already unchecked") : (h.debug("Setting state to unchecked"), w.prop("indeterminate", !1).prop("checked", !1), void h.trigger.change());
	          }, indeterminate: function indeterminate() {
	            return h.verbose("Setting class to indeterminate"), C.addClass(p.indeterminate), h.is.indeterminate() ? void h.debug("Input is already indeterminate, skipping input property change") : (h.debug("Setting state to indeterminate"), w.prop("indeterminate", !0), void h.trigger.change());
	          }, determinate: function determinate() {
	            return h.verbose("Removing indeterminate class"), C.removeClass(p.indeterminate), h.is.determinate() ? void h.debug("Input is already determinate, skipping input property change") : (h.debug("Setting state to determinate"), void w.prop("indeterminate", !1));
	          }, disabled: function disabled() {
	            return h.verbose("Setting class to disabled"), C.addClass(p.disabled), h.is.disabled() ? void h.debug("Input is already disabled, skipping input property change") : (h.debug("Setting state to disabled"), w.prop("disabled", "disabled"), void h.trigger.change());
	          }, enabled: function enabled() {
	            return h.verbose("Removing disabled class"), C.removeClass(p.disabled), h.is.enabled() ? void h.debug("Input is already enabled, skipping input property change") : (h.debug("Setting state to enabled"), w.prop("disabled", !1), void h.trigger.change());
	          }, tabbable: function tabbable() {
	            h.verbose("Adding tabindex to checkbox"), w.attr("tabindex") === i && w.attr("tabindex", 0);
	          } }, remove: { initialLoad: function initialLoad() {
	            S = !1;
	          } }, trigger: { change: function change() {
	            var e = t.createEvent("HTMLEvents"),
	                n = w[0];n && (h.verbose("Triggering native change event"), e.initEvent("change", !0, !1), n.dispatchEvent(e));
	          } }, create: { label: function label() {
	            w.prevAll(k.label).length > 0 ? (w.prev(k.label).detach().insertAfter(w), h.debug("Moving existing label", x)) : h.has.label() || (x = e("<label>").insertAfter(w), h.debug("Creating label", x));
	          } }, has: { label: function label() {
	            return x.length > 0;
	          } }, bind: { events: function events() {
	            h.verbose("Attaching checkbox events"), C.on("click" + v, h.event.click).on("keydown" + v, k.input, h.event.keydown).on("keyup" + v, k.input, h.event.keyup);
	          } }, unbind: { events: function events() {
	            h.debug("Removing events"), C.off(v);
	          } }, uncheckOthers: function uncheckOthers() {
	          var e = h.get.otherRadios();h.debug("Unchecking other radios", e), e.removeClass(p.checked);
	        }, toggle: function toggle() {
	          return h.can.change() ? void (h.is.indeterminate() || h.is.unchecked() ? (h.debug("Currently unchecked"), h.check()) : h.is.checked() && h.can.uncheck() && (h.debug("Currently checked"), h.uncheck())) : void (h.is.radio() || h.debug("Checkbox is read-only or disabled, ignoring toggle"));
	        }, setting: function setting(n, t) {
	          if ((h.debug("Changing setting", n, t), e.isPlainObject(n))) e.extend(!0, g, n);else {
	            if (t === i) return g[n];g[n] = t;
	          }
	        }, internal: function internal(n, t) {
	          if (e.isPlainObject(n)) e.extend(!0, h, n);else {
	            if (t === i) return h[n];h[n] = t;
	          }
	        }, debug: function debug() {
	          g.debug && (g.performance ? h.performance.log(arguments) : (h.debug = Function.prototype.bind.call(console.info, console, g.name + ":"), h.debug.apply(console, arguments)));
	        }, verbose: function verbose() {
	          g.verbose && g.debug && (g.performance ? h.performance.log(arguments) : (h.verbose = Function.prototype.bind.call(console.info, console, g.name + ":"), h.verbose.apply(console, arguments)));
	        }, error: function error() {
	          h.error = Function.prototype.bind.call(console.error, console, g.name + ":"), h.error.apply(console, arguments);
	        }, performance: { log: function log(e) {
	            var n, t, i;g.performance && (n = new Date().getTime(), i = d || n, t = n - i, d = n, l.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: O, "Execution Time": t })), clearTimeout(h.performance.timer), h.performance.timer = setTimeout(h.performance.display, 500);
	          }, display: function display() {
	            var n = g.name + ":",
	                t = 0;d = !1, clearTimeout(h.performance.timer), e.each(l, function (e, n) {
	              t += n["Execution Time"];
	            }), n += " " + t + "ms", r && (n += " '" + r + "'"), (console.group !== i || console.table !== i) && l.length > 0 && (console.groupCollapsed(n), console.table ? console.table(l) : e.each(l, function (e, n) {
	              console.log(n.Name + ": " + n["Execution Time"] + "ms");
	            }), console.groupEnd()), l = [];
	          } }, invoke: function invoke(n, t, o) {
	          var c,
	              r,
	              d,
	              l = E;return t = t || b, o = O || o, "string" == typeof n && l !== i && (n = n.split(/[\. ]/), c = n.length - 1, e.each(n, function (t, o) {
	            var a = t != c ? o + n[t + 1].charAt(0).toUpperCase() + n[t + 1].slice(1) : n;if (e.isPlainObject(l[a]) && t != c) l = l[a];else {
	              if (l[a] !== i) return r = l[a], !1;if (!e.isPlainObject(l[o]) || t == c) return l[o] !== i ? (r = l[o], !1) : (h.error(m.method, n), !1);l = l[o];
	            }
	          })), e.isFunction(r) ? d = r.apply(o, t) : r !== i && (d = r), e.isArray(a) ? a.push(d) : a !== i ? a = [a, d] : d !== i && (a = d), r;
	        } }, u ? (E === i && h.initialize(), h.invoke(s)) : (E !== i && E.invoke("destroy"), h.initialize());
	    }), a !== i ? a : this;
	  }, e.fn.checkbox.settings = { name: "Checkbox", namespace: "checkbox", debug: !1, verbose: !0, performance: !0, uncheckable: "auto", fireOnInit: !1, onChange: function onChange() {}, beforeChecked: function beforeChecked() {}, beforeUnchecked: function beforeUnchecked() {}, beforeDeterminate: function beforeDeterminate() {}, beforeIndeterminate: function beforeIndeterminate() {}, onChecked: function onChecked() {}, onUnchecked: function onUnchecked() {}, onDeterminate: function onDeterminate() {}, onIndeterminate: function onIndeterminate() {}, onEnable: function onEnable() {}, onDisable: function onDisable() {}, className: { checked: "checked", indeterminate: "indeterminate", disabled: "disabled", hidden: "hidden", radio: "radio", readOnly: "read-only" }, error: { method: "The method you called is not defined" }, selector: { checkbox: ".ui.checkbox", label: "label, .box", input: 'input[type="checkbox"], input[type="radio"]', link: "a[href]" } };
	})(jQuery, window, document);

/***/ },
/* 73 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 74 */,
/* 75 */
/***/ function(module, exports) {

	/*!
	 * # Semantic UI 2.1.8 - Dropdown
	 * http://github.com/semantic-org/semantic-ui/
	 *
	 *
	 * Copyright 2015 Contributors
	 * Released under the MIT license
	 * http://opensource.org/licenses/MIT
	 *
	 */
	"use strict";

	!(function (e, t, n, i) {
	  "use strict";e.fn.dropdown = function (a) {
	    var o,
	        s = e(this),
	        r = e(n),
	        l = s.selector || "",
	        c = ("ontouchstart" in n.documentElement),
	        u = new Date().getTime(),
	        d = [],
	        v = arguments[0],
	        m = "string" == typeof v,
	        f = [].slice.call(arguments, 1);return s.each(function (h) {
	      var g,
	          p,
	          b,
	          w,
	          x,
	          C,
	          S,
	          y = e.isPlainObject(a) ? e.extend(!0, {}, e.fn.dropdown.settings, a) : e.extend({}, e.fn.dropdown.settings),
	          T = y.className,
	          A = y.message,
	          k = y.fields,
	          L = y.keys,
	          D = y.metadata,
	          I = y.namespace,
	          R = y.regExp,
	          q = y.selector,
	          V = y.error,
	          E = y.templates,
	          O = "." + I,
	          F = "module-" + I,
	          P = e(this),
	          M = e(y.context),
	          H = P.find(q.text),
	          z = P.find(q.search),
	          j = P.find(q.input),
	          U = P.find(q.icon),
	          N = P.prev().find(q.text).length > 0 ? P.prev().find(q.text) : P.prev(),
	          B = P.children(q.menu),
	          W = B.find(q.item),
	          K = !1,
	          $ = !1,
	          Q = !1,
	          Y = this,
	          G = P.data(F);S = { initialize: function initialize() {
	          S.debug("Initializing dropdown", y), S.is.alreadySetup() ? S.setup.reference() : (S.setup.layout(), S.refreshData(), S.save.defaults(), S.restore.selected(), S.create.id(), S.bind.events(), S.observeChanges(), S.instantiate());
	        }, instantiate: function instantiate() {
	          S.verbose("Storing instance of dropdown", S), G = S, P.data(F, S);
	        }, destroy: function destroy() {
	          S.verbose("Destroying previous dropdown", P), S.remove.tabbable(), P.off(O).removeData(F), B.off(O), r.off(b), x && x.disconnect(), C && C.disconnect();
	        }, observeChanges: function observeChanges() {
	          "MutationObserver" in t && (x = new MutationObserver(function (e) {
	            S.debug("<select> modified, recreating menu"), S.setup.select();
	          }), C = new MutationObserver(function (e) {
	            S.debug("Menu modified, updating selector cache"), S.refresh();
	          }), S.has.input() && x.observe(j[0], { childList: !0, subtree: !0 }), S.has.menu() && C.observe(B[0], { childList: !0, subtree: !0 }), S.debug("Setting up mutation observer", x, C));
	        }, create: { id: function id() {
	            w = (Math.random().toString(16) + "000000000").substr(2, 8), b = "." + w, S.verbose("Creating unique id for element", w);
	          }, userChoice: function userChoice(t) {
	            var n, a, o;return (t = t || S.get.userValues()) ? (t = e.isArray(t) ? t : [t], e.each(t, function (t, s) {
	              S.get.item(s) === !1 && (o = y.templates.addition(S.add.variables(A.addResult, s)), a = e("<div />").html(o).attr("data-" + D.value, s).attr("data-" + D.text, s).addClass(T.addition).addClass(T.item), n = n === i ? a : n.add(a), S.verbose("Creating user choices for value", s, a));
	            }), n) : !1;
	          }, userLabels: function userLabels(t) {
	            var n = S.get.userValues();n && (S.debug("Adding user labels", n), e.each(n, function (e, t) {
	              S.verbose("Adding custom user value"), S.add.label(t, t);
	            }));
	          }, menu: function menu() {
	            B = e("<div />").addClass(T.menu).appendTo(P);
	          } }, search: function search(e) {
	          e = e !== i ? e : S.get.query(), S.verbose("Searching for query", e), S.filter(e);
	        }, select: { firstUnfiltered: function firstUnfiltered() {
	            S.verbose("Selecting first non-filtered element"), S.remove.selectedItem(), W.not(q.unselectable).eq(0).addClass(T.selected);
	          }, nextAvailable: function nextAvailable(e) {
	            e = e.eq(0);var t = e.nextAll(q.item).not(q.unselectable).eq(0),
	                n = e.prevAll(q.item).not(q.unselectable).eq(0),
	                i = t.length > 0;i ? (S.verbose("Moving selection to", t), t.addClass(T.selected)) : (S.verbose("Moving selection to", n), n.addClass(T.selected));
	          } }, setup: { api: function api() {
	            var e = { debug: y.debug, on: !1 };S.verbose("First request, initializing API"), P.api(e);
	          }, layout: function layout() {
	            P.is("select") && (S.setup.select(), S.setup.returnedObject()), S.has.menu() || S.create.menu(), S.is.search() && !S.has.search() && (S.verbose("Adding search input"), z = e("<input />").addClass(T.search).prop("autocomplete", "off").insertBefore(H)), y.allowTab && S.set.tabbable();
	          }, select: function select() {
	            var t = S.get.selectValues();S.debug("Dropdown initialized on a select", t), P.is("select") && (j = P), j.parent(q.dropdown).length > 0 ? (S.debug("UI dropdown already exists. Creating dropdown menu only"), P = j.closest(q.dropdown), S.has.menu() || S.create.menu(), B = P.children(q.menu), S.setup.menu(t)) : (S.debug("Creating entire dropdown from select"), P = e("<div />").attr("class", j.attr("class")).addClass(T.selection).addClass(T.dropdown).html(E.dropdown(t)).insertBefore(j), j.hasClass(T.multiple) && j.prop("multiple") === !1 && (S.error(V.missingMultiple), j.prop("multiple", !0)), j.is("[multiple]") && S.set.multiple(), j.prop("disabled") && (S.debug("Disabling dropdown"), P.addClass(T.disabled)), j.removeAttr("class").detach().prependTo(P)), S.refresh();
	          }, menu: function menu(e) {
	            B.html(E.menu(e, k)), W = B.find(q.item);
	          }, reference: function reference() {
	            S.debug("Dropdown behavior was called on select, replacing with closest dropdown"), P = P.parent(q.dropdown), S.refresh(), S.setup.returnedObject(), m && (G = S, S.invoke(v));
	          }, returnedObject: function returnedObject() {
	            var e = s.slice(0, h),
	                t = s.slice(h + 1);s = e.add(P).add(t);
	          } }, refresh: function refresh() {
	          S.refreshSelectors(), S.refreshData();
	        }, refreshSelectors: function refreshSelectors() {
	          S.verbose("Refreshing selector cache"), H = P.find(q.text), z = P.find(q.search), j = P.find(q.input), U = P.find(q.icon), N = P.prev().find(q.text).length > 0 ? P.prev().find(q.text) : P.prev(), B = P.children(q.menu), W = B.find(q.item);
	        }, refreshData: function refreshData() {
	          S.verbose("Refreshing cached metadata"), W.removeData(D.text).removeData(D.value), P.removeData(D.defaultText).removeData(D.defaultValue).removeData(D.placeholderText);
	        }, toggle: function toggle() {
	          S.verbose("Toggling menu visibility"), S.is.active() ? S.hide() : S.show();
	        }, show: function show(t) {
	          if ((t = e.isFunction(t) ? t : function () {}, S.can.show() && !S.is.active())) {
	            if ((S.debug("Showing dropdown"), S.is.multiple() && !S.has.search() && S.is.allFiltered())) return !0;!S.has.message() || S.has.maxSelections() || S.has.allResultsFiltered() || S.remove.message(), y.onShow.call(Y) !== !1 && S.animate.show(function () {
	              S.can.click() && S.bind.intent(), S.set.visible(), t.call(Y);
	            });
	          }
	        }, hide: function hide(t) {
	          t = e.isFunction(t) ? t : function () {}, S.is.active() && (S.debug("Hiding dropdown"), y.onHide.call(Y) !== !1 && S.animate.hide(function () {
	            S.remove.visible(), t.call(Y);
	          }));
	        }, hideOthers: function hideOthers() {
	          S.verbose("Finding other dropdowns to hide"), s.not(P).has(q.menu + "." + T.visible).dropdown("hide");
	        }, hideMenu: function hideMenu() {
	          S.verbose("Hiding menu  instantaneously"), S.remove.active(), S.remove.visible(), B.transition("hide");
	        }, hideSubMenus: function hideSubMenus() {
	          var e = B.children(q.item).find(q.menu);S.verbose("Hiding sub menus", e), e.transition("hide");
	        }, bind: { events: function events() {
	            c && S.bind.touchEvents(), S.bind.keyboardEvents(), S.bind.inputEvents(), S.bind.mouseEvents();
	          }, touchEvents: function touchEvents() {
	            S.debug("Touch device detected binding additional touch events"), S.is.searchSelection() || S.is.single() && P.on("touchstart" + O, S.event.test.toggle), B.on("touchstart" + O, q.item, S.event.item.mouseenter);
	          }, keyboardEvents: function keyboardEvents() {
	            S.verbose("Binding keyboard events"), P.on("keydown" + O, S.event.keydown), S.has.search() && P.on(S.get.inputEvent() + O, q.search, S.event.input), S.is.multiple() && r.on("keydown" + b, S.event.document.keydown);
	          }, inputEvents: function inputEvents() {
	            S.verbose("Binding input change events"), P.on("change" + O, q.input, S.event.change);
	          }, mouseEvents: function mouseEvents() {
	            S.verbose("Binding mouse events"), S.is.multiple() && P.on("click" + O, q.label, S.event.label.click).on("click" + O, q.remove, S.event.remove.click), S.is.searchSelection() ? (P.on("mousedown" + O, q.menu, S.event.menu.mousedown).on("mouseup" + O, q.menu, S.event.menu.mouseup).on("click" + O, q.icon, S.event.icon.click).on("click" + O, q.search, S.show).on("focus" + O, q.search, S.event.search.focus).on("blur" + O, q.search, S.event.search.blur).on("click" + O, q.text, S.event.text.focus), S.is.multiple() && P.on("click" + O, S.event.click)) : ("click" == y.on ? P.on("click" + O, q.icon, S.event.icon.click).on("click" + O, S.event.test.toggle) : "hover" == y.on ? P.on("mouseenter" + O, S.delay.show).on("mouseleave" + O, S.delay.hide) : P.on(y.on + O, S.toggle), P.on("mousedown" + O, S.event.mousedown).on("mouseup" + O, S.event.mouseup).on("focus" + O, S.event.focus).on("blur" + O, S.event.blur)), B.on("mouseenter" + O, q.item, S.event.item.mouseenter).on("mouseleave" + O, q.item, S.event.item.mouseleave).on("click" + O, q.item, S.event.item.click);
	          }, intent: function intent() {
	            S.verbose("Binding hide intent event to document"), c && r.on("touchstart" + b, S.event.test.touch).on("touchmove" + b, S.event.test.touch), r.on("click" + b, S.event.test.hide);
	          } }, unbind: { intent: function intent() {
	            S.verbose("Removing hide intent event from document"), c && r.off("touchstart" + b).off("touchmove" + b), r.off("click" + b);
	          } }, filter: function filter(e) {
	          var t = e !== i ? e : S.get.query(),
	              n = function n() {
	            S.is.multiple() && S.filterActive(), S.select.firstUnfiltered(), S.has.allResultsFiltered() ? y.onNoResults.call(Y, t) ? y.allowAdditions || (S.verbose("All items filtered, showing message", t), S.add.message(A.noResults)) : (S.verbose("All items filtered, hiding dropdown", t), S.hideMenu()) : S.remove.message(), y.allowAdditions && S.add.userSuggestion(e), S.is.searchSelection() && S.can.show() && S.is.focusedOnSearch() && S.show();
	          };y.useLabels && S.has.maxSelections() || (y.apiSettings ? S.can.useAPI() ? S.queryRemote(t, function () {
	            n();
	          }) : S.error(V.noAPI) : (S.filterItems(t), n()));
	        }, queryRemote: function queryRemote(t, n) {
	          var i = { errorDuration: !1, throttle: y.throttle, urlData: { query: t }, onError: function onError() {
	              S.add.message(A.serverError), n();
	            }, onFailure: function onFailure() {
	              S.add.message(A.serverError), n();
	            }, onSuccess: function onSuccess(e) {
	              S.remove.message(), S.setup.menu({ values: e[k.remoteValues] }), n();
	            } };P.api("get request") || S.setup.api(), i = e.extend(!0, {}, i, y.apiSettings), P.api("setting", i).api("query");
	        }, filterItems: function filterItems(t) {
	          var n = t !== i ? t : S.get.query(),
	              a = null,
	              o = S.escape.regExp(n),
	              s = new RegExp("^" + o, "igm");S.has.query() && (a = [], S.verbose("Searching for matching values", n), W.each(function () {
	            var t,
	                i,
	                o = e(this);if ("both" == y.match || "text" == y.match) {
	              if ((t = String(S.get.choiceText(o, !1)), -1 !== t.search(s))) return a.push(this), !0;if (y.fullTextSearch && S.fuzzySearch(n, t)) return a.push(this), !0;
	            }if ("both" == y.match || "value" == y.match) {
	              if ((i = String(S.get.choiceValue(o, t)), -1 !== i.search(s))) return a.push(this), !0;if (y.fullTextSearch && S.fuzzySearch(n, i)) return a.push(this), !0;
	            }
	          })), S.debug("Showing only matched items", n), S.remove.filteredItem(), a && W.not(a).addClass(T.filtered);
	        }, fuzzySearch: function fuzzySearch(e, t) {
	          var n = t.length,
	              i = e.length;if ((e = e.toLowerCase(), t = t.toLowerCase(), i > n)) return !1;if (i === n) return e === t;e: for (var a = 0, o = 0; i > a; a++) {
	            for (var s = e.charCodeAt(a); n > o;) if (t.charCodeAt(o++) === s) continue e;return !1;
	          }return !0;
	        }, filterActive: function filterActive() {
	          y.useLabels && W.filter("." + T.active).addClass(T.filtered);
	        }, focusSearch: function focusSearch() {
	          S.is.search() && !S.is.focusedOnSearch() && z[0].focus();
	        }, forceSelection: function forceSelection() {
	          var e = W.not(T.filtered).filter("." + T.selected).eq(0),
	              t = W.not(T.filtered).filter("." + T.active).eq(0),
	              n = e.length > 0 ? e : t,
	              i = n.size() > 0;if (S.has.query()) {
	            if (i) return S.debug("Forcing partial selection to selected item", n), void S.event.item.click.call(n);S.remove.searchTerm();
	          }S.hide();
	        }, event: { change: function change() {
	            Q || (S.debug("Input changed, updating selection"), S.set.selected());
	          }, focus: function focus() {
	            y.showOnFocus && !K && S.is.hidden() && !p && S.show();
	          }, click: function click(t) {
	            var n = e(t.target);n.is(P) && !S.is.focusedOnSearch() && S.focusSearch();
	          }, blur: function blur(e) {
	            p = n.activeElement === this, K || p || (S.remove.activeLabel(), S.hide());
	          }, mousedown: function mousedown() {
	            K = !0;
	          }, mouseup: function mouseup() {
	            K = !1;
	          }, search: { focus: function focus() {
	              K = !0, S.is.multiple() && S.remove.activeLabel(), y.showOnFocus && (S.search(), S.show());
	            }, blur: function blur(e) {
	              p = n.activeElement === this, $ || p ? p && y.forceSelection && S.forceSelection() : S.is.multiple() ? (S.remove.activeLabel(), S.hide()) : y.forceSelection ? S.forceSelection() : S.hide();
	            } }, icon: { click: function click(e) {
	              S.toggle(), e.stopPropagation();
	            } }, text: { focus: function focus(e) {
	              K = !0, S.focusSearch();
	            } }, input: function input(e) {
	            (S.is.multiple() || S.is.searchSelection()) && S.set.filtered(), clearTimeout(S.timer), S.timer = setTimeout(S.search, y.delay.search);
	          }, label: { click: function click(t) {
	              var n = e(this),
	                  i = P.find(q.label),
	                  a = i.filter("." + T.active),
	                  o = n.nextAll("." + T.active),
	                  s = n.prevAll("." + T.active),
	                  r = o.length > 0 ? n.nextUntil(o).add(a).add(n) : n.prevUntil(s).add(a).add(n);t.shiftKey ? (a.removeClass(T.active), r.addClass(T.active)) : t.ctrlKey ? n.toggleClass(T.active) : (a.removeClass(T.active), n.addClass(T.active)), y.onLabelSelect.apply(this, i.filter("." + T.active));
	            } }, remove: { click: function click() {
	              var t = e(this).parent();t.hasClass(T.active) ? S.remove.activeLabels() : S.remove.activeLabels(t);
	            } }, test: { toggle: function toggle(e) {
	              var t = S.is.multiple() ? S.show : S.toggle;S.determine.eventOnElement(e, t) && e.preventDefault();
	            }, touch: function touch(e) {
	              S.determine.eventOnElement(e, function () {
	                "touchstart" == e.type ? S.timer = setTimeout(function () {
	                  S.hide();
	                }, y.delay.touch) : "touchmove" == e.type && clearTimeout(S.timer);
	              }), e.stopPropagation();
	            }, hide: function hide(e) {
	              S.determine.eventInModule(e, S.hide);
	            } }, menu: { mousedown: function mousedown() {
	              $ = !0;
	            }, mouseup: function mouseup() {
	              $ = !1;
	            } }, item: { mouseenter: function mouseenter(t) {
	              var n = e(this).children(q.menu),
	                  i = e(this).siblings(q.item).children(q.menu);n.length > 0 && (clearTimeout(S.itemTimer), S.itemTimer = setTimeout(function () {
	                S.verbose("Showing sub-menu", n), e.each(i, function () {
	                  S.animate.hide(!1, e(this));
	                }), S.animate.show(!1, n);
	              }, y.delay.show), t.preventDefault());
	            }, mouseleave: function mouseleave(t) {
	              var n = e(this).children(q.menu);n.length > 0 && (clearTimeout(S.itemTimer), S.itemTimer = setTimeout(function () {
	                S.verbose("Hiding sub-menu", n), S.animate.hide(!1, n);
	              }, y.delay.hide));
	            }, touchend: function touchend() {}, click: function click(t) {
	              var n = e(this),
	                  i = e(t ? t.target : ""),
	                  a = n.find(q.menu),
	                  o = S.get.choiceText(n),
	                  s = S.get.choiceValue(n, o),
	                  r = a.length > 0,
	                  l = a.find(i).length > 0;l || r && !y.allowCategorySelection || (y.useLabels || (S.remove.filteredItem(), S.remove.searchTerm(), S.set.scrollPosition(n)), S.determine.selectAction.call(this, o, s));
	            } }, document: { keydown: function keydown(e) {
	              var t = e.which,
	                  n = S.is.inObject(t, L);if (n) {
	                var i = P.find(q.label),
	                    a = i.filter("." + T.active),
	                    o = (a.data(D.value), i.index(a)),
	                    s = i.length,
	                    r = a.length > 0,
	                    l = a.length > 1,
	                    c = 0 === o,
	                    u = o + 1 == s,
	                    d = S.is.searchSelection(),
	                    v = S.is.focusedOnSearch(),
	                    m = S.is.focused(),
	                    f = v && 0 === S.get.caretPosition();if (d && !r && !v) return;t == L.leftArrow ? !m && !f || r ? r && (e.shiftKey ? S.verbose("Adding previous label to selection") : (S.verbose("Selecting previous label"), i.removeClass(T.active)), c && !l ? a.addClass(T.active) : a.prev(q.siblingLabel).addClass(T.active).end(), e.preventDefault()) : (S.verbose("Selecting previous label"), i.last().addClass(T.active)) : t == L.rightArrow ? (m && !r && i.first().addClass(T.active), r && (e.shiftKey ? S.verbose("Adding next label to selection") : (S.verbose("Selecting next label"), i.removeClass(T.active)), u ? d ? v ? i.removeClass(T.active) : S.focusSearch() : l ? a.next(q.siblingLabel).addClass(T.active) : a.addClass(T.active) : a.next(q.siblingLabel).addClass(T.active), e.preventDefault())) : t == L.deleteKey || t == L.backspace ? r ? (S.verbose("Removing active labels"), u && d && !v && S.focusSearch(), a.last().next(q.siblingLabel).addClass(T.active), S.remove.activeLabels(a), e.preventDefault()) : f && !r && t == L.backspace && (S.verbose("Removing last label on input backspace"), a = i.last().addClass(T.active), S.remove.activeLabels(a)) : a.removeClass(T.active);
	              }
	            } }, keydown: function keydown(e) {
	            var t = e.which,
	                n = S.is.inObject(t, L);if (n) {
	              var i,
	                  a,
	                  o = W.not(q.unselectable).filter("." + T.selected).eq(0),
	                  s = B.children("." + T.active).eq(0),
	                  r = o.length > 0 ? o : s,
	                  l = r.length > 0 ? r.siblings(":not(." + T.filtered + ")").andSelf() : B.children(":not(." + T.filtered + ")"),
	                  c = r.children(q.menu),
	                  u = r.closest(q.menu),
	                  d = u.hasClass(T.visible) || u.hasClass(T.animating) || u.parent(q.menu).length > 0,
	                  v = c.length > 0,
	                  m = r.length > 0,
	                  f = r.not(q.unselectable).length > 0,
	                  h = t == L.delimiter && y.allowAdditions && S.is.multiple();if (S.is.visible()) {
	                if (((t == L.enter || h) && (t == L.enter && m && v && !y.allowCategorySelection ? (S.verbose("Pressed enter on unselectable category, opening sub menu"), t = L.rightArrow) : f && (S.verbose("Selecting item from keyboard shortcut", r), S.event.item.click.call(r, e), S.is.searchSelection() && S.remove.searchTerm()), e.preventDefault()), t == L.leftArrow && (a = u[0] !== B[0], a && (S.verbose("Left key pressed, closing sub-menu"), S.animate.hide(!1, u), r.removeClass(T.selected), u.closest(q.item).addClass(T.selected), e.preventDefault())), t == L.rightArrow && v && (S.verbose("Right key pressed, opening sub-menu"), S.animate.show(!1, c), r.removeClass(T.selected), c.find(q.item).eq(0).addClass(T.selected), e.preventDefault()), t == L.upArrow)) {
	                  if ((i = m && d ? r.prevAll(q.item + ":not(" + q.unselectable + ")").eq(0) : W.eq(0), l.index(i) < 0)) return S.verbose("Up key pressed but reached top of current menu"), void e.preventDefault();S.verbose("Up key pressed, changing active item"), r.removeClass(T.selected), i.addClass(T.selected), S.set.scrollPosition(i), e.preventDefault();
	                }if (t == L.downArrow) {
	                  if ((i = m && d ? i = r.nextAll(q.item + ":not(" + q.unselectable + ")").eq(0) : W.eq(0), 0 === i.length)) return S.verbose("Down key pressed but reached bottom of current menu"), void e.preventDefault();S.verbose("Down key pressed, changing active item"), W.removeClass(T.selected), i.addClass(T.selected), S.set.scrollPosition(i), e.preventDefault();
	                }t == L.pageUp && (S.scrollPage("up"), e.preventDefault()), t == L.pageDown && (S.scrollPage("down"), e.preventDefault()), t == L.escape && (S.verbose("Escape key pressed, closing dropdown"), S.hide());
	              } else h && e.preventDefault(), t == L.downArrow && (S.verbose("Down key pressed, showing dropdown"), S.show(), e.preventDefault());
	            } else S.is.selection() && !S.is.search() && S.set.selectedLetter(String.fromCharCode(t));
	          } }, trigger: { change: function change() {
	            var e = n.createEvent("HTMLEvents"),
	                t = j[0];t && (S.verbose("Triggering native change event"), e.initEvent("change", !0, !1), t.dispatchEvent(e));
	          } }, determine: { selectAction: function selectAction(t, n) {
	            S.verbose("Determining action", y.action), e.isFunction(S.action[y.action]) ? (S.verbose("Triggering preset action", y.action, t, n), S.action[y.action].call(this, t, n)) : e.isFunction(y.action) ? (S.verbose("Triggering user action", y.action, t, n), y.action.call(this, t, n)) : S.error(V.action, y.action);
	          }, eventInModule: function eventInModule(t, i) {
	            var a = e(t.target),
	                o = a.closest(n.documentElement).length > 0,
	                s = a.closest(P).length > 0;return i = e.isFunction(i) ? i : function () {}, o && !s ? (S.verbose("Triggering event", i), i(), !0) : (S.verbose("Event occurred in dropdown, canceling callback"), !1);
	          }, eventOnElement: function eventOnElement(t, n) {
	            var i = e(t.target),
	                a = i.closest(q.siblingLabel),
	                o = 0 === P.find(a).length,
	                s = 0 === i.closest(B).length;return n = e.isFunction(n) ? n : function () {}, o && s ? (S.verbose("Triggering event", n), n(), !0) : (S.verbose("Event occurred in dropdown menu, canceling callback"), !1);
	          } }, action: { nothing: function nothing() {}, activate: function activate(t, n) {
	            if ((n = n !== i ? n : t, S.can.activate(e(this)))) {
	              if ((S.set.selected(n, e(this)), S.is.multiple() && !S.is.allFiltered())) return;S.hideAndClear();
	            }
	          }, select: function select(e, t) {
	            S.action.activate.call(this);
	          }, combo: function combo(t, n) {
	            n = n !== i ? n : t, S.set.selected(n, e(this)), S.hideAndClear();
	          }, hide: function hide(e, t) {
	            S.set.value(t), S.hideAndClear();
	          } }, get: { id: function id() {
	            return w;
	          }, defaultText: function defaultText() {
	            return P.data(D.defaultText);
	          }, defaultValue: function defaultValue() {
	            return P.data(D.defaultValue);
	          }, placeholderText: function placeholderText() {
	            return P.data(D.placeholderText) || "";
	          }, text: function text() {
	            return H.text();
	          }, query: function query() {
	            return e.trim(z.val());
	          }, searchWidth: function searchWidth(e) {
	            return e * y.glyphWidth + "em";
	          }, selectionCount: function selectionCount() {
	            var t,
	                n = S.get.values();return t = S.is.multiple() ? e.isArray(n) ? n.length : 0 : "" !== S.get.value() ? 1 : 0;
	          }, transition: function transition(e) {
	            return "auto" == y.transition ? S.is.upward(e) ? "slide up" : "slide down" : y.transition;
	          }, userValues: function userValues() {
	            var t = S.get.values();return t ? (t = e.isArray(t) ? t : [t], e.grep(t, function (e) {
	              return S.get.item(e) === !1;
	            })) : !1;
	          }, uniqueArray: function uniqueArray(t) {
	            return e.grep(t, function (n, i) {
	              return e.inArray(n, t) === i;
	            });
	          }, caretPosition: function caretPosition() {
	            var e,
	                t,
	                i = z.get(0);return "selectionStart" in i ? i.selectionStart : n.selection ? (i.focus(), e = n.selection.createRange(), t = e.text.length, e.moveStart("character", -i.value.length), e.text.length - t) : void 0;
	          }, value: function value() {
	            var t = j.length > 0 ? j.val() : P.data(D.value);return e.isArray(t) && 1 === t.length && "" === t[0] ? "" : t;
	          }, values: function values() {
	            var e = S.get.value();return "" === e ? "" : !S.has.selectInput() && S.is.multiple() ? "string" == typeof e ? e.split(y.delimiter) : "" : e;
	          }, remoteValues: function remoteValues() {
	            var t = S.get.values(),
	                n = !1;return t && ("string" == typeof t && (t = [t]), n = {}, e.each(t, function (e, t) {
	              var i = S.read.remoteData(t);S.verbose("Restoring value from session data", i, t), n[t] = i ? i : t;
	            })), n;
	          }, choiceText: function choiceText(t, n) {
	            return n = n !== i ? n : y.preserveHTML, t ? (t.find(q.menu).length > 0 && (S.verbose("Retreiving text of element with sub-menu"), t = t.clone(), t.find(q.menu).remove(), t.find(q.menuIcon).remove()), t.data(D.text) !== i ? t.data(D.text) : n ? e.trim(t.html()) : e.trim(t.text())) : void 0;
	          }, choiceValue: function choiceValue(t, n) {
	            return n = n || S.get.choiceText(t), t ? t.data(D.value) !== i ? String(t.data(D.value)) : "string" == typeof n ? e.trim(n.toLowerCase()) : String(n) : !1;
	          }, inputEvent: function inputEvent() {
	            var e = z[0];return e ? e.oninput !== i ? "input" : e.onpropertychange !== i ? "propertychange" : "keyup" : !1;
	          }, selectValues: function selectValues() {
	            var t = {};return t.values = [], P.find("option").each(function () {
	              var n = e(this),
	                  a = n.html(),
	                  o = n.attr("disabled"),
	                  s = n.attr("value") !== i ? n.attr("value") : a;"auto" === y.placeholder && "" === s ? t.placeholder = a : t.values.push({ name: a, value: s, disabled: o });
	            }), y.placeholder && "auto" !== y.placeholder && (S.debug("Setting placeholder value to", y.placeholder), t.placeholder = y.placeholder), y.sortSelect ? (t.values.sort(function (e, t) {
	              return e.name > t.name ? 1 : -1;
	            }), S.debug("Retrieved and sorted values from select", t)) : S.debug("Retreived values from select", t), t;
	          }, activeItem: function activeItem() {
	            return W.filter("." + T.active);
	          }, selectedItem: function selectedItem() {
	            var e = W.not(q.unselectable).filter("." + T.selected);return e.length > 0 ? e : W.eq(0);
	          }, itemWithAdditions: function itemWithAdditions(e) {
	            var t = S.get.item(e),
	                n = S.create.userChoice(e),
	                i = n && n.length > 0;return i && (t = t.length > 0 ? t.add(n) : n), t;
	          }, item: function item(t, n) {
	            var a,
	                o,
	                s = !1;return t = t !== i ? t : S.get.values() !== i ? S.get.values() : S.get.text(), a = o ? t.length > 0 : t !== i && null !== t, o = S.is.multiple() && e.isArray(t), n = "" === t || 0 === t ? !0 : n || !1, a && W.each(function () {
	              var a = e(this),
	                  r = S.get.choiceText(a),
	                  l = S.get.choiceValue(a, r);if (null !== l && l !== i) if (o) -1 === e.inArray(String(l), t) && -1 === e.inArray(r, t) || (s = s ? s.add(a) : a);else if (n) {
	                if ((S.verbose("Ambiguous dropdown value using strict type check", a, t), l === t || r === t)) return s = a, !0;
	              } else if (String(l) == String(t) || r == t) return S.verbose("Found select item by value", l, t), s = a, !0;
	            }), s;
	          } }, check: { maxSelections: function maxSelections(e) {
	            return y.maxSelections ? (e = e !== i ? e : S.get.selectionCount(), e >= y.maxSelections ? (S.debug("Maximum selection count reached"), y.useLabels && (W.addClass(T.filtered), S.add.message(A.maxSelections)), !0) : (S.verbose("No longer at maximum selection count"), S.remove.message(), S.remove.filteredItem(), S.is.searchSelection() && S.filterItems(), !1)) : !0;
	          } }, restore: { defaults: function defaults() {
	            S.clear(), S.restore.defaultText(), S.restore.defaultValue();
	          }, defaultText: function defaultText() {
	            var e = S.get.defaultText(),
	                t = S.get.placeholderText;e === t ? (S.debug("Restoring default placeholder text", e), S.set.placeholderText(e)) : (S.debug("Restoring default text", e), S.set.text(e));
	          }, defaultValue: function defaultValue() {
	            var e = S.get.defaultValue();e !== i && (S.debug("Restoring default value", e), "" !== e ? (S.set.value(e), S.set.selected()) : (S.remove.activeItem(), S.remove.selectedItem()));
	          }, labels: function labels() {
	            y.allowAdditions && (y.useLabels || (S.error(V.labels), y.useLabels = !0), S.debug("Restoring selected values"), S.create.userLabels()), S.check.maxSelections();
	          }, selected: function selected() {
	            S.restore.values(), S.is.multiple() ? (S.debug("Restoring previously selected values and labels"), S.restore.labels()) : S.debug("Restoring previously selected values");
	          }, values: function values() {
	            S.set.initialLoad(), y.apiSettings ? y.saveRemoteData ? S.restore.remoteValues() : S.clearValue() : S.set.selected(), S.remove.initialLoad();
	          }, remoteValues: function remoteValues() {
	            var t = S.get.remoteValues();S.debug("Recreating selected from session data", t), t && (S.is.single() ? e.each(t, function (e, t) {
	              S.set.text(t);
	            }) : e.each(t, function (e, t) {
	              S.add.label(e, t);
	            }));
	          } }, read: { remoteData: function remoteData(e) {
	            var n;return t.Storage === i ? void S.error(V.noStorage) : (n = sessionStorage.getItem(e), n !== i ? n : !1);
	          } }, save: { defaults: function defaults() {
	            S.save.defaultText(), S.save.placeholderText(), S.save.defaultValue();
	          }, defaultValue: function defaultValue() {
	            var e = S.get.value();S.verbose("Saving default value as", e), P.data(D.defaultValue, e);
	          }, defaultText: function defaultText() {
	            var e = S.get.text();S.verbose("Saving default text as", e), P.data(D.defaultText, e);
	          }, placeholderText: function placeholderText() {
	            var e;y.placeholder !== !1 && H.hasClass(T.placeholder) && (e = S.get.text(), S.verbose("Saving placeholder text as", e), P.data(D.placeholderText, e));
	          }, remoteData: function remoteData(e, n) {
	            return t.Storage === i ? void S.error(V.noStorage) : (S.verbose("Saving remote data to session storage", n, e), void sessionStorage.setItem(n, e));
	          } }, clear: function clear() {
	          S.is.multiple() ? S.remove.labels() : (S.remove.activeItem(), S.remove.selectedItem()), S.set.placeholderText(), S.clearValue();
	        }, clearValue: function clearValue() {
	          S.set.value("");
	        }, scrollPage: function scrollPage(e, t) {
	          var n,
	              i,
	              a,
	              o = t || S.get.selectedItem(),
	              s = o.closest(q.menu),
	              r = s.outerHeight(),
	              l = s.scrollTop(),
	              c = W.eq(0).outerHeight(),
	              u = Math.floor(r / c),
	              d = (s.prop("scrollHeight"), "up" == e ? l - c * u : l + c * u),
	              v = W.not(q.unselectable);a = "up" == e ? v.index(o) - u : v.index(o) + u, n = "up" == e ? a >= 0 : a < v.length, i = n ? v.eq(a) : "up" == e ? v.first() : v.last(), i.length > 0 && (S.debug("Scrolling page", e, i), o.removeClass(T.selected), i.addClass(T.selected), s.scrollTop(d));
	        }, set: { filtered: function filtered() {
	            var e = S.is.multiple(),
	                t = S.is.searchSelection(),
	                n = e && t,
	                i = t ? S.get.query() : "",
	                a = "string" == typeof i && i.length > 0,
	                o = S.get.searchWidth(i.length),
	                s = "" !== i;e && a && (S.verbose("Adjusting input width", o, y.glyphWidth), z.css("width", o)), a || n && s ? (S.verbose("Hiding placeholder text"), H.addClass(T.filtered)) : (!e || n && !s) && (S.verbose("Showing placeholder text"), H.removeClass(T.filtered));
	          }, loading: function loading() {
	            P.addClass(T.loading);
	          }, placeholderText: function placeholderText(e) {
	            e = e || S.get.placeholderText(), S.debug("Setting placeholder text", e), S.set.text(e), H.addClass(T.placeholder);
	          }, tabbable: function tabbable() {
	            S.has.search() ? (S.debug("Added tabindex to searchable dropdown"), z.val("").attr("tabindex", 0), B.attr("tabindex", -1)) : (S.debug("Added tabindex to dropdown"), P.attr("tabindex") === i && (P.attr("tabindex", 0), B.attr("tabindex", -1)));
	          }, initialLoad: function initialLoad() {
	            S.verbose("Setting initial load"), g = !0;
	          }, activeItem: function activeItem(e) {
	            y.allowAdditions && e.filter(q.addition).length > 0 ? e.addClass(T.filtered) : e.addClass(T.active);
	          }, scrollPosition: function scrollPosition(e, t) {
	            var n,
	                a,
	                o,
	                s,
	                r,
	                l,
	                c,
	                u,
	                d,
	                v = 5;e = e || S.get.selectedItem(), n = e.closest(q.menu), a = e && e.length > 0, t = t !== i ? t : !1, e && n.length > 0 && a && (s = e.position().top, n.addClass(T.loading), l = n.scrollTop(), r = n.offset().top, s = e.offset().top, o = l - r + s, t || (c = n.height(), d = o + v > l + c, u = l > o - v), S.debug("Scrolling to active item", o), (t || u || d) && n.scrollTop(o), n.removeClass(T.loading));
	          }, text: function text(e) {
	            "select" !== y.action && ("combo" == y.action ? (S.debug("Changing combo button text", e, N), y.preserveHTML ? N.html(e) : N.text(e)) : (e !== S.get.placeholderText() && H.removeClass(T.placeholder), S.debug("Changing text", e, H), H.removeClass(T.filtered), y.preserveHTML ? H.html(e) : H.text(e)));
	          }, selectedLetter: function selectedLetter(t) {
	            var n,
	                i = W.filter("." + T.selected),
	                a = i.length > 0 && S.has.firstLetter(i, t),
	                o = !1;a && (n = i.nextAll(W).eq(0), S.has.firstLetter(n, t) && (o = n)), o || W.each(function () {
	              return S.has.firstLetter(e(this), t) ? (o = e(this), !1) : void 0;
	            }), o && (S.verbose("Scrolling to next value with letter", t), S.set.scrollPosition(o), i.removeClass(T.selected), o.addClass(T.selected));
	          }, direction: function direction(e) {
	            "auto" == y.direction ? S.is.onScreen(e) ? S.remove.upward(e) : S.set.upward(e) : "upward" == y.direction && S.set.upward(e);
	          }, upward: function upward(e) {
	            var t = e || P;t.addClass(T.upward);
	          }, value: function value(e, t, n) {
	            var a = j.length > 0,
	                o = (!S.has.value(e), S.get.values()),
	                s = e !== i ? String(e) : e;if (a) {
	              if (s == o && (S.verbose("Skipping value update already same value", e, o), !S.is.initialLoad())) return;S.is.single() && S.has.selectInput() && S.can.extendSelect() && (S.debug("Adding user option", e), S.add.optionValue(e)), S.debug("Updating input value", e, o), Q = !0, j.val(e), y.fireOnInit === !1 && S.is.initialLoad() ? S.debug("Input native change event ignored on initial load") : S.trigger.change(), Q = !1;
	            } else S.verbose("Storing value in metadata", e, j), e !== o && P.data(D.value, s);y.fireOnInit === !1 && S.is.initialLoad() ? S.verbose("No callback on initial load", y.onChange) : y.onChange.call(Y, e, t, n);
	          }, active: function active() {
	            P.addClass(T.active);
	          }, multiple: function multiple() {
	            P.addClass(T.multiple);
	          }, visible: function visible() {
	            P.addClass(T.visible);
	          }, exactly: function exactly(e, t) {
	            S.debug("Setting selected to exact values"), S.clear(), S.set.selected(e, t);
	          }, selected: function selected(t, n) {
	            var i = S.is.multiple();n = y.allowAdditions ? n || S.get.itemWithAdditions(t) : n || S.get.item(t), n && (S.debug("Setting selected menu item to", n), S.is.single() ? (S.remove.activeItem(), S.remove.selectedItem()) : y.useLabels && S.remove.selectedItem(), n.each(function () {
	              var t = e(this),
	                  a = S.get.choiceText(t),
	                  o = S.get.choiceValue(t, a),
	                  s = t.hasClass(T.filtered),
	                  r = t.hasClass(T.active),
	                  l = t.hasClass(T.addition),
	                  c = i && 1 == n.length;i ? !r || l ? (y.apiSettings && y.saveRemoteData && S.save.remoteData(a, o), y.useLabels ? (S.add.value(o, a, t), S.add.label(o, a, c), S.set.activeItem(t), S.filterActive(), S.select.nextAvailable(n)) : (S.add.value(o, a, t), S.set.text(S.add.variables(A.count)), S.set.activeItem(t))) : s || (S.debug("Selected active value, removing label"), S.remove.selected(o)) : (y.apiSettings && y.saveRemoteData && S.save.remoteData(a, o), S.set.text(a), S.set.value(o, a, t), t.addClass(T.active).addClass(T.selected));
	            }));
	          } }, add: { label: function label(t, n, i) {
	            var a,
	                o = S.is.searchSelection() ? z : H;return a = e("<a />").addClass(T.label).attr("data-value", t).html(E.label(t, n)), a = y.onLabelCreate.call(a, t, n), S.has.label(t) ? void S.debug("Label already exists, skipping", t) : (y.label.variation && a.addClass(y.label.variation), void (i === !0 ? (S.debug("Animating in label", a), a.addClass(T.hidden).insertBefore(o).transition(y.label.transition, y.label.duration)) : (S.debug("Adding selection label", a), a.insertBefore(o))));
	          }, message: function message(t) {
	            var n = B.children(q.message),
	                i = y.templates.message(S.add.variables(t));n.length > 0 ? n.html(i) : n = e("<div/>").html(i).addClass(T.message).appendTo(B);
	          }, optionValue: function optionValue(t) {
	            var n = j.find('option[value="' + t + '"]'),
	                i = n.length > 0;i || (x && (x.disconnect(), S.verbose("Temporarily disconnecting mutation observer", t)), S.is.single() && (S.verbose("Removing previous user addition"), j.find("option." + T.addition).remove()), e("<option/>").prop("value", t).addClass(T.addition).html(t).appendTo(j), S.verbose("Adding user addition as an <option>", t), x && x.observe(j[0], { childList: !0, subtree: !0 }));
	          }, userSuggestion: function userSuggestion(e) {
	            var t,
	                n = B.children(q.addition),
	                i = S.get.item(e),
	                a = i && i.not(q.addition).length,
	                o = n.length > 0;if (!y.useLabels || !S.has.maxSelections()) {
	              if ("" === e || a) return void n.remove();W.removeClass(T.selected), o ? (t = y.templates.addition(S.add.variables(A.addResult, e)), n.html(t).attr("data-" + D.value, e).attr("data-" + D.text, e).removeClass(T.filtered).addClass(T.selected), S.verbose("Replacing user suggestion with new value", n)) : (n = S.create.userChoice(e), n.prependTo(B).addClass(T.selected), S.verbose("Adding item choice to menu corresponding with user choice addition", n));
	            }
	          }, variables: function variables(e, t) {
	            var n,
	                i,
	                a = -1 !== e.search("{count}"),
	                o = -1 !== e.search("{maxCount}"),
	                s = -1 !== e.search("{term}");return S.verbose("Adding templated variables to message", e), a && (n = S.get.selectionCount(), e = e.replace("{count}", n)), o && (n = S.get.selectionCount(), e = e.replace("{maxCount}", y.maxSelections)), s && (i = t || S.get.query(), e = e.replace("{term}", i)), e;
	          }, value: function value(t, n, i) {
	            var a,
	                o = S.get.values();return "" === t ? void S.debug("Cannot select blank values from multiselect") : (e.isArray(o) ? (a = o.concat([t]), a = S.get.uniqueArray(a)) : a = [t], S.has.selectInput() ? S.can.extendSelect() && (S.debug("Adding value to select", t, a, j), S.add.optionValue(t)) : (a = a.join(y.delimiter), S.debug("Setting hidden input to delimited value", a, j)), y.fireOnInit === !1 && S.is.initialLoad() ? S.verbose("Skipping onadd callback on initial load", y.onAdd) : y.onAdd.call(Y, t, n, i), S.set.value(a, t, n, i), void S.check.maxSelections());
	          } }, remove: { active: function active() {
	            P.removeClass(T.active);
	          }, activeLabel: function activeLabel() {
	            P.find(q.label).removeClass(T.active);
	          }, loading: function loading() {
	            P.removeClass(T.loading);
	          }, initialLoad: function initialLoad() {
	            g = !1;
	          }, upward: function upward(e) {
	            var t = e || P;t.removeClass(T.upward);
	          }, visible: function visible() {
	            P.removeClass(T.visible);
	          }, activeItem: function activeItem() {
	            W.removeClass(T.active);
	          }, filteredItem: function filteredItem() {
	            y.useLabels && S.has.maxSelections() || (y.useLabels && S.is.multiple() ? W.not("." + T.active).removeClass(T.filtered) : W.removeClass(T.filtered));
	          }, optionValue: function optionValue(e) {
	            var t = j.find('option[value="' + e + '"]'),
	                n = t.length > 0;n && t.hasClass(T.addition) && (x && (x.disconnect(), S.verbose("Temporarily disconnecting mutation observer", e)), t.remove(), S.verbose("Removing user addition as an <option>", e), x && x.observe(j[0], { childList: !0, subtree: !0 }));
	          }, message: function message() {
	            B.children(q.message).remove();
	          }, searchTerm: function searchTerm() {
	            S.verbose("Cleared search term"), z.val(""), S.set.filtered();
	          }, selected: function selected(t, n) {
	            return (n = y.allowAdditions ? n || S.get.itemWithAdditions(t) : n || S.get.item(t)) ? void n.each(function () {
	              var t = e(this),
	                  n = S.get.choiceText(t),
	                  i = S.get.choiceValue(t, n);S.is.multiple() ? y.useLabels ? (S.remove.value(i, n, t), S.remove.label(i)) : (S.remove.value(i, n, t), 0 === S.get.selectionCount() ? S.set.placeholderText() : S.set.text(S.add.variables(A.count))) : S.remove.value(i, n, t), t.removeClass(T.filtered).removeClass(T.active), y.useLabels && t.removeClass(T.selected);
	            }) : !1;
	          }, selectedItem: function selectedItem() {
	            W.removeClass(T.selected);
	          }, value: function value(e, t, n) {
	            var i,
	                a = S.get.values();S.has.selectInput() ? (S.verbose("Input is <select> removing selected option", e), i = S.remove.arrayValue(e, a), S.remove.optionValue(e)) : (S.verbose("Removing from delimited values", e), i = S.remove.arrayValue(e, a), i = i.join(y.delimiter)), y.fireOnInit === !1 && S.is.initialLoad() ? S.verbose("No callback on initial load", y.onRemove) : y.onRemove.call(Y, e, t, n), S.set.value(i, t, n), S.check.maxSelections();
	          }, arrayValue: function arrayValue(t, n) {
	            return e.isArray(n) || (n = [n]), n = e.grep(n, function (e) {
	              return t != e;
	            }), S.verbose("Removed value from delimited string", t, n), n;
	          }, label: function label(e, t) {
	            var n = P.find(q.label),
	                i = n.filter('[data-value="' + e + '"]');S.verbose("Removing label", i), i.remove();
	          }, activeLabels: function activeLabels(e) {
	            e = e || P.find(q.label).filter("." + T.active), S.verbose("Removing active label selections", e), S.remove.labels(e);
	          }, labels: function labels(t) {
	            t = t || P.find(q.label), S.verbose("Removing labels", t), t.each(function () {
	              var t = e(this),
	                  n = t.data(D.value),
	                  a = n !== i ? String(n) : n,
	                  o = S.is.userValue(a);return y.onLabelRemove.call(t, n) === !1 ? void S.debug("Label remove callback cancelled removal") : void (o ? (S.remove.value(a), S.remove.label(a)) : S.remove.selected(a));
	            });
	          }, tabbable: function tabbable() {
	            S.has.search() ? (S.debug("Searchable dropdown initialized"), z.removeAttr("tabindex"), B.removeAttr("tabindex")) : (S.debug("Simple selection dropdown initialized"), P.removeAttr("tabindex"), B.removeAttr("tabindex"));
	          } }, has: { search: function search() {
	            return z.length > 0;
	          }, selectInput: function selectInput() {
	            return j.is("select");
	          }, firstLetter: function firstLetter(e, t) {
	            var n, i;return e && 0 !== e.length && "string" == typeof t ? (n = S.get.choiceText(e, !1), t = t.toLowerCase(), i = String(n).charAt(0).toLowerCase(), t == i) : !1;
	          }, input: function input() {
	            return j.length > 0;
	          }, items: function items() {
	            return W.length > 0;
	          }, menu: function menu() {
	            return B.length > 0;
	          }, message: function message() {
	            return 0 !== B.children(q.message).length;
	          }, label: function label(e) {
	            var t = P.find(q.label);return t.filter('[data-value="' + e + '"]').length > 0;
	          }, maxSelections: function maxSelections() {
	            return y.maxSelections && S.get.selectionCount() >= y.maxSelections;
	          }, allResultsFiltered: function allResultsFiltered() {
	            return W.filter(q.unselectable).length === W.length;
	          }, query: function query() {
	            return "" !== S.get.query();
	          }, value: function value(t) {
	            var n = S.get.values(),
	                i = e.isArray(n) ? n && -1 !== e.inArray(t, n) : n == t;return !!i;
	          } }, is: { active: function active() {
	            return P.hasClass(T.active);
	          }, alreadySetup: function alreadySetup() {
	            return P.is("select") && P.parent(q.dropdown).length > 0 && 0 === P.prev().length;
	          }, animating: function animating(e) {
	            return e ? e.transition && e.transition("is animating") : B.transition && B.transition("is animating");
	          }, disabled: function disabled() {
	            return P.hasClass(T.disabled);
	          }, focused: function focused() {
	            return n.activeElement === P[0];
	          }, focusedOnSearch: function focusedOnSearch() {
	            return n.activeElement === z[0];
	          }, allFiltered: function allFiltered() {
	            return (S.is.multiple() || S.has.search()) && !S.has.message() && S.has.allResultsFiltered();
	          }, hidden: function hidden(e) {
	            return !S.is.visible(e);
	          }, initialLoad: function initialLoad() {
	            return g;
	          }, onScreen: function onScreen(e) {
	            var t,
	                n = e || B,
	                i = !0,
	                a = {};return n.addClass(T.loading), t = { context: { scrollTop: M.scrollTop(), height: M.outerHeight() }, menu: { offset: n.offset(), height: n.outerHeight() } }, a = { above: t.context.scrollTop <= t.menu.offset.top - t.menu.height, below: t.context.scrollTop + t.context.height >= t.menu.offset.top + t.menu.height }, a.below ? (S.verbose("Dropdown can fit in context downward", a), i = !0) : a.below || a.above ? (S.verbose("Dropdown cannot fit below, opening upward", a), i = !1) : (S.verbose("Dropdown cannot fit in either direction, favoring downward", a), i = !0), n.removeClass(T.loading), i;
	          }, inObject: function inObject(t, n) {
	            var i = !1;return e.each(n, function (e, n) {
	              return n == t ? (i = !0, !0) : void 0;
	            }), i;
	          }, multiple: function multiple() {
	            return P.hasClass(T.multiple);
	          }, single: function single() {
	            return !S.is.multiple();
	          }, selectMutation: function selectMutation(t) {
	            var n = !1;return e.each(t, function (t, i) {
	              return i.target && e(i.target).is("select") ? (n = !0, !0) : void 0;
	            }), n;
	          }, search: function search() {
	            return P.hasClass(T.search);
	          }, searchSelection: function searchSelection() {
	            return S.has.search() && 1 === z.parent(q.dropdown).length;
	          }, selection: function selection() {
	            return P.hasClass(T.selection);
	          }, userValue: function userValue(t) {
	            return -1 !== e.inArray(t, S.get.userValues());
	          }, upward: function upward(e) {
	            var t = e || P;return t.hasClass(T.upward);
	          }, visible: function visible(e) {
	            return e ? e.hasClass(T.visible) : B.hasClass(T.visible);
	          } }, can: { activate: function activate(e) {
	            return y.useLabels ? !0 : S.has.maxSelections() ? !(!S.has.maxSelections() || !e.hasClass(T.active)) : !0;
	          }, click: function click() {
	            return c || "click" == y.on;
	          }, extendSelect: function extendSelect() {
	            return y.allowAdditions || y.apiSettings;
	          }, show: function show() {
	            return !S.is.disabled() && (S.has.items() || S.has.message());
	          }, useAPI: function useAPI() {
	            return e.fn.api !== i;
	          } }, animate: { show: function show(t, n) {
	            var a,
	                o = n || B,
	                s = n ? function () {} : function () {
	              S.hideSubMenus(), S.hideOthers(), S.set.active();
	            };t = e.isFunction(t) ? t : function () {}, S.verbose("Doing menu show animation", o), S.set.direction(n), a = S.get.transition(n), S.is.selection() && S.set.scrollPosition(S.get.selectedItem(), !0), (S.is.hidden(o) || S.is.animating(o)) && ("none" == a ? (s(), o.transition("show"), t.call(Y)) : e.fn.transition !== i && P.transition("is supported") ? o.transition({ animation: a + " in", debug: y.debug, verbose: y.verbose, duration: y.duration, queue: !0, onStart: s, onComplete: function onComplete() {
	                t.call(Y);
	              } }) : S.error(V.noTransition, a));
	          }, hide: function hide(t, n) {
	            var a = n || B,
	                o = (n ? .9 * y.duration : y.duration, n ? function () {} : function () {
	              S.can.click() && S.unbind.intent(), S.remove.active();
	            }),
	                s = S.get.transition(n);t = e.isFunction(t) ? t : function () {}, (S.is.visible(a) || S.is.animating(a)) && (S.verbose("Doing menu hide animation", a), "none" == s ? (o(), a.transition("hide"), t.call(Y)) : e.fn.transition !== i && P.transition("is supported") ? a.transition({ animation: s + " out", duration: y.duration, debug: y.debug, verbose: y.verbose, queue: !0, onStart: o, onComplete: function onComplete() {
	                "auto" == y.direction && S.remove.upward(n), t.call(Y);
	              } }) : S.error(V.transition));
	          } }, hideAndClear: function hideAndClear() {
	          S.remove.searchTerm(), S.has.maxSelections() || (S.has.search() ? S.hide(function () {
	            S.remove.filteredItem();
	          }) : S.hide());
	        }, delay: { show: function show() {
	            S.verbose("Delaying show event to ensure user intent"), clearTimeout(S.timer), S.timer = setTimeout(S.show, y.delay.show);
	          }, hide: function hide() {
	            S.verbose("Delaying hide event to ensure user intent"), clearTimeout(S.timer), S.timer = setTimeout(S.hide, y.delay.hide);
	          } }, escape: { regExp: function regExp(e) {
	            return e = String(e), e.replace(R.escape, "\\$&");
	          } }, setting: function setting(t, n) {
	          if ((S.debug("Changing setting", t, n), e.isPlainObject(t))) e.extend(!0, y, t);else {
	            if (n === i) return y[t];y[t] = n;
	          }
	        }, internal: function internal(t, n) {
	          if (e.isPlainObject(t)) e.extend(!0, S, t);else {
	            if (n === i) return S[t];S[t] = n;
	          }
	        }, debug: function debug() {
	          y.debug && (y.performance ? S.performance.log(arguments) : (S.debug = Function.prototype.bind.call(console.info, console, y.name + ":"), S.debug.apply(console, arguments)));
	        }, verbose: function verbose() {
	          y.verbose && y.debug && (y.performance ? S.performance.log(arguments) : (S.verbose = Function.prototype.bind.call(console.info, console, y.name + ":"), S.verbose.apply(console, arguments)));
	        }, error: function error() {
	          S.error = Function.prototype.bind.call(console.error, console, y.name + ":"), S.error.apply(console, arguments);
	        }, performance: { log: function log(e) {
	            var t, n, i;y.performance && (t = new Date().getTime(), i = u || t, n = t - i, u = t, d.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: Y, "Execution Time": n })), clearTimeout(S.performance.timer), S.performance.timer = setTimeout(S.performance.display, 500);
	          }, display: function display() {
	            var t = y.name + ":",
	                n = 0;u = !1, clearTimeout(S.performance.timer), e.each(d, function (e, t) {
	              n += t["Execution Time"];
	            }), t += " " + n + "ms", l && (t += " '" + l + "'"), (console.group !== i || console.table !== i) && d.length > 0 && (console.groupCollapsed(t), console.table ? console.table(d) : e.each(d, function (e, t) {
	              console.log(t.Name + ": " + t["Execution Time"] + "ms");
	            }), console.groupEnd()), d = [];
	          } }, invoke: function invoke(t, n, a) {
	          var s,
	              r,
	              l,
	              c = G;return n = n || f, a = Y || a, "string" == typeof t && c !== i && (t = t.split(/[\. ]/), s = t.length - 1, e.each(t, function (n, a) {
	            var o = n != s ? a + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(c[o]) && n != s) c = c[o];else {
	              if (c[o] !== i) return r = c[o], !1;if (!e.isPlainObject(c[a]) || n == s) return c[a] !== i ? (r = c[a], !1) : (S.error(V.method, t), !1);c = c[a];
	            }
	          })), e.isFunction(r) ? l = r.apply(a, n) : r !== i && (l = r), e.isArray(o) ? o.push(l) : o !== i ? o = [o, l] : l !== i && (o = l), r;
	        } }, m ? (G === i && S.initialize(), S.invoke(v)) : (G !== i && G.invoke("destroy"), S.initialize());
	    }), o !== i ? o : s;
	  }, e.fn.dropdown.settings = { debug: !1, verbose: !1, performance: !0, on: "click", action: "activate", apiSettings: !1, saveRemoteData: !0, throttle: 200, context: t, direction: "auto", keepOnScreen: !0, match: "both", fullTextSearch: !1, placeholder: "auto", preserveHTML: !0, sortSelect: !1, forceSelection: !0, allowAdditions: !1, maxSelections: !1, useLabels: !0, delimiter: ",", showOnFocus: !0, allowTab: !0, allowCategorySelection: !1, fireOnInit: !1, transition: "auto", duration: 200, glyphWidth: 1.0714, label: { transition: "scale", duration: 200, variation: !1 }, delay: { hide: 300, show: 200, search: 20, touch: 50 }, onChange: function onChange(e, t, n) {}, onAdd: function onAdd(e, t, n) {}, onRemove: function onRemove(e, t, n) {}, onLabelSelect: function onLabelSelect(e) {}, onLabelCreate: function onLabelCreate(t, n) {
	      return e(this);
	    }, onLabelRemove: function onLabelRemove(e) {
	      return !0;
	    }, onNoResults: function onNoResults(e) {
	      return !0;
	    }, onShow: function onShow() {}, onHide: function onHide() {}, name: "Dropdown", namespace: "dropdown", message: { addResult: "Add <b>{term}</b>", count: "{count} selected", maxSelections: "Max {maxCount} selections", noResults: "No results found.", serverError: "There was an error contacting the server" }, error: { action: "You called a dropdown action that was not defined", alreadySetup: "Once a select has been initialized behaviors must be called on the created ui dropdown", labels: "Allowing user additions currently requires the use of labels.", missingMultiple: "<select> requires multiple property to be set to correctly preserve multiple values", method: "The method you called is not defined.", noAPI: "The API module is required to load resources remotely", noStorage: "Saving remote data requires session storage", noTransition: "This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>" }, regExp: { escape: /[-[\]{}()*+?.,\\^$|#\s]/g }, metadata: { defaultText: "defaultText", defaultValue: "defaultValue", placeholderText: "placeholder", text: "text", value: "value" }, fields: { remoteValues: "results", values: "values", name: "name", value: "value" }, keys: { backspace: 8, delimiter: 188, deleteKey: 46, enter: 13, escape: 27, pageUp: 33, pageDown: 34, leftArrow: 37, upArrow: 38, rightArrow: 39, downArrow: 40 }, selector: { addition: ".addition", dropdown: ".ui.dropdown", icon: "> .dropdown.icon", input: '> input[type="hidden"], > select', item: ".item", label: "> .label", remove: "> .label > .delete.icon", siblingLabel: ".label", menu: ".menu", message: ".message", menuIcon: ".dropdown.icon", search: "input.search, .menu > .search > input", text: "> .text:not(.icon)", unselectable: ".disabled, .filtered" }, className: { active: "active", addition: "addition", animating: "animating", disabled: "disabled", dropdown: "ui dropdown", filtered: "filtered", hidden: "hidden transition", item: "item", label: "ui label", loading: "loading", menu: "menu", message: "message", multiple: "multiple", placeholder: "default", search: "search", selected: "selected", selection: "selection", upward: "upward", visible: "visible" } }, e.fn.dropdown.settings.templates = { dropdown: function dropdown(t) {
	      var n = t.placeholder || !1,
	          i = (t.values || {}, "");return i += '<i class="dropdown icon"></i>', i += t.placeholder ? '<div class="default text">' + n + "</div>" : '<div class="text"></div>', i += '<div class="menu">', e.each(t.values, function (e, t) {
	        i += t.disabled ? '<div class="disabled item" data-value="' + t.value + '">' + t.name + "</div>" : '<div class="item" data-value="' + t.value + '">' + t.name + "</div>";
	      }), i += "</div>";
	    }, menu: function menu(t, n) {
	      var i = t[n.values] || {},
	          a = "";return e.each(i, function (e, t) {
	        a += '<div class="item" data-value="' + t[n.value] + '">' + t[n.name] + "</div>";
	      }), a;
	    }, label: function label(e, t) {
	      return t + '<i class="delete icon"></i>';
	    }, message: function message(e) {
	      return e;
	    }, addition: function addition(e) {
	      return e;
	    } };
	})(jQuery, window, document);

/***/ },
/* 76 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 77 */,
/* 78 */
/***/ function(module, exports) {

	/*!
	 * # Semantic UI 2.1.8 - Form Validation
	 * http://github.com/semantic-org/semantic-ui/
	 *
	 *
	 * Copyright 2015 Contributors
	 * Released under the MIT license
	 * http://opensource.org/licenses/MIT
	 *
	 */
	"use strict";

	!(function (e, t, n, r) {
	  "use strict";e.fn.form = function (t) {
	    var i,
	        a = e(this),
	        o = a.selector || "",
	        l = new Date().getTime(),
	        s = [],
	        c = arguments[0],
	        u = arguments[1],
	        f = "string" == typeof c,
	        d = [].slice.call(arguments, 1);return a.each(function () {
	      var p,
	          m,
	          g,
	          h,
	          v,
	          b,
	          y,
	          x,
	          k,
	          E,
	          w,
	          C,
	          V,
	          R,
	          S,
	          F,
	          A,
	          T,
	          j = e(this),
	          z = this,
	          O = [],
	          D = !1;T = { initialize: function initialize() {
	          T.get.settings(), f ? (A === r && T.instantiate(), T.invoke(c)) : (T.verbose("Initializing form validation", j, x), T.bindEvents(), T.set.defaults(), T.instantiate());
	        }, instantiate: function instantiate() {
	          T.verbose("Storing instance of module", T), A = T, j.data(S, T);
	        }, destroy: function destroy() {
	          T.verbose("Destroying previous module", A), T.removeEvents(), j.removeData(S);
	        }, refresh: function refresh() {
	          T.verbose("Refreshing selector cache"), p = j.find(w.field), m = j.find(w.group), g = j.find(w.message), h = j.find(w.prompt), v = j.find(w.submit), b = j.find(w.clear), y = j.find(w.reset);
	        }, submit: function submit() {
	          T.verbose("Submitting form", j), j.submit();
	        }, attachEvents: function attachEvents(t, n) {
	          n = n || "submit", e(t).on("click" + F, function (e) {
	            T[n](), e.preventDefault();
	          });
	        }, bindEvents: function bindEvents() {
	          T.verbose("Attaching form events"), j.on("submit" + F, T.validate.form).on("blur" + F, w.field, T.event.field.blur).on("click" + F, w.submit, T.submit).on("click" + F, w.reset, T.reset).on("click" + F, w.clear, T.clear), x.keyboardShortcuts && j.on("keydown" + F, w.field, T.event.field.keydown), p.each(function () {
	            var t = e(this),
	                n = t.prop("type"),
	                r = T.get.changeEvent(n, t);e(this).on(r + F, T.event.field.change);
	          });
	        }, clear: function clear() {
	          p.each(function () {
	            var t = e(this),
	                n = t.parent(),
	                r = t.closest(m),
	                i = r.find(w.prompt),
	                a = t.data(E.defaultValue) || "",
	                o = n.is(w.uiCheckbox),
	                l = n.is(w.uiDropdown),
	                s = r.hasClass(C.error);s && (T.verbose("Resetting error on field", r), r.removeClass(C.error), i.remove()), l ? (T.verbose("Resetting dropdown value", n, a), n.dropdown("clear")) : o ? t.prop("checked", !1) : (T.verbose("Resetting field value", t, a), t.val(""));
	          });
	        }, reset: function reset() {
	          p.each(function () {
	            var t = e(this),
	                n = t.parent(),
	                i = t.closest(m),
	                a = i.find(w.prompt),
	                o = t.data(E.defaultValue),
	                l = n.is(w.uiCheckbox),
	                s = n.is(w.uiDropdown),
	                c = i.hasClass(C.error);o !== r && (c && (T.verbose("Resetting error on field", i), i.removeClass(C.error), a.remove()), s ? (T.verbose("Resetting dropdown value", n, o), n.dropdown("restore defaults")) : l ? (T.verbose("Resetting checkbox value", n, o), t.prop("checked", o)) : (T.verbose("Resetting field value", t, o), t.val(o)));
	          });
	        }, is: { bracketedRule: function bracketedRule(e) {
	            return e.type && e.type.match(x.regExp.bracket);
	          }, valid: function valid() {
	            var t = !0;return T.verbose("Checking if form is valid"), e.each(k, function (e, n) {
	              T.validate.field(n, e) || (t = !1);
	            }), t;
	          } }, removeEvents: function removeEvents() {
	          j.off(F), p.off(F), v.off(F), p.off(F);
	        }, event: { field: { keydown: function keydown(t) {
	              var n = e(this),
	                  r = t.which,
	                  i = { enter: 13, escape: 27 };r == i.escape && (T.verbose("Escape key pressed blurring field"), n.blur()), !t.ctrlKey && r == i.enter && n.is(w.input) && n.not(w.checkbox).length > 0 && (D || (n.one("keyup" + F, T.event.field.keyup), T.submit(), T.debug("Enter pressed on input submitting form")), D = !0);
	            }, keyup: function keyup() {
	              D = !1;
	            }, blur: function blur(t) {
	              var n = e(this),
	                  r = n.closest(m),
	                  i = T.get.validation(n);r.hasClass(C.error) ? (T.debug("Revalidating field", n, i), T.validate.form.call(T, t, !0)) : "blur" != x.on && "change" != x.on || i && T.validate.field(i);
	            }, change: function change(t) {
	              var n = e(this),
	                  r = n.closest(m);("change" == x.on || r.hasClass(C.error) && x.revalidate) && (clearTimeout(T.timer), T.timer = setTimeout(function () {
	                T.debug("Revalidating field", n, T.get.validation(n)), T.validate.form.call(T, t, !0);
	              }, x.delay));
	            } } }, get: { ancillaryValue: function ancillaryValue(e) {
	            return e.type && T.is.bracketedRule(e) ? e.type.match(x.regExp.bracket)[1] + "" : !1;
	          }, ruleName: function ruleName(e) {
	            return T.is.bracketedRule(e) ? e.type.replace(e.type.match(x.regExp.bracket)[0], "") : e.type;
	          }, changeEvent: function changeEvent(e, t) {
	            return "checkbox" == e || "radio" == e || "hidden" == e || t.is("select") ? "change" : T.get.inputEvent();
	          }, inputEvent: function inputEvent() {
	            return n.createElement("input").oninput !== r ? "input" : n.createElement("input").onpropertychange !== r ? "propertychange" : "keyup";
	          }, prompt: function prompt(e, t) {
	            var n,
	                r,
	                i,
	                a = T.get.ruleName(e),
	                o = T.get.ancillaryValue(e),
	                l = e.prompt || x.prompt[a] || x.text.unspecifiedRule,
	                s = -1 !== l.search("{value}"),
	                c = -1 !== l.search("{name}");return (c || s) && (r = T.get.field(t.identifier)), s && (l = l.replace("{value}", r.val())), c && (n = r.closest(w.group).find("label").eq(0), i = 1 == n.size() ? n.text() : r.prop("placeholder") || x.text.unspecifiedField, l = l.replace("{name}", i)), l = l.replace("{identifier}", t.identifier), l = l.replace("{ruleValue}", o), e.prompt || T.verbose("Using default validation prompt for type", l, a), l;
	          }, settings: function settings() {
	            if (e.isPlainObject(t)) {
	              var n,
	                  i = Object.keys(t),
	                  a = i.length > 0 ? t[i[0]].identifier !== r && t[i[0]].rules !== r : !1;a ? (x = e.extend(!0, {}, e.fn.form.settings, u), k = e.extend({}, e.fn.form.settings.defaults, t), T.error(x.error.oldSyntax, z), T.verbose("Extending settings from legacy parameters", k, x)) : (t.fields && (n = Object.keys(t.fields), ("string" == typeof t.fields[n[0]] || e.isArray(t.fields[n[0]])) && e.each(t.fields, function (n, r) {
	                "string" == typeof r && (r = [r]), t.fields[n] = { rules: [] }, e.each(r, function (e, r) {
	                  t.fields[n].rules.push({ type: r });
	                });
	              })), x = e.extend(!0, {}, e.fn.form.settings, t), k = e.extend({}, e.fn.form.settings.defaults, x.fields), T.verbose("Extending settings", k, x));
	            } else x = e.fn.form.settings, k = e.fn.form.settings.defaults, T.verbose("Using default form validation", k, x);R = x.namespace, E = x.metadata, w = x.selector, C = x.className, V = x.error, S = "module-" + R, F = "." + R, A = j.data(S), T.refresh();
	          }, field: function field(t) {
	            return T.verbose("Finding field with identifier", t), p.filter("#" + t).length > 0 ? p.filter("#" + t) : p.filter('[name="' + t + '"]').length > 0 ? p.filter('[name="' + t + '"]') : p.filter('[name="' + t + '[]"]').length > 0 ? p.filter('[name="' + t + '[]"]') : p.filter("[data-" + E.validate + '="' + t + '"]').length > 0 ? p.filter("[data-" + E.validate + '="' + t + '"]') : e("<input/>");
	          }, fields: function fields(t) {
	            var n = e();return e.each(t, function (e, t) {
	              n = n.add(T.get.field(t));
	            }), n;
	          }, validation: function validation(t) {
	            var n, r;return k ? (e.each(k, function (e, i) {
	              r = i.identifier || e, T.get.field(r)[0] == t[0] && (i.identifier = r, n = i);
	            }), n || !1) : !1;
	          }, value: function value(e) {
	            var t,
	                n = [];return n.push(e), t = T.get.values.call(z, n), t[e];
	          }, values: function values(t) {
	            var n = e.isArray(t) ? T.get.fields(t) : p,
	                r = {};return n.each(function (t, n) {
	              var i = e(n),
	                  a = (i.prop("type"), i.prop("name")),
	                  o = i.val(),
	                  l = i.is(w.checkbox),
	                  s = i.is(w.radio),
	                  c = -1 !== a.indexOf("[]"),
	                  u = l ? i.is(":checked") : !1;a && (c ? (a = a.replace("[]", ""), r[a] || (r[a] = []), l ? u ? r[a].push(o || !0) : r[a].push(!1) : r[a].push(o)) : s ? u && (r[a] = o) : l ? u ? r[a] = o || !0 : r[a] = !1 : r[a] = o);
	            }), r;
	          } }, has: { field: function field(e) {
	            return T.verbose("Checking for existence of a field with identifier", e), "string" != typeof e && T.error(V.identifier, e), p.filter("#" + e).length > 0 ? !0 : p.filter('[name="' + e + '"]').length > 0 ? !0 : p.filter("[data-" + E.validate + '="' + e + '"]').length > 0;
	          } }, add: { prompt: function prompt(t, n) {
	            var i = T.get.field(t),
	                a = i.closest(m),
	                o = a.children(w.prompt),
	                l = 0 !== o.length;n = "string" == typeof n ? [n] : n, T.verbose("Adding field error state", t), a.addClass(C.error), x.inline && (l || (o = x.templates.prompt(n), o.appendTo(a)), o.html(n[0]), l ? T.verbose("Inline errors are disabled, no inline error added", t) : x.transition && e.fn.transition !== r && j.transition("is supported") ? (T.verbose("Displaying error with css transition", x.transition), o.transition(x.transition + " in", x.duration)) : (T.verbose("Displaying error with fallback javascript animation"), o.fadeIn(x.duration)));
	          }, errors: function errors(e) {
	            T.debug("Adding form error messages", e), T.set.error(), g.html(x.templates.error(e));
	          } }, remove: { prompt: function prompt(t) {
	            var n = T.get.field(t),
	                i = n.closest(m),
	                a = i.children(w.prompt);i.removeClass(C.error), x.inline && a.is(":visible") && (T.verbose("Removing prompt for field", t), x.transition && e.fn.transition !== r && j.transition("is supported") ? a.transition(x.transition + " out", x.duration, function () {
	              a.remove();
	            }) : a.fadeOut(x.duration, function () {
	              a.remove();
	            }));
	          } }, set: { success: function success() {
	            j.removeClass(C.error).addClass(C.success);
	          }, defaults: function defaults() {
	            p.each(function () {
	              var t = e(this),
	                  n = t.filter(w.checkbox).length > 0,
	                  r = n ? t.is(":checked") : t.val();t.data(E.defaultValue, r);
	            });
	          }, error: function error() {
	            j.removeClass(C.success).addClass(C.error);
	          }, value: function value(e, t) {
	            var n = {};return n[e] = t, T.set.values.call(z, n);
	          }, values: function values(t) {
	            e.isEmptyObject(t) || e.each(t, function (t, n) {
	              var r,
	                  i = T.get.field(t),
	                  a = i.parent(),
	                  o = e.isArray(n),
	                  l = a.is(w.uiCheckbox),
	                  s = a.is(w.uiDropdown),
	                  c = i.is(w.radio) && l,
	                  u = i.length > 0;u && (o && l ? (T.verbose("Selecting multiple", n, i), a.checkbox("uncheck"), e.each(n, function (e, t) {
	                r = i.filter('[value="' + t + '"]'), a = r.parent(), r.length > 0 && a.checkbox("check");
	              })) : c ? (T.verbose("Selecting radio value", n, i), i.filter('[value="' + n + '"]').parent(w.uiCheckbox).checkbox("check")) : l ? (T.verbose("Setting checkbox value", n, a), n === !0 ? a.checkbox("check") : a.checkbox("uncheck")) : s ? (T.verbose("Setting dropdown value", n, a), a.dropdown("set selected", n)) : (T.verbose("Setting field value", n, i), i.val(n)));
	            });
	          } }, validate: { form: function form(e, t) {
	            var n = T.get.values();if (D) return !1;if ((O = [], T.is.valid())) {
	              if ((T.debug("Form has no validation errors, submitting"), T.set.success(), t !== !0)) return x.onSuccess.call(z, e, n);
	            } else if ((T.debug("Form has errors"), T.set.error(), x.inline || T.add.errors(O), j.data("moduleApi") !== r && e.stopImmediatePropagation(), t !== !0)) return x.onFailure.call(z, O, n);
	          }, field: function field(t, n) {
	            var i = t.identifier || n,
	                a = T.get.field(i),
	                o = !0,
	                l = [];return t.identifier || (T.debug("Using field name as identifier", i), t.identifier = i), a.prop("disabled") ? (T.debug("Field is disabled. Skipping", i), o = !0) : t.optional && "" === e.trim(a.val()) ? (T.debug("Field is optional and empty. Skipping", i), o = !0) : t.rules !== r && e.each(t.rules, function (e, n) {
	              T.has.field(i) && !T.validate.rule(t, n) && (T.debug("Field is invalid", i, n.type), l.push(T.get.prompt(n, t)), o = !1);
	            }), o ? (T.remove.prompt(i, l), x.onValid.call(a), !0) : (O = O.concat(l), T.add.prompt(i, l), x.onInvalid.call(a, l), !1);
	          }, rule: function rule(t, n) {
	            var i = T.get.field(t.identifier),
	                a = (n.type, i.val()),
	                o = T.get.ancillaryValue(n),
	                l = T.get.ruleName(n),
	                s = x.rules[l];return e.isFunction(s) ? (a = a === r || "" === a || null === a ? "" : e.trim(a + ""), s.call(i, a, o)) : void T.error(V.noRule, l);
	          } }, setting: function setting(t, n) {
	          if (e.isPlainObject(t)) e.extend(!0, x, t);else {
	            if (n === r) return x[t];x[t] = n;
	          }
	        }, internal: function internal(t, n) {
	          if (e.isPlainObject(t)) e.extend(!0, T, t);else {
	            if (n === r) return T[t];T[t] = n;
	          }
	        }, debug: function debug() {
	          x.debug && (x.performance ? T.performance.log(arguments) : (T.debug = Function.prototype.bind.call(console.info, console, x.name + ":"), T.debug.apply(console, arguments)));
	        }, verbose: function verbose() {
	          x.verbose && x.debug && (x.performance ? T.performance.log(arguments) : (T.verbose = Function.prototype.bind.call(console.info, console, x.name + ":"), T.verbose.apply(console, arguments)));
	        }, error: function error() {
	          T.error = Function.prototype.bind.call(console.error, console, x.name + ":"), T.error.apply(console, arguments);
	        }, performance: { log: function log(e) {
	            var t, n, r;x.performance && (t = new Date().getTime(), r = l || t, n = t - r, l = t, s.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: z, "Execution Time": n })), clearTimeout(T.performance.timer), T.performance.timer = setTimeout(T.performance.display, 500);
	          }, display: function display() {
	            var t = x.name + ":",
	                n = 0;l = !1, clearTimeout(T.performance.timer), e.each(s, function (e, t) {
	              n += t["Execution Time"];
	            }), t += " " + n + "ms", o && (t += " '" + o + "'"), a.length > 1 && (t += " (" + a.length + ")"), (console.group !== r || console.table !== r) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s, function (e, t) {
	              console.log(t.Name + ": " + t["Execution Time"] + "ms");
	            }), console.groupEnd()), s = [];
	          } }, invoke: function invoke(t, n, a) {
	          var o,
	              l,
	              s,
	              c = A;return n = n || d, a = z || a, "string" == typeof t && c !== r && (t = t.split(/[\. ]/), o = t.length - 1, e.each(t, function (n, i) {
	            var a = n != o ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;if (e.isPlainObject(c[a]) && n != o) c = c[a];else {
	              if (c[a] !== r) return l = c[a], !1;if (!e.isPlainObject(c[i]) || n == o) return c[i] !== r ? (l = c[i], !1) : !1;c = c[i];
	            }
	          })), e.isFunction(l) ? s = l.apply(a, n) : l !== r && (s = l), e.isArray(i) ? i.push(s) : i !== r ? i = [i, s] : s !== r && (i = s), l;
	        } }, T.initialize();
	    }), i !== r ? i : this;
	  }, e.fn.form.settings = { name: "Form", namespace: "form", debug: !1, verbose: !1, performance: !0, fields: !1, keyboardShortcuts: !0, on: "submit", inline: !1, delay: 200, revalidate: !0, transition: "scale", duration: 200, onValid: function onValid() {}, onInvalid: function onInvalid() {}, onSuccess: function onSuccess() {
	      return !0;
	    }, onFailure: function onFailure() {
	      return !1;
	    }, metadata: { defaultValue: "default", validate: "validate" }, regExp: { bracket: /\[(.*)\]/i, decimal: /^\d*(\.)\d+/, email: "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?", escape: /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, flags: /^\/(.*)\/(.*)?/, integer: /^\-?\d+$/, number: /^\-?\d*(\.\d+)?$/, url: /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/i }, text: { unspecifiedRule: "Please enter a valid value", unspecifiedField: "This field" }, prompt: { empty: "{name} must have a value", checked: "{name} must be checked", email: "{name} must be a valid e-mail", url: "{name} must be a valid url", regExp: "{name} is not formatted correctly", integer: "{name} must be an integer", decimal: "{name} must be a decimal number", number: "{name} must be set to a number", is: '{name} must be "{ruleValue}"', isExactly: '{name} must be exactly "{ruleValue}"', not: '{name} cannot be set to "{ruleValue}"', notExactly: '{name} cannot be set to exactly "{ruleValue}"', contain: '{name} cannot contain "{ruleValue}"', containExactly: '{name} cannot contain exactly "{ruleValue}"', doesntContain: '{name} must contain  "{ruleValue}"', doesntContainExactly: '{name} must contain exactly "{ruleValue}"', minLength: "{name} must be at least {ruleValue} characters", length: "{name} must be at least {ruleValue} characters", exactLength: "{name} must be exactly {ruleValue} characters", maxLength: "{name} cannot be longer than {ruleValue} characters", match: "{name} must match {ruleValue} field", different: "{name} must have a different value than {ruleValue} field", creditCard: "{name} must be a valid credit card number", minCount: "{name} must have at least {ruleValue} choices", exactCount: "{name} must have exactly {ruleValue} choices", maxCount: "{name} must have {ruleValue} or less choices" }, selector: { checkbox: 'input[type="checkbox"], input[type="radio"]', clear: ".clear", field: "input, textarea, select", group: ".field", input: "input", message: ".error.message", prompt: ".prompt.label", radio: 'input[type="radio"]', reset: '.reset:not([type="reset"])', submit: '.submit:not([type="submit"])', uiCheckbox: ".ui.checkbox", uiDropdown: ".ui.dropdown" }, className: { error: "error", label: "ui prompt label", pressed: "down", success: "success" }, error: { identifier: "You must specify a string identifier for each field", method: "The method you called is not defined.", noRule: "There is no rule matching the one you specified", oldSyntax: "Starting in 2.0 forms now only take a single settings object. Validation settings converted to new syntax automatically." }, templates: { error: function error(t) {
	        var n = '<ul class="list">';return e.each(t, function (e, t) {
	          n += "<li>" + t + "</li>";
	        }), n += "</ul>", e(n);
	      }, prompt: function prompt(t) {
	        return e("<div/>").addClass("ui basic red pointing prompt label").html(t[0]);
	      } }, rules: { empty: function empty(t) {
	        return !(t === r || "" === t || e.isArray(t) && 0 === t.length);
	      }, checked: function checked() {
	        return e(this).filter(":checked").length > 0;
	      }, email: function email(t) {
	        var n = new RegExp(e.fn.form.settings.regExp.email, "i");return n.test(t);
	      }, url: function url(t) {
	        return e.fn.form.settings.regExp.url.test(t);
	      }, regExp: function regExp(t, n) {
	        var r,
	            i = n.match(e.fn.form.settings.regExp.flags);return i && (n = i.length >= 2 ? i[1] : n, r = i.length >= 3 ? i[2] : ""), t.match(new RegExp(n, r));
	      }, integer: function integer(t, n) {
	        var i,
	            a,
	            o,
	            l = e.fn.form.settings.regExp.integer;return n && -1 === ["", ".."].indexOf(n) && (-1 == n.indexOf("..") ? l.test(n) && (i = a = n - 0) : (o = n.split("..", 2), l.test(o[0]) && (i = o[0] - 0), l.test(o[1]) && (a = o[1] - 0))), l.test(t) && (i === r || t >= i) && (a === r || a >= t);
	      }, decimal: function decimal(t) {
	        return e.fn.form.settings.regExp.decimal.test(t);
	      }, number: function number(t) {
	        return e.fn.form.settings.regExp.number.test(t);
	      }, is: function is(e, t) {
	        return t = "string" == typeof t ? t.toLowerCase() : t, e = "string" == typeof e ? e.toLowerCase() : e, e == t;
	      }, isExactly: function isExactly(e, t) {
	        return e == t;
	      }, not: function not(e, t) {
	        return e = "string" == typeof e ? e.toLowerCase() : e, t = "string" == typeof t ? t.toLowerCase() : t, e != t;
	      }, notExactly: function notExactly(e, t) {
	        return e != t;
	      }, contains: function contains(t, n) {
	        return n = n.replace(e.fn.form.settings.regExp.escape, "\\$&"), -1 !== t.search(new RegExp(n, "i"));
	      }, containsExactly: function containsExactly(t, n) {
	        return n = n.replace(e.fn.form.settings.regExp.escape, "\\$&"), -1 !== t.search(new RegExp(n));
	      }, doesntContain: function doesntContain(t, n) {
	        return n = n.replace(e.fn.form.settings.regExp.escape, "\\$&"), -1 === t.search(new RegExp(n, "i"));
	      }, doesntContainExactly: function doesntContainExactly(t, n) {
	        return n = n.replace(e.fn.form.settings.regExp.escape, "\\$&"), -1 === t.search(new RegExp(n));
	      }, minLength: function minLength(e, t) {
	        return e !== r ? e.length >= t : !1;
	      }, length: function length(e, t) {
	        return e !== r ? e.length >= t : !1;
	      }, exactLength: function exactLength(e, t) {
	        return e !== r ? e.length == t : !1;
	      }, maxLength: function maxLength(e, t) {
	        return e !== r ? e.length <= t : !1;
	      }, match: function match(t, n) {
	        var i;e(this);return e('[data-validate="' + n + '"]').length > 0 ? i = e('[data-validate="' + n + '"]').val() : e("#" + n).length > 0 ? i = e("#" + n).val() : e('[name="' + n + '"]').length > 0 ? i = e('[name="' + n + '"]').val() : e('[name="' + n + '[]"]').length > 0 && (i = e('[name="' + n + '[]"]')), i !== r ? t.toString() == i.toString() : !1;
	      }, different: function different(t, n) {
	        var i;e(this);return e('[data-validate="' + n + '"]').length > 0 ? i = e('[data-validate="' + n + '"]').val() : e("#" + n).length > 0 ? i = e("#" + n).val() : e('[name="' + n + '"]').length > 0 ? i = e('[name="' + n + '"]').val() : e('[name="' + n + '[]"]').length > 0 && (i = e('[name="' + n + '[]"]')), i !== r ? t.toString() !== i.toString() : !1;
	      }, creditCard: function creditCard(t, n) {
	        var r,
	            i,
	            a = { visa: { pattern: /^4/, length: [16] }, amex: { pattern: /^3[47]/, length: [15] }, mastercard: { pattern: /^5[1-5]/, length: [16] }, discover: { pattern: /^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/, length: [16] }, unionPay: { pattern: /^(62|88)/, length: [16, 17, 18, 19] }, jcb: { pattern: /^35(2[89]|[3-8][0-9])/, length: [16] }, maestro: { pattern: /^(5018|5020|5038|6304|6759|676[1-3])/, length: [12, 13, 14, 15, 16, 17, 18, 19] }, dinersClub: { pattern: /^(30[0-5]|^36)/, length: [14] }, laser: { pattern: /^(6304|670[69]|6771)/, length: [16, 17, 18, 19] }, visaElectron: { pattern: /^(4026|417500|4508|4844|491(3|7))/, length: [16] } },
	            o = {},
	            l = !1,
	            s = "string" == typeof n ? n.split(",") : !1;if ("string" == typeof t && 0 !== t.length) {
	          if (s && (e.each(s, function (n, r) {
	            i = a[r], i && (o = { length: -1 !== e.inArray(t.length, i.length), pattern: -1 !== t.search(i.pattern) }, o.length && o.pattern && (l = !0));
	          }), !l)) return !1;if ((r = { number: -1 !== e.inArray(t.length, a.unionPay.length), pattern: -1 !== t.search(a.unionPay.pattern) }, r.number && r.pattern)) return !0;for (var c = t.length, u = 0, f = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]], d = 0; c--;) d += f[u][parseInt(t.charAt(c), 10)], u ^= 1;return d % 10 === 0 && d > 0;
	        }
	      }, minCount: function minCount(e, t) {
	        return 0 == t ? !0 : 1 == t ? "" !== e : e.split(",").length >= t;
	      }, exactCount: function exactCount(e, t) {
	        return 0 == t ? "" === e : 1 == t ? "" !== e && -1 === e.search(",") : e.split(",").length == t;
	      }, maxCount: function maxCount(e, t) {
	        return 0 == t ? !1 : 1 == t ? -1 === e.search(",") : e.split(",").length <= t;
	      } } };
	})(jQuery, window, document);

/***/ },
/* 79 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 80 */,
/* 81 */
/***/ function(module, exports) {

	/*!
	 * # Semantic UI 2.1.8 - Search
	 * http://github.com/semantic-org/semantic-ui/
	 *
	 *
	 * Copyright 2015 Contributors
	 * Released under the MIT license
	 * http://opensource.org/licenses/MIT
	 *
	 */
	"use strict";

	!(function (e, t, s, n) {
	  "use strict";e.fn.search = function (r) {
	    var i,
	        a = e(this),
	        c = a.selector || "",
	        o = new Date().getTime(),
	        u = [],
	        l = arguments[0],
	        d = "string" == typeof l,
	        g = [].slice.call(arguments, 1);return e(this).each(function () {
	      var f,
	          p = e.isPlainObject(r) ? e.extend(!0, {}, e.fn.search.settings, r) : e.extend({}, e.fn.search.settings),
	          v = p.className,
	          h = p.metadata,
	          m = p.regExp,
	          b = p.fields,
	          y = p.selector,
	          R = p.error,
	          C = p.namespace,
	          w = "." + C,
	          x = C + "-module",
	          j = e(this),
	          k = j.find(y.prompt),
	          q = j.find(y.searchButton),
	          E = j.find(y.results),
	          A = (j.find(y.result), j.find(y.category), this),
	          T = j.data(x);f = { initialize: function initialize() {
	          f.verbose("Initializing module"), f.determine.searchFields(), f.bind.events(), f.set.type(), f.create.results(), f.instantiate();
	        }, instantiate: function instantiate() {
	          f.verbose("Storing instance of module", f), T = f, j.data(x, f);
	        }, destroy: function destroy() {
	          f.verbose("Destroying instance"), j.off(w).removeData(x);
	        }, bind: { events: function events() {
	            f.verbose("Binding events to search"), p.automatic && (j.on(f.get.inputEvent() + w, y.prompt, f.event.input), k.attr("autocomplete", "off")), j.on("focus" + w, y.prompt, f.event.focus).on("blur" + w, y.prompt, f.event.blur).on("keydown" + w, y.prompt, f.handleKeyboard).on("click" + w, y.searchButton, f.query).on("mousedown" + w, y.results, f.event.result.mousedown).on("mouseup" + w, y.results, f.event.result.mouseup).on("click" + w, y.result, f.event.result.click);
	          } }, determine: { searchFields: function searchFields() {
	            r && r.searchFields !== n && (p.searchFields = r.searchFields);
	          } }, event: { input: function input() {
	            clearTimeout(f.timer), f.timer = setTimeout(f.query, p.searchDelay);
	          }, focus: function focus() {
	            f.set.focus(), f.has.minimumCharacters() && (f.query(), f.can.show() && f.showResults());
	          }, blur: function blur(e) {
	            var t = s.activeElement === this,
	                n = function n() {
	              f.cancel.query(), f.remove.focus(), f.timer = setTimeout(f.hideResults, p.hideDelay);
	            };t || (f.resultsClicked ? (f.debug("Determining if user action caused search to close"), j.one("click", y.results, function (e) {
	              f.is.animating() || f.is.hidden() || n();
	            })) : (f.debug("Input blurred without user action, closing results"), n()));
	          }, result: { mousedown: function mousedown() {
	              f.resultsClicked = !0;
	            }, mouseup: function mouseup() {
	              f.resultsClicked = !1;
	            }, click: function click(s) {
	              f.debug("Search result selected");var n = e(this),
	                  r = n.find(y.title).eq(0),
	                  i = n.find("a[href]").eq(0),
	                  a = i.attr("href") || !1,
	                  c = i.attr("target") || !1,
	                  o = (r.html(), r.length > 0 ? r.text() : !1),
	                  u = f.get.results(),
	                  l = n.data(h.result) || f.get.result(o, u);return e.isFunction(p.onSelect) && p.onSelect.call(A, l, u) === !1 ? void f.debug("Custom onSelect callback cancelled default select action") : (f.hideResults(), o && f.set.value(o), void (a && (f.verbose("Opening search link found in result", i), "_blank" == c || s.ctrlKey ? t.open(a) : t.location.href = a)));
	            } } }, handleKeyboard: function handleKeyboard(e) {
	          var t,
	              s = j.find(y.result),
	              n = j.find(y.category),
	              r = s.index(s.filter("." + v.active)),
	              i = s.length,
	              a = e.which,
	              c = { backspace: 8, enter: 13, escape: 27, upArrow: 38, downArrow: 40 };if ((a == c.escape && (f.verbose("Escape key pressed, blurring search field"), f.trigger.blur()), f.is.visible())) if (a == c.enter) {
	            if ((f.verbose("Enter key pressed, selecting active result"), s.filter("." + v.active).length > 0)) return f.event.result.click.call(s.filter("." + v.active), e), e.preventDefault(), !1;
	          } else a == c.upArrow ? (f.verbose("Up key pressed, changing active result"), t = 0 > r - 1 ? r : r - 1, n.removeClass(v.active), s.removeClass(v.active).eq(t).addClass(v.active).closest(n).addClass(v.active), e.preventDefault()) : a == c.downArrow && (f.verbose("Down key pressed, changing active result"), t = r + 1 >= i ? r : r + 1, n.removeClass(v.active), s.removeClass(v.active).eq(t).addClass(v.active).closest(n).addClass(v.active), e.preventDefault());else a == c.enter && (f.verbose("Enter key pressed, executing query"), f.query(), f.set.buttonPressed(), k.one("keyup", f.remove.buttonFocus));
	        }, setup: { api: function api() {
	            var e = { debug: p.debug, on: !1, cache: "local", action: "search", onError: f.error };f.verbose("First request, initializing API"), j.api(e);
	          } }, can: { useAPI: function useAPI() {
	            return e.fn.api !== n;
	          }, show: function show() {
	            return f.is.focused() && !f.is.visible() && !f.is.empty();
	          }, transition: function transition() {
	            return p.transition && e.fn.transition !== n && j.transition("is supported");
	          } }, is: { animating: function animating() {
	            return E.hasClass(v.animating);
	          }, hidden: function hidden() {
	            return E.hasClass(v.hidden);
	          }, empty: function empty() {
	            return "" === E.html();
	          }, visible: function visible() {
	            return E.filter(":visible").length > 0;
	          }, focused: function focused() {
	            return k.filter(":focus").length > 0;
	          } }, trigger: { blur: function blur() {
	            var e = s.createEvent("HTMLEvents"),
	                t = k[0];t && (f.verbose("Triggering native blur event"), e.initEvent("blur", !1, !1), t.dispatchEvent(e));
	          } }, get: { inputEvent: function inputEvent() {
	            var e = k[0],
	                t = e !== n && e.oninput !== n ? "input" : e !== n && e.onpropertychange !== n ? "propertychange" : "keyup";return t;
	          }, value: function value() {
	            return k.val();
	          }, results: function results() {
	            var e = j.data(h.results);return e;
	          }, result: function result(t, s) {
	            var r = ["title", "id"],
	                i = !1;return t = t !== n ? t : f.get.value(), s = s !== n ? s : f.get.results(), "category" === p.type ? (f.debug("Finding result that matches", t), e.each(s, function (s, n) {
	              return e.isArray(n.results) && (i = f.search.object(t, n.results, r)[0]) ? !1 : void 0;
	            })) : (f.debug("Finding result in results object", t), i = f.search.object(t, s, r)[0]), i || !1;
	          } }, set: { focus: function focus() {
	            j.addClass(v.focus);
	          }, loading: function loading() {
	            j.addClass(v.loading);
	          }, value: function value(e) {
	            f.verbose("Setting search input value", e), k.val(e);
	          }, type: function type(e) {
	            e = e || p.type, "category" == p.type && j.addClass(p.type);
	          }, buttonPressed: function buttonPressed() {
	            q.addClass(v.pressed);
	          } }, remove: { loading: function loading() {
	            j.removeClass(v.loading);
	          }, focus: function focus() {
	            j.removeClass(v.focus);
	          }, buttonPressed: function buttonPressed() {
	            q.removeClass(v.pressed);
	          } }, query: function query() {
	          var t = f.get.value(),
	              s = f.read.cache(t);f.has.minimumCharacters() ? (s ? (f.debug("Reading result from cache", t), f.save.results(s.results), f.addResults(s.html), f.inject.id(s.results)) : (f.debug("Querying for", t), e.isPlainObject(p.source) || e.isArray(p.source) ? f.search.local(t) : f.can.useAPI() ? f.search.remote(t) : f.error(R.source)), p.onSearchQuery.call(A, t)) : f.hideResults();
	        }, search: { local: function local(e) {
	            var t,
	                s = f.search.object(e, p.content);f.set.loading(), f.save.results(s), f.debug("Returned local search results", s), t = f.generateResults({ results: s }), f.remove.loading(), f.addResults(t), f.inject.id(s), f.write.cache(e, { html: t, results: s });
	          }, remote: function remote(t) {
	            var s = { onSuccess: function onSuccess(e) {
	                f.parse.response.call(A, e, t);
	              }, onFailure: function onFailure() {
	                f.displayMessage(R.serverError);
	              }, urlData: { query: t } };j.api("get request") || f.setup.api(), e.extend(!0, s, p.apiSettings), f.debug("Executing search", s), f.cancel.query(), j.api("setting", s).api("query");
	          }, object: function object(t, s, r) {
	            var i = [],
	                a = [],
	                c = t.toString().replace(m.escape, "\\$&"),
	                o = new RegExp(m.beginsWith + c, "i"),
	                u = function u(t, s) {
	              var n = -1 == e.inArray(s, i),
	                  r = -1 == e.inArray(s, a);n && r && t.push(s);
	            };return s = s || p.source, r = r !== n ? r : p.searchFields, e.isArray(r) || (r = [r]), s === n || s === !1 ? (f.error(R.source), []) : (e.each(r, function (n, r) {
	              e.each(s, function (e, s) {
	                var n = "string" == typeof s[r];n && (-1 !== s[r].search(o) ? u(i, s) : p.searchFullText && f.fuzzySearch(t, s[r]) && u(a, s));
	              });
	            }), e.merge(i, a));
	          } }, fuzzySearch: function fuzzySearch(e, t) {
	          var s = t.length,
	              n = e.length;if ("string" != typeof e) return !1;if ((e = e.toLowerCase(), t = t.toLowerCase(), n > s)) return !1;if (n === s) return e === t;e: for (var r = 0, i = 0; n > r; r++) {
	            for (var a = e.charCodeAt(r); s > i;) if (t.charCodeAt(i++) === a) continue e;return !1;
	          }return !0;
	        }, parse: { response: function response(e, t) {
	            var s = f.generateResults(e);f.verbose("Parsing server response", e), e !== n && t !== n && e[b.results] !== n && (f.addResults(s), f.inject.id(e[b.results]), f.write.cache(t, { html: s, results: e[b.results] }), f.save.results(e[b.results]));
	          } }, cancel: { query: function query() {
	            f.can.useAPI() && j.api("abort");
	          } }, has: { minimumCharacters: function minimumCharacters() {
	            var e = f.get.value(),
	                t = e.length;return t >= p.minCharacters;
	          } }, clear: { cache: function cache(e) {
	            var t = j.data(h.cache);e ? e && t && t[e] && (f.debug("Removing value from cache", e), delete t[e], j.data(h.cache, t)) : (f.debug("Clearing cache", e), j.removeData(h.cache));
	          } }, read: { cache: function cache(e) {
	            var t = j.data(h.cache);return p.cache ? (f.verbose("Checking cache for generated html for query", e), "object" == typeof t && t[e] !== n ? t[e] : !1) : !1;
	          } }, create: { id: function id(e, t) {
	            var s,
	                r,
	                i = e + 1;return t !== n ? (s = String.fromCharCode(97 + t), r = s + i, f.verbose("Creating category result id", r)) : (r = i, f.verbose("Creating result id", r)), r;
	          }, results: function results() {
	            0 === E.length && (E = e("<div />").addClass(v.results).appendTo(j));
	          } }, inject: { result: function result(e, t, s) {
	            f.verbose("Injecting result into results");var r = s !== n ? E.children().eq(s).children(y.result).eq(t) : E.children(y.result).eq(t);f.verbose("Injecting results metadata", r), r.data(h.result, e);
	          }, id: function id(t) {
	            f.debug("Injecting unique ids into results");var s = 0,
	                r = 0;return "category" === p.type ? e.each(t, function (t, i) {
	              r = 0, e.each(i.results, function (e, t) {
	                var a = i.results[e];a.id === n && (a.id = f.create.id(r, s)), f.inject.result(a, r, s), r++;
	              }), s++;
	            }) : e.each(t, function (e, s) {
	              var i = t[e];i.id === n && (i.id = f.create.id(r)), f.inject.result(i, r), r++;
	            }), t;
	          } }, save: { results: function results(e) {
	            f.verbose("Saving current search results to metadata", e), j.data(h.results, e);
	          } }, write: { cache: function cache(e, t) {
	            var s = j.data(h.cache) !== n ? j.data(h.cache) : {};p.cache && (f.verbose("Writing generated html to cache", e, t), s[e] = t, j.data(h.cache, s));
	          } }, addResults: function addResults(t) {
	          return e.isFunction(p.onResultsAdd) && p.onResultsAdd.call(E, t) === !1 ? (f.debug("onResultsAdd callback cancelled default action"), !1) : (E.html(t), void (f.can.show() && f.showResults()));
	        }, showResults: function showResults() {
	          f.is.visible() || (f.can.transition() ? (f.debug("Showing results with css animations"), E.transition({ animation: p.transition + " in", debug: p.debug, verbose: p.verbose, duration: p.duration, queue: !0 })) : (f.debug("Showing results with javascript"), E.stop().fadeIn(p.duration, p.easing)), p.onResultsOpen.call(E));
	        }, hideResults: function hideResults() {
	          f.is.visible() && (f.can.transition() ? (f.debug("Hiding results with css animations"), E.transition({ animation: p.transition + " out", debug: p.debug, verbose: p.verbose, duration: p.duration, queue: !0 })) : (f.debug("Hiding results with javascript"), E.stop().fadeOut(p.duration, p.easing)), p.onResultsClose.call(E));
	        }, generateResults: function generateResults(t) {
	          f.debug("Generating html from response", t);var s = p.templates[p.type],
	              n = e.isPlainObject(t[b.results]) && !e.isEmptyObject(t[b.results]),
	              r = e.isArray(t[b.results]) && t[b.results].length > 0,
	              i = "";return n || r ? (p.maxResults > 0 && (n ? "standard" == p.type && f.error(R.maxResults) : t[b.results] = t[b.results].slice(0, p.maxResults)), e.isFunction(s) ? i = s(t, b) : f.error(R.noTemplate, !1)) : i = f.displayMessage(R.noResults, "empty"), p.onResults.call(A, t), i;
	        }, displayMessage: function displayMessage(e, t) {
	          return t = t || "standard", f.debug("Displaying message", e, t), f.addResults(p.templates.message(e, t)), p.templates.message(e, t);
	        }, setting: function setting(t, s) {
	          if (e.isPlainObject(t)) e.extend(!0, p, t);else {
	            if (s === n) return p[t];p[t] = s;
	          }
	        }, internal: function internal(t, s) {
	          if (e.isPlainObject(t)) e.extend(!0, f, t);else {
	            if (s === n) return f[t];f[t] = s;
	          }
	        }, debug: function debug() {
	          p.debug && (p.performance ? f.performance.log(arguments) : (f.debug = Function.prototype.bind.call(console.info, console, p.name + ":"), f.debug.apply(console, arguments)));
	        }, verbose: function verbose() {
	          p.verbose && p.debug && (p.performance ? f.performance.log(arguments) : (f.verbose = Function.prototype.bind.call(console.info, console, p.name + ":"), f.verbose.apply(console, arguments)));
	        }, error: function error() {
	          f.error = Function.prototype.bind.call(console.error, console, p.name + ":"), f.error.apply(console, arguments);
	        }, performance: { log: function log(e) {
	            var t, s, n;p.performance && (t = new Date().getTime(), n = o || t, s = t - n, o = t, u.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: A, "Execution Time": s })), clearTimeout(f.performance.timer), f.performance.timer = setTimeout(f.performance.display, 500);
	          }, display: function display() {
	            var t = p.name + ":",
	                s = 0;o = !1, clearTimeout(f.performance.timer), e.each(u, function (e, t) {
	              s += t["Execution Time"];
	            }), t += " " + s + "ms", c && (t += " '" + c + "'"), a.length > 1 && (t += " (" + a.length + ")"), (console.group !== n || console.table !== n) && u.length > 0 && (console.groupCollapsed(t), console.table ? console.table(u) : e.each(u, function (e, t) {
	              console.log(t.Name + ": " + t["Execution Time"] + "ms");
	            }), console.groupEnd()), u = [];
	          } }, invoke: function invoke(t, s, r) {
	          var a,
	              c,
	              o,
	              u = T;return s = s || g, r = A || r, "string" == typeof t && u !== n && (t = t.split(/[\. ]/), a = t.length - 1, e.each(t, function (s, r) {
	            var i = s != a ? r + t[s + 1].charAt(0).toUpperCase() + t[s + 1].slice(1) : t;if (e.isPlainObject(u[i]) && s != a) u = u[i];else {
	              if (u[i] !== n) return c = u[i], !1;if (!e.isPlainObject(u[r]) || s == a) return u[r] !== n ? (c = u[r], !1) : !1;u = u[r];
	            }
	          })), e.isFunction(c) ? o = c.apply(r, s) : c !== n && (o = c), e.isArray(i) ? i.push(o) : i !== n ? i = [i, o] : o !== n && (i = o), c;
	        } }, d ? (T === n && f.initialize(), f.invoke(l)) : (T !== n && T.invoke("destroy"), f.initialize());
	    }), i !== n ? i : this;
	  }, e.fn.search.settings = { name: "Search", namespace: "search", debug: !1, verbose: !1, performance: !0, type: "standard", minCharacters: 1, apiSettings: !1, source: !1, searchFields: ["title", "description"], displayField: "", searchFullText: !0, automatic: !0, hideDelay: 0, searchDelay: 200, maxResults: 7, cache: !0, transition: "scale", duration: 200, easing: "easeOutExpo", onSelect: !1, onResultsAdd: !1, onSearchQuery: function onSearchQuery(e) {}, onResults: function onResults(e) {}, onResultsOpen: function onResultsOpen() {}, onResultsClose: function onResultsClose() {}, className: { animating: "animating", active: "active", empty: "empty", focus: "focus", hidden: "hidden", loading: "loading", results: "results", pressed: "down" }, error: { source: "Cannot search. No source used, and Semantic API module was not included", noResults: "Your search returned no results", logging: "Error in debug logging, exiting.", noEndpoint: "No search endpoint was specified", noTemplate: "A valid template name was not specified.", serverError: "There was an issue querying the server.", maxResults: "Results must be an array to use maxResults setting", method: "The method you called is not defined." }, metadata: { cache: "cache", results: "results", result: "result" }, regExp: { escape: /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, beginsWith: "(?:s|^)" }, fields: { categories: "results", categoryName: "name", categoryResults: "results", description: "description", image: "image", price: "price", results: "results", title: "title", url: "url", action: "action", actionText: "text", actionURL: "url" }, selector: { prompt: ".prompt", searchButton: ".search.button", results: ".results", category: ".category", result: ".result", title: ".title, .name" }, templates: { escape: function escape(e) {
	        var t = /[&<>"'`]/g,
	            s = /[&<>"'`]/,
	            n = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
	            r = function r(e) {
	          return n[e];
	        };return s.test(e) ? e.replace(t, r) : e;
	      }, message: function message(e, t) {
	        var s = "";return e !== n && t !== n && (s += '<div class="message ' + t + '">', s += "empty" == t ? '<div class="header">No Results</div class="header"><div class="description">' + e + '</div class="description">' : ' <div class="description">' + e + "</div>", s += "</div>"), s;
	      }, category: function category(t, s) {
	        var r = "";e.fn.search.settings.templates.escape;return t[s.categoryResults] !== n ? (e.each(t[s.categoryResults], function (t, i) {
	          i[s.results] !== n && i.results.length > 0 && (r += '<div class="category">', i[s.categoryName] !== n && (r += '<div class="name">' + i[s.categoryName] + "</div>"), e.each(i.results, function (e, t) {
	            r += t[s.url] ? '<a class="result" href="' + t[s.url] + '">' : '<a class="result">', t[s.image] !== n && (r += '<div class="image"> <img src="' + t[s.image] + '"></div>'), r += '<div class="content">', t[s.price] !== n && (r += '<div class="price">' + t[s.price] + "</div>"), t[s.title] !== n && (r += '<div class="title">' + t[s.title] + "</div>"), t[s.description] !== n && (r += '<div class="description">' + t[s.description] + "</div>"), r += "</div>", r += "</a>";
	          }), r += "</div>");
	        }), t[s.action] && (r += '<a href="' + t[s.action][s.actionURL] + '" class="action">' + t[s.action][s.actionText] + "</a>"), r) : !1;
	      }, standard: function standard(t, s) {
	        var r = "";return t[s.results] !== n ? (e.each(t[s.results], function (e, t) {
	          r += t[s.url] ? '<a class="result" href="' + t[s.url] + '">' : '<a class="result">', t[s.image] !== n && (r += '<div class="image"> <img src="' + t[s.image] + '"></div>'), r += '<div class="content">', t[s.price] !== n && (r += '<div class="price">' + t[s.price] + "</div>"), t[s.title] !== n && (r += '<div class="title">' + t[s.title] + "</div>"), t[s.description] !== n && (r += '<div class="description">' + t[s.description] + "</div>"), r += "</div>", r += "</a>";
	        }), t[s.action] && (r += '<a href="' + t[s.action][s.actionURL] + '" class="action">' + t[s.action][s.actionText] + "</a>"), r) : !1;
	      } } };
	})(jQuery, window, document);

/***/ },
/* 82 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 83 */,
/* 84 */
/***/ function(module, exports) {

	/*!
	 * # Semantic UI 2.1.8 - Transition
	 * http://github.com/semantic-org/semantic-ui/
	 *
	 *
	 * Copyright 2015 Contributors
	 * Released under the MIT license
	 * http://opensource.org/licenses/MIT
	 *
	 */
	"use strict";

	!(function (n, e, i, t) {
	  "use strict";n.fn.transition = function () {
	    var a,
	        o = n(this),
	        r = o.selector || "",
	        s = new Date().getTime(),
	        l = [],
	        u = arguments,
	        c = u[0],
	        d = [].slice.call(arguments, 1),
	        m = "string" == typeof c;e.requestAnimationFrame || e.mozRequestAnimationFrame || e.webkitRequestAnimationFrame || e.msRequestAnimationFrame || function (n) {
	      setTimeout(n, 0);
	    };return o.each(function (e) {
	      var f,
	          p,
	          g,
	          v,
	          b,
	          y,
	          h,
	          w,
	          C,
	          A = n(this),
	          S = this;C = { initialize: function initialize() {
	          f = C.get.settings.apply(S, u), v = f.className, g = f.error, b = f.metadata, w = "." + f.namespace, h = "module-" + f.namespace, p = A.data(h) || C, y = C.get.animationEndEvent(), m && (m = C.invoke(c)), m === !1 && (C.verbose("Converted arguments into settings object", f), f.interval ? C.delay(f.animate) : C.animate(), C.instantiate());
	        }, instantiate: function instantiate() {
	          C.verbose("Storing instance of module", C), p = C, A.data(h, p);
	        }, destroy: function destroy() {
	          C.verbose("Destroying previous module for", S), A.removeData(h);
	        }, refresh: function refresh() {
	          C.verbose("Refreshing display type on next animation"), delete C.displayType;
	        }, forceRepaint: function forceRepaint() {
	          C.verbose("Forcing element repaint");var n = A.parent(),
	              e = A.next();0 === e.length ? A.detach().appendTo(n) : A.detach().insertBefore(e);
	        }, repaint: function repaint() {
	          C.verbose("Repainting element");S.offsetWidth;
	        }, delay: function delay(n) {
	          var i,
	              a,
	              r = C.get.animationDirection();r || (r = C.can.transition() ? C.get.direction() : "static"), n = n !== t ? n : f.interval, i = "auto" == f.reverse && r == v.outward, a = i || 1 == f.reverse ? (o.length - e) * f.interval : e * f.interval, C.debug("Delaying animation by", a), setTimeout(C.animate, a);
	        }, animate: function animate(n) {
	          if ((f = n || f, !C.is.supported())) return C.error(g.support), !1;if ((C.debug("Preparing animation", f.animation), C.is.animating())) {
	            if (f.queue) return !f.allowRepeats && C.has.direction() && C.is.occurring() && C.queuing !== !0 ? C.debug("Animation is currently occurring, preventing queueing same animation", f.animation) : C.queue(f.animation), !1;if (!f.allowRepeats && C.is.occurring()) return C.debug("Animation is already occurring, will not execute repeated animation", f.animation), !1;C.debug("New animation started, completing previous early", f.animation), p.complete();
	          }C.can.animate() ? C.set.animating(f.animation) : C.error(g.noAnimation, f.animation, S);
	        }, reset: function reset() {
	          C.debug("Resetting animation to beginning conditions"), C.remove.animationCallbacks(), C.restore.conditions(), C.remove.animating();
	        }, queue: function queue(n) {
	          C.debug("Queueing animation of", n), C.queuing = !0, A.one(y + ".queue" + w, function () {
	            C.queuing = !1, C.repaint(), C.animate.apply(this, f);
	          });
	        }, complete: function complete(n) {
	          C.debug("Animation complete", f.animation), C.remove.completeCallback(), C.remove.failSafe(), C.is.looping() || (C.is.outward() ? (C.verbose("Animation is outward, hiding element"), C.restore.conditions(), C.hide()) : C.is.inward() ? (C.verbose("Animation is outward, showing element"), C.restore.conditions(), C.show()) : (C.verbose("Static animation completed"), C.restore.conditions(), f.onComplete.call(S)));
	        }, force: { visible: function visible() {
	            var n = A.attr("style"),
	                e = C.get.userStyle(),
	                i = C.get.displayType(),
	                a = e + "display: " + i + " !important;",
	                o = A.css("display"),
	                r = n === t || "" === n;o !== i ? (C.verbose("Overriding default display to show element", i), A.attr("style", a)) : r && A.removeAttr("style");
	          }, hidden: function hidden() {
	            var n = A.attr("style"),
	                e = A.css("display"),
	                i = n === t || "" === n;"none" === e || C.is.hidden() ? i && A.removeAttr("style") : (C.verbose("Overriding default display to hide element"), A.css("display", "none"));
	          } }, has: { direction: function direction(e) {
	            var i = !1;return e = e || f.animation, "string" == typeof e && (e = e.split(" "), n.each(e, function (n, e) {
	              e !== v.inward && e !== v.outward || (i = !0);
	            })), i;
	          }, inlineDisplay: function inlineDisplay() {
	            var e = A.attr("style") || "";return n.isArray(e.match(/display.*?;/, ""));
	          } }, set: { animating: function animating(n) {
	            var e;C.remove.completeCallback(), n = n || f.animation, e = C.get.animationClass(n), C.save.animation(e), C.force.visible(), C.remove.hidden(), C.remove.direction(), C.start.animation(e);
	          }, duration: function duration(n, e) {
	            e = e || f.duration, e = "number" == typeof e ? e + "ms" : e, (e || 0 === e) && (C.verbose("Setting animation duration", e), A.css({ "animation-duration": e }));
	          }, direction: function direction(n) {
	            n = n || C.get.direction(), n == v.inward ? C.set.inward() : C.set.outward();
	          }, looping: function looping() {
	            C.debug("Transition set to loop"), A.addClass(v.looping);
	          }, hidden: function hidden() {
	            A.addClass(v.transition).addClass(v.hidden);
	          }, inward: function inward() {
	            C.debug("Setting direction to inward"), A.removeClass(v.outward).addClass(v.inward);
	          }, outward: function outward() {
	            C.debug("Setting direction to outward"), A.removeClass(v.inward).addClass(v.outward);
	          }, visible: function visible() {
	            A.addClass(v.transition).addClass(v.visible);
	          } }, start: { animation: function animation(n) {
	            n = n || C.get.animationClass(), C.debug("Starting tween", n), A.addClass(n).one(y + ".complete" + w, C.complete), f.useFailSafe && C.add.failSafe(), C.set.duration(f.duration), f.onStart.call(S);
	          } }, save: { animation: function animation(n) {
	            C.cache || (C.cache = {}), C.cache.animation = n;
	          }, displayType: function displayType(n) {
	            "none" !== n && A.data(b.displayType, n);
	          }, transitionExists: function transitionExists(e, i) {
	            n.fn.transition.exists[e] = i, C.verbose("Saving existence of transition", e, i);
	          } }, restore: { conditions: function conditions() {
	            var n = C.get.currentAnimation();n && (A.removeClass(n), C.verbose("Removing animation class", C.cache)), C.remove.duration();
	          } }, add: { failSafe: function failSafe() {
	            var n = C.get.duration();C.timer = setTimeout(function () {
	              A.triggerHandler(y);
	            }, n + f.failSafeDelay), C.verbose("Adding fail safe timer", C.timer);
	          } }, remove: { animating: function animating() {
	            A.removeClass(v.animating);
	          }, animationCallbacks: function animationCallbacks() {
	            C.remove.queueCallback(), C.remove.completeCallback();
	          }, queueCallback: function queueCallback() {
	            A.off(".queue" + w);
	          }, completeCallback: function completeCallback() {
	            A.off(".complete" + w);
	          }, display: function display() {
	            A.css("display", "");
	          }, direction: function direction() {
	            A.removeClass(v.inward).removeClass(v.outward);
	          }, duration: function duration() {
	            A.css("animation-duration", "");
	          }, failSafe: function failSafe() {
	            C.verbose("Removing fail safe timer", C.timer), C.timer && clearTimeout(C.timer);
	          }, hidden: function hidden() {
	            A.removeClass(v.hidden);
	          }, visible: function visible() {
	            A.removeClass(v.visible);
	          }, looping: function looping() {
	            C.debug("Transitions are no longer looping"), C.is.looping() && (C.reset(), A.removeClass(v.looping));
	          }, transition: function transition() {
	            A.removeClass(v.visible).removeClass(v.hidden);
	          } }, get: { settings: function settings(e, i, t) {
	            return "object" == typeof e ? n.extend(!0, {}, n.fn.transition.settings, e) : "function" == typeof t ? n.extend({}, n.fn.transition.settings, { animation: e, onComplete: t, duration: i }) : "string" == typeof i || "number" == typeof i ? n.extend({}, n.fn.transition.settings, { animation: e, duration: i }) : "object" == typeof i ? n.extend({}, n.fn.transition.settings, i, { animation: e }) : "function" == typeof i ? n.extend({}, n.fn.transition.settings, { animation: e, onComplete: i }) : n.extend({}, n.fn.transition.settings, { animation: e });
	          }, animationClass: function animationClass(n) {
	            var e = n || f.animation,
	                i = C.can.transition() && !C.has.direction() ? C.get.direction() + " " : "";return v.animating + " " + v.transition + " " + i + e;
	          }, currentAnimation: function currentAnimation() {
	            return C.cache && C.cache.animation !== t ? C.cache.animation : !1;
	          }, currentDirection: function currentDirection() {
	            return C.is.inward() ? v.inward : v.outward;
	          }, direction: function direction() {
	            return C.is.hidden() || !C.is.visible() ? v.inward : v.outward;
	          }, animationDirection: function animationDirection(e) {
	            var i;return e = e || f.animation, "string" == typeof e && (e = e.split(" "), n.each(e, function (n, e) {
	              e === v.inward ? i = v.inward : e === v.outward && (i = v.outward);
	            })), i ? i : !1;
	          }, duration: function duration(n) {
	            return n = n || f.duration, n === !1 && (n = A.css("animation-duration") || 0), "string" == typeof n ? n.indexOf("ms") > -1 ? parseFloat(n) : 1e3 * parseFloat(n) : n;
	          }, displayType: function displayType() {
	            return f.displayType ? f.displayType : (A.data(b.displayType) === t && C.can.transition(!0), A.data(b.displayType));
	          }, userStyle: function userStyle(n) {
	            return n = n || A.attr("style") || "", n.replace(/display.*?;/, "");
	          }, transitionExists: function transitionExists(e) {
	            return n.fn.transition.exists[e];
	          }, animationStartEvent: function animationStartEvent() {
	            var n,
	                e = i.createElement("div"),
	                a = { animation: "animationstart", OAnimation: "oAnimationStart", MozAnimation: "mozAnimationStart", WebkitAnimation: "webkitAnimationStart" };for (n in a) if (e.style[n] !== t) return a[n];return !1;
	          }, animationEndEvent: function animationEndEvent() {
	            var n,
	                e = i.createElement("div"),
	                a = { animation: "animationend", OAnimation: "oAnimationEnd", MozAnimation: "mozAnimationEnd", WebkitAnimation: "webkitAnimationEnd" };for (n in a) if (e.style[n] !== t) return a[n];return !1;
	          } }, can: { transition: function transition(e) {
	            var i,
	                a,
	                o,
	                r,
	                s,
	                l,
	                u,
	                c = f.animation,
	                d = C.get.transitionExists(c);if (d === t || e) {
	              if ((C.verbose("Determining whether animation exists"), i = A.attr("class"), a = A.prop("tagName"), o = n("<" + a + " />").addClass(i).insertAfter(A), r = o.addClass(c).removeClass(v.inward).removeClass(v.outward).addClass(v.animating).addClass(v.transition).css("animationName"), s = o.addClass(v.inward).css("animationName"), u = o.attr("class", i).removeAttr("style").removeClass(v.hidden).removeClass(v.visible).show().css("display"), C.verbose("Determining final display state", u), C.save.displayType(u), o.remove(), r != s)) C.debug("Direction exists for animation", c), l = !0;else {
	                if ("none" == r || !r) return void C.debug("No animation defined in css", c);C.debug("Static animation found", c, u), l = !1;
	              }C.save.transitionExists(c, l);
	            }return d !== t ? d : l;
	          }, animate: function animate() {
	            return C.can.transition() !== t;
	          } }, is: { animating: function animating() {
	            return A.hasClass(v.animating);
	          }, inward: function inward() {
	            return A.hasClass(v.inward);
	          }, outward: function outward() {
	            return A.hasClass(v.outward);
	          }, looping: function looping() {
	            return A.hasClass(v.looping);
	          }, occurring: function occurring(n) {
	            return n = n || f.animation, n = "." + n.replace(" ", "."), A.filter(n).length > 0;
	          }, visible: function visible() {
	            return A.is(":visible");
	          }, hidden: function hidden() {
	            return "hidden" === A.css("visibility");
	          }, supported: function supported() {
	            return y !== !1;
	          } }, hide: function hide() {
	          C.verbose("Hiding element"), C.is.animating() && C.reset(), S.blur(), C.remove.display(), C.remove.visible(), C.set.hidden(), C.force.hidden(), f.onHide.call(S), f.onComplete.call(S);
	        }, show: function show(n) {
	          C.verbose("Showing element", n), C.remove.hidden(), C.set.visible(), C.force.visible(), f.onShow.call(S), f.onComplete.call(S);
	        }, toggle: function toggle() {
	          C.is.visible() ? C.hide() : C.show();
	        }, stop: function stop() {
	          C.debug("Stopping current animation"), A.triggerHandler(y);
	        }, stopAll: function stopAll() {
	          C.debug("Stopping all animation"), C.remove.queueCallback(), A.triggerHandler(y);
	        }, clear: { queue: function queue() {
	            C.debug("Clearing animation queue"), C.remove.queueCallback();
	          } }, enable: function enable() {
	          C.verbose("Starting animation"), A.removeClass(v.disabled);
	        }, disable: function disable() {
	          C.debug("Stopping animation"), A.addClass(v.disabled);
	        }, setting: function setting(e, i) {
	          if ((C.debug("Changing setting", e, i), n.isPlainObject(e))) n.extend(!0, f, e);else {
	            if (i === t) return f[e];f[e] = i;
	          }
	        }, internal: function internal(e, i) {
	          if (n.isPlainObject(e)) n.extend(!0, C, e);else {
	            if (i === t) return C[e];C[e] = i;
	          }
	        }, debug: function debug() {
	          f.debug && (f.performance ? C.performance.log(arguments) : (C.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), C.debug.apply(console, arguments)));
	        }, verbose: function verbose() {
	          f.verbose && f.debug && (f.performance ? C.performance.log(arguments) : (C.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), C.verbose.apply(console, arguments)));
	        }, error: function error() {
	          C.error = Function.prototype.bind.call(console.error, console, f.name + ":"), C.error.apply(console, arguments);
	        }, performance: { log: function log(n) {
	            var e, i, t;f.performance && (e = new Date().getTime(), t = s || e, i = e - t, s = e, l.push({ Name: n[0], Arguments: [].slice.call(n, 1) || "", Element: S, "Execution Time": i })), clearTimeout(C.performance.timer), C.performance.timer = setTimeout(C.performance.display, 500);
	          }, display: function display() {
	            var e = f.name + ":",
	                i = 0;s = !1, clearTimeout(C.performance.timer), n.each(l, function (n, e) {
	              i += e["Execution Time"];
	            }), e += " " + i + "ms", r && (e += " '" + r + "'"), o.length > 1 && (e += " (" + o.length + ")"), (console.group !== t || console.table !== t) && l.length > 0 && (console.groupCollapsed(e), console.table ? console.table(l) : n.each(l, function (n, e) {
	              console.log(e.Name + ": " + e["Execution Time"] + "ms");
	            }), console.groupEnd()), l = [];
	          } }, invoke: function invoke(e, i, o) {
	          var r,
	              s,
	              l,
	              u = p;return i = i || d, o = S || o, "string" == typeof e && u !== t && (e = e.split(/[\. ]/), r = e.length - 1, n.each(e, function (i, a) {
	            var o = i != r ? a + e[i + 1].charAt(0).toUpperCase() + e[i + 1].slice(1) : e;if (n.isPlainObject(u[o]) && i != r) u = u[o];else {
	              if (u[o] !== t) return s = u[o], !1;if (!n.isPlainObject(u[a]) || i == r) return u[a] !== t ? (s = u[a], !1) : !1;u = u[a];
	            }
	          })), n.isFunction(s) ? l = s.apply(o, i) : s !== t && (l = s), n.isArray(a) ? a.push(l) : a !== t ? a = [a, l] : l !== t && (a = l), s !== t ? s : !1;
	        } }, C.initialize();
	    }), a !== t ? a : this;
	  }, n.fn.transition.exists = {}, n.fn.transition.settings = { name: "Transition", debug: !1, verbose: !1, performance: !0, namespace: "transition", interval: 0, reverse: "auto", onStart: function onStart() {}, onComplete: function onComplete() {}, onShow: function onShow() {}, onHide: function onHide() {}, useFailSafe: !0, failSafeDelay: 100, allowRepeats: !1, displayType: !1, animation: "fade", duration: !1, queue: !0, metadata: { displayType: "display" }, className: { animating: "animating", disabled: "disabled", hidden: "hidden", inward: "in", loading: "loading", looping: "looping", outward: "out", transition: "transition", visible: "visible" }, error: { noAnimation: "Element is no longer attached to DOM. Unable to animate.", repeated: "That animation is already occurring, cancelling repeated animation", method: "The method you called is not defined", support: "This browser does not support CSS animations" } };
	})(jQuery, window, document);

/***/ },
/* 85 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 86 */,
/* 87 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 93 */,
/* 94 */
/***/ function(module, exports) {

	/*!
	 * # Semantic UI 2.1.8 - Rating
	 * http://github.com/semantic-org/semantic-ui/
	 *
	 *
	 * Copyright 2015 Contributors
	 * Released under the MIT license
	 * http://opensource.org/licenses/MIT
	 *
	 */
	"use strict";

	!(function (e, n, t, i) {
	  "use strict";e.fn.rating = function (n) {
	    var t,
	        a = e(this),
	        o = a.selector || "",
	        r = new Date().getTime(),
	        s = [],
	        l = arguments[0],
	        c = "string" == typeof l,
	        u = [].slice.call(arguments, 1);return a.each(function () {
	      var g,
	          d = e.isPlainObject(n) ? e.extend(!0, {}, e.fn.rating.settings, n) : e.extend({}, e.fn.rating.settings),
	          m = d.namespace,
	          f = d.className,
	          v = d.metadata,
	          p = d.selector,
	          b = (d.error, "." + m),
	          h = "module-" + m,
	          y = this,
	          x = e(this).data(h),
	          R = e(this),
	          C = R.find(p.icon);g = { initialize: function initialize() {
	          g.verbose("Initializing rating module", d), 0 === C.length && g.setup.layout(), d.interactive ? g.enable() : g.disable(), g.set.rating(g.get.initialRating()), g.instantiate();
	        }, instantiate: function instantiate() {
	          g.verbose("Instantiating module", d), x = g, R.data(h, g);
	        }, destroy: function destroy() {
	          g.verbose("Destroying previous instance", x), g.remove.events(), R.removeData(h);
	        }, refresh: function refresh() {
	          C = R.find(p.icon);
	        }, setup: { layout: function layout() {
	            var n = g.get.maxRating(),
	                t = e.fn.rating.settings.templates.icon(n);g.debug("Generating icon html dynamically"), R.html(t), g.refresh();
	          } }, event: { mouseenter: function mouseenter() {
	            var n = e(this);n.nextAll().removeClass(f.selected), R.addClass(f.selected), n.addClass(f.selected).prevAll().addClass(f.selected);
	          }, mouseleave: function mouseleave() {
	            R.removeClass(f.selected), C.removeClass(f.selected);
	          }, click: function click() {
	            var n = e(this),
	                t = g.get.rating(),
	                i = C.index(n) + 1,
	                a = "auto" == d.clearable ? 1 === C.length : d.clearable;a && t == i ? g.clearRating() : g.set.rating(i);
	          } }, clearRating: function clearRating() {
	          g.debug("Clearing current rating"), g.set.rating(0);
	        }, bind: { events: function events() {
	            g.verbose("Binding events"), R.on("mouseenter" + b, p.icon, g.event.mouseenter).on("mouseleave" + b, p.icon, g.event.mouseleave).on("click" + b, p.icon, g.event.click);
	          } }, remove: { events: function events() {
	            g.verbose("Removing events"), R.off(b);
	          } }, enable: function enable() {
	          g.debug("Setting rating to interactive mode"), g.bind.events(), R.removeClass(f.disabled);
	        }, disable: function disable() {
	          g.debug("Setting rating to read-only mode"), g.remove.events(), R.addClass(f.disabled);
	        }, get: { initialRating: function initialRating() {
	            return R.data(v.rating) !== i ? (R.removeData(v.rating), R.data(v.rating)) : d.initialRating;
	          }, maxRating: function maxRating() {
	            return R.data(v.maxRating) !== i ? (R.removeData(v.maxRating), R.data(v.maxRating)) : d.maxRating;
	          }, rating: function rating() {
	            var e = C.filter("." + f.active).length;return g.verbose("Current rating retrieved", e), e;
	          } }, set: { rating: function rating(e) {
	            var n = e - 1 >= 0 ? e - 1 : 0,
	                t = C.eq(n);R.removeClass(f.selected), C.removeClass(f.selected).removeClass(f.active), e > 0 && (g.verbose("Setting current rating to", e), t.prevAll().andSelf().addClass(f.active)), d.onRate.call(y, e);
	          } }, setting: function setting(n, t) {
	          if ((g.debug("Changing setting", n, t), e.isPlainObject(n))) e.extend(!0, d, n);else {
	            if (t === i) return d[n];d[n] = t;
	          }
	        }, internal: function internal(n, t) {
	          if (e.isPlainObject(n)) e.extend(!0, g, n);else {
	            if (t === i) return g[n];g[n] = t;
	          }
	        }, debug: function debug() {
	          d.debug && (d.performance ? g.performance.log(arguments) : (g.debug = Function.prototype.bind.call(console.info, console, d.name + ":"), g.debug.apply(console, arguments)));
	        }, verbose: function verbose() {
	          d.verbose && d.debug && (d.performance ? g.performance.log(arguments) : (g.verbose = Function.prototype.bind.call(console.info, console, d.name + ":"), g.verbose.apply(console, arguments)));
	        }, error: function error() {
	          g.error = Function.prototype.bind.call(console.error, console, d.name + ":"), g.error.apply(console, arguments);
	        }, performance: { log: function log(e) {
	            var n, t, i;d.performance && (n = new Date().getTime(), i = r || n, t = n - i, r = n, s.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: y, "Execution Time": t })), clearTimeout(g.performance.timer), g.performance.timer = setTimeout(g.performance.display, 500);
	          }, display: function display() {
	            var n = d.name + ":",
	                t = 0;r = !1, clearTimeout(g.performance.timer), e.each(s, function (e, n) {
	              t += n["Execution Time"];
	            }), n += " " + t + "ms", o && (n += " '" + o + "'"), a.length > 1 && (n += " (" + a.length + ")"), (console.group !== i || console.table !== i) && s.length > 0 && (console.groupCollapsed(n), console.table ? console.table(s) : e.each(s, function (e, n) {
	              console.log(n.Name + ": " + n["Execution Time"] + "ms");
	            }), console.groupEnd()), s = [];
	          } }, invoke: function invoke(n, a, o) {
	          var r,
	              s,
	              l,
	              c = x;return a = a || u, o = y || o, "string" == typeof n && c !== i && (n = n.split(/[\. ]/), r = n.length - 1, e.each(n, function (t, a) {
	            var o = t != r ? a + n[t + 1].charAt(0).toUpperCase() + n[t + 1].slice(1) : n;if (e.isPlainObject(c[o]) && t != r) c = c[o];else {
	              if (c[o] !== i) return s = c[o], !1;if (!e.isPlainObject(c[a]) || t == r) return c[a] !== i ? (s = c[a], !1) : !1;c = c[a];
	            }
	          })), e.isFunction(s) ? l = s.apply(o, a) : s !== i && (l = s), e.isArray(t) ? t.push(l) : t !== i ? t = [t, l] : l !== i && (t = l), s;
	        } }, c ? (x === i && g.initialize(), g.invoke(l)) : (x !== i && x.invoke("destroy"), g.initialize());
	    }), t !== i ? t : this;
	  }, e.fn.rating.settings = { name: "Rating", namespace: "rating", debug: !1, verbose: !1, performance: !0, initialRating: 0, interactive: !0, maxRating: 4, clearable: "auto", onRate: function onRate(e) {}, error: { method: "The method you called is not defined", noMaximum: "No maximum rating specified. Cannot generate HTML automatically" }, metadata: { rating: "rating", maxRating: "maxRating" }, className: { active: "active", disabled: "disabled", selected: "selected", loading: "loading" }, selector: { icon: ".icon" }, templates: { icon: function icon(e) {
	        for (var n = 1, t = ""; e >= n;) t += '<i class="icon"></i>', n++;return t;
	      } } };
	})(jQuery, window, document);

/***/ },
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 101 */,
/* 102 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 103 */,
/* 104 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 105 */,
/* 106 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 107 */,
/* 108 */
/***/ function(module, exports) {

	/*!
	 * # Semantic UI 2.1.8 - Sidebar
	 * http://github.com/semantic-org/semantic-ui/
	 *
	 *
	 * Copyright 2015 Contributors
	 * Released under the MIT license
	 * http://opensource.org/licenses/MIT
	 *
	 */
	"use strict";

	!(function (e, i, n, t) {
	  "use strict";e.fn.sidebar = function (o) {
	    var r,
	        s = e(this),
	        a = e(i),
	        l = e(n),
	        c = e("html"),
	        d = e("head"),
	        u = s.selector || "",
	        f = new Date().getTime(),
	        b = [],
	        h = arguments[0],
	        m = "string" == typeof h,
	        g = [].slice.call(arguments, 1),
	        v = i.requestAnimationFrame || i.mozRequestAnimationFrame || i.webkitRequestAnimationFrame || i.msRequestAnimationFrame || function (e) {
	      setTimeout(e, 0);
	    };return s.each(function () {
	      var s,
	          p,
	          y,
	          C,
	          k,
	          w,
	          T = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.sidebar.settings, o) : e.extend({}, e.fn.sidebar.settings),
	          x = T.selector,
	          S = T.className,
	          A = T.namespace,
	          F = T.regExp,
	          O = T.error,
	          P = "." + A,
	          E = "module-" + A,
	          H = e(this),
	          D = e(T.context),
	          R = H.children(x.sidebar),
	          j = D.children(x.fixed),
	          M = D.children(x.pusher),
	          z = this,
	          B = H.data(E);w = { initialize: function initialize() {
	          w.debug("Initializing sidebar", o), w.create.id(), k = w.get.transitionEvent(), w.is.ios() && w.set.ios(), T.delaySetup ? v(w.setup.layout) : w.setup.layout(), v(function () {
	            w.setup.cache();
	          }), w.instantiate();
	        }, instantiate: function instantiate() {
	          w.verbose("Storing instance of module", w), B = w, H.data(E, w);
	        }, create: { id: function id() {
	            y = (Math.random().toString(16) + "000000000").substr(2, 8), p = "." + y, w.verbose("Creating unique id for element", y);
	          } }, destroy: function destroy() {
	          w.verbose("Destroying previous module for", H), H.off(P).removeData(E), w.is.ios() && w.remove.ios(), D.off(p), a.off(p), l.off(p);
	        }, event: { clickaway: function clickaway(e) {
	            var i = M.find(e.target).length > 0 || M.is(e.target),
	                n = D.is(e.target);i && (w.verbose("User clicked on dimmed page"), w.hide()), n && (w.verbose("User clicked on dimmable context (scaled out page)"), w.hide());
	          }, touch: function touch(e) {}, containScroll: function containScroll(e) {
	            z.scrollTop <= 0 && (z.scrollTop = 1), z.scrollTop + z.offsetHeight >= z.scrollHeight && (z.scrollTop = z.scrollHeight - z.offsetHeight - 1);
	          }, scroll: function scroll(i) {
	            0 === e(i.target).closest(x.sidebar).length && i.preventDefault();
	          } }, bind: { clickaway: function clickaway() {
	            w.verbose("Adding clickaway events to context", D), T.closable && D.on("click" + p, w.event.clickaway).on("touchend" + p, w.event.clickaway);
	          }, scrollLock: function scrollLock() {
	            T.scrollLock && (w.debug("Disabling page scroll"), a.on("DOMMouseScroll" + p, w.event.scroll)), w.verbose("Adding events to contain sidebar scroll"), l.on("touchmove" + p, w.event.touch), H.on("scroll" + P, w.event.containScroll);
	          } }, unbind: { clickaway: function clickaway() {
	            w.verbose("Removing clickaway events from context", D), D.off(p);
	          }, scrollLock: function scrollLock() {
	            w.verbose("Removing scroll lock from page"), l.off(p), a.off(p), H.off("scroll" + P);
	          } }, add: { inlineCSS: function inlineCSS() {
	            var i,
	                n = w.cache.width || H.outerWidth(),
	                t = w.cache.height || H.outerHeight(),
	                o = w.is.rtl(),
	                r = w.get.direction(),
	                a = { left: n, right: -n, top: t, bottom: -t };o && (w.verbose("RTL detected, flipping widths"), a.left = -n, a.right = n), i = "<style>", "left" === r || "right" === r ? (w.debug("Adding CSS rules for animation distance", n), i += " .ui.visible." + r + ".sidebar ~ .fixed, .ui.visible." + r + ".sidebar ~ .pusher {   -webkit-transform: translate3d(" + a[r] + "px, 0, 0);           transform: translate3d(" + a[r] + "px, 0, 0); }") : "top" !== r && "bottom" != r || (i += " .ui.visible." + r + ".sidebar ~ .fixed, .ui.visible." + r + ".sidebar ~ .pusher {   -webkit-transform: translate3d(0, " + a[r] + "px, 0);           transform: translate3d(0, " + a[r] + "px, 0); }"), w.is.ie() && ("left" === r || "right" === r ? (w.debug("Adding CSS rules for animation distance", n), i += " body.pushable > .ui.visible." + r + ".sidebar ~ .pusher:after {   -webkit-transform: translate3d(" + a[r] + "px, 0, 0);           transform: translate3d(" + a[r] + "px, 0, 0); }") : "top" !== r && "bottom" != r || (i += " body.pushable > .ui.visible." + r + ".sidebar ~ .pusher:after {   -webkit-transform: translate3d(0, " + a[r] + "px, 0);           transform: translate3d(0, " + a[r] + "px, 0); }"), i += " body.pushable > .ui.visible.left.sidebar ~ .ui.visible.right.sidebar ~ .pusher:after, body.pushable > .ui.visible.right.sidebar ~ .ui.visible.left.sidebar ~ .pusher:after {   -webkit-transform: translate3d(0px, 0, 0);           transform: translate3d(0px, 0, 0); }"), i += "</style>", s = e(i).appendTo(d), w.debug("Adding sizing css to head", s);
	          } }, refresh: function refresh() {
	          w.verbose("Refreshing selector cache"), D = e(T.context), R = D.children(x.sidebar), M = D.children(x.pusher), j = D.children(x.fixed), w.clear.cache();
	        }, refreshSidebars: function refreshSidebars() {
	          w.verbose("Refreshing other sidebars"), R = D.children(x.sidebar);
	        }, repaint: function repaint() {
	          w.verbose("Forcing repaint event"), z.style.display = "none";z.offsetHeight;z.scrollTop = z.scrollTop, z.style.display = "";
	        }, setup: { cache: function cache() {
	            w.cache = { width: H.outerWidth(), height: H.outerHeight(), rtl: "rtl" == H.css("direction") };
	          }, layout: function layout() {
	            0 === D.children(x.pusher).length && (w.debug("Adding wrapper element for sidebar"), w.error(O.pusher), M = e('<div class="pusher" />'), D.children().not(x.omitted).not(R).wrapAll(M), w.refresh()), 0 !== H.nextAll(x.pusher).length && H.nextAll(x.pusher)[0] === M[0] || (w.debug("Moved sidebar to correct parent element"), w.error(O.movedSidebar, z), H.detach().prependTo(D), w.refresh()), w.clear.cache(), w.set.pushable(), w.set.direction();
	          } }, attachEvents: function attachEvents(i, n) {
	          var t = e(i);n = e.isFunction(w[n]) ? w[n] : w.toggle, t.length > 0 ? (w.debug("Attaching sidebar events to element", i, n), t.on("click" + P, n)) : w.error(O.notFound, i);
	        }, show: function show(i) {
	          if ((i = e.isFunction(i) ? i : function () {}, w.is.hidden())) {
	            if ((w.refreshSidebars(), T.overlay && (w.error(O.overlay), T.transition = "overlay"), w.refresh(), w.othersActive())) if ((w.debug("Other sidebars currently visible"), T.exclusive)) {
	              if ("overlay" != T.transition) return void w.hideOthers(w.show);w.hideOthers();
	            } else T.transition = "overlay";w.pushPage(function () {
	              i.call(z), T.onShow.call(z);
	            }), T.onChange.call(z), T.onVisible.call(z);
	          } else w.debug("Sidebar is already visible");
	        }, hide: function hide(i) {
	          i = e.isFunction(i) ? i : function () {}, (w.is.visible() || w.is.animating()) && (w.debug("Hiding sidebar", i), w.refreshSidebars(), w.pullPage(function () {
	            i.call(z), T.onHidden.call(z);
	          }), T.onChange.call(z), T.onHide.call(z));
	        }, othersAnimating: function othersAnimating() {
	          return R.not(H).filter("." + S.animating).length > 0;
	        }, othersVisible: function othersVisible() {
	          return R.not(H).filter("." + S.visible).length > 0;
	        }, othersActive: function othersActive() {
	          return w.othersVisible() || w.othersAnimating();
	        }, hideOthers: function hideOthers(e) {
	          var i = R.not(H).filter("." + S.visible),
	              n = i.length,
	              t = 0;e = e || function () {}, i.sidebar("hide", function () {
	            t++, t == n && e();
	          });
	        }, toggle: function toggle() {
	          w.verbose("Determining toggled direction"), w.is.hidden() ? w.show() : w.hide();
	        }, pushPage: function pushPage(i) {
	          var n,
	              t,
	              o,
	              r = w.get.transition(),
	              s = "overlay" === r || w.othersActive() ? H : M;i = e.isFunction(i) ? i : function () {}, "scale down" == T.transition && w.scrollToTop(), w.set.transition(r), w.repaint(), n = function () {
	            w.bind.clickaway(), w.add.inlineCSS(), w.set.animating(), w.set.visible();
	          }, t = function () {
	            w.set.dimmed();
	          }, o = function (e) {
	            e.target == s[0] && (s.off(k + p, o), w.remove.animating(), w.bind.scrollLock(), i.call(z));
	          }, s.off(k + p), s.on(k + p, o), v(n), T.dimPage && !w.othersVisible() && v(t);
	        }, pullPage: function pullPage(i) {
	          var n,
	              t,
	              o = w.get.transition(),
	              r = "overlay" == o || w.othersActive() ? H : M;i = e.isFunction(i) ? i : function () {}, w.verbose("Removing context push state", w.get.direction()), w.unbind.clickaway(), w.unbind.scrollLock(), n = function () {
	            w.set.transition(o), w.set.animating(), w.remove.visible(), T.dimPage && !w.othersVisible() && M.removeClass(S.dimmed);
	          }, t = function (e) {
	            e.target == r[0] && (r.off(k + p, t), w.remove.animating(), w.remove.transition(), w.remove.inlineCSS(), ("scale down" == o || T.returnScroll && w.is.mobile()) && w.scrollBack(), i.call(z));
	          }, r.off(k + p), r.on(k + p, t), v(n);
	        }, scrollToTop: function scrollToTop() {
	          w.verbose("Scrolling to top of page to avoid animation issues"), C = e(i).scrollTop(), H.scrollTop(0), i.scrollTo(0, 0);
	        }, scrollBack: function scrollBack() {
	          w.verbose("Scrolling back to original page position"), i.scrollTo(0, C);
	        }, clear: { cache: function cache() {
	            w.verbose("Clearing cached dimensions"), w.cache = {};
	          } }, set: { ios: function ios() {
	            c.addClass(S.ios);
	          }, pushed: function pushed() {
	            D.addClass(S.pushed);
	          }, pushable: function pushable() {
	            D.addClass(S.pushable);
	          }, dimmed: function dimmed() {
	            M.addClass(S.dimmed);
	          }, active: function active() {
	            H.addClass(S.active);
	          }, animating: function animating() {
	            H.addClass(S.animating);
	          }, transition: function transition(e) {
	            e = e || w.get.transition(), H.addClass(e);
	          }, direction: function direction(e) {
	            e = e || w.get.direction(), H.addClass(S[e]);
	          }, visible: function visible() {
	            H.addClass(S.visible);
	          }, overlay: function overlay() {
	            H.addClass(S.overlay);
	          } }, remove: { inlineCSS: function inlineCSS() {
	            w.debug("Removing inline css styles", s), s && s.length > 0 && s.remove();
	          }, ios: function ios() {
	            c.removeClass(S.ios);
	          }, pushed: function pushed() {
	            D.removeClass(S.pushed);
	          }, pushable: function pushable() {
	            D.removeClass(S.pushable);
	          }, active: function active() {
	            H.removeClass(S.active);
	          }, animating: function animating() {
	            H.removeClass(S.animating);
	          }, transition: function transition(e) {
	            e = e || w.get.transition(), H.removeClass(e);
	          }, direction: function direction(e) {
	            e = e || w.get.direction(), H.removeClass(S[e]);
	          }, visible: function visible() {
	            H.removeClass(S.visible);
	          }, overlay: function overlay() {
	            H.removeClass(S.overlay);
	          } }, get: { direction: function direction() {
	            return H.hasClass(S.top) ? S.top : H.hasClass(S.right) ? S.right : H.hasClass(S.bottom) ? S.bottom : S.left;
	          }, transition: function transition() {
	            var e,
	                i = w.get.direction();return e = w.is.mobile() ? "auto" == T.mobileTransition ? T.defaultTransition.mobile[i] : T.mobileTransition : "auto" == T.transition ? T.defaultTransition.computer[i] : T.transition, w.verbose("Determined transition", e), e;
	          }, transitionEvent: function transitionEvent() {
	            var e,
	                i = n.createElement("element"),
	                o = { transition: "transitionend", OTransition: "oTransitionEnd", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd" };for (e in o) if (i.style[e] !== t) return o[e];
	          } }, is: { ie: function ie() {
	            var e = !i.ActiveXObject && "ActiveXObject" in i,
	                n = ("ActiveXObject" in i);return e || n;
	          }, ios: function ios() {
	            var e = navigator.userAgent,
	                i = e.match(F.ios),
	                n = e.match(F.mobileChrome);return i && !n ? (w.verbose("Browser was found to be iOS", e), !0) : !1;
	          }, mobile: function mobile() {
	            var e = navigator.userAgent,
	                i = e.match(F.mobile);return i ? (w.verbose("Browser was found to be mobile", e), !0) : (w.verbose("Browser is not mobile, using regular transition", e), !1);
	          }, hidden: function hidden() {
	            return !w.is.visible();
	          }, visible: function visible() {
	            return H.hasClass(S.visible);
	          }, open: function open() {
	            return w.is.visible();
	          }, closed: function closed() {
	            return w.is.hidden();
	          }, vertical: function vertical() {
	            return H.hasClass(S.top);
	          }, animating: function animating() {
	            return D.hasClass(S.animating);
	          }, rtl: function rtl() {
	            return w.cache.rtl === t && (w.cache.rtl = "rtl" == H.css("direction")), w.cache.rtl;
	          } }, setting: function setting(i, n) {
	          if ((w.debug("Changing setting", i, n), e.isPlainObject(i))) e.extend(!0, T, i);else {
	            if (n === t) return T[i];T[i] = n;
	          }
	        }, internal: function internal(i, n) {
	          if (e.isPlainObject(i)) e.extend(!0, w, i);else {
	            if (n === t) return w[i];w[i] = n;
	          }
	        }, debug: function debug() {
	          T.debug && (T.performance ? w.performance.log(arguments) : (w.debug = Function.prototype.bind.call(console.info, console, T.name + ":"), w.debug.apply(console, arguments)));
	        }, verbose: function verbose() {
	          T.verbose && T.debug && (T.performance ? w.performance.log(arguments) : (w.verbose = Function.prototype.bind.call(console.info, console, T.name + ":"), w.verbose.apply(console, arguments)));
	        }, error: function error() {
	          w.error = Function.prototype.bind.call(console.error, console, T.name + ":"), w.error.apply(console, arguments);
	        }, performance: { log: function log(e) {
	            var i, n, t;T.performance && (i = new Date().getTime(), t = f || i, n = i - t, f = i, b.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: z, "Execution Time": n })), clearTimeout(w.performance.timer), w.performance.timer = setTimeout(w.performance.display, 500);
	          }, display: function display() {
	            var i = T.name + ":",
	                n = 0;f = !1, clearTimeout(w.performance.timer), e.each(b, function (e, i) {
	              n += i["Execution Time"];
	            }), i += " " + n + "ms", u && (i += " '" + u + "'"), (console.group !== t || console.table !== t) && b.length > 0 && (console.groupCollapsed(i), console.table ? console.table(b) : e.each(b, function (e, i) {
	              console.log(i.Name + ": " + i["Execution Time"] + "ms");
	            }), console.groupEnd()), b = [];
	          } }, invoke: function invoke(i, n, o) {
	          var s,
	              a,
	              l,
	              c = B;return n = n || g, o = z || o, "string" == typeof i && c !== t && (i = i.split(/[\. ]/), s = i.length - 1, e.each(i, function (n, o) {
	            var r = n != s ? o + i[n + 1].charAt(0).toUpperCase() + i[n + 1].slice(1) : i;if (e.isPlainObject(c[r]) && n != s) c = c[r];else {
	              if (c[r] !== t) return a = c[r], !1;if (!e.isPlainObject(c[o]) || n == s) return c[o] !== t ? (a = c[o], !1) : (w.error(O.method, i), !1);c = c[o];
	            }
	          })), e.isFunction(a) ? l = a.apply(o, n) : a !== t && (l = a), e.isArray(r) ? r.push(l) : r !== t ? r = [r, l] : l !== t && (r = l), a;
	        } }, m ? (B === t && w.initialize(), w.invoke(h)) : (B !== t && w.invoke("destroy"), w.initialize());
	    }), r !== t ? r : this;
	  }, e.fn.sidebar.settings = { name: "Sidebar", namespace: "sidebar", debug: !1, verbose: !1, performance: !0, transition: "auto", mobileTransition: "auto", defaultTransition: { computer: { left: "uncover", right: "uncover", top: "overlay", bottom: "overlay" }, mobile: { left: "uncover", right: "uncover", top: "overlay", bottom: "overlay" } }, context: "body", exclusive: !1, closable: !0, dimPage: !0, scrollLock: !1, returnScroll: !1, delaySetup: !1, duration: 500, onChange: function onChange() {}, onShow: function onShow() {}, onHide: function onHide() {}, onHidden: function onHidden() {}, onVisible: function onVisible() {}, className: { active: "active", animating: "animating", dimmed: "dimmed", ios: "ios", pushable: "pushable", pushed: "pushed", right: "right", top: "top", left: "left", bottom: "bottom", visible: "visible" }, selector: { fixed: ".fixed", omitted: "script, link, style, .ui.modal, .ui.dimmer, .ui.nag, .ui.fixed", pusher: ".pusher", sidebar: ".ui.sidebar" }, regExp: { ios: /(iPad|iPhone|iPod)/g, mobileChrome: /(CriOS)/g, mobile: /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/g }, error: { method: "The method you called is not defined.", pusher: "Had to add pusher element. For optimal performance make sure body content is inside a pusher element", movedSidebar: "Had to move sidebar. For optimal performance make sure sidebar and pusher are direct children of your body tag", overlay: "The overlay setting is no longer supported, use animation: overlay", notFound: "There were no elements that matched the specified selector" } };
	})(jQuery, window, document);

/***/ }
/******/ ]);