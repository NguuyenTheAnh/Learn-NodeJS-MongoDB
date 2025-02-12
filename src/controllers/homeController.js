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
module.exports = {
    getHomePage,
    getABC,
    getAnh
}