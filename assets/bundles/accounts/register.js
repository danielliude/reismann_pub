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

	__webpack_require__(9);

	$(function () {
	    init_form();
	    init_model();

	    function init_form() {
	        $('.ui.form').form({
	            fields: {
	                username: {
	                    identifier: 'username',
	                    rules: [{
	                        type: 'empty',
	                        prompt: 'Please enter your username'
	                    },
	                    // {
	                    //   type   : 'regExp[/[\.\w]+$/]', 
	                    //   prompt : 'Username must contain only letters, numbers, dots and underscores'
	                    // },
	                    {
	                        type: 'minLength[3]',
	                        prompt: 'Username should have at least 3 letters'
	                    }]
	                },
	                email: {
	                    identifier: 'email',
	                    rules: [{
	                        type: 'empty',
	                        prompt: 'Please enter your email'
	                    }, {
	                        type: 'email',
	                        prompt: 'Please enter a valid e-mail'
	                    }]
	                },
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
	                password1: {
	                    identifier: 'password1',
	                    rules: [{
	                        type: 'empty',
	                        prompt: 'Please enter your password'
	                    }, {
	                        type: 'minLength[8]',
	                        prompt: 'Password should be more then 8 letters'
	                    }]
	                },
	                password2: {
	                    identifier: 'password2',
	                    rules: [{
	                        type: 'empty',
	                        prompt: 'Please repeat enter your password'
	                    }, {
	                        type: 'match[password1]',
	                        prompt: 'The two password fields didn\'t match.'
	                    }]
	                },
	                tos: {
	                    identifier: 'tos',
	                    rules: [{
	                        type: 'checked',
	                        prompt: 'You must agree to the terms to register'
	                    }]
	                }
	            }
	        });
	    }
	    function init_model() {
	        $("#ui_model").click(function () {
	            $('.ui.modal').modal('show');
	        });
	    }
	});

/***/ },

/***/ 9:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

/******/ });