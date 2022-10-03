import "../styles/resume.css";
import React from "react";

function Level() {
  const [fill, setFill] = React.useState(false);
  function changeState() {
    setFill((prevState) => !prevState);
  }
  const word = fill ? "fill" : "";
  return <div className={`level ${word}`} onClick={changeState}></div>;
}

export default Level;
