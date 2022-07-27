import React from "react";
import "./education.css";
export default function Education() {
  return (
    <>
      <div className="d-flex flex-column">
        {/* Degree 1 below */}
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">
              COMSATS UNIVERSITY ISLAMABAD (CUI)
            </span>
            <span className="university-degree">
              Bachelor's of Science in Software Engineering (4 Years)
            </span>
            <span className="university-degree">CGPA: 3.34 (81.5%)</span>
            <span className="university-degree">
              Final Year Project GPA: 4 (90%)
            </span>
          </div>
          <div>
            <span className="year-passedout">2018-2022</span>{" "}
          </div>
        </div>
        {/* Degree 2 below */}
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">
              Army Burn Hall College for Boys Abbottabad
            </span>
            <span className="university-degree">
              Computer Sciences, High School (2 Years)
            </span>

            <span className="university-degree">Grade: A</span>
          </div>
          <div>
            <span className="year-passedout">2015-2017</span>{" "}
          </div>
        </div>

        {/* Degree 3 below */}
        {/* <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">
              Army Burn Hall College for Boys Abbottabad
            </span>
            <span className="university-degree">O'Levels</span>
            <span className="university-degree">
              Division: 1<sup>st</sup>
            </span>
          </div>
          <div>
            <span className="year-passedout">2012-2015</span>{" "}
          </div>
        </div> */}
      </div>
    </>
  );
}
