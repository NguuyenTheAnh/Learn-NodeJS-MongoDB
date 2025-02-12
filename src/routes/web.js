const express = require('express');
const router = express.Router();
const { getHomePage, getABC, getAnh,
    postCreateUser, getCreatePage, getUpdatePage,
    postUpdateUser,
    getDeletePage,
    postDeleteUser
} = require('../controllers/homeController');

router.get('/', getHomePage)
router.get('/abc', getABC)
router.get('/anh', getAnh)

// create page
router.get('/create', getCreatePage);
router.post('/create-user', postCreateUser)

// update page
router.get('/update/:id', getUpdatePage);
router.post('/update-user', postUpdateUser);

// delete page
router.get('/delete/:id', getDeletePage);
router.post('/delete-user', postDeleteUser);

module.exports = router;