const express = require('express');
const mongoose = require('mongoose');
const app = express();

// ROUTES
app.get('/', (req, res) => {
  res.send('On Home');
});

app.get('/posts', (req, res) => {
  res.send('On posts');
});

// CONNECT TO DB
mongoose.connect('mongodb+srv://test:r123@rest.gyput.mongodb.net/REST?retryWrites=true&w=majority',
 { useNewUrlParser: true }, 
 () => console.log('connected to db')
);

app.listen(3000);