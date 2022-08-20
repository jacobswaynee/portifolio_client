import React from 'react';

function ProgrammingSkills(props) {
  const { data } = props;
  return (
    <div className="skill-parents">
      <div className="heading-bullet"></div>
      <span>{data.skill}</span>
      <div className="skill-percentage">
        <div
          style={{ width: data.ratingPercentage + "%" }}
          className="active-percentage"
        ></div>
      </div>
    </div>
  );
}
export default ProgrammingSkills;