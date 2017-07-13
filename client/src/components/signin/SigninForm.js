import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { validateInputSignin } from '../../../../shared/validations/signin';
import TextFieldGroup from '../common/TextFieldGroup';

class SigninForm extends Component {
  static propTypes = {
    userSigninRequest: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
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
      this.props.userSigninRequest(this.state).then(
        () => {
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
    const { errors } = this.state;
    return (
      <form onSubmit={this.handlerOnSubmit}>
        <h1>欢迎登录我的博客！</h1>
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

        <div className='form-group'>
          <button disabled={this.state.isLoading} className='btn btn-primary btn-lg'>
            登录
          </button>
        </div>
      </form>
    );
  }
}

export default withRouter(SigninForm);
