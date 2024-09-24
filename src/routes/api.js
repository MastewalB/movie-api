const express = require('express');
const router = express.Router();
const { home, getMovieDetail } = require('../controller/api')

router.get('', home);

router.post('', getMovieDetail);

module.exports = router;