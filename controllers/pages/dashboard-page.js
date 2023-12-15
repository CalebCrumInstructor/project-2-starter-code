const router = require('express').Router();
const { Story } = require('../../models');
const { Story_Image } = require('../../models');

router.get('/', async (req, res) => {
  try {
    // query db for user stories based on userId in req.session
    const data = await Story.findAll({
      include: Story_Image,
      where: {
        user_id: req.session.user_id
      }
    });

    // map over the data
    const stories = data.map((story) => story.get({ plain: true }));
    // create a btn in handlebars

    res.render('dashboard', {
      stories,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;
