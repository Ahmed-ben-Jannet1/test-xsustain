import React from "react";
import classes from "./MainCore.module.css";
import right from "../utils/imageRight.png";
import left from "../utils/nameLeft.png";
import city from "../utils/city-buildings-night.png";
import rec from "../utils/Rectangle.png";

function MainCore() {
  return (
    <>
      <div className={classes.main}>
        <img src={city} alt="city" className={classes.city} />
        <img src={rec} alt="rect" className={classes.rect} />
        <img src={left} alt="left" className={classes.leftImage} />
        <div className={classes.textContainer}>
          <div className={classes.verticalText}>
            <div className={classes.lineOne}>
              We are one people but we live as if
            </div>
            <div className={classes.lineTwo}>
              Divided … everything is connected
            </div>
          </div>
        </div>
        <img src={right} alt="right" className={classes.rightImage} />
      </div>
    </>
  );
}

export default MainCore;
