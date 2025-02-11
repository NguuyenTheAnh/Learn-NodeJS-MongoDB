const getHomePage = (req, res) => {
    res.send('Hello World!')
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