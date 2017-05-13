/*Задача 3
Используя синтаксис ES6, создайте React компонент,
содержащий кнопку и выводящий на экран при клике по кнопке свои свойства(props) в виде списка.
*/

var React = require('react');
var ReactDOM = require('react-dom');

class OwnPropsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showComponent: false };
    this.btnHandler = this.btnHandler.bind(this);
  }
  btnHandler(e){
    this.setState({showComponent: true});
  }
  render() {
    let ul = (
      <ul>
        {Object.keys(this.props).map(key=><li key={key}>{`${key}: ${this.props[key]}`}</li>)}
      </ul>
    );
    return (
      <div>
        <button onClick={this.btnHandler}>Show props</button>
          {this.state.showComponent ? ul : null}
      </div>
    );
  }
}

var container = document.getElementById("root")
ReactDOM.render(
  <OwnPropsList
  prop1="This is property 1"
  prop2={`This is property ${1+1}`}
  prop3={'This is property ' + (2+1)}/>,
container);
