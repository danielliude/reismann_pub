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

<<<<<<< HEAD
	__webpack_require__(207);
=======
	__webpack_require__(111);
>>>>>>> 3dbd5c2e71d5a878553bb7f71b46b34e74f421a7

	$(function () {
	    init_button();
	    init_form();

	    function init_button() {
	        $('.message_write_form .ui.dropdown').dropdown();
	    }

	    function init_form() {
	        $('.ui.form.message_write_form').form({
	            fields: {
	                recipient: {
	                    identifier: 'recipient',
	                    rules: [{
	                        type: 'empty',
	                        prompt: 'Please enter your recipient'
	                    }]
	                },
	                subject: {
	                    identifier: 'subject',
	                    rules: [{
	                        type: 'empty',
	                        prompt: 'Please enter your subject'
	                    }]
	                },
	                body: {
	                    identifier: 'body',
	                    rules: [{
	                        type: 'empty',
	                        prompt: 'Please enter your message'
	                    }]
	                }
	            }
	        });
	    }
	});

/***/ },

<<<<<<< HEAD
/***/ 207:
=======
/***/ 111:
>>>>>>> 3dbd5c2e71d5a878553bb7f71b46b34e74f421a7
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

/******/ });