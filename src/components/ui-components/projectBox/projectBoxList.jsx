import React from "react";
import { Link } from "react-scroll";
// Scss
import "./projectBox.scss";

function projectBoxList(props) {
  const alignVal = parseInt(props.value);
  console.log(typeof alignVal);
  return (
    <div>
      {alignVal % 2 === 0 ? (
        <div className="row">
          <div className="col-md-6 mt-4">
            <img
              style={{ objectFit: "cover", width: "100%", height: "400px" }}
              src={props.preview}
              alt="project"
            />
          </div>
          <div className="col-md-6 projectdetails">
            <h4 className="font30 weight800">{props.title}</h4>
            <h4 className="font12 weight500">{props.tag}</h4>
            <p className="d-flex">
              <a
                href={props.link}
                // rel="noopener noreferrer"
                target="_blank"
              >
                <button className="btn-custom">Live</button>
              </a>
              <a
                href={props.github}
                // rel="noopener noreferrer"
                target="_blank"
              >
                <button className="btn-custom2">github</button>
              </a>
            </p>
          </div>
          <hr />
        </div>
      ) : (
        <div className="row">
          <div className="col-md-6 projectdetails">
            <h4 className="font30 weight800">{props.title}</h4>
            <h4 className="font12 weight500">{props.tag}</h4>
            <p className="d-flex">
              <a
                href={props.github}
                // rel="noopener noreferrer"
                target="_blank"
              >
                <button className="btn-custom2">github</button>
              </a>
              <a
                href={props.link}
                // rel="noopener noreferrer"
                target="_blank"
              >
                <button className="btn-custom">Live</button>
              </a>
            </p>
          </div>
          <div className="col-md-6 mt-5">
            <img
              style={{ objectFit: "cover", width: "100%", height: "400px" }}
              src={props.preview}
              alt="project"
            />
          </div>
        </div>
      )}
      <hr style={{ margin: "20px", border: "1px dotted #d8d8d8" }} />
    </div>
  );
}

export default projectBoxList;
