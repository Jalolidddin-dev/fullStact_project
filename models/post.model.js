const { Schema, model } = require('express');

const userSchema = new Schema({
  firstName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = model('User', userSchema);
