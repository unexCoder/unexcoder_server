const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

// unexcoder api
router.get('/albums', apiController.get_albums);
router.get('/albumById/:id', apiController.get_albums_by_id);
router.get('/albumByTitle/:title', apiController.get_albums_by_title);
router.get('/albumByYear/:year', apiController.get_albums_by_year);
router.get('/albumByTags', apiController.get_albums_by_tags);
router.post('/albums',apiController.post_album);
router.put('/albums/:id',apiController.update_album);
router.delete('/albums/:id',apiController.delete_album)
//////////////////////////////////////////////
module.exports = router;