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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(126);

	__webpack_require__(128);

	__webpack_require__(135);

	__webpack_require__(137);

	__webpack_require__(16);

	__webpack_require__(138);

	__webpack_require__(140);

	__webpack_require__(142);

	// import '../../vendors/flexslider/jquery.flexslider-min.js'
	// import '../../vendors/flexslider/flexslider.css'

	__webpack_require__(143);

	$(function () {
		var profile_username = $('.profile_username').text();

		init();
		init_rating();
		service_click_event();
		register_modal();
		send_message_modal();
		send_comment($server_id);
		use_unslider();

		function init() {
			$('.profile_home .ui.dropdown').dropdown();

			$('.menu .item').tab();

			$('.menu .all_services').popup({
				on: 'click',
				position: 'bottom right'
			});
		}

		function init_rating() {
			$('.ui.comments .ui.rating').rating('disable');
			$('.ui.form .ui.rating').rating();
		}

		function service_click_event() {
			var service_index = $server_id != 'all' ? $server_id : 0;
			$('.click_service').click(function (event) {
				var service_id = $(this).data('service');
				var $div = $(this);
				get_rating_and_form({ 'service_id': service_id }, function () {
					init_rating();
					send_comment(service_id);

					$('.service_' + service_index).hide();
					$('.service_' + service_id).show();
					$('.service_length').hide();
					$('.service_title').text($div.find('td').eq(0).text()).show();
					$('.menu .all_services').popup('hide');
					service_index = service_id;
				});
			});

			$('.click_about_me').click(function (event) {
				get_rating_and_form({ 'service_id': 'all' }, function () {
					init_rating();

					$('.service_title').hide();
					$('.service_length').show();
				});
			});
		}

		function get_rating_and_form(temp, cb) {
			var url = '/profiles/' + profile_username + '/get_rating_and_form/';
			$.get(url, temp, function (result) {
				$('.rating_box').empty().html(result);
				cb && cb();
			});
		}

		function register_modal() {
			$(".not_login").click(function () {
				$('.register_modal').modal('show');
			});

			$('.register_modal .submit').click(function () {
				var temp = $('.register-content').serialize();

				$.post(window.location.href, temp, function (result) {
					if (result.success == 'ok') {
						window.location.href = window.location.href.replace(window.location.pathname, result.redirect_to);
						return;
					}
					$('.register-content').empty();
					$('.register-content').html(result);
					$('.register_modal').modal('refresh');
				});
			});
		}

		function send_message_modal() {
			$('.message_modal, .second.modal').modal({
				allowMultiple: false
			});
			$('.second.modal').modal('attach events', '.message_modal.modal .close');
			$(".send_message").click(function () {
				$('.message_modal').modal('show');
			});

			$('.message_modal .submit').click(function () {
				var temp = $('.message-content').serialize();

				$.post(window.location.href, temp, function (result) {
					if (result.success == 'ok') {
						$('.second_modal').modal('show');
						return;
					}
					$('.message-content').empty();
					$('.message-content').html(result);
					$('.message_modal').modal('refresh');
				});
			});
		}

		function send_comment(service_id) {
			$('.ui.form.rating_form .submit').click(function () {
				console.log('fdfd');
				var stars = $('.ui.form.rating_form .ui.rating .icon.active').size();
				var comment = $("#id_comment").val();
				if (stars == "0") {
					return alert('请选择合适的满意度');
				}
				if (comment == "") {
					return alert('请输入评价');
				}

				var temp = {
					'stars': stars,
					'comment': comment,
					'service_id': service_id
				};

				var url = '/profiles/' + profile_username + '/get_rating_and_form/';
				$.post(url, temp, function (result) {
					$('.rating_box').empty().html(result);
					init_rating();
				});
			});
		}

		function use_unslider() {
			$('.banner').unslider({
				arrows: true
			});
		}

		function equal_width() {
			var width = 0;
			$(".equal_width").each(function () {
				if (width < parseInt($(this).width())) {
					width = parseInt($(this).width());
				}
			});

			if (width) {
				$(".equal_width").css({
					width: width + 20
				});
			}
		}
	});

/***/ },

