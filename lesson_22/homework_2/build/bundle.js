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

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*Задача 2
	Создайте класс User, который наследует от класса Person (из предыдущей задачи),
	со свойствами signUpDate(дата регистрации, по умолчанию 0) и id.
	Создайте несколько экземпляров класса и запишите их в массив users.
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

	var User = function (_Person) {
	  _inherits(User, _Person);

	  function User(_ref) {
	    var _ref$firstName = _ref.firstName,
	        firstName = _ref$firstName === undefined ? "John" : _ref$firstName,
	        _ref$lastName = _ref.lastName,
	        lastName = _ref$lastName === undefined ? "Doe" : _ref$lastName,
	        _ref$age = _ref.age,
	        age = _ref$age === undefined ? 0 : _ref$age,
	        _ref$gender = _ref.gender,
	        gender = _ref$gender === undefined ? "Male" : _ref$gender,
	        _ref$signUpDate = _ref.signUpDate,
	        signUpDate = _ref$signUpDate === undefined ? 0 : _ref$signUpDate,
	        id = _ref.id;

	    _classCallCheck(this, User);

	    var _this = _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).call(this, firstName, lastName, age, gender));

	    _this.signUpDate = signUpDate;
	    _this.id = id;
	    return _this;
	  }

	  return User;
	}(Person);

	var user1 = new User({ id: 1 });
	var user2 = new User({ id: 2, firstName: 'Donald', lastName: 'Trump' });
	var users = [];
	users.push(user1, user2);

	document.getElementById('root').textContent = JSON.stringify(users);

/***/ }
/******/ ]);