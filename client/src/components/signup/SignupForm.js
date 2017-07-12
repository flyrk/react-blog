import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class SignupForm extends Component {
  static propTypes = {
    userSignupRequest: PropTypes.func.isRequired
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

  handlerOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlerOnSubmit = (e) => {
    this.setState({ errors: {}, isLoading: true });
    e.preventDefault();
    this.props.userSignupRequest(this.state).then(
      () => {},
      (err) => this.setState({ errors: err.response.data, isLoading: false })
    );
  };

  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.handlerOnSubmit}>
        <h1>欢迎加入我的博客！</h1>
        <div className={classnames('form-group', { 'has-error': errors.username })}>
          <label className='control-label'>用户名:</label>
          <input
            value={this.state.username}
            onChange={this.handlerOnChange}
            type='text'
            name='username'
            className='form-control'
          />
          {errors.username && <span className='help-block'>{errors.username}</span>}
        </div>

        <div className={classnames('form-group', { 'has-error': errors.email })}>
          <label className='control-label'>邮箱:</label>
          <input
            value={this.state.email}
            onChange={this.handlerOnChange}
            type='text'
            name='email'
            className='form-control'
          />
          {errors.email && <span className='help-block'>{errors.email}</span>}
        </div>

        <div className={classnames('form-group', { 'has-error': errors.password })}>
          <label className='control-label'>密码:</label>
          <input
            value={this.state.password}
            onChange={this.handlerOnChange}
            type='password'
            name='password'
            className='form-control'
          />
          {errors.password && <span className='help-block'>{errors.password}</span>}
        </div>

        <div className={classnames('form-group', { 'has-error': errors.passwordConfig })}>
          <label className='control-label'>确认密码:</label>
          <input
            value={this.state.passwordConfig}
            onChange={this.handlerOnChange}
            type='password'
            name='passwordConfig'
            className='form-control'
          />
          {errors.passwordConfig && <span className='help-block'>{errors.passwordConfig}</span>}
        </div>
        <div className='form-group'>
          <button disabled={this.state.isLoading} className='btn btn-primary btn-lg'>
            注册
          </button>
        </div>
      </form>
    );
  }
}

export default SignupForm;
