import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SignupForm from './SignupForm';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/signActions';
import { addFlashMessage } from '../../actions/flashMessages';

class SignupPage extends Component {
  static propTypes = {
    userSignupRequest: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props);
  }
  render() {
    const { userSignupRequest, addFlashMessage } = this.props;
    return (
      <div className='row'>
        <div className='col-md-4 col-md-offset-4'>
          <SignupForm
            userSignupRequest={userSignupRequest}
            addFlashMessage={addFlashMessage}/>
        </div>
      </div>
    );
  }
}

export default connect(null, { userSignupRequest, addFlashMessage })(SignupPage);
