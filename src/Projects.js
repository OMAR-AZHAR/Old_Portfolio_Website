import React from "react";

export default function Projects() {
  return (
    <>
      <div className="d-flex flex-column">
        {/* Degree 1 below */}
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">
              Secure E-Voting System for Cooperative Societies
            </span>
            <span className="description-position">
              <ul>
                <li>
                  An A-grade self-made Web-based Secured Voting Platform as my
                  University's final year project. <br></br>{" "}
                  <b>Technologies:</b> ReactJS, Bootstrap, PHP, JavaScript,
                  MySQL, with security services at application layer.
                </li>
                <li>
                  <a target="_blank" href="https://fyp-ui.netlify.app/">
                    Visit Site
                  </a>
                </li>
              </ul>
            </span>
          </div>
          <div>
            <span className="year-passedout">2021-2022</span>{" "}
          </div>
        </div>
        {/* Degree 2 below */}
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">Twin Chat App</span>
            <span className="description-position">
              <ul>
                <li>
                  A chat application using react context API which can send
                  messages and images. Initially, try the credentials listed
                  below, Username: Omar123 pass: 000222aaa <br></br>{" "}
                  <b>Technologies:</b> ReactJS, Context Api, CSS, HTML..
                </li>
                <li>
                  <a target="_blank" href="http://chat-app.6te.net/">
                    Visit Site
                  </a>
                </li>
              </ul>
            </span>
          </div>
          <div>
            <span className="year-passedout">2021</span>{" "}
          </div>
        </div>
        {/* Degree 2 below */}
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">Ocean of Books</span>
            <span className="description-position">
              <ul>
                <li>
                  First Web project to buy, sell or read books under a single
                  online platform. (not hosted)
                  <br></br> <b>Technologies:</b> Html, CSS, Bootstrap, JQuery,
                  PHP, SQL, SASS, Jquery, AJAX.
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://github.com/OMAR-AZHAR/Ocean-of-Books"
                  >
                    Visit Site
                  </a>
                </li>
              </ul>
            </span>
          </div>
          <div>
            <span className="year-passedout">2019</span>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
