const router = require('express').Router();
const { Story } = require('../../models');

// get all lore localhost/encounter
router.get('/', async (req, res) => {
    try {
        const data = await Story.findAll({
            order: [ ['createdAt', 'DESC']
          ],
        });

        return res.render('encounter', 
        {
            //console.log(req.params.id),
            // query db for user stories based on userId in req.session
            encounter: {
                title: data.title,
                content: data.content
            }
        });
    } catch (err) {
        res.status(500).json(err);
    }
});



// get single encounter /encounter/2
router.get('/:id', async (req, res) => {
    try {
        const data = await Story.findOne({
            where: {
                id: req.params.id
            }
        });

        return res.render('encounter', 
        {
            //console.log(req.params.id),
            // query db for user stories based on userId in req.session
            encounter: {
                title: data.title,
                content: data.content
            }
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;