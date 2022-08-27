import { Button } from "@material-ui/core";
import React, { useState } from "react";
import TeacherSidebar from "../../../common/Sidebar/TeacherSidebar";
import BatchVideos from "../../../common/TeacherVideo/BatchVideos";
import DailyVideos from "../../../common/TeacherVideo/DailyVideos";
import "./TeacherVideos.css";
function TeacherVideos() {
  const [allVideo, setAllVideo] = useState(true);
  const AllVideos = () => {
    return (
      <div className="all-videos-t">
        <h3>Today</h3>
        <div className="teach-daily-videos">
          <DailyVideos />
          <DailyVideos />
          <DailyVideos />
          <DailyVideos />
        </div>
        <h3>Yesterday</h3>
        <div className="teach-daily-videos">
          <DailyVideos />
          <DailyVideos />
          <DailyVideos />
          <DailyVideos />
        </div>
        <h3>More Videos</h3>
        <div className="teach-daily-videos">
          <DailyVideos />
          <DailyVideos />
          <DailyVideos />
          <DailyVideos />
        </div>
      </div>
    );
  };
  const Batches = () => {
    return (
      <div className="batches-video">
        <BatchVideos batch="1" />
        <BatchVideos batch="2" />
        <BatchVideos batch="3" />
        <BatchVideos batch="4" />
        <BatchVideos batch="5" />
        <BatchVideos batch="6" />
      </div>
    );
  };
  return (
    <div className="educator-videos">
      <TeacherSidebar />
      <div className="teach-vid-main">
        <h1>Your Videos</h1>
        <Button
          onClick={() => setAllVideo(true)}
          style={{
            backgroundColor: `${
              allVideo ? "rgb(223, 240, 246)" : "rgb(234, 230, 230)"
            }`,
          }}
        >
          All Videos
        </Button>
        <Button
          onClick={() => setAllVideo(false)}
          style={{
            backgroundColor: `${
              allVideo ? "rgb(234, 230, 230)" : "rgb(223, 240, 246)"
            }`,
          }}
        >
          Batches
        </Button>
        {allVideo ? <AllVideos /> : <Batches />}
      </div>
    </div>
  );
}

export default TeacherVideos;
