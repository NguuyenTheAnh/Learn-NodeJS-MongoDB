const express = require('express');
const path = require('path');
require('dotenv').config();
const mongoose = require('mongoose');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');

const app = express();
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;

// config template engine
configViewEngine(app);

// define route
app.use('/', webRoutes);

// test 

const kittySchema = new mongoose.Schema({
    name: String
});
const Kitten = mongoose.model('Kitten', kittySchema);
const silence = new Kitten({ name: `Anh's Silence` });
silence.save();

(async () => {
    try {
        await connection();
        app.listen(port, hostname, () => {
            console.log(`Backend zero app listening on port ${port}`)
        });
    } catch (error) {
        console.log('>>> Error connect to DB: ', error);
    }
})();
