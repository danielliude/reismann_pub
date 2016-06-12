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

	__webpack_require__(27);

	$(document).ready(function () {
	  sc();
	  $(window).scroll(sc);
	  init_component();
	  init_search();
	  image_scroll();
	  init_click();

	  function init_component() {
	    $('.information .ui.dropdown').dropdown({
	      forceSelection: false
	    });

	    $('.banner .information').transition('scale', 500);

	    $('.ui.search').search({
	      source: content
	    });
	  }

	  function init_search() {
	    $('.search_but').click(function () {
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
	  }

	  function image_scroll() {
	    var i = 0;
	    setInterval(function () {
	      var length = $(".banner_img").css('background-image').length;
	      $('.banner_img_copy').fadeOut(100, function () {
	        $(".banner_img_copy").css('background-image', $(".banner_img_copy").css('background-image').replace('_' + i + '.jpg', '_' + (i + 1) % 4 + '.jpg'));
	        $('.banner_img_copy').fadeIn(2000, function () {
	          $(".banner_img").css('background-image', $(".banner_img_copy").css('background-image').replace('_' + i + '.jpg', '_' + (i + 1) % 4 + '.jpg'));
	          i = (i + 1) % 4;
	        });
	      });
	    }, 8000);
	  }

	  function sc() {
	    var top = $("body").scrollTop() || $("html").scrollTop();

	    if (parseInt(top) > 0) {
	      $('.fixed_position').show();
	    } else {
	      $('.fixed_position').hide();
	    }
	  }

	  function init_click() {
	    $('.fixed_position').click(function () {
	      $('html,body').animate({ scrollTop: '0px' }, 1000);
	    });
	  }
	});

/***/ },

/***/ 27:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

/******/ });