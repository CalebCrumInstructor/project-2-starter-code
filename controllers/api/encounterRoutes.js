const router = require('express').Router();
const { Story } = require('../../models');

// /api/encounters - post
router.post('/', async (req, res) => {
  try {
    const storyData = await Story.create({
      ...req.body,
      user_id: req.session.user_id
    });

    res.status(200).json(storyData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});


module.exports = router;
