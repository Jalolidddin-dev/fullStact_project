const express = require('express');
const PostController = require('../controllers/post.controller');

const router = express.Router();

router.get('/get', PostController.getAll);
router.post('/create', PostController.create);

module.exports = router;
