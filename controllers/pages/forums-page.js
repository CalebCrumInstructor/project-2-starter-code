const router = require('express').Router();
const { Story } = require('../../models');
const { User } = require('../../models');
const { Sequelize } = require('sequelize');

router.get('/', async (req, res) => {
  try {
      
    const data = await Story.findAll({
      include: User,
      limit: 5,
      order: [ [Sequelize.fn('RAND'), 'DESC'] ],
    });

    const stories = data.map((story) => story.get({ plain: true }));

    return res.render('forums', 
    {
      stories,
      logged_in: req.session.logged_in,
    }); 

  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;


