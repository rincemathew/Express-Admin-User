var express = require('express');
var router = express.Router();
var adminController = require('../controllers/adminController')



router.get('/',adminController.admin_login)

router.get('/adminhomepage',)

router.post('/adminhomepage',)

router.get('/logout',)

router.post('/search',)

router.get('/reset',)

router.get('/adduser',)

router.get('/updateuser',)

router.get('/delete',)

router.post('/update',)

router.get('/adminupdated',)

router.post('/accountcreated',)

router.get('/newuserupdated',)


module.exports = router;