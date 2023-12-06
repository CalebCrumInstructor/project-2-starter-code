const router = require('express').Router();
const { Story } = require('../../models');

router.get('/', async (req, res) => {
  try {
    // query db for user stories based on userId in req.session
    const data = await Story.findAll({
      where: {
        user_id: req.session.user_id
      }
    });

    // map over the data
    const stories = data.map((story) => story.get({ plain: true }));
    console.log("stories ----", stories);
    // create a btn in handlebars


    res.render('dashboard', {
      stories,
      logged_in: true
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
