const express = require('express');
const path = require('path');
require('dotenv').config();
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const apiRoutes = require('./routes/api');
const connection = require('./config/database');
const fileUpload = require('express-fileupload');
// const { MongoClient } = require('mongodb');

const app = express();
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;

// config file upload
app.use(fileUpload());

// config template engine
configViewEngine(app);

// define route
app.use('/', webRoutes);
app.use('/v1/api', apiRoutes);

(async () => {
    try {

        // using mongoose
        await connection();

        // using mongodb driver
        // const url = process.env.DB_URI_WITH_DRIVER;// Connection URL
        // const client = new MongoClient(url);
        // const dbName = process.env.DB_NAME;// Database Name
        // await client.connect();
        // console.log('Connected successfully to server');
        // const db = client.db(dbName);
        // const collection = db.collection('customers');

        app.listen(port, hostname, () => {
            console.log(`Backend zero app listening on port ${port}`)
        });
    } catch (error) {
        console.log('>>> Error connect to DB: ', error);
    }
})();
