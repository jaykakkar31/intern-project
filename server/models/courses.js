const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    specialist : String,
    image : String,
    about : String,
    languages : Array,
    followers : String,
    batches : String,
    dailyclasses : String,
    classes : [
        {
            day : String,
            class : [
                {
                    subject : String,
                    time : String,
                    topic : String, 
                }
            ],
        }
    ],
    bestclasses : [
        {
            day : String,
            class : [
                {
                    subject : String,
                    time : String,
                    topic : String, 
                }
            ],
        }
    ]
})

module.exports = mongoose.model('Course', courseSchema);