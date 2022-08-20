import React, {useState, useEffect} from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollServices'
import Animations from '../../utilities/Animations'
import './style.css'

import jsonData from '../../data/experience.json';
import ResumeSideBar from "../../components/ResumeSideBar";
import ResumeDetails from "../../components/ResumeDetails";

const Resume = (props) => {
  const [data] = useState(jsonData);
  const [details, setDetails] = useState(jsonData.resume[0]);
  const [selectedBullet, setSelectedBullet] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      id={props.id || ""}>
      </div>
    );
  };

  useEffect(() => {
    // console.log(data);
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  const handleCarousal = (index) => {
    setSelectedBullet(index);
    setDetails(jsonData.resume[index]);
  };
  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"}/>
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icon"></div>
              <div className="bullets">
                {data.resume.map((item, index) => (
                  <ResumeSideBar
                    index={index}
                    key={index}
                    data={item}
                    selectedBullet={selectedBullet}
                    handleCarousal={handleCarousal}
                  />
                ))}
              </div>
            </div>
          </div>
          <ResumeDetails data={details}/>
        </div>
      </div>
    </div>
  );
};
export default Resume;

