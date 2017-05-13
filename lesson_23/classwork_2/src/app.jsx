import React from 'react';
import Child from './child.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        This is App component.
        <Child />
      </div>
    );
  }
}
