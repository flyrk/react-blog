import React, { Component } from 'react';
import s from './Info.css';
import Avator from './Avator';

class Information extends Component {

  render() {
    return (
      <div className={`col-md-4 ${s.root}`}>
        <Avator />
      </div>
    );
  }
}

export default Information;
