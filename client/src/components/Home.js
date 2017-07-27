import React, { Component } from 'react';
import PageList from './Page/PageList';
import Information from './Info/Information';

class Home extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <PageList />
          <Information />
        </div>
      </div>
    );
  }
}

export default Home;
