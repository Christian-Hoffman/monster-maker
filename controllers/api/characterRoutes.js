const character = require("express").Router();
const {Character} = require("../../models");

character.get("/", async (req, res) =>{
  const charData = await Character.findAll();
  res.status(200).json(charData);
})

module.exports = character;