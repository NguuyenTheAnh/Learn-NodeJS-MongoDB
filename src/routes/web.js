const express = require('express');
const router = express.Router();
const { getHomePage, getABC, getAnh, postCreateUser, getCreatePage } = require('../controllers/homeController');

router.get('/', getHomePage)
router.get('/abc', getABC)
router.get('/anh', getAnh)

// create page
router.get('/create', getCreatePage);
router.post('/create-user', postCreateUser)

module.exports = router;