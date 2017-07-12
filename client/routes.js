import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Home from './src/components/Home';
import SignupPage from './src/components/signup/SignupPage';

export default class Routers extends Component {
  render() {
    return (
      <Router>
        <App>
          <Route exact path='/' component={Home} />
          <Route path='/signup' component={SignupPage} />
        </App>
      </Router>
    );
  }
}
