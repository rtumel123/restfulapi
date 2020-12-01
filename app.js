const express = require('express');

const app = express();

// ROUTES
app.get('/', (req, res) => {
  res.send('On Home');
});

app.listen(3000);