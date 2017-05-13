/*Создайте React компонент Parent,
отображающий на странице произвольный текст в теге h1.
Создайте дочерний компонент Child, отображающий произвольный текст в теге h3.*/

var React = require('react');
var ReactDOM = require('react-dom');

var Parent = React.createClass({
    render() {
        return <h1>Hello from h1 {this.props.children}</h1>
    }
});

var Child = React.createClass({
    render() {
        return <h3>Hello from h3</h3>
    }
});

var container = document.getElementById("root")
ReactDOM.render(<Parent><Child /></Parent>, container);
