// requiring express as we need to use express router to work on routes and controllers differently.
const express = require('express');
// uding express router
const router = express.Router();

// requiring home controller
const homeController = require('../controllers/home_controller');

router.get('/', homeController.home);
router.post('/create-task', homeController.task);
router.get('/delete-task/:id', homeController.delete);
// exporting
module.exports = router;