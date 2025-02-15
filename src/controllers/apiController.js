const User = require('../models/user');

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

module.exports = {
    getAllUsers,
    postCreateUser,
    putUpdateUser,
    deleteUser
}