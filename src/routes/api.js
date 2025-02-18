const express = require('express');
const {
    getAllUsers, postCreateUser, putUpdateUser, deleteUser, postUploadSingleFile,
    postMultipleFiles
} = require('../controllers/apiController');
const { postCreateCustomer, postCreateArrayCustomer, getAllCustomers, putUpdateCustomer, deleteACustomer, deleteArrayCustomers } = require('../controllers/customerController');
const router = express.Router();

router.get('/users', getAllUsers);
router.post('/users', postCreateUser);
router.put('/users', putUpdateUser);
router.delete('/users', deleteUser);

router.post('/file', postUploadSingleFile);
router.post('/files', postMultipleFiles);

router.post('/customers', postCreateCustomer);
router.get('/customers', getAllCustomers);
router.post('/customers-many', postCreateArrayCustomer); // input: array customers
router.put('/customers', putUpdateCustomer);
router.delete('/customers', deleteACustomer);
router.delete('/customers-many', deleteArrayCustomers); // input: array customers


module.exports = router;