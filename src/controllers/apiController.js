const User = require('../models/user');
const { uploadSingleFile, uploadMultipleFile } = require('../services/fileUpload');

const getAllUsers = async (req, res) => {
    const results = await User.find({});
    res.status(200).json({
        errorCode: 0,
        data: results
    });
}

const postCreateUser = async (req, res) => {
    const { email, name, city } = req.body;
    const user = await User.create({ email, name, city });
    res.status(200).json({
        errorCode: 0,
        data: user
    });
}

const putUpdateUser = async (req, res) => {
    const { email, name, city, userId } = req.body;
    let user = await User.updateOne({ _id: userId }, { email: email, name: name, city: city });
    res.status(200).json({
        errorCode: 0,
        data: user
    });
}

const deleteUser = async (req, res) => {
    const userId = req.body.userId;
    let results = await User.deleteOne({ _id: userId });
    res.status(200).json({
        errorCode: 0,
        data: results
    });
}

const postUploadSingleFile = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    let results = await uploadSingleFile(req.files.image);
    res.json(results);
}

const postMultipleFiles = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    let results = await uploadMultipleFile(req.files.images);
    res.json(results);
}

module.exports = {
    getAllUsers,
    postCreateUser,
    putUpdateUser,
    deleteUser,
    postUploadSingleFile,
    postMultipleFiles
}