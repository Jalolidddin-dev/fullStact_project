const postModal = require('../models/post.model');

class PostService {
  async getAll() {
    const allPosts = await postModal.find();

    return allPosts;
  }

  async create(post) {
    const newPost = postModal.create(post);
    return newPost;
  }

  async delete(id) {
    const post = new postModal.findByIdAndDelete(id);

    return post;
  }
}

module.exports = new PostService();
