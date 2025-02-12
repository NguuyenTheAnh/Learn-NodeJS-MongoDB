const db = require('../config/database');

const getHomePage = async (req, res) => {
    res.render('home.ejs')
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

module.exports = {
    getHomePage,
    getABC,
    getAnh,
    postCreateUser,
    getCreatePage
}