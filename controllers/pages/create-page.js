const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    res.render('create', {
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;