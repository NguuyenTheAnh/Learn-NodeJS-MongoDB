const express = require('express');
const router = express.Router();
const { getHomePage,
    postCreateUser, getCreatePage, getUpdatePage,
    postUpdateUser,
    getDeletePage,
    postDeleteUser
} = require('../controllers/homeController');

// home page
router.get('/', getHomePage)

// create page
router.get('/create', getCreatePage);
router.post('/create-user', postCreateUser);

// update page
router.get('/update/:id', getUpdatePage);
router.post('/update-user', postUpdateUser);

// delete page
router.get('/delete/:id', getDeletePage);
router.post('/delete-user', postDeleteUser);

module.exports = router;