const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('On posts');
});

module.exports = router;