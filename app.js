const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config');

// import routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

// CONNECT TO DB
mongoose.connect(
  process.env.DB_CONNECTION,
 { useNewUrlParser: true }, 
 () => console.log('connected to db')
);

app.listen(3000);