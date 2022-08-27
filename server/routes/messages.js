const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const Message = mongoose.model('Message');
var CryptoJS = require("crypto-js");
router.post('/message', async (req,res) => {
    const msg = req.body.text;
    var ciphertext = CryptoJS.AES.encrypt(msg, 'secret key 123').toString();
    const newmessage = new Message({
        sender: req.body.sender,
        text: ciphertext,
        conversationId: req.body.conversationId,
    });
    try{
        const savedMessage = await newmessage.save();
        res.status(200).json(savedMessage);
    } catch(err){
        res.status(500).json(err);
    }
});

router.get('/messages/:conversationId', async (req, res) => {
    await Message.find({
        conversationId : req.params.conversationId,
    }).then(messages => {
        res.status(200).json(messages);
    }).catch(err => {
        res.status(500).json(err);
    })
})

module.exports = router;

