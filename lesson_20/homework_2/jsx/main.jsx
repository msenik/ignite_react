/*Задача 2 Модифицируйте код предыдущей задачи. Реализуйте следующее:
При каждом обновлении свойств компонента, содержащего список users, его текст окрашивается в случайный цвет.
Используйте при решении задачи методы жизненного цикла React компонентов.
*/
var React = require('react');
var ReactDOM = require('react-dom');

var users = [
  {name:"Anne Montgomery",gender:"Female"},
  {name:"Annie George",gender:"Female"},
  {name:"Gary Butler",gender:"Male"},
  {name:"Lisa Mendoza",gender:"Female"},
  {name:"Marilyn Henry",gender:"Female"},
  {name:"Johnny Tucker",gender:"Male"},
  {name:"Chris Jacobs",gender:"Male"},
  {name:"Benjamin James",gender:"Male"}
];

function getRandomColor() {
    var h = Math.floor(Math.random() * (255 - 1) + 1);
    var s = Math.floor(Math.random() * (100 - 1) + 1) + '%';
    var l = '50%';
    var randomColor = 'hsl(' + h + ',' + s + ',' + l + ')';
    return randomColor;
}

var Parrent = React.createClass({
  getInitialState(){
    return {
      users: users,
      usersCount: users.length
    }
  },
  changeUsersCount(e){
    var currentVal = e.target.value;
    this.setState({
      usersCount: currentVal,
      users: users.slice(0, currentVal)
    });
  },
  render() {
    return (
      <div className="container">
        <input type="number" min="0" className="form-control" value={this.state.usersCount} onChange={this.changeUsersCount} />
        <Child items={this.state.users} />
      </div>
    )
  }
});

var Child = React.createClass({
  getInitialState(){
    return {
      color: 'black'
    }
  },
  componentWillReceiveProps(){
    this.setState({color:getRandomColor()});
  },
  render() {
    var lis = this.props.items.map(function(el){
      return <li key={el.name+'_'+el.gender}>{el.name + ' - ' + el.gender}</li>;
    });
    return (
      <ul style={{color: this.state.color}}>
        {lis}
      </ul>
    )
  }
});

var container = document.getElementById("root")
ReactDOM.render(<Parrent/>, container);
