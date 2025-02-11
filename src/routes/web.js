const express = require('express');
const router = express.Router();
const { getHomePage, getABC, getAnh } = require('../controllers/homeController');

router.get('/', getHomePage)

router.get('/abc', getABC)

router.get('/anh', getAnh)

module.exports = router;