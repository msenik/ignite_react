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

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*Задача 1
	Создайте класс Person со слеюующими свойствами:
	Конструктор принимает 4 аргумента: firstName(значение по умолчанию – “John”),
	lastName(значение по умолчанию – “Doe”), age(по умолчанию, если свойство не указано, то 0) и gender(по умолчанию – “Male”).
	Значения записываются в this.firstName, this.lastName, this.age и this.gender соответственно.
	Метод fullName, который не принимает аргументов и возвращает полное имя: e.g. “Jon Doe”.
	Метод sayHi, который выводит на экран текст “Hello, my name is “ + fullName.
	*/

	var Person = function () {
	  function Person() {
	    var firstName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "John";
	    var lastName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Doe";
	    var age = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	    var gender = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "Male";

	    _classCallCheck(this, Person);

	    this.firstName = firstName;
	    this.lastName = lastName;
	    this.age = age;
	    this.gender = gender;
	  }

	  _createClass(Person, [{
	    key: "fullName",
	    value: function fullName() {
	      return this.firstName + " " + this.lastName;
	    }
	  }, {
	    key: "sayHi",
	    value: function sayHi() {
	      alert("Hello, my name is " + this.fullName());
	    }
	  }]);

	  return Person;
	}();

	var person1 = new Person();
	person1.sayHi();

	var person2 = new Person('Jane', 'Smith', 25, 'Female');
	person2.sayHi();

/***/ }
/******/ ]);