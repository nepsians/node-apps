const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const docsRoute = require('./docs.route');
const carRoute = require("./cars.route")

const router = express.Router();

router.use('/auth', authRoute);
router.use('/users', userRoute);
router.use('/docs', docsRoute);
router.use('/cars', carRoute)

module.exports = router;
