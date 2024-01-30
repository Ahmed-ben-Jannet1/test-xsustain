import React from "react";
import classes from "./PopUp.module.css";
import NavInside from "./insideJob/NavInside";
import FirstSec from "./insideJob/FirstSec";
import SecondSec from "./insideJob/SecondSec";
import ThirdSec from "./insideJob/ThirdSec";

function PopUp() {
  return (
    <>
      <div className={classes.inside}>
        <NavInside />
        <FirstSec />
        <SecondSec />
        <ThirdSec />
      </div>
    </>
  );
}

export default PopUp;
