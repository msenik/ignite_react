import React from 'react';

export default class Detail extends React.Component {
  render() {
    const query = this.props.location.query;
    return (
      <div className="transition-item">
        <ul className="list-group text-left">
          {
            Object.keys(query).map(k => <li className="list-group-item" key={k}>{`${k}: `}<b>{query[k]}</b></li>)
          }
        </ul>
      </div>
    );
  }
}
