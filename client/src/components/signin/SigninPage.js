import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SigninForm from './SigninForm';
import { userSigninRequest } from '../../actions/signActions';

class SigninPage extends Component {
  static propTypes = {
    userSigninRequest: PropTypes.func.isRequired
  }

  render() {
    const { userSigninRequest } = this.props;
    return (
      <div className='row'>
        <div className='col-md-4 col-md-offset-4'>
          <SigninForm
            userSigninRequest={userSigninRequest}
          />
        </div>
      </div>
    );
  }
}


export default connect(null, { userSigninRequest })(SigninPage);
