import React from 'react';
import {Link} from 'react-router';

export default class tableView extends React.Component {
  render() {
    return (
      <table id="user-table" className="table table-bordered table-stripped transition-item">
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.items.map(item => {
              let query = Object.keys(item).map(k => `${k}=${item[k]}`);
              return (
                <tr key={item.ip_address}>
                  <td><Link to={`/listView/${item.id}?${query.join('&')}`}>{item.first_name}</Link></td>
                  <td>{item.last_name}</td>
                  <td>{item.gender}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    );
  }
}
