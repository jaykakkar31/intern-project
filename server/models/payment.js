const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    buycourse : [
        {
            discount : String,
            duration : String,
            price : Number,
        }
    ],
    subjectcourse : [
        {
            subject : String,
            duration : String,
            price : Number,
        }
    ]
})

module.exports = mongoose.model('Payment', paymentSchema);