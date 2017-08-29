const express = require('express');
const router = express.Router();
const User = require('../models').User;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: "Welcome to Derek's Page"
  });
});

router.route('/register')
  .get((req, res, next) => {
    res.render('register', {
      title: "Registration Page"
    });
  })
  .post((req, res, next) => {
    User.create(req.body).then(() => {
      res.redirect('/');
    });
  });

module.exports = router;
