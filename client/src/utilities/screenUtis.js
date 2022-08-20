import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import Resume from "../pages/Resume";
import Testimonial from "../pages/Testimonial";
import ContactMe from "../pages/ContactMe/";

export const screens = [
  {
    screen_name: "Home",
    component: Home,
  },
  {
    screen_name: "AboutMe",
    component: AboutMe,
  },
  {
    screen_name: "Resume",
    component: Resume,
  },
  {
    screen_name: "Testimonial",
    component: Testimonial,
  },
  {
    screen_name: "ContactMe",
    component: ContactMe,
  }
];
export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;
  for (let i = 0; i < screens.length; i++) {
    if (screens[i].screen_name === screen_name) return i;
  }
  return -1;
};