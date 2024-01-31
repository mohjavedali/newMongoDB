
const express = require('express');
const app = express();
const exampleController = require('./CommonRoutes');

app.use('/test', exampleController);