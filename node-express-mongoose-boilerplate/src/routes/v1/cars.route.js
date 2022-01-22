const express = require("express");

const carsContorller = require("../../controllers/cars.controller")

const router = express.Router();

router.get('/', carsContorller.getCars);

router.route('/:carId')
    .get(carsContorller.getCarDetails)
    .delete(carsContorller.deleteCar)

router.route('/user/:userId')
    .get(carsContorller.getUserCar)
    .post(carsContorller.insertCar)

module.exports = router;