import React from "react";
import Education from "./Education";
import "./work.css";
export default function Work() {
  return (
    <>
      <div className="work-inside-new mx-2 my-4">
        <div className="d-flex flex-column">
          <div className="d-flex flex-row justify-content-between ">
            <span className="company-name">Fresh Graduate</span>
            <span className="year-passedout">-</span>
          </div>
        </div>
        <div className="d-flex flex-column">
          <span className="position">-</span>
          <span className="description-position">
            <ul>
              <li>-</li>
            </ul>
          </span>
        </div>
      </div>
    </>
  );
}
