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

	__webpack_require__(122);

	$(function () {
		init_notification();

		function init_notification() {
			$('.noti_segment .ui.dropdown').dropdown({
				on: 'hover'
			});

			$('.ui.checkbox').checkbox();

			$('.checkbox_sort').parent('.checkbox').click(function (event) {
				update_checkbox();
			});

			$('.mark_read').click(function (event) {
				var temp = {
					type: 'mark_read',
					checkbox: get_select_checkbox('checkbox_select')
				};

				$.get(window.location.pathname.replace('dashboard', 'mark_read_or_delete'), temp, function (result) {
					update_checkbox();
				});
			});

			$('.mark_delete').click(function (event) {
				var temp = {
					type: 'mark_delete',
					checkbox: get_select_checkbox('checkbox_select')
				};

				$.get(window.location.pathname.replace('dashboard', 'mark_read_or_delete'), temp, function (result) {
					update_checkbox();
				});
			});

			$('.noti_segment').on('click', '.click_tr_url', function (e) {
				e.preventDefault();
				var ev = e || window.event;
				var elm = ev.target || ev.srcElement;
				if (elm.tagName != 'LABEL') {
					if ($(this).data('url')) {
						location.href = $(this).data('url');
					}
				}
			});
		}

		function update_checkbox() {
			var temp = {
				checkbox: get_select_checkbox('checkbox_sort')
			};

			$.post(window.location.pathname, temp, function (result) {
				$('.noti_segment table, .noti_segment .pagination').remove();
				$('.notifications_list').after(result);
			});
		}

		function get_select_checkbox(name) {
			var result = [];
			$("[name='" + name + "']:checked").each(function () {
				result.push($(this).val());
			});
			return result;
		}
	});

/***/ },

/***/ 122:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

/******/ });