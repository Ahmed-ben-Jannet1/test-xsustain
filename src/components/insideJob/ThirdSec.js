import React from "react";
import classes from "./thirdSec.module.css";
import liberty from "../../utils/insideUtils/sectionThree/liberty.svg";
import replay from "../../utils/insideUtils/sectionThree/replay.svg";
function ThirdSec() {
  return (
    <>
      <div className={classes.thirdSection}>
        <img src={liberty} className={classes.liberty} alt="liberty-pic"></img>
        <img src={replay} className={classes.replay} alt="replay-pic"></img>
      </div>
    </>
  );
}

export default ThirdSec;
