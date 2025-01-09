const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

// http request

app.get('/api/get', (req, res) => {
  try {
    res.status(201).send('Hello world');
  } catch (error) {
    res.status(500).send(`Get so'rovida qandaydir xato bor Xato: ${error}`);
  }
});

app.post('/api/post', (req, res) => {
  try {
    const { firstName, email, password } = req.body;
    res
      .status(201)
      .send(
        `Hello ${firstName} your email is ${email} and password is ${password}`
      );
  } catch (error) {
    res.status(500).send(`Post so'rovida qandaydir xato bor Xato: ${error}`);
  }
});

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
