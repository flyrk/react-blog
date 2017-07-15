import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { commonValidationsSignup } from '../../../../shared/validations/signup';
import TextFieldGroup from '../common/TextFieldGroup';

class SignupForm extends Component {
  static propTypes = {
    userSignupRequest: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfig: '',
      errors: {},
      isLoading: false
    };
  }

  isValid = () => {
    const { errors, isValid } = commonValidationsSignup(this.state);
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
      this.props.userSignupRequest(this.state).then(
        () => {
          this.props.addFlashMessage({
            type: 'success',
            text:'你已注册成功，欢迎回来！'
          });
          this.props.history.push('/');
        },
        (err) => this.setState({ errors: err.response.data, isLoading: false })
      );
    }

  };

  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.handlerOnSubmit}>
        <h1>欢迎加入我的博客！</h1>
        <TextFieldGroup
          field='username'
          value={this.state.username}
          label='用户名'
          handlerOnChange={this.handlerOnChange}
          type='text'
          error={errors.username}
        />

        <TextFieldGroup
          field='email'
          value={this.state.email}
          label='邮箱'
          handlerOnChange={this.handlerOnChange}
          type='text'
          error={errors.email}
        />

        <TextFieldGroup
          field='password'
          value={this.state.password}
          label='密码'
          handlerOnChange={this.handlerOnChange}
          type='password'
          error={errors.password}
        />

        <TextFieldGroup
          field='passwordConfig'
          value={this.state.passwordConfig}
          label='确认密码'
          handlerOnChange={this.handlerOnChange}
          type='password'
          error={errors.passwordConfig}
        />

        <div className='form-group'>
          <button disabled={this.state.isLoading} className='btn btn-primary btn-lg'>
            注册
          </button>
        </div>
      </form>
    );
  }
}

export default withRouter(SignupForm);
