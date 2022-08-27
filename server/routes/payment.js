const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Payment = mongoose.model('Payment');

router.post('/paycourse', (req,res)=>{
    const payment = new Payment({
        buycourse : [
           {
               discount : '20%',
               duration : '6 month',
               price : 20000,
           },
           {
            discount : '10%',
            duration : '3 month',
            price : 10000,
        },
        {
            discount : '30%',
            duration : '12 month',
            price : 100000,
        },
        {
            discount : '20%',
            duration : '24 month',
            price : 180000,
        }
        ],
        subjectcourse : [
            {
                subject : 'Physics',
                duration : '3 Month',
                price : '5000'
            },
            {
                subject : 'Chemistry',
                duration : '3 Month',
                price : '4000'
            },
            {
                subject : 'Maths',
                duration : '3 Month',
                price : '6000'
            }
        ]

    });
    payment.save();
})

router.get('/getpaymentdata', (req, res) => {
    Payment.find()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        console.log(err);
    })
})
module.exports = router;