import React from 'react'
import OwlCarousal from 'react-owl-carousel'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollServices';
import Animations from '../../utilities/Animations';
import './style.css';

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 500,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"Testimonial"}
        subHeading={"What My Clients Say About  Me"}
      />
      <section className="testimonial-section" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousal
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-qoute-left" />
                      "This guy is incredibly awesome, I hired him and when He
                      delivered, I honestly fell in love with the project. He is
                      indeed a great guy,."
                      <i className="fa fa-qoute-left" />
                    </p>
                    <ul className="stars lists-unstyled">
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img
                      src={require("../../assets/Testimonial/WhatsApp Image 2022-08-20 at 6.14.02 PM (2).jpeg").default}
                      alt="no internet connection"
                    ></img>
                    <h5>Tinashe Saruchera</h5>
                    <p>Graphic designer Circlecare</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-qoute-left" />
                      I patronized Mike and when He delivered, I honestly
                      fell in love with the project He is a very honest guy and
                      he delivers ontime.
                      <i className="fa fa-qoute-left" />
                    </p>
                    <ul className="stars lists-unstyled">
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img
                      src={require("../../assets/Testimonial/WhatsApp Image 2022-08-20 at 6.14.02 PM (3).jpeg").default}
                      alt="no internet connection"
                    ></img>
                    <h5>Wellington Magaraba</h5>
                    <p>CEO PanTech</p>
                  </div>
                </div>
              </div>
              {/*<div className="col-lg-12">*/}
              {/*  <div className="testi-item">*/}
              {/*    <div className="testi-comment">*/}
              {/*      <p>*/}
              {/*        <i className="fa fa-qoute-left" />*/}
              {/*        “I love that I have always been able to rely on you to talk with me about anything. You have been the best friend and the best colleague I’ve ever worked with, and I look forward to keeping in touch in the future.”*/}
              {/*        <i className="fa fa-qoute-left" />*/}
              {/*      </p>*/}
              {/*      <ul className="stars lists-unstyled">*/}
              {/*        <li>*/}
              {/*          <i className="fa fa-star"></i>*/}
              {/*        </li>*/}
              {/*        <li>*/}
              {/*          <i className="fa fa-star"></i>*/}
              {/*        </li>*/}
              {/*        <li>*/}
              {/*          <i className="fa fa-star"></i>*/}
              {/*        </li>*/}
              {/*        <li>*/}
              {/*          <i className="fa fa-star-half-alt"></i>*/}
              {/*        </li>*/}
              {/*        <li>*/}
              {/*          <i className="fa fa-star"></i>*/}
              {/*        </li>*/}
              {/*      </ul>*/}
              {/*    </div>*/}
              {/*    <div className="client-info">*/}
              {/*      <img*/}
              {/*        src={require("../../assets/Testimonial/WhatsApp Image 2022-08-20 at 6.14.03 PM.jpeg").default}*/}
              {/*        alt="no internet connection"*/}
              {/*      ></img>*/}
              {/*      <h5>Alois Muzeya</h5>*/}
              {/*      <p>Colleague</p>*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*</div>*/}
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-qoute-left" />
                      “Your new team is lucky to have you on board. Wishing you great success in your new role.”
                      <i className="fa fa-qoute-left" />
                    </p>
                    <ul className="stars lists-unstyled">
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img
                      src={require("../../assets/Testimonial/WhatsApp Image 2022-08-20 at 6.14.03 PM.jpeg").default}
                      alt="no internet connection"
                    ></img>
                    <h5>Alois T. Muzeya</h5>
                    <p>Colleague.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-qoute-left" />
                      “No matter where you work, you will always be my friend until the end. Good luck with your new job. I know you’re going to do great.”
                      <i className="fa fa-qoute-left" />
                    </p>
                    <ul className="stars lists-unstyled">
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img
                      src={require("../../assets/Testimonial/allan.jpeg").default}
                      alt="no internet connection"
                    ></img>
                    <h5>Allan Tinashe</h5>
                    <p>Colleague.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-qoute-left" />
                      “It was great to work with a colleague with a great sense of humor. I know your new coworkers will think the same of you. Best of luck.”
                      <i className="fa fa-qoute-left" />
                    </p>
                    <ul className="stars lists-unstyled">
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img
                      src={require("../../assets/Testimonial/WhatsApp Image 2022-08-20 at 6.14.02 PM.jpeg").default}
                      alt="no internet connection"
                    ></img>
                    <h5>Trevor Jacob</h5>
                    <p>CEO MP Investment</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-qoute-left" />
                      “Your decision-making ability is something that’s positively affected me. Now I feel like I can take the lead on tasks assigned to me. Your leadership and presence will be missed.”
                      <i className="fa fa-qoute-left" />
                    </p>
                    <ul className="stars lists-unstyled">
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img
                      src={require("../../assets/Testimonial/WhatsApp Image 2022-08-20 at 6.14.02 PM (1).jpeg").default}
                      alt="no internet connection"
                    ></img>
                    <h5>Tichaona Gurupira</h5>
                    <p>CEO Circlecare Medical Supply</p>
                  </div>
                </div>
              </div>
            </OwlCarousal>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img
          src={require("../../assets/Testimonial/shape-bg.png").default}
          alt="no internet connection"
        ></img>{" "}
      </div>
    </div>
  );
}
