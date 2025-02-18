const { createCustomerService, createArrayCustomerService, getAllCustomersService, updateCustomer, deleteACustomerService, deleteArrayCustomersService } = require("../services/customerServices");
const { uploadSingleFile } = require("../services/fileUpload");

const postCreateCustomer = async (req, res) => {

    let { name, address, phone, email, description } = req.body;
    let imageURL = "";
    // name: {
    //     type: String,
    //     require: true
    // },
    // address: String,
    // phone: String,
    // email: String,
    // image: String,
    // description: String

    if (!req.files || Object.keys(req.files).length === 0) {
        // do nothing
    }
    else {
        let results = await uploadSingleFile(req.files.image);
        imageURL = results.data.path;
    }
    let customerData = { name, address, phone, email, description, image: imageURL };
    let customer = await createCustomerService(customerData);

    res.json({
        EC: 0,
        data: customer
    });
}

const postCreateArrayCustomer = async (req, res) => {
    let customers = await createArrayCustomerService(req.body.customers);
    if (customers) {
        res.json({
            EC: 0,
            data: customers
        });
    }
    else {
        res.json({
            EC: -1,
            data: customers
        });
    }
}

const getAllCustomers = async (req, res) => {
    let customers = await getAllCustomersService(req.query);
    if (customers) {
        res.json({
            EC: 0,
            data: customers
        });
    }
    else {
        res.json({
            EC: -1,
            data: customers
        });
    }
}

const putUpdateCustomer = async (req, res) => {
    let { id, name, email, address } = req.body;
    let results = await updateCustomer(id, name, email, address);
    res.json({
        EC: 0,
        data: results
    });
}

const deleteACustomer = async (req, res) => {
    let id = req.body.id;
    let results = await deleteACustomerService(id);
    res.json({
        EC: 0,
        data: results
    });
}

const deleteArrayCustomers = async (req, res) => {
    let customersId = req.body.customersId;
    let results = await deleteArrayCustomersService(customersId);
    res.json({
        EC: 0,
        data: results
    });
}

module.exports = {
    postCreateCustomer,
    postCreateArrayCustomer,
    getAllCustomers,
    putUpdateCustomer,
    deleteACustomer,
    deleteArrayCustomers,
}