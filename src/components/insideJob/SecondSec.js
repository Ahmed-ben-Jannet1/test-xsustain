import React from "react";
import classes from "./Second.module.css";
function SecondSec() {
  const numberOfRepeats = 7;
  const followMore = "FOLLOW FOR MORE";

  let followElements = [];
  for (let i = 0; i < numberOfRepeats; i++) {
    followElements.push(
      <div className={classes.followMore} key={i}>
        <strong>{followMore}</strong>
      </div>
    );
  }

  return (
    <>
      <div className={classes.secondSec}>{followElements}</div>
    </>
  );
}

export default SecondSec;