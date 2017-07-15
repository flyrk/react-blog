import express from 'express';
import { commonValidationsSignup } from '../shared/validations/signup';
import { validateInputSignin } from '../shared/validations/signin';
import Users from '../models/users';
import isEmpty from 'lodash/isEmpty';

let router = express.Router();

function validateInputSignup(data, otherValidations) {
  let { errors } = otherValidations(data);

  return Promise.all([
    Users.find({ username: data.username }).exec((err, user) => {
      if (user.username === data.username ) { errors.username = '用户名已存在！'; }
    }),
    Users.find({ email: data.email }).exec((err, user) => {
      if (user.email === data.email) { errors.email = '邮箱已存在！'; }
    })
  ]).then(() => {
    return {
      errors,
      isValid: isEmpty(errors)
    };
  });
}

router.post('/', (req, res, next) => {
  validateInputSignup(req.body, commonValidationsSignup).then(({ errors, isValid }) => {
    if (isValid) {
      const { username, password, email } = req.body;
      const password_digest = password;                          // bugs: cannot use bcrypt
      const users = new Users({
        username,
        email,
        password_digest
      });
      users.save((err) => {
        if (err) res.status(500).json({ error: err });
        res.json({ success: true });
      });
    } else {
      res.status(400).json(errors);
    }
  });
});

router.get('/', (req, res, next) => {
  const { errors, isValid } = validateInputSignin(req.query);
  if (isValid) {
    const { username, password, email } = req.query;
    Users.findOne({ username })
      .exec((err, user) => {
        if (err) res.json({ error: err });
        if (user) {
          if (user.password_digest === password && user.email === email) {
            res.json({ success: true });
          } else {
            if (user.password_digest !== password) {
              errors.password = '密码错误！';
            }
            if (user.email !== email) {
              errors.email = '邮箱错误！';
            }
            res.status(400).json(errors);
          }
        } else {
          errors.username = '用户名不存在！';
          res.status(400).json(errors);
        }


    });
  } else {
    res.status(400).json(errors);
  }
});

export default router;
