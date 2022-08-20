import React, {useEffect} from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollServices";
import Animations from "../../utilities/Animations";
import "./style.css";

export default function AboutMe (props) {
  let fadeInScreenHandler = (screen) => {
    if(screen.fadeInScreen !== props.id)
    return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
   ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description: " I am Junior Software Engineer.\n" +
        "                I'm highly dedicated fresher who's \n" +
        "                seeking a full-time, contract, permanent positions\n" +
        "                in IT department where I can lend my knowledge \n" +
        "                and apply my skills in the industry and also to grow\n" +
        "                in the organisation.\n" +
        "                I'm an adaptive individual who readily faces new challenge head on. \n" +
        "                My technical ability couple with my eagerness to learn makes me\n" +
        "                an asset to any team.",
    highlights: {
      bullets: [
        "Interactive Front End as per the design",
        "React and Vue.js",
        "Javascript",
        "HTML5 & CSS3",
        "Git",
        "JIRA",
        "Slack",
        "Managing database",
      ],
      heading: "More Other Skills:"
    }
  }
  const renderHighlights = () =>{
    return(
      SCREEN_CONSTSANTS.highlights.bullets.map((value, i)=>(
        <div className="highlight" key={i}>
          <div className="highlight-blob"></div>
          <span>{value}</span>
        </div>
        
      ))
    )
  }
  return (
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choosing Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">{SCREEN_CONSTSANTS.description}</span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlights()}
            </div>
            <div className="about-me-options">
            <button className="btn primary-btn" onClick = {() => ScrollService.ScrollHandler.scrollToHireMe()}>Hire Me</button>
              <a href='mikecv.pdf' download='wayne mike nyakabau mikecv.pdf'>
                <button className="btn highlighted-btn">Get Resume</button>
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}