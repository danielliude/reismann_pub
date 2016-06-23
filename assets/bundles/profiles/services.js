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

	"use strict";

	__webpack_require__(145);

	$(function () {
	    init_button();
	    // init_form()

	    function init_button() {
	        $(".service_show [multiple='multiple']").each(function () {
	            $(this).append("<option value=''>" + $(this).attr("placeholder") + "</option>");
	        });
	        $('.service_show .ui.dropdown').dropdown();

	        $(".edit_price #id_price").val('');
	    }

	    function init_form() {
	        $('.ui.form.service_form').form({
	            fields: {
	                title: {
	                    identifier: 'title',
	                    rules: [{
	                        type: 'empty',
	                        prompt: 'Please enter your title'
	                    }, {
	                        type: 'maxLength[10]',
	                        prompt: 'Username should have at most 10 letters'
	                    }]
	                },
	                content: {
	                    identifier: 'content',
	                    rules: [{
	                        type: 'empty',
	                        prompt: 'Please enter your content'
	                    }]
	                },
	                price: {
	                    identifier: 'price',
	                    rules: [{
	                        type: 'empty',
	                        prompt: 'Please enter your price'
	                    }, {
	                        type: 'integer[1..1000]',
	                        prompt: 'Please enter an integer value, 1 to 1000'
	                    }]
	                },
	                type: {
	                    identifier: 'type',
	                    rules: [{
	                        type: 'empty',
	                        prompt: 'Please enter your type'
	                    }]
	                },
	                cities: {
	                    identifier: 'cities',
	                    rules: [{
	                        type: 'empty',
	                        prompt: 'Please enter your cities'
	                    }, {
	                        type: 'maxCount[5]',
	                        prompt: 'Please select at most five cities'
	                    }]
	                },
	                categories: {
	                    identifier: 'categories',
	                    rules: [{
	                        type: 'empty',
	                        prompt: 'Please enter your categories'
	                    }]
	                },
	                languages: {
	                    identifier: 'languages',
	                    rules: [{
	                        type: 'empty',
	                        prompt: 'Please enter your languages'
	                    }]
	                },
	                tags: {
	                    identifier: 'tags',
	                    rules: [{
	                        type: 'empty',
	                        prompt: 'Please enter your tags'
	                    }]
	                }
	            }
	        });
	    }
	});

/***/ },

/***/ 145:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

/******/ });