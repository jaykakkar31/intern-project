
const express = require("express");

const { Educator } = require("../model/educator");
const { AdminReport } =  require("../model/educatorReport"); 
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  "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"
)

exports.educatorVerificationController = async (req, res) => {
    Educator.find().exec(async (err, users) => {
        if(err){
            return res.send(400).json({error: "Something went wrong"})
        }
        else{
           // console.log(users);
            res.status(200).send(users);
        }
    });
} 
exports.userFindController = async (req, res) => {
    const id = req.params.id;
    try {
      const educator = await Educator.findById(id);
      res.send(educator);
    } catch (ex) {
      res.send(ex);
    }
  };

exports.addEducatorReport = async (req, res) => {
  const data = req.body;
  const emailData = {
    from: process.env.EMAIL_FROM,
    to: data.email,
    subject: "Your Report - ",
    html: `
            <h1>Hello ${data.educatorInfo.name}</h1>
            <h2>Welcome to IEZAL, thanks to applying in IEZAL as a Educator.</h2>
            <h2>Here is your report of your all information -  </h2>
            <br/>
            <h2>Your Personal Information</h2>
            <h3>FullName - ${data.educatorInfo.name} </h3>
            <h3>Email - ${data.email} </h3>
            <h3>Mobile Number - ${data.mobile} </h3>
            <h3>Current Address - ${data.educatorInfo.currentAdd} </h3>
            <h3>Permanent Address - ${data.educatorInfo.permanentAdd} </h3>
            <h3>District  - ${data.educatorInfo.district} </h3>
            <h3>State  - ${data.educatorInfo.state} </h3>
            <h3>Country  - ${data.educatorInfo.country} </h3>
            <h3>Pincode  - ${data.educatorInfo.pincode} </h3>
            <h2>Given Personal Information is ${data.report.personalInfo.correct==='Yes'?'Correct' : 'Incorrect'}</h2>
            <p>${data.report.personalInfo.reason}</p>
            <hr />
            <h2>Your Social Media Information</h2>
            <h3>Linkedin - ${data.educatorInfo.linkedin}</h3>
            <h3>YouTube - ${data.educatorInfo.youtube}</h3>
            <h3>Twitter - ${data.educatorInfo.twitter}</h3>
            <h3>Website - ${data.educatorInfo.website}</h3>
            <h2>Given Social Media Information is ${data.report.socialmediaInfo.correct==='Yes'?'Correct' : 'Incorrect'}</h2>
            <p>${data.report.socialmediaInfo.reason}</p>
            <hr />
            <h2>Your Education Information</h2>
            <h3>School - ${data.educatorInfo.school}  ${data.educatorInfo.schoolStart}-${data.educatorInfo.schoolEnd}</h3>
            <h3>University - ${data.educatorInfo.university}  ${data.educatorInfo.universityStart}-${data.educatorInfo.universityEnd}</h3>
            <h2>Given Education Information is ${data.report.educationInfo.correct==='Yes'?'Correct' : 'Incorrect'}</h2>
            <p>${data.report.educationInfo.reason}</p>
            <hr />
            <h2>Your Experience </h2>
            <h3>Organization - ${data.educatorInfo.experienceOrg}  ${data.educatorInfo.orgStart}-${data.educatorInfo.orgEnd}</h3>
            <h2>Given Experince Information is ${data.report.experienceInfo.correct==='Yes'?'Correct' : 'Incorrect'}</h2>
            <p>${data.report.experienceInfo.reason}</p>
            <hr />
            <h2>Your Resume </h2>
            <h2>Given Resume is ${data.report.resumeInfo.correct==='Yes'?'Correct' : 'Incorrect'}</h2>
            <p>${data.report.resumeInfo.reason}</p>
            <hr />
            <h2>Your Video </h2>
            <h2>Given Video is ${data.report.videoInfo.correct==='Yes'?'Correct' : 'Incorrect'}</h2>
            <p>${data.report.videoInfo.reason}</p>
            <hr />
            `,
  };
  sgMail
  .send(emailData)
  .then(async (sent) => {
    const report = new AdminReport(data);
    try {
      await report.save();
      return res.status(200).json({message : "Report Sent successfully"});
    } catch (err) {
      console.log(err);
      return res.json({ message: err.message });
    }
  })
  .catch((err) => {
    console.log(err);
    return res.status(400).json({
      success: false,
      errors: errorHandler(err),
    });
  });
}

exports.updateStarredMail = async (req, res) => {
  const id = req.params.id;
  const {starred} = req.body;
  console.log(req.body);
  let educator = await Educator.findById(req.params.id);
  // const id = educator._id;
  if (!educator) return res.status(400).send("User doesn't exists");
  educator.starred = starred;
  educator.save();
  res.status(200).json({message:'updated'});
}

exports.adminSentMessage = async (req, res) => {
  const id = req.params.id;
  const {sentReport} = req.body;
  console.log(req.body);
  let educator = await Educator.findById(req.params.id);
  // const id = educator._id;
  if (!educator) return res.status(400).send("User doesn't exists");
  educator.sentReport = sentReport;
  educator.save();
  res.status(200).json({message:'updated'});
}

exports.educatorVerified = async (req, res) => {
  const id = req.params.id;
  let educator = await Educator.findById(req.params.id);
  // const id = educator._id;
  if (!educator) return res.status(400).send("User doesn't exists");
  educator.personalInfo.verified = "true";
  educator.save();
  res.status(200).json({message:'updated'});
}