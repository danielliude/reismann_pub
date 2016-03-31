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

	__webpack_require__(51);

	$(function () {
		init_rating();
		send_message();

		function init_rating() {
			$('.ui.comments .ui.rating').rating('disable');
			$('.ui.form .ui.rating').rating();
		}
		function send_message() {
			$('.ui.form .submit').click(function () {
				var stars = $('.ui.form .ui.rating .icon.active').size();
				var comment = $("#id_comment").val();
				if (stars == "0") {
					return alert('please star rating');
				}
				if (comment == "") {
					return alert('please comment');
				}

				var temp = {
					'stars': stars,
					'comment': comment
				};
				$.post('', temp, function (result) {
					location.href = location.href;
				});
			});
		}
	});

/***/ },

/***/ 51:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

/******/ });