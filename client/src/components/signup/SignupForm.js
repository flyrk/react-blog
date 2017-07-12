import React, { Component } from 'react';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfig: ''
    };
  }

  handlerOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlerOnSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handlerOnSubmit}>
        <h1>欢迎加入我的博客！</h1>
        <div className='form-group'>
          <label className='control-label'>用户名:</label>
          <input
            value={this.state.username}
            onChange={this.handlerOnChange}
            type='text'
            name='username'
            className='form-control'
          />
        </div>

        <div className='form-group'>
          <label className='control-label'>邮箱:</label>
          <input
            value={this.state.email}
            onChange={this.handlerOnChange}
            type='text'
            name='email'
            className='form-control'
          />
        </div>

        <div className='form-group'>
          <label className='control-label'>密码:</label>
          <input
            value={this.state.password}
            onChange={this.handlerOnChange}
            type='text'
            name='password'
            className='form-control'
          />
        </div>

        <div className='form-group'>
          <label className='control-label'>确认密码:</label>
          <input
            value={this.state.passwordConfig}
            onChange={this.handlerOnChange}
            type='text'
            name='passwordConfig'
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-primary btn-lg'>
            注册
          </button>
        </div>
      </form>
    );
  }
}

export default SignupForm;
