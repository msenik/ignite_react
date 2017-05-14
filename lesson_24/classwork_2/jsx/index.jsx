/*Задача 2
Модифицируйте код предыдущей задачи.
Добавьте в приложение файл с React компонентом,
который создает разметку с текстом: “This is the homepage!”,
задайте для него путь по умолчанию ("/").*/

import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, Link, useRouterHistory} from 'react-router';
import { createHashHistory } from 'history';

import Component1 from './Component1.jsx';
import Component2 from './Component2.jsx';
import Homepage from './homepage.jsx';

// disable URL query key
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <ul className="nav nav-pills">
            <li><Link to="/">Homepage</Link></li>
            <li><Link to="/view1">View 1</Link></li>
            <li><Link to="/view2">View 2</Link></li>
        </ul>
        <div className="row">
          <div className="col-xs-12">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

render(
    <Router history={appHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Homepage}/>
        <Route path="/view1" component={Component1}/>
        <Route path="/view2" component={Component2}/>
      </Route>
    </Router>,
  document.getElementById('root')
);
