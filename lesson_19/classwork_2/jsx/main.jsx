/*Реализуйте задание задачи 1 с помощью создания React компонента*/
var React = require('react');
var ReactDOM = require('react-dom');
var Component = React.createClass({
    render: function () {
        return <h1>Hello world</h1>
}
});
var container = document.getElementById("root")
ReactDOM.render(<Component/>, container);
