/*Создайте React компонент, который принимает два числа в качестве свойств (props).
Компонент должен выводить на экран сумму своих свойств.*/
var React = require('react');
var ReactDOM = require('react-dom');
var Component = React.createClass({
    render: function () {
      var sum = this.props.val1 + this.props.val2;
      return <p>{`${this.props.val1} + ${this.props.val2} = ${sum}`}</p>;
}
});
var container = document.getElementById("root")
ReactDOM.render(<Component val1={2} val2={3}/>, container);
