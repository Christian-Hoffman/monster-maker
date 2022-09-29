const router = require('express').Router();
const {User} = require("../models");

router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;
