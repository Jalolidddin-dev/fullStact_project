const express = require('express');
const PostController = require('../controllers/post.controller');

const router = express.Router();

router.get('/get', PostController.allPosts);
router.post('/create', PostController.create);
router.delete('/delete/:id', PostController.delete);

module.exports = router;
