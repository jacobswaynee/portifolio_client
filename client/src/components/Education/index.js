import React from 'react';

function ResumeHeading(props) {
  const { data } = props;
  return (
    <div className="resume-heading">
      <div className="resume-main-heading">
        <div className="heading-bullet"></div>
        <span>{data.heading ? data.heading : " "}</span>
         {data.fromDate && data.toDate ? (
          <div className="heading-date">
            {data.fromDate + "-" + data.toDate}
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="resume-sub-heading">
        <span>{data.subHeading ? data.subHeading : " "}</span>
      </div>
      <div className="resume-heading-description">
        <span>{data.description ? data.description : " "}</span>
      </div>
    </div>
  );
}
export default ResumeHeading;