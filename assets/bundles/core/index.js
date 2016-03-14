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

	$(document).ready(function () {
	  $('.masthead .ui.dropdown').dropdown({
	    on: 'hover'
	  });
	  // ;
	  $('.banner .information').transition('fly up', 2000);
	  // $('.city_map').mouseover(function() {
	  //  $(this).transition('tada');
	  // })
	  $('.information .ui.dropdown').dropdown({
	    forceSelection: false
	  });
	  $('.search_but').click(function () {
	    // var name = $(".information [tabindex='0']").val() || $(".information [name='name']").val()
	    var name = $(".information .prompt").val();
	    if (name == "") {
	      return;
	    }
	    $.ajax({
	      type: 'get',
	      url: "/search_url",
	      data: { name: name },
	      success: function success(data) {
	        window.location.href = window.location.href + data.substring(1);
	      }
	    });
	  });
	  $(".information .prompt").keydown(function (e) {
	    var curKey = e.which;
	    if (curKey == 13) {
	      $(".search_but").click();
	    }
	  });
	  $('.ui.search').search({
	    source: content
	  });
	});

/***/ },

/***/ 9:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

/******/ });