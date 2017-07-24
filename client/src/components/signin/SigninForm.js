import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { validateInputSignin } from '../../../../shared/validations/signin';
import TextFieldGroup from '../common/TextFieldGroup';
import { signin } from '../../actions/authActions';

class SigninForm extends Component {
  static propTypes = {
    signin: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props);
    this.state = {
      identifier: '',
      password: '',
      errors: {},
      isLoading: false
    };
  }

  isValid = () => {
    const { errors, isValid } = validateInputSignin(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  };

  handlerOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlerOnSubmit = (e) => {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.signin(this.state).then(
        (res) => {
          // this.props.addFlashMessage({
          //   type: 'success',
          //   text:'你已登录成功，欢迎回来！'
          // });
          this.props.history.push('/');
        },
        (err) => this.setState({ errors: err.response.data, isLoading: false })
      );
    }

  };

  render() {
    const { errors, identifier, password, isLoading } = this.state;
    return (
      <form onSubmit={this.handlerOnSubmit}>
        <h1>登录</h1>

        { errors.form && <div className='alert alert-danger'>{errors.form}</div>}
        <TextFieldGroup
          field='identifier'
          value={identifier}
          label='用户名/邮箱'
          handlerOnChange={this.handlerOnChange}
          type='text'
          error={errors.identifier}
        />

        <TextFieldGroup
          field='password'
          value={password}
          label='密码'
          handlerOnChange={this.handlerOnChange}
          type='password'
          error={errors.password}
        />

        <div className='form-group'>
          <button disabled={isLoading} className='btn btn-primary btn-lg'>
            登录
          </button>
        </div>
      </form>
    );
  }
}

export default connect(null, { signin })(withRouter(SigninForm));
