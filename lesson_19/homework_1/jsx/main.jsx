/*Создайте React компонент, который выведет на экран массив users в виде таблицы.*/
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

var Tr = React.createClass({
  render: function () {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.gender}</td>
      </tr>
    )
  }
});


var Table = React.createClass({
  render: function () {
    return (
      <table>{
        users.map(function(el){
          return <Tr name={el.name} gender={el.gender} key={el.name+'_'+el.gender}/>;
        })
      }</table>
    )
  }
});

var container = document.getElementById("root")
ReactDOM.render(<Table/>, container);
