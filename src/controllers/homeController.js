const User = require('../models/user');

const getHomePage = async (req, res) => {
    const results = await User.find({});
    res.render('home.ejs', { listUsers: results });
}

const getCreatePage = (req, res) => {
    res.render('create.ejs');
}
const postCreateUser = async (req, res) => {
    let { email, name, city } = req.body;
    await User.create({
        email: email,
        name: name,
        city: city
    });
    res.send('Create user successfully!');
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    const results = await User.findById(userId).exec();
    res.render('edit.ejs', { user: results });
}

const postUpdateUser = async (req, res) => {
    const { email, name, city, userId } = req.body;
    await User.updateOne({ _id: userId }, { email: email, name: name, city: city });
    res.redirect('/');
}

const getDeletePage = async (req, res) => {
    const userId = req.params.id;
    const results = await User.findById(userId).exec();
    res.render('delete.ejs', { user: results });
}

const postDeleteUser = async (req, res) => {
    const userId = req.body.userId;
    await User.deleteOne({ _id: userId });
    res.redirect('/');
}

module.exports = {
    getHomePage,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
    getDeletePage,
    postDeleteUser
}