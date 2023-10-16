const express = require('express');
const { registerContoller, loginController,logoutController } = require('../controllers/authControllers');


//router object 
const router = express.Router();

//rotes 

router.post('/register',registerContoller);
router.post('/login',loginController);
router.post('/logout',logoutController);

module.exports = router;