/*Задача 3
Модифицируйте код предыдущей задачи. Добавьте на странцу три кнопки: сбросить счет (reset),
start и stop, которые предоставя пользователю останавлтвать/возобновлять работу таймера и сбрасывать отсчитанное время.*/
var React = require('react');
var ReactDOM = require('react-dom');

var Component = React.createClass({
  getInitialState(){
    return {
      seconds: 0,
      interval: null
    }
  },
  componentDidMount(){
    var that = this;
    if(this.state.interval) return;
    this.state.interval = setInterval(function(){
      that.setState({seconds: that.state.seconds + 1});
    }, 1000);
  },
  resetHandler(){
    clearInterval(this.state.interval);
    this.state.interval = null;
    this.setState({seconds: 0});
  },
  startHandler(){
    this.componentDidMount();
  },
  stoptHandler(){
    clearInterval(this.state.interval);
    this.state.interval = null;
  },
  render() {
    return (
      <div>
        <div>{this.state.seconds}</div>
        <button onClick={this.resetHandler}>Reset</button>
        <button onClick={this.startHandler}>Start</button>
        <button onClick={this.stoptHandler}>Stop</button>
      </div>
    )
}
});

var container = document.getElementById("root")
ReactDOM.render(<Component />, container);
