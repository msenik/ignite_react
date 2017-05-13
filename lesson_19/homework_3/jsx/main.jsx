/*Создайте React компонент, который отображает на странице произвольный текст.
Компонент должен иметь такие свойства: color и fontSize.
Установите на основе этих свойств стили для компонента.*/

var React = require('react');
var ReactDOM = require('react-dom');
var Component = React.createClass({
  render: function () {
    var style = {
      color: this.props.color || 'green',
      fontSize: this.props.fontSize || '2em'
    };
    return(
      <p style={style}>
        Создайте React компонент, который отображает на странице произвольный текст.
        Компонент должен иметь такие свойства: color и fontSize. Установите на основе этих свойств стили для компонента.
      </p>
    )
  }
});

var container = document.getElementById("root")
ReactDOM.render(<Component color="blue" fontSize="1.2em"/>, container);
