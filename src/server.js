const express = require('express');
const path = require('path');
require('dotenv').config();
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

// test connection
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
