import * as dotenv from 'dotenv';
dotenv.config()

import express = require('express');
import sequelize from "../etc/sequelize";
import {json} from "express";
import fileUpload from "express-fileupload";
import router from "../routes/index";
import errorMiddleware from "../src/shared/Infrastructure/Http/errorMiddleware";

try {
    const authenticate = async() => await sequelize.authenticate();
    authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

const app: express.Application = express();

app.use(json());
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : 'tmp',
    limits: {
        fileSize: 10000000, // Around 10MB
    },
    abortOnLimit: true,
}));

app.use('/api', router);
app.use(errorMiddleware);
const port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Avashop listening on port 3000!');
});

