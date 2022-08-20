import React from 'react';


function ResumeSideBar(props) {
  const {index,data,selectedBullet,handleCarousal} = props;
  return (
    <div
      onClick={() => handleCarousal(index)}
      className={index === selectedBullet ? "bullet selected-bullet" : "bullet"}
      key={index}>
      <img
        className="bullet-logo"
        src={require(`../../assets/Resume/${data.logoSrc}`).default}
        alt="connection error"/>
      <span className="bullet-label">{data.label}</span>
    </div>
  );
}
export default ResumeSideBar;