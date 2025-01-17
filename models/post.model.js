const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  firstName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = model('User', userSchema);
