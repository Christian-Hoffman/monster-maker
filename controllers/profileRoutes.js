const profile = require('express').Router();

profile.get('/', async (req, res) => {
  res.render('profile', {isOnline: req.session.isOnline});
});

module.exports = profile;
