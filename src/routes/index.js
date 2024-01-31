const express = require('express');
const router = express.Router();
const commonRoutes = require('./CommonRoutes');

router.use('/api', commonRoutes);

module.exports = router;
