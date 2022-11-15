// requiring express as we need to use express router to work on routes and controllers differently.
const express = require('express');
// uding express router
const router = express.Router();

// requiring home controller
const usersController = require('../controllers/users_conrollers');

router.get('/profile', usersController.profile);

// exporting
module.exports = router;