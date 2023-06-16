var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')



router.get('/', userController.login);
router.post('/login',)
// user_router.get('/logout',userController.logOut)

router.get('/sign-up',userController.signup)
router.post('/sign-up',userController.signupPost)


module.exports = router;

