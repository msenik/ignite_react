import React from 'react';

export default class UserForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
      userName: '',
      userGender: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(e){
    const elem = e.target;
    this.setState({[elem.name]:elem.value});
  }
  handleSubmit(e){
    e.preventDefault();
    const newUser = {name:this.state.userName, gender:this.state.userGender};
    this.props.handleSubmit(newUser);
    this.setState({
      userName: '',
      userGender: '',
    });
  }
  render() {
    return (
      <form role="form" style={{marginBottom: '20px'}}>

        <div className="form-group">
          <label>User name</label>
          <input className="form-control" name="userName" value={this.state.userName} onChange={this.handleInputChange} />
        </div>

        <div className="form-group">
          <label>User gender</label>
          <input className="form-control" name="userGender" value={this.state.userGender} onChange={this.handleInputChange} />
        </div>

        <button type="submit" className="btn btn-default" onClick={this.handleSubmit}>Add</button>

      </form>
    );
  }
}
