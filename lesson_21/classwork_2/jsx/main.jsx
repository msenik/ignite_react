/*Создайте страницу-таймер, которая будет отображать количество секунд, прошедшее с момента ее открытия.*/
var React = require('react');
var ReactDOM = require('react-dom');

var Component = React.createClass({
  getInitialState(){
    return {
      seconds: 0
    }
  },
  componentDidMount(){
    var that = this;
    setInterval(function(){
      that.setState({seconds: that.state.seconds + 1});
    }, 1000);
  },
  render() {
    return <div>{this.state.seconds}</div>
}
});

var container = document.getElementById("root")
ReactDOM.render(<Component />, container);
