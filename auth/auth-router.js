const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../cofnig/secrets');

const Users = require('./user-model');

router.post('/register', (req, res) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 12);
  user.password = hash;

  Users.add(user)
    .then(newUser => {
      res.status(201).json(newUser);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: 'Internal error, you broke the server.' })
    })
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if(user && bcrypt.compareSync(password, user.password)) {
        const token = validToken(user)

        res.status(200).json({ token, message: 'Successfully logged in.' })
      } else {
        res.status(401).json({ message: 'Nope, try again.' })
      }
    })
});

function validToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  }
  const options = {
    expiresIn: '7d'
  }
  return jwt.sign(payload, jwtSecret, options)
}

module.exports = router;
