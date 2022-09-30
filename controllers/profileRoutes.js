const profile = require('express').Router();
const {User, Character} = require("../models");


profile.get('/', async (req, res) => {
  const data = await User.findOne({
    where: {
      isOnline: true
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
  if(data){
 
const userStats = JSON.parse(JSON.stringify(data));
console.log("user Stats", userStats);
  // res.send(userStats);

  res.render("profile", {userStats, isOnline: req.session.isOnline});
  }
  else{
    res.json({message: "Something went wrong"});
  }
});

module.exports = profile;
