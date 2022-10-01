const login = require("express").Router();

login.get("/", async (req, res) =>{
  try{
  res.render("login", {isOnline: req.session.isOnline});
  }
  catch(err){
    console.log(err);
    res.json(err);
  }
})


module.exports = login;