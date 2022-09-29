const weapon = require("express").Router();
const {Weapon} = require("../../models");

weapon.get("/", async (req, res) =>{
  const weaponData = Weapon.findAll();
  res.status(200).json(weaponData);
})

module.exports = weapon;