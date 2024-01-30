import React from "react";
import classes from "./First.module.css";
import arrow from "../../utils/insideUtils/sectionOne/arrow.svg";
import first from "../../utils/insideUtils/sectionOne/firstpic.svg";
import second from "../../utils/insideUtils/sectionOne/second.svg";
import third from "../../utils/insideUtils/sectionOne/thirdpic.svg";
function FirstSec() {
  return (
    <>
      <div className={classes.sectionOne}>
        <img src={arrow} className={classes.arrowRight} alt="arrow-pic"></img>
        <div className={classes.logos}>
          <div className={classes.firstContainer}>
            <img src={first} className={classes.firstpic} alt="first-pic"></img>
            <div className={classes.textOverlay}>
              <div className={classes.track}>TRACK MATRAX</div>
              <div className={classes.num}>20.12.203</div>
            </div>
          </div>
          <img src={second} alt="second-pic"></img>
          <img src={third} alt="third-pic"></img>
        </div>
        <img src={arrow} className={classes.arrowLeft} alt="arrow-pic"></img>
      </div>
    </>
  );
}

export default FirstSec;
