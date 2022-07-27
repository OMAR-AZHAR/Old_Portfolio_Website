import { useEffect, useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Education from "./Education";
// import Work from "./Work";
import Courses from "./Courses";
import Projects from "./Projects";
import "./styles.css";
import Contact from "./Contact";
import Typed from "typed.js";

export default function App() {
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const [education, seteducation] = useState(true);
  const [works, setwork] = useState(false);
  const [courses, setcourses] = useState(false);
  const [projects, setprojects] = useState(false);
  const [opennav, setnav] = useState(false);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Web Dev ✔️",
        "Full-Stack Engineer",
        "Front-End (React) Dev",
        "Software Engineer"
      ],
      startDelay: 0,
      typeSpeed: 85,
      backSpeed: 50,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: false,
      autoInsertCss: true,
      cursorChar: "|"
    });
    return () => {
      typed.destroy();
    };
  }, []);
  const el = useRef(null);
  function SetAllFalse() {
    seteducation(false);
    setwork(false);
    setcourses(false);
    setprojects(false);
  }
  function ChangeState(function1, state1) {
    SetAllFalse();
    function1(state1);
  }
  return (
    <div className="App">
      <div className="navbar-option-mobile bg-new">
        <div className="d-flex flex-row justify-content-between">
          <span className="brand-name d-flex align-items-center py-3">
            Omar A. Malik
          </span>
          <div className="bars mx-2" onClick={() => setnav(!opennav)}></div>
        </div>
      </div>
      <nav
        className={
          !opennav
            ? "d-flex bg-new navbar-new flex-rows px-9 py-5 transition-all"
            : "d-flex bg-new navbar-fixed-new flex-rows px-9 py-5 transition-all "
        }
      >
        <span className="brand-name">OAM</span>
        <div className="d-flex flex-rows">
          <a
            onClick={() => setnav(false)}
            style={{ textDecoration: "none" }}
            href="#home"
          >
            {" "}
            <span className="mx-4 nav-items">Home</span>{" "}
          </a>
          <AnchorLink
            onClick={() => setnav(false)}
            style={{ textDecoration: "none" }}
            href="#About"
          >
            <span className="mx-4 nav-items">About</span>
          </AnchorLink>
          <AnchorLink
            onClick={() => setnav(false)}
            style={{ textDecoration: "none" }}
            href="#Resume"
          >
            <span className="mx-4 nav-items">Resume</span>{" "}
          </AnchorLink>
          {/* <span className="mx-4 nav-items">Testemonials</span> */}
          <AnchorLink
            onClick={() => setnav(false)}
            style={{ textDecoration: "none" }}
            href="#contactme"
          >
            <span className="mx-4 nav-items">Contact</span>{" "}
          </AnchorLink>
        </div>
      </nav>
      <div className="herosection px-10 py-2" id="home">
        <div className="herosection2 row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex flex-column justify-content-center Im-text-section">
              <span className="Im-text">
                Hello, I'm{" "}
                <span className="name-Im-text">OMAR AZHAR MALIK</span>
              </span>
              <span
                className="Im-text-enthusiastic py-2"
                ref={el}
                style={{ minHeight: "79px" }}
              >
                {/* Web Dev ✔️ */}
              </span>
              <span className="Im-text-subheading" style={{ color: "red" }}>
                <b>
                  {" "}
                  * This was an Old Abandaned Portfolio. Visit linkedin{" "}
                  <a href="https://github.com/OMAR-AZHAR" target="_blank">
                    GitHub Profile{" "}
                  </a>{" "}
                  instead *
                </b>{" "}
              </span>
              <div className="d-flex flex-row justify-content-center mt-5">
                {/* <AnchorLink
                  style={{ textDecoration: "none" }}
                  href="#contactme"
                >
                  <button className="btn-hire-me">Recruit</button>
                </AnchorLink> */}
                <a
                  style={{ textDecoration: "none" }}
                  href="https://www.linkedin.com/in/omar-a-malik/"
                  target="_blank"
                  className="btn-resume-me"
                >
                  Get CV
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-6 col-sm-12">
            {/* <img
                className="img-fluid custom-img"
                alt="hero"
                src="https://res.cloudinary.com/omara/image/upload/v1642568790/me_uin837.jpg"
              /> */}
          </div>
        </div>
        <br />
        <br />
      </div>{" "}
      {
        // End of hero section
      }
      <div className="about-me-section aboutme-inside my-5" id="About">
        <div className="d-flex flex-column">
          <span className="about-me-text">About Me</span>
          <span className="why-text-sub">Why Hire Me?</span>
          <div className="row justify-content-center my-5 shadow-lg">
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
              <lottie-player
                className="lottie-1"
                src="https://assets7.lottiefiles.com/packages/lf20_tZShd4.json"
                background="transparent"
                speed="0.6"
                style={{ width: "500px", height: "500px" }}
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex py-5 flex-column">
              <span className="some-text-about-me">
                A professional `self-learner` with a background in Software
                Engineering - worked on techs like ReactJS, NodeJS, MySQL, PHP,
                and Bootstrap - with a good command of Design Patterns.
              </span>
              <span className="few-highlights">
                <span className="few-text">Few Highlights</span>
                <span className="few-list">
                  <ul>
                    <li>Full-Stack Developement.</li>

                    <li>Front-End React.JS Development.</li>
                    <li>
                      Backend developement (SQL, Node.JS, PHP, CORS, EXPRESSJS).
                    </li>
                    <li>
                      Database Engineer (MS SQL SERVER, ORACLE, MONGODB, MYSQL).
                    </li>
                    <li>Content Specialist.</li>
                    <li>Docker, AWS.</li>

                    <li>SEO.</li>
                  </ul>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* End of About Me Section */}
      <div className="resume-outer-section d-flex flex-column" id="Resume">
        <span className="about-me-text">Resume</span>
        <span className="why-text-sub">Formal Details</span>
        <div
          className="resume-new-section row "
          style={{ width: "70%", marginInline: "auto" }}
        >
          <div className="col-lg-4 col-md-4 col-sm-12 resume-left-section px-0 shadow-lg d-flex flex-row">
            <div className="d-flex flex-column bg-new text-white">
              <span className="icons-span">
                <i className="fas fa-user-graduate"></i>
              </span>
              <span className="icons-span">
                <i className="fas fa-briefcase"></i>
              </span>
              <span className="icons-span">
                <i className="fas fa-laptop-code"></i>
              </span>
              {/* <span className="icons-span">
                <i className="fas fa-tasks"></i>
              </span> */}
            </div>
            <div className="d-flex flex-column">
              <span
                className={
                  education === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(seteducation, true);
                }}
              >
                Education
              </span>
              {/* <span
                className={
                  works === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setwork, true);
                }}
              >
                Work
              </span> */}
              <span
                className={
                  courses === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setcourses, true);
                }}
              >
                Courses
              </span>
              <span
                className={
                  projects === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setprojects, true);
                }}
              >
                Projects
              </span>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 resume-right-section">
            {education === true && <Education />}
            {/* {works === true && <Work />} */}
            {courses === true && <Courses />}
            {projects === true && <Projects />}
          </div>
        </div>
        <br></br> <br></br> <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br />
      </div>
      <div className="contact-me-part" id="contactme">
        <div className="relative-bg">
          <div className="contact-inner-part d-flex flex-column">
            <br />
            <br /> <br /> <br /> <br /> <br /> <br />
            <span className="about-me-text">Contact Me</span>
            <span className="why-text-sub mb-5"> Feel Free to Contact</span>
            <Contact />
            <br /> <br /> <br /> <br /> <br /> <br /> <br />
          </div>
        </div>
      </div>
    </div>
  );
}
