import React from "react";
import classes from "./NavInside.module.css";
import face from "../../utils/insideUtils/faceIcon.svg";
import yout from "../../utils/insideUtils/youtIcon.svg";
import insta from "../../utils/insideUtils/instaIcon.svg";

function NavInside() {
  return (
    <>
      <div className={classes.nav}>
        <div className={classes.elements}>
          <span>LISTEN LIVE</span>
          <span>CONTACT US</span>
          <span>GET THE APP</span>
        </div>
        <div className={classes.logos}>
          <img src={yout} alt="youtube-icon"></img>
          <img src={insta} alt="instagram-icon"></img>
          <img src={face} alt="facebook-icon"></img>
        </div>
      </div>
    </>
  );
}

export default NavInside;
