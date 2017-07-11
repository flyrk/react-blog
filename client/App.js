import React, { Component } from 'react';
import Nav from './src/components/Nav';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Nav />
        {this.props.children}
      </div>
    );
  }
}

export default App;
