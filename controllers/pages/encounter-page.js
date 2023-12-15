const router = require('express').Router();
const { Story } = require('../../models');
const { Story_Image } = require('../../models');

// get all lore localhost/encounter
router.get('/', async (req, res) => {
    try {
        const data = await Story.findAll({
            include: Story_Image,
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
            },
            logged_in: req.session.logged_in

        });
    } catch (err) {
        res.status(500).json(err);
    }
});



// get single encounter /encounter/2
router.get('/:id', async (req, res) => {
    try {
        const data = await Story.findOne({
            include: Story_Image,
            where: {
                id: req.params.id
            },
            raw: true,
            nest: true
        });

        return res.render('encounter', 
        {
            //console.log(req.params.id),
            // query db for user stories based on userId in req.session
            // encounter: {
            //     title: data.title,
            //     content: data.content//,
            //     //picture: data.story_images.attachment_url
            // }

            data,
            logged_in: req.session.logged_in

        });
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;