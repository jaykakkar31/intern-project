const mongoose = require('mongoose');

const syllabusSchema = new mongoose.Schema({
    subjectsyllabus : [
        {
            subject : String,
            class : [
                {
                    title : String,
                    description : String,
                    duration : String,
                },
            ]
        }
    ]
   
});

module.exports = mongoose.model('Syllabus', syllabusSchema);

