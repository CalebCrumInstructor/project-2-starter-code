const router = require('express').Router();
const path = require('path');
const withAuth = require('../../middleware/auth');

const profile = require('./profile-page');
const dashboard = require('./dashboard-page');
const login = require('./login-page');
const forums = require('./forums-page');
const theories = require('./theories-page');
const Lore = require('../../models/Lore');

router.use('/profile', withAuth, profile);

router.use('/dashboard', withAuth, dashboard);

router.use('/login', login);

router.use('/forums', forums);

router.use('/theories', theories);

router.get('/', async (req, res) => {

  // query db
  const mostRecentLore = await Lore.findOne({
    order: [ [ 'createdAt', 'DESC' ]]
});
  const mostVotedLore = await Lore.findOne({
    order: [ ['upvote', 'DESC'],
            [ 'createdAt' ]
          ],
});

  return res.render('welcome', {
    logged_in: req.session.logged_in,
    // certainPosts: {
    //   mostRecentPost: "This is a title of a recent post",
    //   mostUpVotedPost: "This is a title of an up-voted post"
    // },
    mostRecentPost: {
      title: mostRecentLore.title,
      //"This is a title of a recent post"

    },
    mostUpVotedPost: {
      title: mostVotedLore.title
      //"This is a title of an up-voted post"
    }
  });
});

router.get('*', (req, res) => {
  return res.render('404', {
    logged_in: req.session.logged_in
  });
});

module.exports = router;