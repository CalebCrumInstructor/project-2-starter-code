const router = require('express').Router();
const path = require('path');
const withAuth = require('../../middleware/auth');

const profile = require('./profile-page');
const dashboard = require('./dashboard-page');
const login = require('./login-page');
const forums = require('./forums-page');
const theories = require('./theories-page');
const create = require('./create-page');
const lorePage = require('./lore-page');
const Lore = require('../../models/Lore');
const encounterPage = require('./encounter-page');
const Encounter = require('../../models/Story');


router.use('/profile', withAuth, profile);

router.use('/dashboard', withAuth, dashboard);

router.use('/login', login);

router.use('/forums', forums);

router.use('/theories', theories);

router.use('/create', withAuth, create);
router.use('/lore', lorePage);
router.use('/encounter', encounterPage);

router.get('/', async (req, res) => {

  // query db
  const mostRecentEncounter = await Encounter.findOne({
    order: [ [ 'createdAt', 'DESC' ]]
  });
  const mostVotedEncounter = await Encounter.findOne({
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
      title: mostRecentEncounter.title,
      id: mostRecentEncounter.id
      //"This is a title of a recent post"

    },
    mostUpVotedPost: {
      title: mostVotedEncounter.title,
      id: mostVotedEncounter.id
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