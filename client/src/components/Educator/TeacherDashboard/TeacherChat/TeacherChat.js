import React, { useEffect, useRef, useState } from "react";
import TeacherSidebar from "../../../common/Sidebar/TeacherSidebar";
import SearchIcon from "@material-ui/icons/Search";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import SettingsOutlined from "@material-ui/icons/SettingsOutlined";
import "./TeacherChat.css";
import TeacherContact from "../../../common/TeacherContacts/TeacherContact";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SendIcon from "@material-ui/icons/Send";
import { IconButton, MenuItem } from "@material-ui/core";
import MessageThread from "../../../common/MessageThread/MessageThread";
import { io } from "socket.io-client";
import Menu from "@material-ui/core/Menu";
import { useSelector } from "react-redux";
import {
  chatContact,
  chatMessages,
  getStudent,
  sendMessage,
} from "../../../../services/api";
const ITEM_HEIGHT = 48;

function TeacherChat({educator}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [leftShow, setLeftShow] = useState(true);
  const [rightShow, setRightShow] = useState(true);
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [friend, setFriend] = useState(null);
  const socket = useRef();
 // const student_id = "611a432f7559b9b3522dbf27";
  const scrollRef = useRef();
  const student = useSelector((state) => state.auth);
  console.log(student);
  useEffect(() => {
    if (window.screen.width < 1011) setRightShow(false);
    socket.current = io("/");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addStudent", educator._id);
  }, [educator._id]);

  useEffect(async () => {
    try {
      const contact = await chatContact(educator._id);
      setConversations(contact.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(async () => {
    // await fetch("/messages/" + currentChat?._id)
    //   .then((res) => res.json())
    //   .then((msg) => setMessages(msg))
    //   .catch((err) => console.log(err));
    const msgData = await chatMessages(currentChat?._id);
    setMessages(msgData.data);

    const friendId = currentChat?.members.find((m) => m !== educator._id);
    try {
      const friendData = await getStudent(friendId);
      setFriend(friendData.data);
    } catch (error) {
      console.log(error);
    }
  }, [currentChat]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behaviour: "smooth" });
  }, [messages]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newMessage !== "") {
      const message = {
        sender: educator._id,
        text: newMessage,
        conversationId: currentChat._id,
      };

      const receiverId = currentChat.members.find(
        (member) => member !== educator._id
      );

      socket.current.emit("sendMessage", {
        senderId: educator._id,
        receiverId,
        text: newMessage,
      });
      // await fetch("/message", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(message),
      // })
      //   .then((res) => res.json())
      //   .then((savemsg) => setMessages([...messages, savemsg]))
      //   .catch((err) => console.log(err));
      try {
        const savemsg = await sendMessage(message);
        setMessages([...messages, savemsg.data]);
      } catch (error) {
        console.log(error);
      }
      setNewMessage("");
    }
  };
  const open = Boolean(anchorEl);

  return (
    <div className="teacher-chat">
      <TeacherSidebar />
      <div className="main-chat">
        <h1>Chat</h1>
        <div>
          <div
            className="l-main-chat"
            style={{ display: `${leftShow ? "block" : "none"}` }}
          >
            <div className="l-chat-header">
              <div className="chat-search">
                <SearchIcon style={{ marginRight: "3px" }} />
                <input type="text" placeholder="Search" />
              </div>
              <div className="l-chat-r-h">
                <AddCircleOutlineIcon className="l-chat-icon" />
                <SettingsOutlined className="s-chat-icon" />
              </div>
            </div>
            <div className="l-cont-list">
              {conversations.map((c) => {
                return (
                  <div
                    onClick={() => {
                      setCurrentChat(c);
                      if (window.screen.width < 1011) {
                        setLeftShow(false);
                        setRightShow(true);
                      }
                    }}
                  >
                    <TeacherContact
                      conversation={c}
                      currentStudent_id={educator._id}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className="r-main-chat"
            style={{ display: `${rightShow ? "block" : "none"}` }}
          >
            {currentChat ? (
              <div className="r-send-msg">
                <div className="r-main-header">
                  <div className="r-h-prof">
                    <img src={friend?.image} alt />
                    <div>
                      <h1>{friend?.name}</h1>
                      <p>Online</p>
                    </div>
                  </div>
                  <div className="r-h-src">
                    <SearchIcon className="r-h-icon" />
                    <IconButton
                      aria-label="more"
                      aria-controls="long-menu"
                      aria-haspopup="true"
                      onClick={handleClick}
                      className="r-h-icon"
                      id="revert-icon"
                    >
                      <MoreVertIcon style={{ fontSize: "30px" }} />
                    </IconButton>
                    <Menu
                      id="long-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={open}
                      onClose={handleClose}
                      PaperProps={{
                        style: {
                          maxHeight: ITEM_HEIGHT * 4.5,
                          width: "20ch",
                          marginTop: "70px",
                        },
                      }}
                    >
                      <MenuItem selected="Contact info">Contact info</MenuItem>
                      <MenuItem>Mute notifications</MenuItem>
                      <MenuItem>Clear messages</MenuItem>
                      <MenuItem>Delete chat</MenuItem>
                    </Menu>
                  </div>
                </div>
                <div className="main-msg-th">
                  {messages?.map((m, index) => {
                    return (
                      <div>
                        <MessageThread
                          message={m}
                          own={m.sender === educator._id}
                          id={index}
                        />
                      </div>
                    );
                  })}
                  <div className="bottom-chat" ref={scrollRef}>
                    {" "}
                  </div>
                </div>

                <div className="send-msg">
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      onChange={(e) => setNewMessage(e.target.value)}
                      value={newMessage}
                      placeholder="Write Message"
                    />
                    <button>
                      <SendIcon
                        style={{
                          marginTop: "10px",
                          marginRight: "10px",
                          cursor: "pointer",
                        }}
                      />
                    </button>
                  </form>
                </div>
              </div>
            ) : (
              <div className="no-convers">
                Open a conversation to start a chat...
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherChat;
