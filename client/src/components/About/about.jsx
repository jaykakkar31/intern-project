import React from "react";
import Features from "../Batches/sections/Features";
import Footer from "../common/Footer";
import "./about.scss";

const About = () => {
  return (
    <div className="container-about">
      <div className="banner">
        <div className="head-text">
          <div className="head">
            <div className="head-inner">
              <span>Grow </span>your future with{" "}
            </div>
            <div className="head-inner">new methods on learning</div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="heading-top"> About us</div>
        <div className="content1">
          
          <div className="content-main">
              <p>
              Let's Learn & Grow With IEZAL</p>
                <p>
                IEZAL, founded in 2021, has come a long way from starting its journey from Rajasthan. 
                We are on a mission to provide the best quality education in the world. Our dedicated 
                team knows the importance of developing skills to achieve goals with confidence. 
                We are the first educational platform emphasising Daily Live Classes, an AI-enabled portal 
                that helps you see your performance growth via graph, quiz & test, and student monitoring.
                </p>
                <p>
                Vision
                IEZAL, from the beginning, have a passion for providing high-quality education and opportunities to every student without making it look like a regular monotonous class. We hope you enjoy our classes as much as we enjoy offering them to you. If you have any questions or feedback, please don't hesitate to contact us.
              </p>
            
              
          </div>
          <div className="about-pro">
              <Features/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
