const express = require('express');
const router = express.Router();

// Projects Page
router.get('/', (req, res) => {
  res.render('project');
});

module.exports = router;
