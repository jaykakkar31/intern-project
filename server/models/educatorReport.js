const mongoose = require("mongoose");

const educatorReportSchema = new mongoose.Schema({
    educatorInfo : {
        type : Object
    },
    email : String,
    mobile : String,
    report : 
        {
            personalInfo : {
                correct : String,
                reason : String,
            },
            socialmediaInfo : {
                correct : String,
                reason : String,
            },
            educationInfo : {
                correct : String,
                reason : String,
            },
            experienceInfo : {
                correct : String,
                reason : String,
            },
            resumeInfo : {
                correct : String,
                reason : String,
            },
            videoInfo : {
                correct : String,
                reason : String,
            }
        } 
});


const AdminReport = mongoose.model("AdminReport", educatorReportSchema);

exports.AdminReport = AdminReport;
