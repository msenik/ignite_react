import React from 'react';

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
            this.props.items.map(item =>
              <tr key={item.ip_address}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.gender}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    );
  }
}
