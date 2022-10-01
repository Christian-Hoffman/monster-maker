const weapon = require("express").Router();
const {Weapon} = require("../../models");

weapon.get("/", async (req, res) =>{
  try{
  const weaponData = await Weapon.findAll();
  res.status(200).json(weaponData);
  }
  catch(err){
    console.log(err);
    res.json(err);
  }
})

module.exports = weapon;