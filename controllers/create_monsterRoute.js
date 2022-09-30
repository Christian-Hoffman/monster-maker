const router = require('express').Router();
const { User, Character } = require("../models");
const auth = require("../utils/auth");

router.get('/', auth, (req, res) => {
  res.render('create_monster', { isOnline: req.session.isOnline });
});

router.post("/", async (req, res) => {
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
  
  const data = Character.create(req.body)  
  res.redirect("/profile");

})



module.exports = router;
