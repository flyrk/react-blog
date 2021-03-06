import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';

class Nav extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  }

  constructor() {
    super();
  }

  logout(e) {
    e.preventDefault();
    this.props.logout();
  }
  render() {
    const { isAuthenticated } = this.props.auth;

    const userLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li><a href='#' onClick={this.logout.bind(this)}>注销</a></li>
      </ul>
    );
    const guestLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li><Link to='/signin'>登录</Link></li>
        <li><Link to='/signup'>注册</Link></li>
      </ul>
    );
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <div className="navbar-brand">
              <Link to="/">Flyrk</Link>
            </div>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li><Link to="/">Home <span className="sr-only">(current)</span></Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>

            { isAuthenticated ? userLinks : guestLinks }
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateProps, { logout })(Nav);
