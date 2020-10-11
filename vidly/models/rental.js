const Joi = require('joi');
const mongoose =  require('mongoose');
const { genreSchema } = require('./genre');

const rentalSchema = new mongoose.Schema({
    customer:{
        type: new mongoose.Schema({
            name: {
                type: String,
                required: true,
                minlength: 5,
                maxlength: 50
            },
            isGold: {
                type: Boolean,
                default: false
            },
            phone: {
                type: Number,
                required:true,
                minlength: 8,
                maxlength: 10
            },
        }),
        required: true
    },
    movie: {
        type: new mongoose.Schema({
            title: {
                type: String,
                required: true,
                minlength: 5,
                maxlength: 100
            },
            dailyRentalRate:{
                type: Number,
                required: true,
                min: 0,
                max: 255
            }
        }),
        required: true
    },
    dateOut: {
        type: Date,
        required: true,
        default: Date.now
    },
    dateRequired:{
        type: Date,
    },
    rentalFee:{
        type: Number,
        min: 0
    }
});

const Rental = mongoose.model('Rental', rentalSchema);

function validateRental(rental) {
    const schema = {
        customerId: Joi.string().required(),
        movieId: Joi.string().required(),
        dateOut: Joi.date().required()
    };

    return Joi.validate(rental, schema);
}

module.exports.Rental = Rental;
module.exports.validate = validateRental;