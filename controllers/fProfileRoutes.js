const router = require('express').Router();
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
          "username"
        ]
      },
      ]
    });

    const userStats = JSON.parse(JSON.stringify(data));
    console.log(userStats);
    res.render("profile", { userStats, isOnline: req.session.isOnline, userData });
  }
  catch (err) {
    console.log(err);
    res.json(err);
  }
});

module.exports = router;
