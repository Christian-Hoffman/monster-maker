const router = require('express').Router();
const imgData = require('../models/image.js')
const { User, Character } = require("../models");

router.get('/:username', async (req, res) => {
  try {
    let userData = await User.findAll();
    userData = JSON.parse(JSON.stringify(userData));
    
    const data = await User.findOne({
      where: {
        name: req.params.username,
      },
      include: [{
        model: Character,
        attributes: [
          "monster",
          "character_type",
          "description",
          "weapons",
          "health",
          "user_id",
          "username",
          "img_link",
          "img_name"
        ]
      },
      ]
    });

    const userStats = JSON.parse(JSON.stringify(data));
    userStats.characters.forEach(character=>character.name=userStats.name)
    console.log(userStats);
    res.render("profile", { userStats, isOnline: req.session.isOnline, userData, imgData });
  }
  catch (err) {
    console.log(err);
    res.json(err);
  }
});

module.exports = router;
