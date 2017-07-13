import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export function validateInputSignin(data) {
  let errors = {};

  if (Validator.isEmpty(data.username)) {
    errors.username = '用户名不能为空';
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = '邮箱不能为空';
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = '邮箱不合法';
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = '请输入密码';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
}
