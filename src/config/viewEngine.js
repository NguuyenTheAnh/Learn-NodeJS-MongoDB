const path = require('path');
const express = require('express');
const configViewEngine = (app) => {
    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'ejs');
    // config static files
    app.use(express.static(path.join(__dirname, '../public')));
    //config req body
    app.use(express.json()); // Used to parse JSON bodies 
    app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies
}
module.exports = configViewEngine;