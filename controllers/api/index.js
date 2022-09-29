const router = require('express').Router();
const userRoutes = require('./userRoutes');
const characterRoutes = require('./characterRoutes');
const weaponRoutes = require('./weaponRoutes');

router.use('/users', userRoutes);
router.use("/characters", characterRoutes);
router.use("/weapons", weaponRoutes);


module.exports = router;
