const mongoose = require('mongoose');

const crashcourseSchema = new mongoose.Schema({
    liveclass : [
      {
          date : String,
          classes : [
              {
                  img : String,
                  name : String,
                  subject : String,
                  topic : String,
                  time : String
              }
          ]
      },
    ],
    testquiz : [
        {
            date : String,
            test : [
                {
                    topic : String,
                    time : String,
                    subject : String,
                    duration : String,
                }
            ]
        }
    ]
})

module.exports = mongoose.model('Crashcourse', crashcourseSchema);