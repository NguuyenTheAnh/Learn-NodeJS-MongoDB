const express = require('express');
const { getAllUsers, postCreateUser, putUpdateUser, deleteUser } = require('../controllers/apiController');
const router = express.Router();

router.get('/users', getAllUsers);

router.post('/users', postCreateUser);

router.put('/users', putUpdateUser);

router.delete('/users', deleteUser);

module.exports = router;