const Customer = require('../models/customer');
const aqp = require('api-query-params');

const createCustomerService = async (customerData) => {
    try {
        let customer = await Customer.create({
            name: customerData.name,
            address: customerData.address,
            phone: customerData.phone,
            email: customerData.email,
            description: customerData.description,
            image: customerData.image
        });
        return customer;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const createArrayCustomerService = async (arrCustomer) => {
    try {
        let results = await Customer.insertMany(arrCustomer);
        return results;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const getAllCustomersService = async (query) => {
    try {
        let results = null;
        if (query.limit && query.page) {
            let offset = (query.page - 1) * query.limit;
            const { filter, limit } = aqp(query);
            console.log(aqp(query));
            delete filter.page;
            results = await Customer.find(filter).skip(offset).limit(limit).exec();
        }
        else {
            const { filter } = aqp(query);
            results = await Customer.find(filter);
        }
        return results;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const updateCustomer = async (id, name, email, address) => {
    try {
        let results = await Customer.updateOne({ _id: id }, { name, email, address });
        return results;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const deleteACustomerService = async (id) => {
    try {
        let results = await Customer.deleteById(id);
        return results;
    } catch (error) {
        console.log(error);
        return null;
    }
}

const deleteArrayCustomersService = async (customersId) => {
    try {
        let results = await Customer.delete({
            _id: { $in: customersId }
        });
        return results;
    } catch (error) {
        console.log(error);
        return null;
    }
}

module.exports = {
    createCustomerService,
    createArrayCustomerService,
    getAllCustomersService,
    updateCustomer,
    deleteACustomerService,
    deleteArrayCustomersService,
}