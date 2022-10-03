const router = require('express').Router();
const {User, Character, Weapon} = require("../models");

router.get('/:username', async (req, res) => {
  try{
  const data = await User.findOne({
    where: {
      name: req.params.username,
    },
    include: [{model: Character, 
      attributes: [
                "monster", 
                "character_type",
                "description",
                "weapons",
                "health",
                "user_id",
              ]}, 
            ]
  });

const userStats = JSON.parse(JSON.stringify(data));
console.log("user Stats", userStats);
  // res.send(userStats);

  res.render("profile", {userStats, isOnline: req.session.isOnline});

}
catch(err){
  console.log(err);
  res.json(err);
}
});

module.exports = router;
