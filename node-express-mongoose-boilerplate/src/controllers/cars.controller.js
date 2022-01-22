const httpStatus = require('http-status');
const { User } = require('../models');
const Car = require('../models/cars.model');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');

const insertCar = async (req, res, next) => {
    const {userId} = req.params;

    const newCar = await new Car(req.body);

    const user = await User.findById(userId);

    // const car = {...req.body, seller: {...user}}
  
    newCar.seller = user;
    // const newCar = await Car.create(car);
    await newCar.save()

    const customObj = {_id: newCar.id}

    console.warn(customObj)
    // return

    user.cars.push(customObj);
    await user.save();
    
    res.status(httpStatus.OK).send(newCar)
    
}

const getCars = catchAsync(async (req, res) => {
    const car = await Car.find();

    res.status(httpStatus.OK).send(car)
})

const getUserCar = async(req, res)=>{
    const {userId} = req.params;
    const userWithCar = await User.findById(userId).populate('cars');

    console.warn(userWithCar)
    res.status(200).send(userWithCar)
}

const getCarDetails = async(req, res) => {
    const {carId} = req.params;
    const carDetails = await Car.findById(carId)

    res.status(200).send(carDetails);
}

const deleteCar = catchAsync(async(req, res)=>{
    const {carId} = req.params;

    const car = await Car.findById(carId);
    const user = User.findById(car.seller);

    await car.remove();

    await User.findByIdAndUpdate({ _id: car.seller}, { $pull: {"cars": carId }}, {new: true})

    // await user.save();
    
    res.status(200).send(car)
})

module.exports = {
    getCars,
    insertCar,
    getUserCar,
    getCarDetails,
    deleteCar
}

