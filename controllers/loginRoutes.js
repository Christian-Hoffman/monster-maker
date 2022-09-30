const login = require("express").Router();

login.get("/", async (req, res) =>{
  res.render("login", {isOnline: req.session.isOnline});
})


module.exports = login;