/***/ 16:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 126:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 128:
/***/ function(module, exports) {

	/*!
	 * # Semantic UI 2.1.8 - Tab
	 * http://github.com/semantic-org/semantic-ui/
	 *
	 *
	 * Copyright 2015 Contributors
	 * Released under the MIT license
	 * http://opensource.org/licenses/MIT
	 *
	 */
	"use strict";

	!(function (e, t, a, n) {
	  "use strict";e.fn.tab = function (i) {
	    var o,
	        r = e(e.isFunction(this) ? t : this),
	        s = r.selector || "",
	        c = new Date().getTime(),
	        l = [],
	        d = arguments[0],
	        u = "string" == typeof d,
	        b = [].slice.call(arguments, 1),
	        g = !1;return r.each(function () {
	      var f,
	          h,
	          p,
	          m,
	          v,
	          y,
	          T = e.isPlainObject(i) ? e.extend(!0, {}, e.fn.tab.settings, i) : e.extend({}, e.fn.tab.settings),
	          L = T.className,
	          x = T.metadata,
	          A = T.selector,
	          P = T.error,
	          C = "." + T.namespace,
	          F = "module-" + T.namespace,
	          S = e(this),
	          E = {},
	          j = !0,
	          k = 0,
	          w = this,
	          I = S.data(F);v = { initialize: function initialize() {
	          v.debug("Initializing tab menu item", S), v.fix.callbacks(), v.determineTabs(), v.debug("Determining tabs", T.context, h), T.auto && v.set.auto(), v.bind.events(), T.history && !g && (v.initializeHistory(), g = !0), v.instantiate();
	        }, instantiate: function instantiate() {
	          v.verbose("Storing instance of module", v), I = v, S.data(F, v);
	        }, destroy: function destroy() {
	          v.debug("Destroying tabs", S), S.removeData(F).off(C);
	        }, bind: { events: function events() {
	            e.isWindow(w) || (v.debug("Attaching tab activation events to element", S), S.on("click" + C, v.event.click));
	          } }, determineTabs: function determineTabs() {
	          var t;"parent" === T.context ? (S.closest(A.ui).length > 0 ? (t = S.closest(A.ui), v.verbose("Using closest UI element as parent", t)) : t = S, f = t.parent(), v.verbose("Determined parent element for creating context", f)) : T.context ? (f = e(T.context), v.verbose("Using selector for tab context", T.context, f)) : f = e("body"), T.childrenOnly ? (h = f.children(A.tabs), v.debug("Searching tab context children for tabs", f, h)) : (h = f.find(A.tabs), v.debug("Searching tab context for tabs", f, h));
	        }, fix: { callbacks: function callbacks() {
	            e.isPlainObject(i) && (i.onTabLoad || i.onTabInit) && (i.onTabLoad && (i.onLoad = i.onTabLoad, delete i.onTabLoad, v.error(P.legacyLoad, i.onLoad)), i.onTabInit && (i.onFirstLoad = i.onTabInit, delete i.onTabInit, v.error(P.legacyInit, i.onFirstLoad)), T = e.extend(!0, {}, e.fn.tab.settings, i));
	          } }, initializeHistory: function initializeHistory() {
	          if ((v.debug("Initializing page state"), e.address === n)) return v.error(P.state), !1;if ("state" == T.historyType) {
	            if ((v.debug("Using HTML5 to manage state"), T.path === !1)) return v.error(P.path), !1;e.address.history(!0).state(T.path);
	          }e.address.bind("change", v.event.history.change);
	        }, event: { click: function click(t) {
	            var a = e(this).data(x.tab);a !== n ? (T.history ? (v.verbose("Updating page state", t), e.address.value(a)) : (v.verbose("Changing tab", t), v.changeTab(a)), t.preventDefault()) : v.debug("No tab specified");
	          }, history: { change: function change(t) {
	              var a = t.pathNames.join("/") || v.get.initialPath(),
	                  i = T.templates.determineTitle(a) || !1;v.performance.display(), v.debug("History change event", a, t), y = t, a !== n && v.changeTab(a), i && e.address.title(i);
	            } } }, refresh: function refresh() {
	          p && (v.debug("Refreshing tab", p), v.changeTab(p));
	        }, cache: { read: function read(e) {
	            return e !== n ? E[e] : !1;
	          }, add: function add(e, t) {
	            e = e || p, v.debug("Adding cached content for", e), E[e] = t;
	          }, remove: function remove(e) {
	            e = e || p, v.debug("Removing cached content for", e), delete E[e];
	          } }, set: { auto: function auto() {
	            var t = "string" == typeof T.path ? T.path.replace(/\/$/, "") + "/{$tab}" : "/{$tab}";v.verbose("Setting up automatic tab retrieval from server", t), e.isPlainObject(T.apiSettings) ? T.apiSettings.url = t : T.apiSettings = { url: t };
	          }, loading: function loading(e) {
	            var t = v.get.tabElement(e),
	                a = t.hasClass(L.loading);a || (v.verbose("Setting loading state for", t), t.addClass(L.loading).siblings(h).removeClass(L.active + " " + L.loading), t.length > 0 && T.onRequest.call(t[0], e));
	          }, state: function state(t) {
	            e.address.value(t);
	          } }, changeTab: function changeTab(a) {
	          var n = t.history && t.history.pushState,
	              i = n && T.ignoreFirstLoad && j,
	              o = T.auto || e.isPlainObject(T.apiSettings),
	              r = o && !i ? v.utilities.pathToArray(a) : v.get.defaultPathArray(a);a = v.utilities.arrayToPath(r), e.each(r, function (t, n) {
	            var s,
	                c,
	                l,
	                d,
	                u = r.slice(0, t + 1),
	                b = v.utilities.arrayToPath(u),
	                g = v.is.tab(b),
	                h = t + 1 == r.length,
	                A = v.get.tabElement(b);if ((v.verbose("Looking for tab", n), g)) {
	              if ((v.verbose("Tab was found", n), p = b, m = v.utilities.filterArray(r, u), h ? d = !0 : (c = r.slice(0, t + 2), l = v.utilities.arrayToPath(c), d = !v.is.tab(l), d && v.verbose("Tab parameters found", c)), d && o)) return i ? (v.debug("Ignoring remote content on first tab load", b), j = !1, v.cache.add(a, A.html()), v.activate.all(b), T.onFirstLoad.call(A[0], b, m, y), T.onLoad.call(A[0], b, m, y)) : (v.activate.navigation(b), v.fetch.content(b, a)), !1;v.debug("Opened local tab", b), v.activate.all(b), v.cache.read(b) || (v.cache.add(b, !0), v.debug("First time tab loaded calling tab init"), T.onFirstLoad.call(A[0], b, m, y)), T.onLoad.call(A[0], b, m, y);
	            } else {
	              if (-1 != a.search("/") || "" === a) return v.error(P.missingTab, S, f, b), !1;if ((s = e("#" + a + ', a[name="' + a + '"]'), b = s.closest("[data-tab]").data(x.tab), A = v.get.tabElement(b), s && s.length > 0 && b)) return v.debug("Anchor link used, opening parent tab", A, s), A.hasClass(L.active) || setTimeout(function () {
	                v.scrollTo(s);
	              }, 0), v.activate.all(b), v.cache.read(b) || (v.cache.add(b, !0), v.debug("First time tab loaded calling tab init"), T.onFirstLoad.call(A[0], b, m, y)), T.onLoad.call(A[0], b, m, y), !1;
	            }
	          });
	        }, scrollTo: function scrollTo(t) {
	          var n = t && t.length > 0 ? t.offset().top : !1;n !== !1 && (v.debug("Forcing scroll to an in-page link in a hidden tab", n, t), e(a).scrollTop(n));
	        }, update: { content: function content(e, t, a) {
	            var i = v.get.tabElement(e),
	                o = i[0];a = a !== n ? a : T.evaluateScripts, a ? (v.debug("Updating HTML and evaluating inline scripts", e, t), i.html(t)) : (v.debug("Updating HTML", e, t), o.innerHTML = t);
	          } }, fetch: { content: function content(t, a) {
	            var i,
	                o,
	                r = v.get.tabElement(t),
	                s = { dataType: "html", encodeParameters: !1, on: "now", cache: T.alwaysRefresh, headers: { "X-Remote": !0 }, onSuccess: function onSuccess(e) {
	                v.cache.add(a, e), v.update.content(t, e), t == p ? (v.debug("Content loaded", t), v.activate.tab(t)) : v.debug("Content loaded in background", t), T.onFirstLoad.call(r[0], t, m, y), T.onLoad.call(r[0], t, m, y);
	              }, urlData: { tab: a } },
	                c = r.api("get request") || !1,
	                l = c && "pending" === c.state();a = a || t, o = v.cache.read(a), T.cache && o ? (v.activate.tab(t), v.debug("Adding cached content", a), "once" == T.evaluateScripts ? v.update.content(t, o, !1) : v.update.content(t, o), T.onLoad.call(r[0], t, m, y)) : l ? (v.set.loading(t), v.debug("Content is already loading", a)) : e.api !== n ? (i = e.extend(!0, {}, T.apiSettings, s), v.debug("Retrieving remote content", a, i), v.set.loading(t), r.api(i)) : v.error(P.api);
	          } }, activate: { all: function all(e) {
	            v.activate.tab(e), v.activate.navigation(e);
	          }, tab: function tab(e) {
	            var t = v.get.tabElement(e),
	                a = t.hasClass(L.active);v.verbose("Showing tab content for", t), a || (t.addClass(L.active).siblings(h).removeClass(L.active + " " + L.loading), t.length > 0 && T.onVisible.call(t[0], e));
	          }, navigation: function navigation(e) {
	            var t = v.get.navElement(e),
	                a = t.hasClass(L.active);v.verbose("Activating tab navigation for", t, e), a || t.addClass(L.active).siblings(r).removeClass(L.active + " " + L.loading);
	          } }, deactivate: { all: function all() {
	            v.deactivate.navigation(), v.deactivate.tabs();
	          }, navigation: function navigation() {
	            r.removeClass(L.active);
	          }, tabs: function tabs() {
	            h.removeClass(L.active + " " + L.loading);
	          } }, is: { tab: function tab(e) {
	            return e !== n ? v.get.tabElement(e).length > 0 : !1;
	          } }, get: { initialPath: function initialPath() {
	            return r.eq(0).data(x.tab) || h.eq(0).data(x.tab);
	          }, path: function path() {
	            return e.address.value();
	          }, defaultPathArray: function defaultPathArray(e) {
	            return v.utilities.pathToArray(v.get.defaultPath(e));
	          }, defaultPath: function defaultPath(e) {
	            var t = r.filter("[data-" + x.tab + '^="' + e + '/"]').eq(0),
	                a = t.data(x.tab) || !1;if (a) {
	              if ((v.debug("Found default tab", a), k < T.maxDepth)) return k++, v.get.defaultPath(a);v.error(P.recursion);
	            } else v.debug("No default tabs found for", e, h);return k = 0, e;
	          }, navElement: function navElement(e) {
	            return e = e || p, r.filter("[data-" + x.tab + '="' + e + '"]');
	          }, tabElement: function tabElement(e) {
	            var t, a, n, i;return e = e || p, n = v.utilities.pathToArray(e), i = v.utilities.last(n), t = h.filter("[data-" + x.tab + '="' + e + '"]'), a = h.filter("[data-" + x.tab + '="' + i + '"]'), t.length > 0 ? t : a;
	          }, tab: function tab() {
	            return p;
	          } }, utilities: { filterArray: function filterArray(t, a) {
	            return e.grep(t, function (t) {
	              return -1 == e.inArray(t, a);
	            });
	          }, last: function last(t) {
	            return e.isArray(t) ? t[t.length - 1] : !1;
	          }, pathToArray: function pathToArray(e) {
	            return e === n && (e = p), "string" == typeof e ? e.split("/") : [e];
	          }, arrayToPath: function arrayToPath(t) {
	            return e.isArray(t) ? t.join("/") : !1;
	          } }, setting: function setting(t, a) {
	          if ((v.debug("Changing setting", t, a), e.isPlainObject(t))) e.extend(!0, T, t);else {
	            if (a === n) return T[t];T[t] = a;
	          }
	        }, internal: function internal(t, a) {
	          if (e.isPlainObject(t)) e.extend(!0, v, t);else {
	            if (a === n) return v[t];v[t] = a;
	          }
	        }, debug: function debug() {
	          T.debug && (T.performance ? v.performance.log(arguments) : (v.debug = Function.prototype.bind.call(console.info, console, T.name + ":"), v.debug.apply(console, arguments)));
	        }, verbose: function verbose() {
	          T.verbose && T.debug && (T.performance ? v.performance.log(arguments) : (v.verbose = Function.prototype.bind.call(console.info, console, T.name + ":"), v.verbose.apply(console, arguments)));
	        }, error: function error() {
	          v.error = Function.prototype.bind.call(console.error, console, T.name + ":"), v.error.apply(console, arguments);
	        }, performance: { log: function log(e) {
	            var t, a, n;T.performance && (t = new Date().getTime(), n = c || t, a = t - n, c = t, l.push({ Name: e[0], Arguments: [].slice.call(e, 1) || "", Element: w, "Execution Time": a })), clearTimeout(v.performance.timer), v.performance.timer = setTimeout(v.performance.display, 500);
	          }, display: function display() {
	            var t = T.name + ":",
	                a = 0;c = !1, clearTimeout(v.performance.timer), e.each(l, function (e, t) {
	              a += t["Execution Time"];
	            }), t += " " + a + "ms", s && (t += " '" + s + "'"), (console.group !== n || console.table !== n) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function (e, t) {
	              console.log(t.Name + ": " + t["Execution Time"] + "ms");
	            }), console.groupEnd()), l = [];
	          } }, invoke: function invoke(t, a, i) {
	          var r,
	              s,
	              c,
	              l = I;return a = a || b, i = w || i, "string" == typeof t && l !== n && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t, function (a, i) {
	            var o = a != r ? i + t[a + 1].charAt(0).toUpperCase() + t[a + 1].slice(1) : t;if (e.isPlainObject(l[o]) && a != r) l = l[o];else {
	              if (l[o] !== n) return s = l[o], !1;if (!e.isPlainObject(l[i]) || a == r) return l[i] !== n ? (s = l[i], !1) : (v.error(P.method, t), !1);l = l[i];
	            }
	          })), e.isFunction(s) ? c = s.apply(i, a) : s !== n && (c = s), e.isArray(o) ? o.push(c) : o !== n ? o = [o, c] : c !== n && (o = c), s;
	        } }, u ? (I === n && v.initialize(), v.invoke(d)) : (I !== n && I.invoke("destroy"), v.initialize());
	    }), o !== n ? o : this;
	  }, e.tab = function () {
	    e(t).tab.apply(this, arguments);
	  }, e.fn.tab.settings = { name: "Tab", namespace: "tab", debug: !1, verbose: !1, performance: !0, auto: !1, history: !1, historyType: "hash", path: !1, context: !1, childrenOnly: !1, maxDepth: 25, alwaysRefresh: !1, cache: !0, ignoreFirstLoad: !1, apiSettings: !1, evaluateScripts: "once", onFirstLoad: function onFirstLoad(e, t, a) {}, onLoad: function onLoad(e, t, a) {}, onVisible: function onVisible(e, t, a) {}, onRequest: function onRequest(e, t, a) {}, templates: { determineTitle: function determineTitle(e) {} }, error: { api: "You attempted to load content without API module", method: "The method you called is not defined", missingTab: "Activated tab cannot be found. Tabs are case-sensitive.", noContent: "The tab you specified is missing a content url.", path: "History enabled, but no path was specified", recursion: "Max recursive depth reached", legacyInit: "onTabInit has been renamed to onFirstLoad in 2.0, please adjust your code.", legacyLoad: "onTabLoad has been renamed to onLoad in 2.0. Please adjust your code", state: "History requires Asual's Address library <https://github.com/asual/jquery-address>" }, metadata: { tab: "tab", loaded: "loaded", promise: "promise" }, className: { loading: "loading", active: "active" }, selector: { tabs: ".ui.tab", ui: ".ui" } };
	})(jQuery, window, document);

