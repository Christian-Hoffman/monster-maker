const profile = require('express').Router();
const auth = require("../utils/auth");
const { User, Character } = require("../models");

profile.get('/', auth, async (req, res) => {
  try {
    let userData = await User.findAll();
    userData = JSON.parse(JSON.stringify(userData));

    const data = await User.findOne({
      where: {
        isOnline: true
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
    res.render("profile", { userStats, isOnline: req.session.isOnline, userData });
  }
  catch (err) {
    console.log(err);
    res.json(err);
  }
});

module.exports = profile;
