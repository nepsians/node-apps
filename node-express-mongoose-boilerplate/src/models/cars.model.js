
const mongoose = require('mongoose');
const { toJSON } = require('./plugins');
const User = require('./user.model');

const carSchema = mongoose.Schema({
    model:{
        type: String,
        required: true
    },
    make:{
        type: String,
        required: true
    },
    year:{
        type: Number,
        required: true
    },
    seller:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
    },
    {
    timestamps: true
    });

    // carSchema.pre('remove', function(next){
    //     var car = this;
    //     const user = User.findById(car.seller);

    //     user.update({
    //         cars: 
    //     })

    //     console.log("from car remove")
    //     next();
    // })

carSchema.plugin(toJSON);

const Car = mongoose.model('Car', carSchema);

module.exports = Car