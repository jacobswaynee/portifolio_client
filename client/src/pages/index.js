import React from "react";
import { screens } from "../utilities/screenUtis";

function Portfolio () {
  const mapAllScreens = () => {
    return screens.map((screen) =>
      screen.component ? (
        <screen.component
          screenName={screen.screen_name}
          key={screen.screen_name}
          id={screen.screen_name}
        />
      ) : (
        <div key={screen.screen_name}></div>
      )
    );
  };
  return <div className='portfolio-container'>{mapAllScreens()}</div>;
}
export default Portfolio;
