const router = require('express').Router();
const {User, Character, Image} = require("../models");

router.get('/', async(req, res) => {
  try{
  let monsterData = await Character.findAll({
    include:{ 
    model: Image,
  }
  })
  monsterData = JSON.parse(JSON.stringify(monsterData));
  const features = [];

  let randomFeature1 = Math.floor(Math.random()* monsterData.length);
  let randomFeature2 = Math.floor(Math.random()* monsterData.length);
  let randomFeature3 = Math.floor(Math.random()* monsterData.length);

  while(randomFeature1 == randomFeature2 || randomFeature1 == randomFeature3 || randomFeature2 == randomFeature3){
    randomFeature3 = Math.floor(Math.random()* monsterData.length);
    randomFeature2 = Math.floor(Math.random()* monsterData.length);
    randomFeature1 = Math.floor(Math.random()* monsterData.length);
  }
  features.push(monsterData[randomFeature1], monsterData[randomFeature2], monsterData[randomFeature3], );


  let userData = await User.findAll();
  userData = JSON.parse(JSON.stringify(userData));

  console.log(features);
  res.render('homepage', {isOnline: req.session.isOnline, features, userData});
}
catch(err){
  console.log(err);
  res.json(err);
}
});

module.exports = router;
