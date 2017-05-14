import React from 'react';
import {Link} from 'react-router';

export default class listView extends React.Component {
  render() {
    return (
      <ul id="user-list" className="list-group text-left transition-item">
        {this.props.items.map(item => {
          let query = Object.keys(item).map(k => `${k}=${item[k]}`);
          return (
            <li className="list-group-item" key={item.ip_address}>
              <Link to={`/listView/${item.id}?${query.join('&')}`}>
                {`${item.first_name} ${item.last_name}`}
              </Link>
            </li>
          )
        })}
      </ul>
    );
  }
}
