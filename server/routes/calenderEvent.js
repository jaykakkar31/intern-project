const express = require("express");

const { EventModel } = require("../models/calenderEvent");

const router = express.Router();
router.post("/calenderevent", (req, res) => {
    console.log("CALEEEd");
    console.log(req.body);
    const newEvent = EventModel({
        startAt: req.body.startAt,
        endAt: req.body.endAt,
        title: req.body.title,
        description: req.body.description,
        timeId: req.body.timeId,
        dayId: req.body.dayId,
        aLabel: req.body.aLabel,
    });
    newEvent.save(() => {
        console.log("saved");
    });
    res.send("saved");
});

router.delete("/deleteevent", (req, res) => {
    console.log(req.body);
    EventModel.findByIdAndDelete({ _id: req.body._id }, (err) => {
        if (err) {
            console.log(err);
        } else {
            res.send("deleted");
        }
    });
});
router.patch("/updateevent", (req, res) => {
    EventModel.findByIdAndUpdate(
        {_id : req.body.id},
        {
            startAt: req.body.startAt,
            endAt: req.body.endAt,
            description: req.body.description,
            title: req.body.title,
            aLabel: req.body.aLabel,
        },
        
        (err,data)=>{
            console.log(data);
            if(err){
                console.log(err);
            }else{
                res.send("updated")
            }
        }
    );
});
router.get("/eventdetails", (req, res) => {
    EventModel.find({}, (err, foundEvent) => {
        console.log(foundEvent);
        res.send(foundEvent);
    });
});

module.exports = router;