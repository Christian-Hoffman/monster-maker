const login = require("express").Router();

login.get("/", async (req, res) =>{
  res.render("login");
})


module.exports = login;