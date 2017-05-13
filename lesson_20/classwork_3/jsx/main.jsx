/*Создайте React компонент, который содержит checkbox и элемент div.
При клике по checkbox элементу div присваиваиваются новые стили (выбор стиля призвольный).*/
var React = require('react');
var ReactDOM = require('react-dom');
var Component = React.createClass({
    getInitialState() {
        return {
         isChecked: false,
        }
    },
    handleInputChange(){
      this.setState({isChecked: !this.state.isChecked});
    },
    render() {
      return (
        <div>
          <input type="checkbox" checked={this.state.isChecked} onChange={this.handleInputChange}/>
          <div className={this.state.isChecked ? 'theme_1' : 'theme_2'}>Lorem ipsum.</div>
        </div>
      );
}
});

var container = document.getElementById("root")
ReactDOM.render(<Component/>, container);
