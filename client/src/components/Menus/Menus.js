import React from "react";
import "./Menus.css";
import Zoom from "react-reveal/Zoom";

import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
} from "react-icons/fc";
const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <Zoom>
            <div className="navbar-profile-pic">
              <img
                src="https://lh3.googleusercontent.com/pw/AIL4fc97a28kWUZ700FCEBCkUY9zFEIXxV8nE9jSCuz1YgGdQAlvxEr8hn1pzl34j4XiIm-Lo47X7js3mqXpQ5Hz_bdwQJOvIwzbY3zpN-39TzMlQk68fptgNTbPzg4qN14IqKrV7ro28-ksI-A-zOEf5GYsoSxZqH86HAKXPxCOHRF4mCiWZ2HGvM48pV_UlOFFJ99R2a8bC0LCCUw2TXqfC-urkULQIwvGiZjZ3iCBou6CPk_eo5_V1QwCYyQpgTbr3fLrKGbBPseZyTMmZOrSvDiTfhTFrWnGkY0x5wgKaO1SLg0T55zNxJ7etiiRZaTX8kLy6cJAgRfkA3BHajh3dIo0zirtXTv5Lu7QSCShFWMsW8T-OBJp4JntGVcisZeCRqAbjI7TkQYX9nIVID2nDAcqpK0reDSckAHte6o1Ey_0Tf3Pl8x4JkbKD00OIVNfopmBo8Up9ZItjpI1h__2WOBu9JDBMokgm5l17NN30cFVluYARjqdOSb8dzgKn5j9ASZd4-BqlUyiWAa--qugfqLr9MHmSDB4ktNkI6csQLZIK1L-rPW8eY9sKR8h7Z-Shc8Cy5i4lDUthXbF6vPjRgdrda71LBVSV5AFcsmOLSLv9BTk9dRXqjwXyzPTrZYAqOyD952GrkPoZKslr_X8LOqYJTiaXKOwbI0utyo6Lds7QsbBYnWQ0DJQAOBDVsQHTjeCIhHCgDGjZomYPRejJkX5y8QdZmu4JLo7wunNQTVQRRO69lg5ZsnHlllEwzdgRJeKDFr93zSbZ6KwexrMX5cEFZbubm2l_ruSPqfhjzBuAWt6Wn6tYIcy5a6_qKh8xMdgYl5kWPndR93f82ePhqIu2myqKeqmTI4-_Ae2d_JNPWpBVuBk6CmgnP0G-0B2S70ZPEjLLgPHU4x0ppjt2IZ-fjRGCQ8SRiTUMwiZEPS8jP0_H1aA392arUcoSQ=w611-h611-s-no?authuser=0"
                alt="profile pic"
              />
            </div>
          </Zoom>
          <Fade left>
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcHome />
                    Home
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcAbout />
                    About
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcReadingEbook />
                    Education
                  </Link>
                </div>

                <div className="nav-link">
                  <Link
                    to="techstack"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcBiotech />
                    Tech Stack
                  </Link>
                </div>

                <div className="nav-link">
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcVideoProjector />
                    Projects
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="work"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcPortraitMode />
                    Work Experince
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcBusinessContact />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </Fade>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcHome />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcAbout />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcReadingEbook />
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="techstack"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBiotech />
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcVideoProjector />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="work"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcPortraitMode />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBusinessContact />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;
