/*Задача 3
Модицифицируйте код предыдущей задачи. Реализуйте следующее:
При клике по каждому элементу списка происходит перенаправление на страницу “/tableView/:id” или “/listView/:id”,
в зависимости от текущего пути приложения, где id – соответствующее свойтво id элемента списка или таблицы,
по которому кликнул пользователь
На странице, на которую будет происходить перенаправление,
должна отображаться инфомация об элементе массива users, id которого был передан в поисковой строке.
Реализуйте передачу этой информации через query параметры.
*/

import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, Link, Redirect, useRouterHistory} from 'react-router';
import { createHashHistory } from 'history';
import PageTransition from 'react-router-page-transition';

import listView from './listView.jsx';
import tableView from './tableView.jsx';
import Detail from './detail.jsx';

// disable URL query key
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

var users = [
  {first_name:"Matthew",last_name:"Phillips",email:"mphillips0@myspace.com",gender:"Male",ip_address:"14.241.172.154", id:23468},
  {first_name:"Larry",last_name:"Weaver",email:"lweaver1@slideshare.net",gender:"Male",ip_address:"126.139.9.128", id:89078},
  {first_name:"Barbara",last_name:"Tucker",email:"btucker2@cbc.ca",gender:"Female",ip_address:"92.195.229.16", id: 56435},
  {first_name:"Jonathan",last_name:"Cook",email:"jcook3@fc2.com",gender:"Male",ip_address:"187.79.225.71", id:78908},
  {first_name:"Jean",last_name:"Flores",email:"jflores4@last.fm",gender:"Female",ip_address:"222.197.158.249", id:67653},
  {first_name:"Kimberly",last_name:"Nelson",email:"knelson5@nifty.com",gender:"Female",ip_address:"111.174.89.57", id:83425},
  {first_name:"Willie",last_name:"Banks",email:"wbanks6@abc.net.au",gender:"Male",ip_address:"97.0.19.154", id:99873},
  {first_name:"Michael",last_name:"King",email:"mking7@w3.org",gender:"Male",ip_address:"149.114.62.6", id: 34239}
];

class App extends React.Component {
  constructor(){
    super();
    this.state = {users: users};
  }
  render() {
    var childsWithProps = React.cloneElement(this.props.children, {items: users});
    return (
      <div className="container text-center">
        <h1>My App</h1>
        <div className="btn-group" style={{marginBottom:'10px'}}>
          <Link className="btn btn-default" to="/listView">List View</Link>
          <Link className="btn btn-default" to="/tableView">Table View</Link>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <PageTransition timeout={500}>
              {childsWithProps}
            </PageTransition>
          </div>
        </div>
      </div>
    );
  }
}

class Home extends React.Component {
  render(){
    return <div>Please select the type of view</div>;
  }
}

render(
    <Router history={appHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/listView" component={listView}/>
        <Route path="/tableView" component={tableView}/>
        <Route path="/listView/:id" component={Detail}/>
        <Route path="/tableView/:id" component={Detail}/>
      </Route>
    </Router>,
  document.getElementById('root')
);
