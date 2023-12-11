const router = require('express').Router();
const userRoutes = require('./userRoutes');
const encounterRoutes = require('./encounterRoutes');

router.use('/users', userRoutes);
router.use('/encounters', encounterRoutes);


module.exports = router;
