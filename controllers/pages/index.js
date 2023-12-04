const router = require('express').Router();
const path = require('path');
const withAuth = require('../../middleware/auth');

const profile = require('./profile-page');
const dashboard = require('./dashboard-page');
const login = require('./login-page');

router.use('/profile', withAuth, profile);

router.use('/dashboard', withAuth, dashboard);

router.use('/login', login);

router.get('/', (req, res) => {

  // query db


  return res.render('welcome', {
    logged_in: req.session.logged_in,
    // certainPosts: {
    //   mostRecentPost: "This is a title of a recent post",
    //   mostUpVotedPost: "This is a title of an up-voted post"
    // },
    mostRecentPost: {
      title: "This is a title of a recent post"
    },
    // mostUpVotedPost: {
    //   title: "This is a title of an up-voted post"
    // }
  });
});

router.get('*', (req, res) => {
  return res.render('404', {
    logged_in: req.session.logged_in
  });
});

module.exports = router;