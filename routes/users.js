import express from 'express';
import { validateInput } from '../shared/validations/signup';
import Users from '../models/users';

let router = express.Router();

router.post('/', (req, res, next) => {
  const { errors, isValid } = validateInput(req.body);
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

export default router;
