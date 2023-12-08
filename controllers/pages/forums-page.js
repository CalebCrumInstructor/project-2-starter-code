const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    res.render('forums', {
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;


