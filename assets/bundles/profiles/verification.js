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

	__webpack_require__(130);

	$(function () {
	    // init_form()

	    function init_form() {
	        $('.ui.form').form({
	            fields: {
	                first_name: {
	                    identifier: 'first_name',
	                    rules: [{
	                        type: 'empty',
	                        prompt: 'Please enter your first_name'
	                    }]
	                },
	                last_name: {
	                    identifier: 'last_name',
	                    rules: [{
	                        type: 'empty',
	                        prompt: 'Please enter your last_name'
	                    }]
	                },
	                gender: {
	                    identifier: 'gender',
	                    rules: [{
	                        type: 'empty',
	                        prompt: 'Please enter your gender'
	                    }]
	                },
	                profession: {
	                    identifier: 'profession',
	                    rules: [{
	                        type: 'empty',
	                        prompt: 'Please enter your profession'
	                    }]
	                },
	                birthday: {
	                    identifier: 'birthday',
	                    rules: [{
	                        type: 'empty',
	                        prompt: 'Please enter your birthday'
	                    }]
	                },
	                location: {
	                    identifier: 'location',
	                    rules: [{
	                        type: 'empty',
	                        prompt: 'Please enter your location'
	                    }]
	                },
	                bio: {
	                    identifier: 'bio',
	                    rules: [{
	                        type: 'empty',
	                        prompt: 'Please enter your bio'
	                    }]
	                }
	            }
	        });
	    }
	});

/***/ },

/***/ 130:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

/******/ });