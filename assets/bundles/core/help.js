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

	__webpack_require__(13);

	__webpack_require__(15);

	__webpack_require__(22);

	__webpack_require__(24);

	__webpack_require__(16);

	__webpack_require__(25);

	$(function () {
		init();

		function init() {
			$('.ui.sticky').sticky({
				context: '.help_context',
				offset: 30
			});

			$('.ui.accordion').accordion({
				exclusive: false,
				onChange: function onChange() {
					$('.ui.sticky').sticky('refresh');
				}
			});
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
/* 13 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 14 */,
/* 15 */
/***/ function(module, exports) {

	/*!
	 * # Semantic UI 2.1.8 - Sticky
	 * http://github.com/semantic-org/semantic-ui/
	 *
	 *
	 * Copyright 2015 Contributors
	 * Released under the MIT license
	 * http://opensource.org/licenses/MIT
	 *
	 */
	"use strict";

	!(function (e, t, o, n) {
	  "use strict";e.fn.sticky = function (o) {
	    var i,
	        s = e(this),
	        r = s.selector || "",
	        l = new Date().getTime(),
	        c = [],
	        a = arguments[0],
	        f = "string" == typeof a,
	        m = [].slice.call(arguments, 1);return s.each(function () {
	      var s,
	          u,
	          d,
	          h,
	          p = e.isPlainObject(o) ? e.extend(!0, {}, e.fn.sticky.settings, o) : e.extend({}, e.fn.sticky.settings),
	          g = p.className,
	          b = p.namespace,
	          v = p.error,
	          x = "." + b,
	          C = "module-" + b,
	          S = e(this),
	          y = e(t),
	          k = e(p.scrollContext),
	          T = (S.selector || "", S.data(C)),
	          z = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
	        setTimeout(e, 0);
	      },
	          w = this;h = { initialize: function initialize() {
	          h.determineContainer(), h.determineContext(), h.verbose("Initializing sticky", p, s), h.save.positions(), h.checkErrors(), h.bind.events(), p.observeChanges && h.observeChanges(), h.instantiate();
	        }, instantiate: function instantiate() {
	          h.verbose("Storing instance of module", h), T = h, S.data(C, h);
	        }, destroy: function destroy() {
	          h.verbose("Destroying previous instance"), h.reset(), d && d.disconnect(), y.off("load" + x, h.event.load).off("resize" + x, h.event.resize), k.off("scrollchange" + x, h.event.scrollchange), S.removeData(C);
	        }, observeChanges: function observeChanges() {
	          var e = u[0];"MutationObserver" in t && (d = new MutationObserver(function (e) {
	            clearTimeout(h.timer), h.timer = setTimeout(function () {
	              h.verbose("DOM tree modified, updating sticky menu", e), h.refresh();
	            }, 100);
	          }), d.observe(w, { childList: !0, subtree: !0 }), d.observe(e, { childList: !0, subtree: !0 }), h.debug("Setting up mutation observer", d));
	        }, determineContainer: function determineContainer() {
	          s = S.offsetParent();
	        }, determineContext: function determineContext() {
	          return u = p.context ? e(p.context) : s, 0 === u.length ? void h.error(v.invalidContext, p.context, S) : void 0;
	        }, checkErrors: function checkErrors() {
	          return h.is.hidden() && h.error(v.visible, S), h.cache.element.height > h.cache.context.height ? (h.reset(), void h.error(v.elementSize, S)) : void 0;
	        }, bind: { events: function events() {
	            y.on("load" + x, h.event.load).on("resize" + x, h.event.resize), k.off("scroll" + x).on("scroll" + x, h.event.scroll).on("scrollchange" + x, h.event.scrollchange);
	          } }, event: { load: function load() {
	            h.verbose("Page contents finished loading"), z(h.refresh);
	          }, resize: function resize() {
	            h.verbose("Window resized"), z(h.refresh);
	          }, scroll: function scroll() {
	            z(function () {
	              k.triggerHandler("scrollchange" + x, k.scrollTop());
	            });
	          }, scrollchange: function scrollchange(e, t) {
	            h.stick(t), p.onScroll.call(w);
	          } }, refresh: function refresh(e) {
	          h.reset(), p.context || h.determineContext(), e && h.determineContainer(), h.save.positions(), h.stick(), p.onReposition.call(w);
	        }, supports: { sticky: function sticky() {
	            var t = e("<div/>");t[0];return t.addClass(g.supported), t.css("position").match("sticky");
	          } }, save: { lastScroll: function lastScroll(e) {
	            h.lastScroll = e;
	          }, elementScroll: function elementScroll(e) {
	            h.elementScroll = e;
	          }, positions: function positions() {
	            var e = { height: k.height() },
	                t = { margin: { top: parseInt(S.css("margin-top"), 10), bottom: parseInt(S.css("margin-bottom"), 10) }, offset: S.offset(), width: S.outerWidth(), height: S.outerHeight() },
	                o = { offset: u.offset(), height: u.outerHeight() };({ height: s.outerHeight() });h.is.standardScroll() || (h.debug("Non-standard scroll. Removing scroll offset from element offset"), e.top = k.scrollTop(), e.left = k.scrollLeft(), t.offset.top += e.top, o.offset.top += e.top, t.offset.left += e.left, o.offset.left += e.left), h.cache = { fits: t.height < e.height, scrollContext: { height: e.height }, element: { margin: t.margin, top: t.offset.top - t.margin.top, left: t.offset.left, width: t.width, height: t.height, bottom: t.offset.top + t.height }, context: { top: o.offset.top, height: o.height, bottom: o.offset.top + o.height } }, h.set.containerSize(), h.set.size(), h.stick(), h.debug("Caching element positions", h.cache);
	          } }, get: { direction: function direction(e) {
	            var t = "down";return e = e || k.scrollTop(), h.lastScroll !== n && (h.lastScroll < e ? t = "down" : h.lastScroll > e && (t = "up")), t;
	          }, scrollChange: function scrollChange(e) {
	            return e = e || k.scrollTop(), h.lastScroll ? e - h.lastScroll : 0;
	          }, currentElementScroll: function currentElementScroll() {
	            return h.elementScroll ? h.elementScroll : h.is.top() ? Math.abs(parseInt(S.css("top"), 10)) || 0 : Math.abs(parseInt(S.css("bottom"), 10)) || 0;
	          }, elementScroll: function elementScroll(e) {
	            e = e || k.scrollTop();var t = h.cache.element,
	                o = h.cache.scrollContext,
	                n = h.get.scrollChange(e),
	                i = t.height - o.height + p.offset,
	                s = h.get.currentElementScroll(),
	                r = s + n;return s = h.cache.fits || 0 > r ? 0 : r > i ? i : r;
	          } }, remove: { lastScroll: function lastScroll() {
	            delete h.lastScroll;
	          }, elementScroll: function elementScroll(e) {
	            delete h.elementScroll;
	          }, offset: function offset() {
	            S.css("margin-top", "");
	          } }, set: { offset: function offset() {
	            h.verbose("Setting offset on element", p.offset), S.css("margin-top", p.offset);
	          }, containerSize: function containerSize() {
	            var e = s.get(0).tagName;"HTML" === e || "body" == e ? h.determineContainer() : Math.abs(s.outerHeight() - h.cache.context.height) > p.jitter && (h.debug("Context has padding, specifying exact height for container", h.cache.context.height), s.css({ height: h.cache.context.height }));
	          }, minimumSize: function minimumSize() {
	            var e = h.cache.element;s.css("min-height", e.height);
	          }, scroll: function scroll(e) {
	            h.debug("Setting scroll on element", e), h.elementScroll != e && (h.is.top() && S.css("bottom", "").css("top", -e), h.is.bottom() && S.css("top", "").css("bottom", e));
	          }, size: function size() {
	            0 !== h.cache.element.height && 0 !== h.cache.element.width && (w.style.setProperty("width", h.cache.element.width + "px", "important"), w.style.setProperty("height", h.cache.element.height + "px", "important"));
	          } }, is: { standardScroll: function standardScroll() {
	            return k[0] == t;
	          }, top: function top() {
	            return S.hasClass(g.top);
	          }, bottom: function bottom() {
	            return S.hasClass(g.bottom);
	          }, initialPosition: function initialPosition() {
	            return !h.is.fixed() && !h.is.bound();
	          }, hidden: function hidden() {
	            return !S.is(":visible");
	          }, bound: function bound() {
	            return S.hasClass(g.bound);
	          }, fixed: function fixed() {
	            return S.hasClass(g.fixed);
	          } }, stick: function stick(e) {
	          var t = e || k.scrollTop(),
	              o = h.cache,
	              n = o.fits,
	              i = o.element,
	              s = o.scrollContext,
	              r = o.context,
	              l = h.is.bottom() && p.pushing ? p.bottomOffset : p.offset,
	              e = { top: t + l, bottom: t + l + s.height },
	              c = (h.get.direction(e.top), n ? 0 : h.get.elementScroll(e.top)),
	              a = !n,
	              f = 0 !== i.height;f && (h.is.initialPosition() ? e.top >= r.bottom ? (h.debug("Initial element position is bottom of container"), h.bindBottom()) : e.top > i.top && (i.height + e.top - c >= r.bottom ? (h.debug("Initial element position is bottom of container"), h.bindBottom()) : (h.debug("Initial element position is fixed"), h.fixTop())) : h.is.fixed() ? h.is.top() ? e.top <= i.top ? (h.debug("Fixed element reached top of container"), h.setInitialPosition()) : i.height + e.top - c >= r.bottom ? (h.debug("Fixed element reached bottom of container"), h.bindBottom()) : a && (h.set.scroll(c), h.save.lastScroll(e.top), h.save.elementScroll(c)) : h.is.bottom() && (e.bottom - i.height <= i.top ? (h.debug("Bottom fixed rail has reached top of container"), h.setInitialPosition()) : e.bottom >= r.bottom ? (h.debug("Bottom fixed rail has reached bottom of container"), h.bindBottom()) : a && (h.set.scroll(c), h.save.lastScroll(e.top), h.save.elementScroll(c))) : h.is.bottom() && (e.top <= i.top ? (h.debug("Jumped from bottom fixed to top fixed, most likely used home/end button"), h.setInitialPosition()) : p.pushing ? h.is.bound() && e.bottom <= r.bottom && (h.debug("Fixing bottom attached element to bottom of browser."), h.fixBottom()) : h.is.bound() && e.top <= r.bottom - i.height && (h.debug("Fixing bottom attached element to top of browser."), h.fixTop())));
	        }, bindTop: function bindTop() {
	          h.debug("Binding element to top of parent container"), h.remove.offset(), S.css({ left: "", top: "", marginBottom: "" }).removeClass(g.fixed).removeClass(g.bottom).addClass(g.bound).addClass(g.top), p.onTop.call(w), p.onUnstick.call(w);
	        }, bindBottom: function bindBottom() {
	          h.debug("Binding element to bottom of parent container"), h.remove.offset(), S.css({ left: "", top: "" }).removeClass(g.fixed).removeClass(g.top).addClass(g.bound).addClass(g.bottom), p.onBottom.call(w), p.onUnstick.call(w);
	        }, setInitialPosition: function setInitialPosition() {
	          h.debug("Returning to initial position"), h.unfix(), h.unbind();
	        }, fixTop: function fixTop() {
	          h.debug("Fixing element to top of page"), h.set.minimumSize(), h.set.offset(), S.css({ left: h.cache.element.left, bottom: "", marginBottom: "" }).removeClass(g.bound).removeClass(g.bottom).addClass(g.fixed).addClass(g.top), p.onStick.call(w);
	        }, fixBottom: function fixBottom() {
	          h.debug("Sticking element to bottom of page"), h.set.minimumSize(), h.set.offset(), S.css({ left: h.cache.element.left, bottom: "", marginBottom: "" }).removeClass(g.bound).removeClass(g.top).addClass(g.fixed).addClass(g.bottom), p.onStick.call(w);
	        }, unbind: function unbind() {
	          h.is.bound() && (h.debug("Removing container bound position on element"), h.remove.offset(), S.removeClass(g.bound).removeClass(g.top).removeClass(g.bottom));
	        }, unfix: function unfix() {
	          h.is.fixed() && (h.debug("Removing fixed position on element"), h.remove.offset(), S.removeClass(g.fixed).removeClass(g.top).removeClass(g.bottom), p.onUnstick.call(w));
	        }, reset: function reset() {
	          h.debug("Reseting elements position"), h.unbind(), h.unfix(), h.resetCSS(), h.remove.offset(), h.remove.lastScroll();
	        }, resetCSS: function resetCSS() {
	          S.css({ width: "", height: "" }), s.css({ height: "" });
	        }, setting: function setting(t, o) {
	          if (e.isPlainObject(t)) e.extend(!0, p, t);else {
	            if (o === n) return p[t];p[t] = o;
	          }
	        }, internal: function internal(t, o) {
	          if (e.isPlainObject(t)) e.extend(!0, h, t);else {
	            if (o === n) return h[t];h[t] = o;
	          }
	        }, debug: function debug() {
	          p.debug && (p.performance ? h.performance.log(arguments) : (h.debug = Function.prototype.bind.call(console.info, console, p.name + ":"), h.debug.apply(console, arguments)));
	        }, verbose: function verbose() {
	          p.verbose && p.debug && (p.performance ? h.performance.log(arguments) : (h.verbose = Function.prototype.bind.call(console.info, console, p.name + ":"), h.verbose.apply(console, arguments)));
	        }, error: function error() {
	          h.error = Function.prototype.bind.call(console.error, console, p.name + ":"), h.error.apply(console, arguments);
	        }, performance: { log: function log(e) {
	            var t, o, n;p.performance && (t = new Date().getTime(), n = l || t, o = t - n, l = t, c.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: w, "Execution Time": o })), clearTimeout(h.performance.timer), h.performance.timer = setTimeout(h.performance.display, 0);
	          }, display: function display() {
	            var t = p.name + ":",
	                o = 0;l = !1, clearTimeout(h.performance.timer), e.each(c, function (e, t) {
	              o += t["Execution Time"];
	            }), t += " " + o + "ms", r && (t += " '" + r + "'"), (console.group !== n || console.table !== n) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function (e, t) {
	              console.log(t.Name + ": " + t["Execution Time"] + "ms");
	            }), console.groupEnd()), c = [];
	          } }, invoke: function invoke(t, o, s) {
	          var r,
	              l,
	              c,
	              a = T;return o = o || m, s = w || s, "string" == typeof t && a !== n && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (o, i) {
	            var s = o != r ? i + t[o + 1].charAt(0).toUpperCase() + t[o + 1].slice(1) : t;if (e.isPlainObject(a[s]) && o != r) a = a[s];else {
	              if (a[s] !== n) return l = a[s], !1;if (!e.isPlainObject(a[i]) || o == r) return a[i] !== n ? (l = a[i], !1) : !1;a = a[i];
	            }
	          })), e.isFunction(l) ? c = l.apply(s, o) : l !== n && (c = l), e.isArray(i) ? i.push(c) : i !== n ? i = [i, c] : c !== n && (i = c), l;
	        } }, f ? (T === n && h.initialize(), h.invoke(a)) : (T !== n && T.invoke("destroy"), h.initialize());
	    }), i !== n ? i : this;
	  }, e.fn.sticky.settings = { name: "Sticky", namespace: "sticky", debug: !1, verbose: !0, performance: !0, pushing: !1, context: !1, scrollContext: t, offset: 0, bottomOffset: 0, jitter: 5, observeChanges: !1, onReposition: function onReposition() {}, onScroll: function onScroll() {}, onStick: function onStick() {}, onUnstick: function onUnstick() {}, onTop: function onTop() {}, onBottom: function onBottom() {}, error: { container: "Sticky element must be inside a relative container", visible: "Element is hidden, you must call refresh after element becomes visible", method: "The method you called is not defined.", invalidContext: "Context specified does not exist", elementSize: "Sticky element is larger than its container, cannot create sticky." }, className: { bound: "bound", fixed: "fixed", supported: "native", top: "top", bottom: "bottom" } };
	})(jQuery, window, document);

/***/ },
/* 16 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
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
/* 25 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);