/*Используя JSX, отобразите на странице текст Hello World в теге h1 */
var React = require('react');
var ReactDOM = require('react-dom');

var container = document.getElementById("root")
ReactDOM.render(<h1>Hello world</h1>, container);
