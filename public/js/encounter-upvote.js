const submitVote = document.querySelector('#upvote');


const handleVote = async () => {
        try {
            const data = await Story.findOne({
                include: Story_Image,
                where: {
                    id: req.params.id
                },
                raw: true,
                nest: true
            });
            await data.update({
                upvote: increaseVote
            })
            } catch (err) {
                res.status(500).json(err);
            };
}


submitVote.addEventListener('click', handleVote);