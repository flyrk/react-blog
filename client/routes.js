import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Home from './src/components/Home';
import About from './src/components/About';
import SigninPage from './src/components/signin/SigninPage';
import SignupPage from './src/components/signup/SignupPage';

export default class Routers extends Component {
  render() {
    return (
      <Router>
        <App>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/signin' component={SigninPage} />
          <Route path='/signup' component={SignupPage} />
        </App>
      </Router>
    );
  }
}
