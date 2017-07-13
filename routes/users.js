import express from 'express';
import { validateInputSignup } from '../shared/validations/signup';
import { validateInputSignin } from '../shared/validations/signin';
import Users from '../models/users';

let router = express.Router();

router.post('/', (req, res, next) => {
  const { errors, isValid } = validateInputSignup(req.body);
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

router.get('/', (req, res, next) => {
  const { errors, isValid } = validateInputSignin(req.body);
  if (isValid) {
    const { username, password, email } = req.body;
    User.find({ username })
      .exec((err, user) => {
        if (err) res.json({ error: err });
        res.json({ success: true });
    });
  }
});

export default router;
