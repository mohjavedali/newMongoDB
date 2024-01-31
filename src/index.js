const express = require('express');
const cors = require('cors');
const app = express();
const config = require('./config/config');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
require('dotenv').config();
const router = require('./routes/index');
app.use('/v1', router);

app.listen(4000, () => {
  console.log(`Server is running on port ${4000}`);
});