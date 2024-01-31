import React from "react";
import classes from "./Breaking.module.css";

function Breaking() {
  const numberOfRepeats = 8;
  const liveText = "WE ARE LIVE!";

  let liveElements = [];
  for (let i = 0; i < numberOfRepeats; i++) {
    liveElements.push(
      <div className={classes.liveText} key={i}>
        {liveText}
      </div>
    );
  }

  return (
    <div className={classes.background}>
      <div className={classes.newsContainer}>
        <div className={classes.breakingNews}>
          <strong>BREAKING NEWS &gt;</strong>
        </div>
        {liveElements}
      </div>
    </div>
  );
}

export default Breaking;
