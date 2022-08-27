const express = require('express');
const path = require('path');

const mongoose = require('mongoose')
const Razorpay = require('razorpay')

const shortid = require('shortid');
const request = require('request')

//razorpay
const razorpay = new Razorpay({
    key_id : 'rzp_test_E4LTFhCrl5VPfL',
    key_secret : 'QriklhQD4ezYd6VYrsKAjYkJ'
});

//mongodb data save
const paymentDataSchema = new mongoose.Schema({}, { strict: false });
const PaymentData = mongoose.model('PaymentData', paymentDataSchema);


exports.paymentController = async(req,res) => {
    const {amount, currency} = req.body;
    const payment_capture = 1;
    const options = {
        amount : amount*100, 
        currency, 
        receipt : shortid.generate() , 
        payment_capture
    }
    try {
		const response = await razorpay.orders.create(options)
		console.log(response)
		res.status(200).json(response.id)
	} catch (error) {
		console.log(error)
	}
}

exports.captureController = async(req, res) => {
    try{
        return request(
          {
            method : "POST",
            url : `https://rzp_test_E4LTFhCrl5VPfL:QriklhQD4ezYd6VYrsKAjYkJ@api.razorpay.com/v1/payments/${req.params.paymentId}/capture`,
            form:{
              amount : req.body.amount *100,
              currency: "INR"
            },
          },
          async function(err,response,body){
            if(err){
              return res.status(500).json({
                message: "Something error!s"
              })
            }
            const payment = JSON.parse(body);
            const pay = new PaymentData(payment);
            pay.save();
            return res.status(200).json(body)
          }
        )
      }
      catch(err){
        return res.status(500).json({
          message: err.message
        })
      }
}