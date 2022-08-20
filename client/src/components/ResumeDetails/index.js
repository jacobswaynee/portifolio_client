import React from 'react';
import ResumeHeading from "../Education";
import WorkHistory from '../WorkExperince';
import ProgrammingSkills from '../ProgrammingSkills';
import Projects from '../Projects/Projects';
import Interests from '../Interests';

function ResumeDetails (props) {
  const { data } = props;
  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-bullet-details">
        <div className="resume-screen-container">
          {data.label === "Education"
            ? data.details.map((item) => <ResumeHeading data={item} />)
            : data.label === "Work History"
            ? data.details.map((item) => <WorkHistory data={item} />)
            : data.label === "Programming Skills"
            ? data.details.map((item) => <ProgrammingSkills data={item} />)
            : data.label === "Projects"
            ? data.details.map((item) => <Projects data={item} />)
            : data.label === "Interests"
            ? data.details.map((item) => <Interests data={item} />)
            : null}
        </div>
      </div>
    </div>
  );
}
export default ResumeDetails;