import React from "react";
import "./courses.css";
export default function Courses() {
  const value = [
    {
      text: "React.JS",
      percentage: 80
    },
    {
      text: "Javascript",
      percentage: 80
    },
    {
      text: "PHP",
      percentage: 80
    },
    {
      text: "Java",
      percentage: 80
    },
    {
      text: "Node.JS",
      percentage: 80
    },
    {
      text: "SQL",
      percentage: 80
    },
    {
      text: "Python",
      percentage: 80
    }
  ];
  return (
    <>
      <div>
        <div className="row">
          {value.map((value, index) => {
            return (
              <>
                <div className="col-lg-6 col-md-6 col-sm-12 my-2">
                  <span className="language">{value.text}</span>
                  <div className="progress-some">
                    <div
                      className="progress-new"
                      style={{ width: `${value.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
