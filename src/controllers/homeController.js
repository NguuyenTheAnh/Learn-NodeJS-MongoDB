const db = require('../config/database');
const { getAllUsers, getUserById, updateUser, deleteUser } = require('../services/CRUDServices');

const getHomePage = async (req, res) => {
    const results = await getAllUsers();
    res.render('home.ejs', { listUsers: results });
}
const getABC = (req, res) => {
    res.send('Hello Anh!')
}
const getAnh = (req, res) => {
    res.render('sample.ejs')
}

const getCreatePage = (req, res) => {
    res.render('create.ejs');
}
const postCreateUser = async (req, res) => {
    let { email, name, city } = req.body;
    db.query(
        `insert into users (email,name,city)
         values ($1,$2,$3);`,
        [email, name, city]
    );
    res.send('Create user successfully!');
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    const results = await getUserById(userId);
    res.render('edit.ejs', { user: results });
}

const postUpdateUser = async (req, res) => {
    const { email, name, city, userId } = req.body;
    await updateUser(email, name, city, userId);
    res.redirect('/');
}

const getDeletePage = async (req, res) => {
    const userId = req.params.id;
    const results = await getUserById(userId);
    res.render('delete.ejs', { user: results });
}

const postDeleteUser = async (req, res) => {
    const userId = req.body.userId;
    await deleteUser(userId);
    res.redirect('/');
}

module.exports = {
    getHomePage,
    getABC,
    getAnh,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
    getDeletePage,
    postDeleteUser
}