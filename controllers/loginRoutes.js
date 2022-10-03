const login = require("express").Router();
const { User } = require("../models");

login.get("/", async (req, res) => {
  try {
    let userData = await User.findAll();
    userData = JSON.parse(JSON.stringify(userData));
    res.render("login", { isOnline: req.session.isOnline, userData });
  }
  catch (err) {
    console.log(err);
    res.json(err);
  }
})


module.exports = login;