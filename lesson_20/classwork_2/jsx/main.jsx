/*Создайте React компонент, который имеет два свойства(props) типа number и свойство mode типа boolean.
В зависимости от значения свойства mode(true/false) компонент должен выводить на
экран либо сумму свойств типа number, либо результат их конкатенации.*/
var React = require('react');
var ReactDOM = require('react-dom');

var Component = React.createClass({
    propTypes: {
      val1: React.PropTypes.number.isRequired,
      val2: React.PropTypes.number.isRequired,
      mode: React.PropTypes.bool.isRequired,
    },

    render() {
        return <p>{(this.props.mode ? 0 : '') + this.props.val1 + this.props.val2}</p>
}
});
var container = document.getElementById("root")
ReactDOM.render(
  <div>
    <Component val1={1} val2={2} mode={true} />
    <Component val1={1} val2={2} mode={false} />
  </div>
, container);
