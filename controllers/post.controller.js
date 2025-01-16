const PostService = require('../services/post.service');

class PostController {
  async allPosts(req, res) {
    try {
      const allPost = await PostService.getAll();
      res.status(200).send(allPost);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async create(req, res) {
    try {
      const newPost = await PostService.create(req.body);

      res.status(201).send(newPost);
    } catch (error) {
      res.status(500).send(`Post so'rovida qandaydir xato bor Xato: ${error}`);
    }
  }

  async delete(req, res) {
    try {
      const post = await PostService.delete(req.params.id);
      res.send(post);
    } catch (error) {
      res.status(404).send(error);
    }
  }
}

module.exports = new PostController();
