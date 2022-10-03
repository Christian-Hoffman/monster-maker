const router = require('express').Router();
const { User, Character } = require("../models");
const auth = require("../utils/auth");

router.get('/', auth, (req, res) => {
  try{
  res.render('create_monster', { isOnline: req.session.isOnline });
  }
  catch(err){
    console.log(err);
    res.json(err);
  }
});

router.post("/", async (req, res) => {
  try{
  const userData = await User.findOne({ 
    where:{
      isOnline: true
    },
    attributes:{
      exclude: ["password"]
    }
   });
  
  const serialUserData = JSON.parse(JSON.stringify(userData));
  req.body.user_id = serialUserData.id;
  req.body.username = serialUserData.name;
  
  Character.create(req.body)  
  res.redirect("/profile");
  }
  catch(err){
    console.log(err);
    res.json(err);
  }
})



module.exports = router;
