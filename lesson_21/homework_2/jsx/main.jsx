/*Задача 2
Создайте страницу-калькулятор. На странице должно быть 4 кнопки(по кнопке на математическую операцию: сложение,
вычитание, умножение, деление), 2 поля ввода и элемент для отображения результата.
Сделайте так, чтобы в поля ввода разрешалось вводить только цифры.
*/
var React = require('react');
var ReactDOM = require('react-dom');


var Calculator = React.createClass({
  getInitialState(){
    return {
      val1: 0,
      val2: 0,
      result: 0
    }
  },
  inputChangeHandler(e){
    var stateObj = {};
    stateObj[e.target.id] = +e.target.value;
    this.setState(stateObj);
  },
  operationHandler(e){
    var calculateFonc = new Function('a', 'b', 'return a'+e.target.textContent+'b');
    var res = calculateFonc(this.state.val1, this.state.val2);
    this.setState({result: res});
  },
  keyPressHandler(e){
    if([48,49,50,51,52,53,54,55,56,57].indexOf(e.charCode) == -1){
      e.preventDefault();
    }
  },
  render() {
    return (
      <div>
        <input placeholder="Enter value 1" id="val1" value={this.state.val1} onChange={this.inputChangeHandler} onKeyPress={this.keyPressHandler}></input>
        <button onClick={this.operationHandler}>+</button>
        <button onClick={this.operationHandler}>-</button>
        <button onClick={this.operationHandler}>*</button>
        <button onClick={this.operationHandler}>/</button>
        <input placeholder="Enter value 2" id="val2" value={this.state.val2} onChange={this.inputChangeHandler} onKeyPress={this.keyPressHandler}></input>
        <h3>Result: {this.state.result}</h3>
      </div>
    )
  }
});

var container = document.getElementById("root")
ReactDOM.render(<Calculator/>, container);