/***/ },

/***/ 135:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 137:
/***/ function(module, exports) {

	/*!
	 * # Semantic UI 2.1.8 - Popup
	 * http://github.com/semantic-org/semantic-ui/
	 *
	 *
	 * Copyright 2015 Contributors
	 * Released under the MIT license
	 * http://opensource.org/licenses/MIT
	 *
	 */
	"use strict";

	!(function (t, e, o, n) {
	  "use strict";t.fn.popup = function (i) {
	    var r,
	        a = t(this),
	        s = t(o),
	        p = t(e),
	        l = t("body"),
	        u = a.selector || "",
	        c = !0,
	        d = new Date().getTime(),
	        f = [],
	        h = arguments[0],
	        g = "string" == typeof h,
	        m = [].slice.call(arguments, 1);return a.each(function () {
	      var o,
	          a,
	          v,
	          b,
	          w,
	          y = t.isPlainObject(i) ? t.extend(!0, {}, t.fn.popup.settings, i) : t.extend({}, t.fn.popup.settings),
	          T = y.selector,
	          P = y.className,
	          C = y.error,
	          k = y.metadata,
	          x = y.namespace,
	          S = "." + y.namespace,
	          A = "module-" + x,
	          D = t(this),
	          E = t(y.context),
	          O = y.target ? t(y.target) : D,
	          j = 0,
	          F = !1,
	          R = !1,
	          H = this,
	          W = D.data(A);w = { initialize: function initialize() {
	          w.debug("Initializing", D), w.createID(), w.bind.events(), !w.exists() && y.preserve && w.create(), w.instantiate();
	        }, instantiate: function instantiate() {
	          w.verbose("Storing instance", w), W = w, D.data(A, W);
	        }, refresh: function refresh() {
	          y.popup ? o = t(y.popup).eq(0) : y.inline && (o = O.nextAll(T.popup).eq(0), y.popup = o), y.popup ? (o.addClass(P.loading), a = w.get.offsetParent(), o.removeClass(P.loading), y.movePopup && w.has.popup() && w.get.offsetParent(o)[0] !== a[0] && (w.debug("Moving popup to the same offset parent as activating element"), o.detach().appendTo(a))) : a = y.inline ? w.get.offsetParent(O) : w.has.popup() ? w.get.offsetParent(o) : l, a.is("html") && a[0] !== l[0] && (w.debug("Setting page as offset parent"), a = l), w.get.variation() && w.set.variation();
	        }, reposition: function reposition() {
	          w.refresh(), w.set.position();
	        }, destroy: function destroy() {
	          w.debug("Destroying previous module"), o && !y.preserve && w.removePopup(), clearTimeout(w.hideTimer), clearTimeout(w.showTimer), p.off(v), D.off(S).removeData(A);
	        }, event: { start: function start(e) {
	            var o = t.isPlainObject(y.delay) ? y.delay.show : y.delay;clearTimeout(w.hideTimer), R || (w.showTimer = setTimeout(w.show, o));
	          }, end: function end() {
	            var e = t.isPlainObject(y.delay) ? y.delay.hide : y.delay;clearTimeout(w.showTimer), w.hideTimer = setTimeout(w.hide, e);
	          }, touchstart: function touchstart(t) {
	            R = !0, w.show();
	          }, resize: function resize() {
	            w.is.visible() && w.set.position();
	          }, hideGracefully: function hideGracefully(e) {
	            e && 0 === t(e.target).closest(T.popup).length ? (w.debug("Click occurred outside popup hiding popup"), w.hide()) : w.debug("Click was inside popup, keeping popup open");
	          } }, create: function create() {
	          var e = w.get.html(),
	              n = w.get.title(),
	              i = w.get.content();e || i || n ? (w.debug("Creating pop-up html"), e || (e = y.templates.popup({ title: n, content: i })), o = t("<div/>").addClass(P.popup).data(k.activator, D).html(e), y.inline ? (w.verbose("Inserting popup element inline", o), o.insertAfter(D)) : (w.verbose("Appending popup element to body", o), o.appendTo(E)), w.refresh(), w.set.variation(), y.hoverable && w.bind.popup(), y.onCreate.call(o, H)) : 0 !== O.next(T.popup).length ? (w.verbose("Pre-existing popup found"), y.inline = !0, y.popups = O.next(T.popup).data(k.activator, D), w.refresh(), y.hoverable && w.bind.popup()) : y.popup ? (t(y.popup).data(k.activator, D), w.verbose("Used popup specified in settings"), w.refresh(), y.hoverable && w.bind.popup()) : w.debug("No content specified skipping display", H);
	        }, createID: function createID() {
	          b = (Math.random().toString(16) + "000000000").substr(2, 8), v = "." + b, w.verbose("Creating unique id for element", b);
	        }, toggle: function toggle() {
	          w.debug("Toggling pop-up"), w.is.hidden() ? (w.debug("Popup is hidden, showing pop-up"), w.unbind.close(), w.show()) : (w.debug("Popup is visible, hiding pop-up"), w.hide());
	        }, show: function show(t) {
	          if ((t = t || function () {}, w.debug("Showing pop-up", y.transition), w.is.hidden() && (!w.is.active() || !w.is.dropdown()))) {
	            if ((w.exists() || w.create(), y.onShow.call(o, H) === !1)) return void w.debug("onShow callback returned false, cancelling popup animation");y.preserve || y.popup || w.refresh(), o && w.set.position() && (w.save.conditions(), y.exclusive && w.hideAll(), w.animate.show(t));
	          }
	        }, hide: function hide(t) {
	          if ((t = t || function () {}, w.is.visible() || w.is.animating())) {
	            if (y.onHide.call(o, H) === !1) return void w.debug("onHide callback returned false, cancelling popup animation");w.remove.visible(), w.unbind.close(), w.restore.conditions(), w.animate.hide(t);
	          }
	        }, hideAll: function hideAll() {
	          t(T.popup).filter("." + P.visible).each(function () {
	            t(this).data(k.activator).popup("hide");
	          });
	        }, exists: function exists() {
	          return o ? y.inline || y.popup ? w.has.popup() : o.closest(E).length >= 1 : !1;
	        }, removePopup: function removePopup() {
	          w.has.popup() && !y.popup && (w.debug("Removing popup", o), o.remove(), o = n, y.onRemove.call(o, H));
	        }, save: { conditions: function conditions() {
	            w.cache = { title: D.attr("title") }, w.cache.title && D.removeAttr("title"), w.verbose("Saving original attributes", w.cache.title);
	          } }, restore: { conditions: function conditions() {
	            return w.cache && w.cache.title && (D.attr("title", w.cache.title), w.verbose("Restoring original attributes", w.cache.title)), !0;
	          } }, animate: { show: function show(e) {
	            e = t.isFunction(e) ? e : function () {}, y.transition && t.fn.transition !== n && D.transition("is supported") ? (w.set.visible(), o.transition({ animation: y.transition + " in", queue: !1, debug: y.debug, verbose: y.verbose, duration: y.duration, onComplete: function onComplete() {
	                w.bind.close(), e.call(o, H), y.onVisible.call(o, H);
	              } })) : w.error(C.noTransition);
	          }, hide: function hide(e) {
	            return e = t.isFunction(e) ? e : function () {}, w.debug("Hiding pop-up"), y.onHide.call(o, H) === !1 ? void w.debug("onHide callback returned false, cancelling popup animation") : void (y.transition && t.fn.transition !== n && D.transition("is supported") ? o.transition({ animation: y.transition + " out", queue: !1, duration: y.duration, debug: y.debug, verbose: y.verbose, onComplete: function onComplete() {
	                w.reset(), e.call(o, H), y.onHidden.call(o, H);
	              } }) : w.error(C.noTransition));
	          } }, change: { content: function content(t) {
	            o.html(t);
	          } }, get: { html: function html() {
	            return D.removeData(k.html), D.data(k.html) || y.html;
	          }, title: function title() {
	            return D.removeData(k.title), D.data(k.title) || y.title;
	          }, content: function content() {
	            return D.removeData(k.content), D.data(k.content) || D.attr("title") || y.content;
	          }, variation: function variation() {
	            return D.removeData(k.variation), D.data(k.variation) || y.variation;
	          }, popup: function popup() {
	            return o;
	          }, popupOffset: function popupOffset() {
	            return o.offset();
	          }, calculations: function calculations() {
	            var t,
	                n = O[0],
	                i = y.inline || y.popup && y.movePopup ? O.position() : O.offset(),
	                r = {};return r = { target: { element: O[0], width: O.outerWidth(), height: O.outerHeight(), top: i.top, left: i.left, margin: {} }, popup: { width: o.outerWidth(), height: o.outerHeight() }, parent: { width: a.outerWidth(), height: a.outerHeight() }, screen: { scroll: { top: p.scrollTop(), left: p.scrollLeft() }, width: p.width(), height: p.height() } }, y.setFluidWidth && w.is.fluid() && (r.container = { width: o.parent().outerWidth() }, r.popup.width = r.container.width), r.target.margin.top = y.inline ? parseInt(e.getComputedStyle(n).getPropertyValue("margin-top"), 10) : 0, r.target.margin.left = y.inline ? w.is.rtl() ? parseInt(e.getComputedStyle(n).getPropertyValue("margin-right"), 10) : parseInt(e.getComputedStyle(n).getPropertyValue("margin-left"), 10) : 0, t = r.screen, r.boundary = { top: t.scroll.top, bottom: t.scroll.top + t.height, left: t.scroll.left, right: t.scroll.left + t.width }, r;
	          }, id: function id() {
	            return b;
	          }, startEvent: function startEvent() {
	            return "hover" == y.on ? "mouseenter" : "focus" == y.on ? "focus" : !1;
	          }, scrollEvent: function scrollEvent() {
	            return "scroll";
	          }, endEvent: function endEvent() {
	            return "hover" == y.on ? "mouseleave" : "focus" == y.on ? "blur" : !1;
	          }, distanceFromBoundary: function distanceFromBoundary(t, e) {
	            var o,
	                n,
	                i = {};return t = t || w.get.offset(), e = e || w.get.calculations(), o = e.popup, n = e.boundary, t && (i = { top: t.top - n.top, left: t.left - n.left, right: n.right - (t.left + o.width), bottom: n.bottom - (t.top + o.height) }, w.verbose("Distance from boundaries determined", t, i)), i;
	          }, offsetParent: function offsetParent(e) {
	            var o = e !== n ? e[0] : D[0],
	                i = o.parentNode,
	                r = t(i);if (i) for (var a = "none" === r.css("transform"), s = "static" === r.css("position"), p = r.is("html"); i && !p && s && a;) i = i.parentNode, r = t(i), a = "none" === r.css("transform"), s = "static" === r.css("position"), p = r.is("html");return r && r.length > 0 ? r : t();
	          }, positions: function positions() {
	            return { "top left": !1, "top center": !1, "top right": !1, "bottom left": !1, "bottom center": !1, "bottom right": !1, "left center": !1, "right center": !1 };
	          }, nextPosition: function nextPosition(t) {
	            var e = t.split(" "),
	                o = e[0],
	                n = e[1],
	                i = { top: "bottom", bottom: "top", left: "right", right: "left" },
	                r = { left: "center", center: "right", right: "left" },
	                a = { "top left": "top center", "top center": "top right", "top right": "right center", "right center": "bottom right", "bottom right": "bottom center", "bottom center": "bottom left", "bottom left": "left center", "left center": "top left" },
	                s = "top" == o || "bottom" == o,
	                p = !1,
	                l = !1,
	                u = !1;return F || (w.verbose("All available positions available"), F = w.get.positions()), w.debug("Recording last position tried", t), F[t] = !0, "opposite" === y.prefer && (u = [i[o], n], u = u.join(" "), p = F[u] === !0, w.debug("Trying opposite strategy", u)), "adjacent" === y.prefer && s && (u = [o, r[n]], u = u.join(" "), l = F[u] === !0, w.debug("Trying adjacent strategy", u)), (l || p) && (w.debug("Using backup position", u), u = a[t]), u;
	          } }, set: { position: function position(t, e) {
	            if (0 === O.length || 0 === o.length) return void w.error(C.notFound);var i, r, a, s, p, l, u, c;if ((e = e || w.get.calculations(), t = t || D.data(k.position) || y.position, i = D.data(k.offset) || y.offset, r = y.distanceAway, a = e.target, s = e.popup, p = e.parent, 0 === a.width && 0 === a.height && !(a.element instanceof SVGGraphicsElement))) return w.debug("Popup target is hidden, no action taken"), !1;switch ((y.inline && (w.debug("Adding margin to calculation", a.margin), "left center" == t || "right center" == t ? (i += a.margin.top, r += -a.margin.left) : "top left" == t || "top center" == t || "top right" == t ? (i += a.margin.left, r -= a.margin.top) : (i += a.margin.left, r += a.margin.top)), w.debug("Determining popup position from calculations", t, e), w.is.rtl() && (t = t.replace(/left|right/g, function (t) {
	              return "left" == t ? "right" : "left";
	            }), w.debug("RTL: Popup position updated", t)), j == y.maxSearchDepth && "string" == typeof y.lastResort && (t = y.lastResort), t)) {case "top left":
	                l = { top: "auto", bottom: p.height - a.top + r, left: a.left + i, right: "auto" };break;case "top center":
	                l = { bottom: p.height - a.top + r, left: a.left + a.width / 2 - s.width / 2 + i, top: "auto", right: "auto" };break;case "top right":
	                l = { bottom: p.height - a.top + r, right: p.width - a.left - a.width - i, top: "auto", left: "auto" };break;case "left center":
	                l = { top: a.top + a.height / 2 - s.height / 2 + i, right: p.width - a.left + r, left: "auto", bottom: "auto" };break;case "right center":
	                l = { top: a.top + a.height / 2 - s.height / 2 + i, left: a.left + a.width + r, bottom: "auto", right: "auto" };break;case "bottom left":
	                l = { top: a.top + a.height + r, left: a.left + i, bottom: "auto", right: "auto" };break;case "bottom center":
	                l = { top: a.top + a.height + r, left: a.left + a.width / 2 - s.width / 2 + i, bottom: "auto", right: "auto" };break;case "bottom right":
	                l = { top: a.top + a.height + r, right: p.width - a.left - a.width - i, left: "auto", bottom: "auto" };}if ((l === n && w.error(C.invalidPosition, t), w.debug("Calculated popup positioning values", l), o.css(l).removeClass(P.position).addClass(t).addClass(P.loading), u = w.get.popupOffset(), c = w.get.distanceFromBoundary(u, e), w.is.offstage(c, t))) {
	              if ((w.debug("Position is outside viewport", t), j < y.maxSearchDepth)) return j++, t = w.get.nextPosition(t), w.debug("Trying new position", t), o ? w.set.position(t, e) : !1;if (!y.lastResort) return w.debug("Popup could not find a position to display", o), w.error(C.cannotPlace, H), w.remove.attempts(), w.remove.loading(), w.reset(), y.onUnplaceable.call(o, H), !1;w.debug("No position found, showing with last position");
	            }return w.debug("Position is on stage", t), w.remove.attempts(), w.remove.loading(), y.setFluidWidth && w.is.fluid() && w.set.fluidWidth(e), !0;
	          }, fluidWidth: function fluidWidth(t) {
	            t = t || w.get.calculations(), w.debug("Automatically setting element width to parent width", t.parent.width), o.css("width", t.container.width);
	          }, variation: function variation(t) {
	            t = t || w.get.variation(), t && w.has.popup() && (w.verbose("Adding variation to popup", t), o.addClass(t));
	          }, visible: function visible() {
	            D.addClass(P.visible);
	          } }, remove: { loading: function loading() {
	            o.removeClass(P.loading);
	          }, variation: function variation(t) {
	            t = t || w.get.variation(), t && (w.verbose("Removing variation", t), o.removeClass(t));
	          }, visible: function visible() {
	            D.removeClass(P.visible);
	          }, attempts: function attempts() {
	            w.verbose("Resetting all searched positions"), j = 0, F = !1;
	          } }, bind: { events: function events() {
	            w.debug("Binding popup events to module"), "click" == y.on && D.on("click" + S, w.toggle), "hover" == y.on && c && D.on("touchstart" + S, w.event.touchstart), w.get.startEvent() && D.on(w.get.startEvent() + S, w.event.start).on(w.get.endEvent() + S, w.event.end), y.target && w.debug("Target set to element", O), p.on("resize" + v, w.event.resize);
	          }, popup: function popup() {
	            w.verbose("Allowing hover events on popup to prevent closing"), o && w.has.popup() && o.on("mouseenter" + S, w.event.start).on("mouseleave" + S, w.event.end);
	          }, close: function close() {
	            (y.hideOnScroll === !0 || "auto" == y.hideOnScroll && "click" != y.on) && (s.one(w.get.scrollEvent() + v, w.event.hideGracefully), E.one(w.get.scrollEvent() + v, w.event.hideGracefully)), "hover" == y.on && R && (w.verbose("Binding popup close event to document"), s.on("touchstart" + v, function (t) {
	              w.verbose("Touched away from popup"), w.event.hideGracefully.call(H, t);
	            })), "click" == y.on && y.closable && (w.verbose("Binding popup close event to document"), s.on("click" + v, function (t) {
	              w.verbose("Clicked away from popup"), w.event.hideGracefully.call(H, t);
	            }));
	          } }, unbind: { close: function close() {
	            (y.hideOnScroll === !0 || "auto" == y.hideOnScroll && "click" != y.on) && (s.off("scroll" + v, w.hide), E.off("scroll" + v, w.hide)), "hover" == y.on && R && (s.off("touchstart" + v), R = !1), "click" == y.on && y.closable && (w.verbose("Removing close event from document"), s.off("click" + v));
	          } }, has: { popup: function popup() {
	            return o && o.length > 0;
	          } }, is: { offstage: function offstage(e, o) {
	            var n = [];return t.each(e, function (t, e) {
	              e < -y.jitter && (w.debug("Position exceeds allowable distance from edge", t, e, o), n.push(t));
	            }), n.length > 0;
	          }, active: function active() {
	            return D.hasClass(P.active);
	          }, animating: function animating() {
	            return o !== n && o.hasClass(P.animating);
	          }, fluid: function fluid() {
	            return o !== n && o.hasClass(P.fluid);
	          }, visible: function visible() {
	            return o !== n && o.hasClass(P.visible);
	          }, dropdown: function dropdown() {
	            return D.hasClass(P.dropdown);
	          }, hidden: function hidden() {
	            return !w.is.visible();
	          }, rtl: function rtl() {
	            return "rtl" == D.css("direction");
	          } }, reset: function reset() {
	          w.remove.visible(), y.preserve ? t.fn.transition !== n && o.transition("remove transition") : w.removePopup();
	        }, setting: function setting(e, o) {
	          if (t.isPlainObject(e)) t.extend(!0, y, e);else {
	            if (o === n) return y[e];y[e] = o;
	          }
	        }, internal: function internal(e, o) {
	          if (t.isPlainObject(e)) t.extend(!0, w, e);else {
	            if (o === n) return w[e];w[e] = o;
	          }
	        }, debug: function debug() {
	          y.debug && (y.performance ? w.performance.log(arguments) : (w.debug = Function.prototype.bind.call(console.info, console, y.name + ":"), w.debug.apply(console, arguments)));
	        }, verbose: function verbose() {
	          y.verbose && y.debug && (y.performance ? w.performance.log(arguments) : (w.verbose = Function.prototype.bind.call(console.info, console, y.name + ":"), w.verbose.apply(console, arguments)));
	        }, error: function error() {
	          w.error = Function.prototype.bind.call(console.error, console, y.name + ":"), w.error.apply(console, arguments);
	        }, performance: { log: function log(t) {
	            var e, o, n;y.performance && (e = new Date().getTime(), n = d || e, o = e - n, d = e, f.push({ Name: t[0], Arguments: [].slice.call(t, 1) || "", Element: H, "Execution Time": o })), clearTimeout(w.performance.timer), w.performance.timer = setTimeout(w.performance.display, 500);
	          }, display: function display() {
	            var e = y.name + ":",
	                o = 0;d = !1, clearTimeout(w.performance.timer), t.each(f, function (t, e) {
	              o += e["Execution Time"];
	            }), e += " " + o + "ms", u && (e += " '" + u + "'"), (console.group !== n || console.table !== n) && f.length > 0 && (console.groupCollapsed(e), console.table ? console.table(f) : t.each(f, function (t, e) {
	              console.log(e.Name + ": " + e["Execution Time"] + "ms");
	            }), console.groupEnd()), f = [];
	          } }, invoke: function invoke(e, o, i) {
	          var a,
	              s,
	              p,
	              l = W;return o = o || m, i = H || i, "string" == typeof e && l !== n && (e = e.split(/[\. ]/), a = e.length - 1, t.each(e, function (o, i) {
	            var r = o != a ? i + e[o + 1].charAt(0).toUpperCase() + e[o + 1].slice(1) : e;if (t.isPlainObject(l[r]) && o != a) l = l[r];else {
	              if (l[r] !== n) return s = l[r], !1;if (!t.isPlainObject(l[i]) || o == a) return l[i] !== n ? (s = l[i], !1) : !1;l = l[i];
	            }
	          })), t.isFunction(s) ? p = s.apply(i, o) : s !== n && (p = s), t.isArray(r) ? r.push(p) : r !== n ? r = [r, p] : p !== n && (r = p), s;
	        } }, g ? (W === n && w.initialize(), w.invoke(h)) : (W !== n && W.invoke("destroy"), w.initialize());
	    }), r !== n ? r : this;
	  }, t.fn.popup.settings = { name: "Popup", debug: !1, verbose: !1, performance: !0, namespace: "popup", onCreate: function onCreate() {}, onRemove: function onRemove() {}, onShow: function onShow() {}, onVisible: function onVisible() {}, onHide: function onHide() {}, onUnplaceable: function onUnplaceable() {}, onHidden: function onHidden() {}, on: "hover", addTouchEvents: !0, position: "top left", variation: "", movePopup: !0, target: !1, popup: !1, inline: !1, preserve: !1, hoverable: !1, content: !1, html: !1, title: !1, closable: !0, hideOnScroll: "auto", exclusive: !1, context: "body", prefer: "opposite", lastResort: !1, delay: { show: 50, hide: 70 }, setFluidWidth: !0, duration: 200, transition: "scale", distanceAway: 0, jitter: 2, offset: 0, maxSearchDepth: 15, error: { invalidPosition: "The position you specified is not a valid position", cannotPlace: "Popup does not fit within the boundaries of the viewport", method: "The method you called is not defined.", noTransition: "This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>", notFound: "The target or popup you specified does not exist on the page" }, metadata: { activator: "activator", content: "content", html: "html", offset: "offset", position: "position", title: "title", variation: "variation" }, className: { active: "active", animating: "animating", dropdown: "dropdown", fluid: "fluid", loading: "loading", popup: "ui popup", position: "top left center bottom right", visible: "visible" }, selector: { popup: ".ui.popup" }, templates: { escape: function escape(t) {
	        var e = /[&<>"'`]/g,
	            o = /[&<>"'`]/,
	            n = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
	            i = function i(t) {
	          return n[t];
	        };return o.test(t) ? t.replace(e, i) : t;
	      }, popup: function popup(e) {
	        var o = "",
	            i = t.fn.popup.settings.templates.escape;return typeof e !== n && (typeof e.title !== n && e.title && (e.title = i(e.title), o += '<div class="header">' + e.title + "</div>"), typeof e.content !== n && e.content && (e.content = i(e.content), o += '<div class="content">' + e.content + "</div>")), o;
	      } } };
	})(jQuery, window, document);

/***/ },

/***/ 138:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 140:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 142:
/***/ function(module, exports) {

	"use strict";

	!(function ($) {
	  return $ ? ($.Unslider = function (t, n) {
	    var e = this;return e._ = "unslider", e.defaults = { autoplay: !1, delay: 3e3, speed: 750, easing: "swing", keys: { prev: 37, next: 39 }, nav: !0, arrows: { prev: '<a class="' + e._ + '-arrow prev">Prev</a>', next: '<a class="' + e._ + '-arrow next">Next</a>' }, animation: "horizontal", selectors: { container: "ul:first", slides: "li" }, animateHeight: !1, activeClass: e._ + "-active", swipe: !0, swipeThreshold: .2 }, e.$context = t, e.options = {}, e.$parent = null, e.$container = null, e.$slides = null, e.$nav = null, e.$arrows = [], e.total = 0, e.current = 0, e.prefix = e._ + "-", e.eventSuffix = "." + e.prefix + ~ ~(2e3 * Math.random()), e.interval = null, e.init = function (t) {
	      return e.options = $.extend({}, e.defaults, t), e.$container = e.$context.find(e.options.selectors.container).addClass(e.prefix + "wrap"), e.$slides = e.$container.children(e.options.selectors.slides), e.setup(), $.each(["nav", "arrows", "keys", "infinite"], function (t, n) {
	        e.options[n] && e["init" + $._ucfirst(n)]();
	      }), jQuery.event.special.swipe && e.options.swipe && e.initSwipe(), e.options.autoplay && e.start(), e.calculateSlides(), e.$context.trigger(e._ + ".ready"), e.animate(e.options.index || e.current, "init");
	    }, e.setup = function () {
	      e.$context.addClass(e.prefix + e.options.animation).wrap('<div class="' + e._ + '" />'), e.$parent = e.$context.parent("." + e._);var t = e.$context.css("position");"static" === t && e.$context.css("position", "relative"), e.$context.css("overflow", "hidden");
	    }, e.calculateSlides = function () {
	      if ((e.total = e.$slides.length, "fade" !== e.options.animation)) {
	        var t = "width";"vertical" === e.options.animation && (t = "height"), e.$container.css(t, 100 * e.total + "%").addClass(e.prefix + "carousel"), e.$slides.css(t, 100 / e.total + "%");
	      }
	    }, e.start = function () {
	      return e.interval = setTimeout(function () {
	        e.next();
	      }, e.options.delay), e;
	    }, e.stop = function () {
	      return clearTimeout(e.interval), e;
	    }, e.initNav = function () {
	      var t = $('<nav class="' + e.prefix + 'nav"><ol /></nav>');e.$slides.each(function (n) {
	        var i = this.getAttribute("data-nav") || n + 1;$.isFunction(e.options.nav) && (i = e.options.nav.call(e.$slides.eq(n), n, i)), t.children("ol").append('<li data-slide="' + n + '">' + i + "</li>");
	      }), e.$nav = t.insertAfter(e.$context), e.$nav.find("li").on("click" + e.eventSuffix, function () {
	        var t = $(this).addClass(e.options.activeClass);t.siblings().removeClass(e.options.activeClass), e.animate(t.attr("data-slide"));
	      });
	    }, e.initArrows = function () {
	      e.options.arrows === !0 && (e.options.arrows = e.defaults.arrows), $.each(e.options.arrows, function (t, n) {
	        e.$arrows.push($(n).insertAfter(e.$context).on("click" + e.eventSuffix, e[t]));
	      });
	    }, e.initKeys = function () {
	      e.options.keys === !0 && (e.options.keys = e.defaults.keys), $(document).on("keyup" + e.eventSuffix, function (t) {
	        $.each(e.options.keys, function (n, i) {
	          t.which === i && $.isFunction(e[n]) && e[n].call(e);
	        });
	      });
	    }, e.initSwipe = function () {
	      var t = e.$slides.width();"fade" !== e.options.animation && e.$container.on({ movestart: function movestart(t) {
	          return t.distX > t.distY && t.distX < -t.distY || t.distX < t.distY && t.distX > -t.distY ? !!t.preventDefault() : void e.$container.css("position", "relative");
	        }, move: function move(n) {
	          e.$container.css("left", -(100 * e.current) + 100 * n.distX / t + "%");
	        }, moveend: function moveend(n) {
	          Math.abs(n.distX) / t > e.options.swipeThreshold ? e[n.distX < 0 ? "next" : "prev"]() : e.$container.animate({ left: -(100 * e.current) + "%" }, e.options.speed / 2);
	        } });
	    }, e.initInfinite = function () {
	      var t = ["first", "last"];$.each(t, function (n, i) {
	        e.$slides.push.apply(e.$slides, e.$slides.filter(':not(".' + e._ + '-clone")')[i]().clone().addClass(e._ + "-clone")["insert" + (0 === n ? "After" : "Before")](e.$slides[t[~ ~!n]]()));
	      });
	    }, e.destroyArrows = function () {
	      $.each(e.$arrows, function (t, n) {
	        n.remove();
	      });
	    }, e.destroySwipe = function () {
	      e.$container.off("movestart move moveend");
	    }, e.destroyKeys = function () {
	      $(document).off("keyup" + e.eventSuffix);
	    }, e.setIndex = function (t) {
	      return 0 > t && (t = e.total - 1), e.current = Math.min(Math.max(0, t), e.total - 1), e.options.nav && e.$nav.find('[data-slide="' + e.current + '"]')._active(e.options.activeClass), e.$slides.eq(e.current)._active(e.options.activeClass), e;
	    }, e.animate = function (t, n) {
	      if (("first" === t && (t = 0), "last" === t && (t = e.total), isNaN(t))) return e;e.options.autoplay && e.stop().start(), e.setIndex(t), e.$context.trigger(e._ + ".change", [t, e.$slides.eq(t)]);var i = "animate" + $._ucfirst(e.options.animation);return $.isFunction(e[i]) && e[i](e.current, n), e;
	    }, e.next = function () {
	      var t = e.current + 1;return t >= e.total && (t = 0), e.animate(t, "next");
	    }, e.prev = function () {
	      return e.animate(e.current - 1, "prev");
	    }, e.animateHorizontal = function (t) {
	      var n = "left";return "rtl" === e.$context.attr("dir") && (n = "right"), e.options.infinite && e.$container.css("margin-" + n, "-100%"), e.slide(n, t);
	    }, e.animateVertical = function (t) {
	      return e.options.animateHeight = !0, e.options.infinite && e.$container.css("margin-top", -e.$slides.outerHeight()), e.slide("top", t);
	    }, e.slide = function (t, n) {
	      if ((e.options.animateHeight && e._move(e.$context, { height: e.$slides.eq(n).outerHeight() }, !1), e.options.infinite)) {
	        var i;n === e.total - 1 && (i = e.total - 3, n = -1), n === e.total - 2 && (i = 0, n = e.total - 2), "number" == typeof i && (e.setIndex(i), e.$context.on(e._ + ".moved", function () {
	          e.current === i && e.$container.css(t, -(100 * i) + "%").off(e._ + ".moved");
	        }));
	      }var o = {};return o[t] = -(100 * n) + "%", e._move(e.$container, o);
	    }, e.animateFade = function (t) {
	      var n = e.$slides.eq(t).addClass(e.options.activeClass);e._move(n.siblings().removeClass(e.options.activeClass), { opacity: 0 }), e._move(n, { opacity: 1 }, !1);
	    }, e._move = function (t, n, i, o) {
	      return i !== !1 && (i = function () {
	        e.$context.trigger(e._ + ".moved");
	      }), t._move(n, o || e.options.speed, e.options.easing, i);
	    }, e.init(n);
	  }, $.fn._active = function (t) {
	    return this.addClass(t).siblings().removeClass(t);
	  }, $._ucfirst = function (t) {
	    return (t + "").toLowerCase().replace(/^./, function (t) {
	      return t.toUpperCase();
	    });
	  }, $.fn._move = function () {
	    return this.stop(!0, !0), $.fn[$.fn.velocity ? "velocity" : "animate"].apply(this, arguments);
	  }, void ($.fn.unslider = function (t) {
	    return this.each(function () {
	      var n = $(this);if ("string" == typeof t && n.data("unslider")) {
	        t = t.split(":");var e = n.data("unslider")[t[0]];if ($.isFunction(e)) return e.apply(n, t[1] ? t[1].split(",") : null);
	      }return n.data("unslider", new $.Unslider(n, t));
	    });
	  })) : console.warn("Unslider needs jQuery");
	})(window.jQuery);

/***/ },

/***/ 143:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

/******/ });