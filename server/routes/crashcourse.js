const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Crashcourse = mongoose.model('Crashcourse');



router.post('/iitcrashcourse', (req,res) => {
    const crashCourse = new Crashcourse({
        liveclass : [
            {
                date : 'Today',
                classes : [
                    {
                        img : 'https://d3j0t7vrtr92dk.cloudfront.net/parentsquare/1540847738_TeacherTraining101.png?',
                        name : 'RobertWoges',
                        subject : 'Chemistry',
                        time : '10 am',
                        topic : 'Basic Fundamental of Chemistry',
                    },
                    {
                        img : 'https://d3j0t7vrtr92dk.cloudfront.net/parentsquare/1540847738_TeacherTraining101.png?',
                        name : 'RobertWoges',
                        subject : 'Chemistry',
                        time : '3 pm',
                        topic : 'Basic Fundamental of Chemistry',
                    },
                    {
                        img : 'https://d3j0t7vrtr92dk.cloudfront.net/parentsquare/1540847738_TeacherTraining101.png?',
                        name : 'RobertWoges',
                        subject : 'Chemistry',
                        time : '6 pm',
                        topic : 'Basic Fundamental of Chemistry',
                    },
                    {
                        img : 'https://d3j0t7vrtr92dk.cloudfront.net/parentsquare/1540847738_TeacherTraining101.png?',
                        name : 'RobertWoges',
                        subject : 'Chemistry',
                        time : '6 pm',
                        topic : 'Basic Fundamental of Chemistry',
                    },
                    {
                        img : 'https://d3j0t7vrtr92dk.cloudfront.net/parentsquare/1540847738_TeacherTraining101.png?',
                        name : 'RobertWoges',
                        subject : 'Chemistry',
                        time : '6 pm',
                        topic : 'Basic Fundamental of Chemistry',
                    },
                    {
                        img : 'https://d3j0t7vrtr92dk.cloudfront.net/parentsquare/1540847738_TeacherTraining101.png?',
                        name : 'RobertWoges',
                        subject : 'Chemistry',
                        time : '6 pm',
                        topic : 'Basic Fundamental of Chemistry',
                    },

                ]
            },
            {
                date : 'Tomorrow',
                classes : [
                    {
                        img : 'https://d3j0t7vrtr92dk.cloudfront.net/parentsquare/1540847738_TeacherTraining101.png?',
                        subject : 'Chemistry',
                        time : '10 am',
                        topic : 'Basic Fundamental of Chemistry',
                    },
                    {
                        img : 'https://d3j0t7vrtr92dk.cloudfront.net/parentsquare/1540847738_TeacherTraining101.png?',
                        subject : 'Chemistry',
                        time : '3 pm',
                        topic : 'Basic Fundamental of Chemistry',
                    },
                    {
                        img : 'https://d3j0t7vrtr92dk.cloudfront.net/parentsquare/1540847738_TeacherTraining101.png?',
                        subject : 'Chemistry',
                        time : '6 pm',
                        topic : 'Basic Fundamental of Chemistry',
                    },
                    {
                        img : 'https://d3j0t7vrtr92dk.cloudfront.net/parentsquare/1540847738_TeacherTraining101.png?',
                        subject : 'Chemistry',
                        time : '6 pm',
                        topic : 'Basic Fundamental of Chemistry',
                    },
                    {
                        img : 'https://d3j0t7vrtr92dk.cloudfront.net/parentsquare/1540847738_TeacherTraining101.png?',
                        subject : 'Chemistry',
                        time : '6 pm',
                        topic : 'Basic Fundamental of Chemistry',
                    },
                    {
                        img : 'https://d3j0t7vrtr92dk.cloudfront.net/parentsquare/1540847738_TeacherTraining101.png?',
                        subject : 'Chemistry',
                        time : '6 pm',
                        topic : 'Basic Fundamental of Chemistry',
                    },

                ]
            }
        ],
        testquiz : [
            {
                date : 'Today',
                test : [
                    {
                        topic:'Basic Fundamental of Organic Chemistry',
                         time:'10 am',
                         subject :'Chemistry',
                         duration : '1 hour',
                    },
                    {
                        topic:'Basic Fundamental of Organic Chemistry',
                         time:'12 pm',
                         subject :'Chemistry',
                         duration : '1 hour',
                    },
                    {
                        topic:'Basic Fundamental of Organic Chemistry',
                         time:'3 pm',
                         subject :'Chemistry',
                         duration : '1 hour',
                    },
                    {
                        topic:'Basic Fundamental of Organic Chemistry',
                         time:'3 pm',
                         subject :'Chemistry',
                         duration : '1 hour',
                    },
                    {
                        topic:'Basic Fundamental of Organic Chemistry',
                         time:'3 pm',
                         subject :'Chemistry',
                         duration : '1 hour',
                    },
                    {
                        topic:'Basic Fundamental of Organic Chemistry',
                         time:'6 pm',
                         subject :'Chemistry',
                         duration : '1 hour',
                    },
                ]
            },

            {
                date :'Tomorrow',
                test : [
                    {
                        topic:'Basic Fundamental of Organic Chemistry',
                         time:'10 am',
                         subject :'Chemistry',
                         duration : '1 hour',
                    },
                    {
                        topic:'Basic Fundamental of Organic Chemistry',
                         time:'12 pm',
                         subject :'Chemistry',
                         duration : '1 hour',
                    },
                    {
                        topic:'Basic Fundamental of Organic Chemistry',
                         time:'3 pm',
                         subject :'Chemistry',
                         duration : '1 hour',
                    },
                    {
                        topic:'Basic Fundamental of Organic Chemistry',
                         time:'3 pm',
                         subject :'Chemistry',
                         duration : '1 hour',
                    },
                    {
                        topic:'Basic Fundamental of Organic Chemistry',
                         time:'3 pm',
                         subject :'Chemistry',
                         duration : '1 hour',
                    },
                    {
                        topic:'Basic Fundamental of Organic Chemistry',
                         time:'6 pm',
                         subject :'Chemistry',
                         duration : '1 hour',
                    },
                ]
            },
        ],
    });
    crashCourse.save();
});

router.get('/classupdate', (req,res)=>{
    Crashcourse.find()
    .then(data => {
        console.log(data);
        res.json(data)
    })
    .catch(err => {
        console.log(err);
    })
})

module.exports = router;