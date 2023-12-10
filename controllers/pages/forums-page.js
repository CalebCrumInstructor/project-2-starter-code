const router = require('express').Router();
const { Story } = require('../../models');
const { User } = require('../../models');

router.get('/', async (req, res) => {
  try {
      
    const data = await Story.findAll({
      include: User,
      order: [ ['createdAt', 'DESC'] ],
    });

    const stories = data.map((story) => story.get({ plain: true }));

    return res.render('forums', 
    {
      stories,
      logged_in: true,
    }); 

  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;


