const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const postModal = require('./models/post.model');

const app = express();
app.use(express.json());

app.use('/api/post', require('./routes/post.route.js'));



const PORT = process.env.PORT;

const DB_URL = process.env.DB_URL_MONGODB;

const connect = () => {
  try {
    mongoose.connect(DB_URL);
    console.log(`Connected to DB`);

    app.listen(PORT, () =>
      console.log(`Listen my backend -- http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};

connect();
