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

	__webpack_require__(35);

	__webpack_require__(37);

	$(function () {
	    init_button();
	    init_form();

	    function init_button() {
	        $('.bookings_write_form .ui.dropdown').dropdown();
	        $('#id_start_time, #id_end_time').daterangepicker({
	            format: 'YYYY-MM-DD',
	            singleDatePicker: true
	        }, function (start, end, label) {
	            console.log(start.toISOString(), end.toISOString(), label);
	        });
	    }

	    function init_form() {
	        $('.ui.form.bookings_write_form').form({
	            fields: {
	                service: {
	                    identifier: 'service',
	                    rules: [{
	                        type: 'empty',
	                        prompt: 'Please enter your service'
	                    }]
	                },
	                start_time: {
	                    identifier: 'start_time',
	                    rules: [{
	                        type: 'empty',
	                        prompt: 'Please enter your start_time'
	                    }]
	                },
	                end_time: {
	                    identifier: 'end_time',
	                    rules: [{
	                        type: 'empty',
	                        prompt: 'Please enter your end_time'
	                    }]
	                },
	                number_of_customers: {
	                    identifier: 'number_of_customers',
	                    rules: [{
	                        type: 'empty',
	                        prompt: 'Please enter your number_of_customers'
	                    }]
	                },
	                price: {
	                    identifier: 'price',
	                    rules: [{
	                        type: 'empty',
	                        prompt: 'Please enter your price'
	                    }]
	                },
	                meeting_point: {
	                    identifier: 'meeting_point',
	                    rules: [{
	                        type: 'empty',
	                        prompt: 'Please enter your meeting_point'
	                    }]
	                },
	                booking_content: {
	                    identifier: 'booking_content',
	                    rules: [{
	                        type: 'empty',
	                        prompt: 'Please enter your booking_content'
	                    }]
	                },
	                booking_remark: {
	                    identifier: 'booking_remark',
	                    rules: [{
	                        type: 'empty',
	                        prompt: 'Please enter your booking_remark'
	                    }]
	                }
	            }
	        });
	    }
	});

/***/ },

/***/ 35:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 37:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

/******/ });