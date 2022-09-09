import React from 'react';
import Typical from 'react-typical';
import ScrollService from '../../utilities/ScrollServices';
import "./style.css"

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/waynemike.jacx1/">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://github.com/jacobswaynee">
                <i className="fa fa-github-square"></i>
              </a>
              <a href="https://www.instagram.com/mike_w_jacob/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/wayne-mike-8a019522a/?locale=en_US">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Wayne Mike</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {""}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Junior Web Developer 💻",
                    1000,
                    "Junior Software Engineer 💻",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              I'm effective verbal and written communication <br />
              within the team and I can also be a team
              <br /> player and able to play a leadership role within the team.
              <br />
              I'm eager to learn new technologies and solutions and I love
              <br />
              open source and collaboration.
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.ScrollHandler.scrollToHireMe()}
            >
              Hire Me
            </button>
            <a href="resume.pdf" download="wayne mike nyakabau resume.pdf">
              <button className="btn highlighted-btn">Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

