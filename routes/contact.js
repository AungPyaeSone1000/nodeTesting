const express = require('express');
const router = express.Router();

// Contact Page
router.get('/', (req, res) => {
  res.render('contact');
});

module.exports = router;
