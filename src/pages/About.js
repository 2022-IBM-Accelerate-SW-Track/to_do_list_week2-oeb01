import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/profile_pic.jpeg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Your Name</div>
            <div className="brief_description">
            Hello, I am a junior attending Carnegie Mellon University with a major in Information Systems and a minor in Human-Computer Interactions. I am a Korean-American, and I was born and raised in Fairfax, Virginia. I love to crochet, do puzzles, and dance!
            </div>
          </div>
        </div>
      </div>
    );
  }
}
