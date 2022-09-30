const router = require('express').Router();
const {User, Character, Weapon} = require("../models");

router.get('/:username', async (req, res) => {
  const data = await User.findOne({
    where: {
      name: req.params.username,
    },
    include: [{model: Character, 
      attributes: [
                "monster", 
                "character_type",
                "description",
                "health",
              ]}, 
            ]
  });
  console.log("Data:", data );
  if(data){
const userStats = JSON.parse(JSON.stringify(data));
console.log("user Stats", userStats);
  // res.send(userStats);
  res.render("profile", {userStats});
  }
  else{
    res.json({message: "Something went wrong"});
  }
});

module.exports = router;
