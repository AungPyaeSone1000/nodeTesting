const express = require('express');
const router = express.Router();

// Services Page
router.get('/', (req, res) => {
  res.render('services');
});

module.exports = router;
