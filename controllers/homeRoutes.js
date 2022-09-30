const router = require('express').Router();
const {User} = require("../models");

router.get('/', (req, res) => {
  res.render('homepage', {isOnline: req.session.isOnline});
});

module.exports = router;
