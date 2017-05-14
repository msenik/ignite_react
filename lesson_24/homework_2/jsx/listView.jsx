import React from 'react';

export default class listView extends React.Component {
  render() {
    return (
      <ul id="user-list" className="list-group text-left transition-item">
        {this.props.items.map(item => <li className="list-group-item" key={item.ip_address}>{`${item.first_name} ${item.last_name}`}</li>)}
      </ul>
    );
  }
}
