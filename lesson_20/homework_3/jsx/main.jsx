/*
Задача 3.
Добавьте на страницу checkbox, клик по которому будет переключать режим отображения данных массива users между таблицей и списком
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
      usersCount: users.length,
      isTable: false
    }
  },
  changeUsersCount(e){
    var currentVal = e.target.value;
    this.setState({
      usersCount: currentVal,
      users: users.slice(0, currentVal)
    });
  },
  handleChange(){
    this.setState({
      isTable: !this.state.isTable
    });
  },
  render() {
    return (
      <div className="container">
        <input type="number" min="0" className="form-control" value={this.state.usersCount} onChange={this.changeUsersCount} />
          <div className="checkbox">
            <label>
              <input type="checkbox" value={this.state.isTable} onChange={this.handleChange}/> Table
            </label>
          </div>
          <Child items={this.state.users} isTable={this.state.isTable} />
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
    var isTable = this.props.isTable;

    if(isTable){
      var trs = this.props.items.map(function(el){
        return (
          <tr key={el.name+'_'+el.gender}>
            <td>el.name</td>
            <td>el.name</td>
          </tr>
        );
      });
      return (
        <table style={{color: this.state.color}} className="table table-striped table-bordered">
          <tbody>{trs}</tbody>
        </table>
      );

    } else{
      var lis = this.props.items.map(function(el){
        return <li key={el.name+'_'+el.gender}>{el.name + ' - ' + el.gender}</li>
      });
      return (
        <ul style={{color: this.state.color}}>{lis}</ul>
      );
    }
  }
});

var container = document.getElementById("root")
ReactDOM.render(<Parrent/>, container);
