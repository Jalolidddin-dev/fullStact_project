const { Schema, model } = require('mongoose');

const courseSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = model('Courses', courseSchema);
