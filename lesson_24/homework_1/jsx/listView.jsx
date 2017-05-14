import React from 'react';

export default class listView extends React.Component {
  render() {
    return (
      <ul className="list-group text-left">
        {this.props.items.map(item => <li className="list-group-item" key={item.ip_address}>{`${item.first_name} ${item.last_name}`}</li>)}
      </ul>
    );
  }
}
