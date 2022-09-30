const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const loginRoutes = require('./loginRoutes');
const profileRoutes = require('./profileRoutes');
const create_monsterRoutes = require('./create_monsterRoute');
const fProfileRoutes = require("./fProfileRoutes")

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/login', loginRoutes);
router.use('/profile', profileRoutes);
router.use('/create_monster', create_monsterRoutes);
router.use("/public_profiles", fProfileRoutes);

module.exports = router;
