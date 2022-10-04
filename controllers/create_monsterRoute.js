const router = require('express').Router();
const { User, Character } = require("../models");
const auth = require("../utils/auth");

router.get('/', auth, async (req, res) => {
  try{
  let userData = await User.findAll();
  userData = JSON.parse(JSON.stringify(userData));
  
  res.render('create_monster', { isOnline: req.session.isOnline, userData });
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
  switch(req.body.monster){
    case "Green Dragon":
      req.body.img_link = "v1664551441";
      req.body.img_name = "image_1_qwvp9a";
      break;
    case "Hobgoblin":
      req.body.img_link = "v1664826296";
      req.body.img_name = "something_i5op4w";
      break;
    case "Stray Demon":
      req.body.img_link = "v1664551444";
      req.body.img_name = "image_sa6sts";
      break;
      case "Fire Elemental":
        req.body.img_link =  "v1664894506";
        req.body.img_name = "image_4_cggkbc";
        break;
      case "Ent":
        req.body.img_link = "v1664895661";
        req.body.img_name = "ent_lzejnz";
    default:
  }

  console.log(req.body);
  Character.create(req.body)  
  res.redirect("/profile");
  }
  catch(err){
    console.log(err);
    res.json(err);
  }
})



module.exports = router;
