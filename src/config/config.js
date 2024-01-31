const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/mytestDB';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to the database');
    })
    .catch((err) => {
        console.error(`Error connecting to the database. \n${err}`);
});