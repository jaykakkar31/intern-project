const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    startAt: "",
    endAt: "",
    timeId: "",
    dayId: "",
    title: "",
    description: "",
    aLabel: "",
    id : "",
});

const EventModel = mongoose.model("Event", eventSchema);
exports.EventModel = EventModel;
