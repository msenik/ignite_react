/*Задача 1 Создайте 2 React компонента – родительские компонент,
содержащий поле ввода и дочерний компонент, содержащий список элементов массива user.
Реализуйте следующее: При вводе числа в поле ввода должно отображаться соответсвующее количество элементов списка.
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
  render() {
    var lis = this.props.items.map(function(el){
      return <li key={el.name+'_'+el.gender}>{el.name + ' - ' + el.gender}</li>;
    });
    return (
      <ul>
        {lis}
      </ul>
    )
  }
});

var container = document.getElementById("root")
ReactDOM.render(<Parrent/>, container);
