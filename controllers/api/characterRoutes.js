const router = require("express").Router();
const {Character} = require("../../models");
const { upload } = require("../upload");

router.get("/", async (req, res) =>{
  try{
  const charData = await Character.findAll();
  res.status(200).json(charData);
  }
  catch(err){
    console.log(err);
    res.json(err);
  }
});

router.post('/', upload, async (req, res) => {
  try{
  const { file } = req; 
  const data = {};
  
  if (file) {
    const result = await uploadToCloudinary(file, { });
  }


  // TODO: Save to whatever table you want in the database

  res.json({});
}
catch(err){
  console.log(err);
  res.json(err);
}
});


module.exports = router;