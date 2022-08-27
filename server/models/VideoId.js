const mongoose = require("mongoose");

const VideoIdSchema = new mongoose.Schema({
	videoId: String
});
const videoId = mongoose.model("VideoId", VideoIdSchema);
exports.videoId = videoId;
