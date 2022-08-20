import React from 'react';

function Projects(props) {
  const { data } = props;
  return (
    <div className="resume-sub-heading">
      <div className="resume-main-heading">
        <div className="heading-bullet"></div>
        <span>{data.heading ? data.heading : ""}</span>
        <div></div>
      </div>
      <div className="resume-heading">
        <span>{data.subHeading ? data.subHeading : ""}</span>
      </div>
      <div className="resume-heading-description">
        <span>{data.description ? data.description : ""}</span>
      </div>
    </div>
  );
}
export default Projects;