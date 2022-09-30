const create_monster = require('express').Router();
const auth = require("../utils/auth");

create_monster.get('/', auth, (req, res) => {
  res.render('create_monster', {isOnline: req.session.isOnline});
});

module.exports = create_monster;
