const express = require('express');
const router = express.Router();

router.route('/')
    .get((req, res) => {
      res.render(
        'temp'
      );
    });

module.exports = router;