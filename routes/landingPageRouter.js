const express = require('express');
const router = express.Router();

const { getIndexData } = require('../controllers/landingPageController');

router.get('/', getIndexData);

module.exports = router;