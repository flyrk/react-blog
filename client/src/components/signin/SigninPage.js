import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SigninForm from './SigninForm';
import { connect } from 'react-redux';
import { signin } from '../../actions/authActions';
import { addFlashMessage } from '../../actions/flashMessages';

class SigninPage extends Component {
  static propTypes = {
    signin: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props);
  }
  render() {
    const { signin, addFlashMessage } = this.props;
    return (
      <div className='row'>
        <div className='col-md-4 col-md-offset-4'>
          <SigninForm
            signin={signin}
            addFlashMessage={addFlashMessage}/>
        </div>
      </div>
    );
  }
}

export default connect(null, { signin, addFlashMessage })(SigninPage);
