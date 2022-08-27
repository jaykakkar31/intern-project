const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Syllabus = mongoose.model('Syllabus');


router.post('/classsyllabus', (req,res)=>{
    const syllabus = new Syllabus({
        subjectsyllabus : [
            {
                subject : 'Maths',
                class : [
                    {
                        title : 'Lorem ipsum',
                        description : 'Lorem ipsum dolor sit amet, consectetur',
                        duration : '3 month'
                    },
                    {
                        title : 'Lorem ipsum',
                        description : 'Lorem ipsum dolor sit amet, consectetur',
                        duration : '3 month'
                    },
                    {
                        title : 'Lorem ipsum',
                        description : 'Lorem ipsum dolor sit amet, consectetur',
                        duration : '3 month'
                    },
                    {
                        title : 'Lorem ipsum',
                        description : 'Lorem ipsum dolor sit amet, consectetur',
                        duration : '3 month'
                    }
                ]
            },
            {
                subject : 'Physics',
                class : [
                    {
                        title : 'Lorem ipsum',
                        description : 'Lorem ipsum dolor sit amet, consectetur',
                        duration : '3 month'
                    },
                    {
                        title : 'Lorem ipsum',
                        description : 'Lorem ipsum dolor sit amet, consectetur',
                        duration : '3 month'
                    },
                    {
                        title : 'Lorem ipsum',
                        description : 'Lorem ipsum dolor sit amet, consectetur',
                        duration : '3 month'
                    },
                    {
                        title : 'Lorem ipsum',
                        description : 'Lorem ipsum dolor sit amet, consectetur',
                        duration : '3 month'
                    }
                ]
            },
            {
                subject : 'Chemistry',
                class : [
                    {
                        title : 'Lorem ipsum',
                        description : 'Lorem ipsum dolor sit amet, consectetur',
                        duration : '3 month'
                    },
                    {
                        title : 'Lorem ipsum',
                        description : 'Lorem ipsum dolor sit amet, consectetur',
                        duration : '3 month'
                    },
                    {
                        title : 'Lorem ipsum',
                        description : 'Lorem ipsum dolor sit amet, consectetur',
                        duration : '3 month'
                    },
                    {
                        title : 'Lorem ipsum',
                        description : 'Lorem ipsum dolor sit amet, consectetur',
                        duration : '3 month'
                    }
                ]
            }
        ]
    })
    syllabus.save();
})

router.get('/coursesyllabus', (req,res)=>{
    Syllabus.find()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        console.log(err);
    })
})

module.exports = router;