const postModal = require('../models/post.model');

class PostController {
  async getAll(req, res) {
    try {
      const allUser = await postModal.find();

      res.status(200).send(allUser);
    } catch (error) {
      res.status(500).send(`Get so'rovida qandaydir xato bor Xato: ${error}`);
    }
  }

  async create(req, res) {
    try {
      const newPost = await postModal.create(req.body);

      res.status(201).send(newPost);
    } catch (error) {
      res.status(500).send(`Post so'rovida qandaydir xato bor Xato: ${error}`);
    }
  }
}

module.exports = new PostController();
