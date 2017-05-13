import React from 'react';

export default class UserTable extends React.Component {
  render() {
    return (
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.items.map(el => <tr key={el.name+'_'+el.name}><td>{el.name}</td><td>{el.gender}</td></tr>)
          }
        </tbody>
      </table>
    );
  }
}
