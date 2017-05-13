import React from 'react';
import UserTable from './userTable.jsx';
import UserForm from './userForm.jsx';

const users = [
  {name:"Anne Montgomery",gender:"Female"},
  {name:"Annie George",gender:"Female"},
  {name:"Gary Butler",gender:"Male"},
  {name:"Lisa Mendoza",gender:"Female"},
  {name:"Marilyn Henry",gender:"Female"},
  {name:"Johnny Tucker",gender:"Male"},
  {name:"Chris Jacobs",gender:"Male"},
  {name:"Benjamin James",gender:"Male"}
];
//<UserForm handleSubmin={addNewUser} />
export default class UserLisApp extends React.Component {
  constructor(props) {
    super();
    this.state = {
      users: users
    };
    this.addNewUser = this.addNewUser.bind(this);
  }
  addNewUser(newUser){
    this.state.users.push(newUser);
    this.setState({users: this.state.users});
  }
  render() {
    return (
      <div className="container">
        <h1 className="text-center">User list</h1>
        <UserForm handleSubmit={this.addNewUser}/>
        <UserTable items={this.state.users} />
      </div>
    );
  }
}
