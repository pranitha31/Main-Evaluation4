const express = require('express')
const {regeisterUser} = require('../controllers/userController');
const router = express.Router();
router.post('/register',regeisterUser);
module.exports = router;


