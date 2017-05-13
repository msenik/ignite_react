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
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	/*
	Задача 2
	Используя Promise, асинхронно загрузите на страницу файл image.jpg,
	находящийся в папке Classwork рядом с файлом с задачами.
	*/

	function httpGet(url) {
	  return new Promise(function (resolve, reject) {
	    var xhr = new XMLHttpRequest();
	    xhr.responseType = 'arraybuffer';
	    xhr.open('GET', url, true);
	    xhr.onload = function () {
	      if (this.status == 200) {
	        resolve(this.response);
	      } else {
	        var error = new Error(this.statusText);
	        error.code = this.status;
	        reject(error);
	      }
	    };
	    xhr.onerror = function () {
	      reject(new Error("Network Error"));
	    };
	    xhr.send();
	  });
	}

	window.onload = function () {
	  httpGet("image.jpg").then(function (response) {
	    var blb = new Blob([response], { type: 'image/jpg' });
	    var url = (window.URL || window.webkitURL).createObjectURL(blb);
	    var i = new Image();
	    i.src = url;
	    document.getElementById("root").append(i);
	    return response;
	  }, function (error) {
	    return alert('Rejected: ' + error);
	  });
	};

/***/ }
/******/ ]);