/*Задача 3
Создайте React компонент(используя ES6 синтаксис),
который выведет на экран в виде таблицы массив users из предыдущей задачи.
При клике по каждой ячейке таблицы, содержащей имя плоьзователя,
должен запускаться метод sayHi соотстветствующего элемента массива users.
*/
var React = require('react');
var ReactDOM = require('react-dom');

import User from "./User";

const user1 = new User({id:1});
const user2 = new User({id:2, firstName:'Donald', lastName: 'Trump', signUpDate: '09/05/2017'});
const user3 = new User({id:3, firstName:'Barack', lastName: 'Obama', signUpDate: '08/05/2017'});
const users = [];
users.push(user1, user2, user3);

class UsersTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: users,
    };
  }
  render() {
    return (
      <div className="container">
        <h1>Users table</h1>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>firstName</th>
              <th>lastName</th>
              <th>age</th>
              <th>gender</th>
              <th>signUpDate</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.users.map(user => (
                <tr key={user.id} onClick={user.sayHi.bind(user)}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.age}</td>
                  <td>{user.gender}</td>
                  <td>{user.signUpDate}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

var container = document.getElementById("root")
ReactDOM.render(<UsersTable />, container);
