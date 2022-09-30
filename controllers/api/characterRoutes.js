const router = require("express").Router();
const {Character} = require("../../models");
const { upload } = require("../upload");

router.get("/", async (req, res) =>{
  const charData = await Character.findAll();
  res.status(200).json(charData);
});

router.post('/', upload, async (req, res) => {
  const { file } = req; 
  const data = {};
  
  if (file) {
    const result = await uploadToCloudinary(file, { });
  }


  // TODO: Save to whatever table you want in the database

  res.json({});
});


module.exports = router;