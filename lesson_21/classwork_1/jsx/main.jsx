/*Задача 1
Создайте React компонент, отображающий кнопку и элемент div.
Добавьте на страницу тег style с двумя классами – black и red,
задающими соответствующий background-color элементу.
Реализуйте переключение этих классов для элемента div при клике по кнопке.*/

var React = require('react');
var ReactDOM = require('react-dom');

var Component = React.createClass({
    getInitialState(){
      return {
        class: 'black'
      }
    },
    changeClassHandler(e){
      var newClass = this.state.class == 'black' ? 'red' : 'black';
      this.setState({class: newClass});
    },
    render() {
        return (
          <div>
            <div className={this.state.class}>Lorem imsum dolor sit amet.</div>
            <button onClick={this.changeClassHandler}>Change color</button>
          </div>
        );
    }
});


var container = document.getElementById("root")
ReactDOM.render(<Component />, container);
