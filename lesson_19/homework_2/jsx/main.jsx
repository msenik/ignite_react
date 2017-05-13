/*Создайте React компонент, который отображает на странице форму с полями ‘name’ , ‘login’ и кнопкой Submit*/
var React = require('react');
var ReactDOM = require('react-dom');

var MyForm = React.createClass({
  render: function () {
    return(
      <div className="container">
        <form role="form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label htmlFor="name">Login</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your login" />
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    )
  }
});

var container = document.getElementById("root")
ReactDOM.render(<MyForm/>, container);
