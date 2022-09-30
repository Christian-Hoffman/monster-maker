const router = require('express').Router();
const { User } = require('../../models');

router.get("/", async (req, res) =>{
  const userData = await User.findAll();
  res.status(200).json(userData);
})


router.post('/', async (req, res) => { //SignUp
  try {
    const userData = await User.create(req.body);
    req.session.user_id = userData.id;
    req.session.isOnline = true;
    
    req.session.save();
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
    throw err;
  }
});

router.post('/login', async (req, res) => { //Login
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    const updatedUserData = User.update({isOnline: true}, {
      where: {
        email: req.body.email,
      }
    })
    req.session.user_id = userData.id;
    req.session.isOnline = true;
    req.session.save();
      res.json({ user: userData, message: 'You are now logged in!' });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {  //LogOut

  if (req.session.isOnline) {
    console.log(true);
    req.session.destroy(() => {
      
    });
    const updatedUserData = User.update({isOnline: false}, {
     where:{
      isOnline: true,
     } 
    });
    res.status(204).end();
  } else {
    res.status(404).end();
  }
});

module.exports = router;
