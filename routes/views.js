const express = require('express');
const router = express.Router();
const frontController = require('../controllers/frontController');

// unexcoder server render views
router.get('/', frontController.render_home);
router.get('/data',frontController.render_data);
router.get('/music', frontController.render_music);
router.get('/album/:id', frontController.render_album_details);
router.get('/about', frontController.render_about);
router.use( frontController.render_404);

//////////////////////////////////////////////
module.exports = router;

    



