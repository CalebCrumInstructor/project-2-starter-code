const router = require('express').Router();
const { Lore } = require('../../models');

// get all lore localhost/lore
router.get('/', async (req, res) => {
    try {
        console.log('hit here')
            // query db for user stories based on userId in req.session
            // const data = await Lore.findOne({
            //   where: {
            //     id: req.session.user_id
            //   }
            // });

        res.render('lore', {
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


// get single lore /lore/2
router.get('/:id', async (req, res) => {
    try {
        console.log(req.params.id)
            // query db for user stories based on userId in req.session
            const data = await Lore.findOne({
              where: {
                id: req.params.id
              }
            });

        res.render('lore', {
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;