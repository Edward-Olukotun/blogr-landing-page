import React from "react";
import Bgpattern from "../images/bg-pattern-circles.svg";
import Bgintro from "../images/bg-pattern-intro-desktop.svg";
import Bgintromobile from "../images/bg-pattern-intro-mobile.svg";
import illdesk from "../images/illustration-editor-desktop.svg";
import illmob from "../images/illustration-editor-mobile.svg";
import illlapdesk from "../images/illustration-laptop-desktop.svg";
import illlapmob from "../images/illustration-laptop-mobile.svg";
import illphone from "../images/illustration-phones.svg";

function Try() {
  return (
    <div className="h-40 w-screen bg-red-600">
      <div className=" bg-[url('../src/images/bg-pattern-circles.svg')] h-40 w-full"></div>
      <div>
        <img src={Bgpattern} alt="" />
      </div>
      <div>
        <img src={Bgintro} alt="" />
      </div>
      <div>
        <img src={Bgintromobile} alt="" />
      </div>
      <div>
        <img src={illdesk} alt="" />
      </div>
      <div>
        <img src={illmob} alt="" />
      </div>
      <div>
        <img src={illlapdesk} alt="" />
      </div>
      <div>
        <img src={illlapmob} alt="" />
      </div>
      <div>
        <img src={illphone} alt="" />
      </div>
    </div>
  );
}

export default Try;
