const create_monster = require('express').Router();

create_monster.get('/', (req, res) => {
  res.render('create_monster', {isOnline: req.session.isOnline});
});

module.exports = create_monster;
