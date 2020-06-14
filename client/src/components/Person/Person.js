import React from "react";
import "./Person.css";
import twitterIcon from "./icons/twitterIcon.png";
import githubIcon from "./icons/githubIcon.png";
import linkedinIcon from "./icons/linkedinIcon.png";

function Person(props) {
  return (
    <div className="person">
      <img src={props.img} alt={props.name} />
      <div className="person-details">
        <div className="person-name">
          <p>{props.name}</p>
          <p>Office: {props.office}</p>
        </div>
        <div className="person-social">
          {props.twitter !== null ? (
            <a href={`https://twitter.com/search?q=${props.twitter}`}>
              <img src={twitterIcon} alt="icon" />
            </a>
          ) : (
            <img src={twitterIcon} style={{ display: "none" }} alt="icon" />
          )}

          {props.github !== null ? (
            <a href={`https://github.com/${props.github}`}>
              <img src={githubIcon} alt="icon" />
            </a>
          ) : (
            <img src={githubIcon} style={{ display: "none" }} alt="icon" />
          )}

          {props.linkedin !== null ? (
            <a href={`https://www.linkedin.com/${props.linkedin}`}>
              <img src={linkedinIcon} alt="icon" />
            </a>
          ) : (
            <img src={linkedinIcon} style={{ display: "none" }} alt="icon" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Person;
