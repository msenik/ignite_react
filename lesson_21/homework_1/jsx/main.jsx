/*Задача 1
Создайте React компонент-счетчик.
Он должен отображать на странице две кнопки (+ и -) и элемент h1 для вывода текущего счета на экран.
*/
var React = require('react');
var ReactDOM = require('react-dom');

var Counter = React.createClass({
  getInitialState(){
    return {
      count: 0
    };
  },
  incrementHandler(){
    this.setState({count: this.state.count + 1});
  },
  decrementHandler(){
    if(this.state.count<=0) return;
    this.setState({count: this.state.count - 1});
  },
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.decrementHandler}>-</button>
        <button onClick={this.incrementHandler}>+</button>
      </div>
    );
  }
});

var container = document.getElementById("root")
ReactDOM.render(<Counter/>, container);
