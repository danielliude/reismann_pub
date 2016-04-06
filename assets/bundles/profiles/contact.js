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

	__webpack_require__(39);

	$(function () {
	    init_form();

	    function init_form() {
	        $('.ui.form').form({
	            fields: {
	                phone: {
	                    identifier: 'phone',
	                    rules: [
	                        // {
	                        //   type   : 'empty',
	                        //   prompt : 'Please enter your username'
	                        // },
	                        // {
	                        //   type   : 'minLength[3]',
	                        //   prompt : 'Username should have at least 3 letters'
	                        // },
	                    ]
	                },
	                email: {
	                    identifier: 'email',
	                    rules: [
	                    // {
	                    //   type   : 'empty',
	                    //   prompt : 'Please enter your email'
	                    // },
	                    {
	                        type: 'email',
	                        prompt: 'Please enter a valid e-mail'
	                    }]
	                },
	                weibo: {
	                    identifier: 'weibo',
	                    rules: [
	                        // {
	                        //   type   : 'empty',
	                        //   prompt : 'Please enter your first_name'
	                        // },
	                    ]
	                },
	                wechat: {
	                    identifier: 'wechat',
	                    rules: [
	                        // {
	                        //   type   : 'empty',
	                        //   prompt : 'Please enter your last_name'
	                        // },
	                    ]
	                },
	                qq: {
	                    identifier: 'qq',
	                    rules: [
	                        // {
	                        //   type   : 'empty',
	                        //   prompt : 'Please enter your password'
	                        // },
	                        // {
	                        //   type   : 'minLength[8]',
	                        //   prompt : 'Password should be more then 8 letters'
	                        // },
	                    ]
	                },
	                email_notifications: {
	                    identifier: 'email_notifications',
	                    rules: [
	                        // {
	                        //   type   : 'checked',
	                        //   prompt : 'You must agree to the terms to register'
	                        // },
	                    ]
	                }
	            }
	        });
	    }
	});

/***/ },

/***/ 39:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

/******/ });