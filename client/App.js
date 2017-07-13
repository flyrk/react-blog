import React, { Component } from 'react';
import Nav from './src/components/Nav';
import FlashMessagesList from './src/components/flash/FlashMessagesList';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Nav />
        <FlashMessagesList />
        {this.props.children}
      </div>
    );
  }
}

export default App;
