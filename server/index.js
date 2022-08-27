// require('rootpath')();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const contactRouter = require("./routes/contact");
const app = express();
const server = require("http").createServer(app);
const student = require("./routes/student");
const educatorRouter = require("./routes/educator");
const liveClassRouter = require("./routes/liveClasses");
const path = require("path");

const batchesRouter = require("./routes/batches");
const io = require("socket.io")(server, {
	cors: "*",
});
require("./models/courses");
require("./models/IITCrashCourse");
require("./models/syllabus");
require("./models/payment");
require("./models/Conversation");
require("./models/Message");
require("./models/Stud");
require("./models/calenderEvent");
require("dotenv").config({
	path: "./config/config.env",
});

let mongoDB = process.env.MONGO_URI;

mongoose
	.connect(mongoDB, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	})
	.then(() => console.log("Connected to MongoDB"))
	.catch((err) => console.error("could not connect to mongoDB"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
// app.use(express.static(path.join(__dirname, "client/build")));
// app.get("*", (req, res) => {
// 	res.sendFile(path.resolve(__dirname, "client/build", "index.html"));
// });

if (process.env.NODE_ENV === "development") {
	app.use(
		cors({
			origin: process.env.CLIENT_URL,
		})
	);
	app.use(morgan("dev"));
}

app.use("/students", student);
app.use("/contact", contactRouter);
app.use("/educator", educatorRouter);
app.use("/educator/liveclass", liveClassRouter);
app.use("/educator/batch", batchesRouter);
app.use(require("./routes/teacherprofile"));
app.use(require("./routes/payment"));
app.use(require("./routes/crashcourse"));
app.use(require("./routes/syllabus"));
app.use(require("./routes/conversations"));
app.use(require("./routes/messages"));
app.use(require("./routes/stud"));
app.use(require("./routes/calenderEvent"));
app.use(require("./routes/videoId"));
//socket
let users = [];

const addUser = (userId, socketId) => {
	!users.some((user) => user.userId === userId) &&
		users.push({ userId, socketId });
};

const removeUser = (socketId) => {
	users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
	return users.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
	//when connect
	console.log("a user connected");
	//take userId and socketId from user
	socket.on("addUser", (userId) => {
		addUser(userId, socket.id);
		io.emit("getUsers", users);
	});

	//send and get message
	socket.on("sendMessage", ({ senderId, receiverId, text }) => {
		const user = getUser(receiverId);
		io.to(user?.socketId).emit("getMessage", {
			senderId,
			text,
		});
	});

	//when disconnect
	socket.on("disconnect", () => {
		console.log("a user disconnected");
		removeUser(socket.id);
		io.emit("getUsers", users);
	});
});

const usersBroad = {};
const socketToRoom = {};
var RoomId;
let chatMessages = [];
let IdArr = [];

app.get("/api", (req, res) => {
	// console.log("ENT?ER");
	if (IdArr) {
		console.log(IdArr);
		res.send(IdArr);
	}
});

app.delete("/api/:id", (req, res) => {
	IdArr = [];
	res.send(IdArr);
});

app.post("/api/:id/:roomId", (req, res) => {
	// console.log(req.params.id);
	// console.log(req.params.roomId);
	usersBroad[req.params.id].push(req.params.roomId);
	// console.log(usersBroad[req.params.id]);
});

io.on("connection", (socket) => {
	console.log("connected");
	socket.on("roomID", (roomid) => {
		// console.log(roomid,"ROOMID");
		RoomId = roomid;
		if (IdArr.length === 0) {
			console.log(IdArr);
			IdArr.push(roomid);
		}

		if (usersBroad[roomid]) {
			usersBroad[roomid].push(socket.id);
		} else {
			usersBroad[roomid] = [socket.id];
		}
		console.log(usersBroad[roomid]);
		socket.emit("all users", usersBroad[roomid]);
	});

	socket.on("sending signal", (payload) => {
		console.log(payload.userToAdmin + "   sending signal");
		io.to(payload.userToAdmin).emit("user joined", {
			signal: payload.signal,
			callerID: payload.callerID,
		});
	});

	// socket.on("ssIdUser", (id) => {
	// 	const roomID = socketToRoom[socket.id];
	// 	users[roomID].push(id);
	// });

	socket.on("returning signal", (payload) => {
		console.log(JSON.stringify(payload.callerID) + "  returning signal");
		io.to(payload.callerID).emit("receiving returned signal", {
			signal: payload.signal,
			id: socket.id,
		});
	});

	socket.on("disconnect", () => {
		console.log("called");
		const roomID = socketToRoom[socket.id];
		let room = users[roomID];
		if (room) {
			room = room.filter((id) => id !== socket.id);
			users[roomID] = room;
		}
	});

	socket.on("prevMessage", (payload) => {
		console.log(payload);
		if (payload !== null) {
			chatMessages = [...payload];
		}
	});

	socket.on("newMessage", (payload) => {
		console.log(JSON.stringify(payload) + "  MESSAGE");
		chatMessages.push(payload);

		console.log(chatMessages);
		socket.broadcast.to(usersBroad[RoomId]).emit("allMessages", {
			//payload here is the current message
			payload: payload,
			chatMessages: chatMessages,
		});
		console.log(usersBroad[RoomId], "USERS");
		io.to(payload.name).emit("currentUserMessages", {
			payload: payload,
			chatMessages: chatMessages,
		});
		chatMessages = [];
	});
});

const port =
	process.env.NODE_ENV === "production" ? process.env.PORT || 80 : 4000;

server.listen(port, () => {
	console.log(`App running on port ${port}`);
});
