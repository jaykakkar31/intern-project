import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FileBase from "react-file-base64";
import { ToastContainer, toast } from "react-toastify";

import "./liveClasses.css";
import { createClass } from "../../../../actions/liveClass";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import TeacherSidebar from "../../../common/Sidebar/TeacherSidebar";

const LiveClassForm = ({ educator }) => {
  const [classData, setClassData] = useState({
    title: "",
    desc: "",
    view: "",
    batch: "",
    date: "",
    time: "",
    thumbnail: "",
  });

  const dispatch = useDispatch();

  const clear = () => {
    setClassData({
      title: "",
      desc: "",
      view: "",
      batch: "",
      date: "",
      time: "",
      thumbnail: "",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const id = educator._id;
      if (
        !classData.title ||
        !classData.batch ||
        !classData.desc ||
        !classData.date ||
        // !classData.educator ||
        !classData.time ||
        !classData.thumbnail
      ) {
        toast.error("Every field is required");
      } else {
        dispatch(
          createClass({
            ...classData,
            name: educator.name,
            creator: educator._id,
          })
        );
        clear();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // if (!educator?.result?.name) {
  //   return <h1>Please Sign In to create your account</h1>;
  // }

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "55ch",
      },
    },
  }));

  const classes = useStyles();

  // return (
  //   <form className={classes.root} noValidate autoComplete="off">
  //     <TextField id="standard-basic" label="Standard" />
  //     <TextField id="filled-basic" label="Filled" variant="filled" />
  //     <TextField id="outlined-basic" label="Outlined" variant="outlined" />
  //   </form>
  // );

  return (
    <div className="educator-live">
      <TeacherSidebar />

      <div className="live">
        <ToastContainer />

        <h4>Live Classes</h4>
        <p>Stream Info</p>
        <div className="classArea">
          <form onSubmit={handleSubmit}>
            <TextField
              id="standard-basic"
              name="title"
              placeholder="Title"
              value={classData.title}
              onChange={(e) =>
                setClassData({ ...classData, title: e.target.value })
              }
              label="Title"
            />
            <TextField
              name="desc"
              id="standard-basic "
              placeholder="Desciption"
              value={classData.desc}
              onChange={(e) =>
                setClassData({ ...classData, desc: e.target.value })
              }
              label="Description"
            />

            <div className="single-line">
              <TextField
                name="batch"
                value={classData.batch}
                onChange={(e) =>
                  setClassData({ ...classData, batch: e.target.value })
                }
                className="single1"
                id="standard-basic"
                label="Select Batch"
              />
              <TextField
                name="date"
                value={classData.date}
                onChange={(e) =>
                  setClassData({ ...classData, date: e.target.value })
                }
                type="date"
                placeholder=""
                style={{paddingTop:'20px'}}
                className="single2"
                id="standard-basic"
               
              />
              <TextField
                name="time"
                value={classData.time}
                onChange={(e) =>
                  setClassData({ ...classData, time: e.target.value })
                }
                className="single3"
                id="standard-basic"
                style={{paddingTop:'20px'}}
                type="time"
              />
            </div>
            <label className="thumbnail-label">Thumbnail</label>
            <FileBase
              name="thumbnail"
              className="thumbnail"
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setClassData({ ...classData, thumbnail: base64 })
              }
              value={classData.thumbnail}
            />
            <button className="btn btn-primary btn-sm create" type="submit">
              Create class
            </button>
            <br />
            <Link to="/educator/batch">Create Batch</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LiveClassForm;
