const router = require("express").Router();
const { User, Character } = require("../models");

router.get("/", async (req, res) => {
  try {
    let userData = await User.findAll();
    userData = JSON.parse(JSON.stringify(userData));
    const monsterData = await Character.findAll({
    });

    const monsters = JSON.parse(JSON.stringify(monsterData));
    res.render("monsters", { monsters, isOnline: req.session.isOnline, userData })
  }
  catch (err) {
    console.log(err);
    res.json(err);
  }
})


module.exports = router;