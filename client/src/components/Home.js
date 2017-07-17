import React, { Component } from 'react';
import PageList from './Page/PageList';

class Home extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <PageList />
        </div>
      </div>
    );
  }
}

export default Home;
