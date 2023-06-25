import React from "react";
import shamal from "../img/shamal.jpeg";
import sahal from "../img/sahal.jpeg";
import rizwin from "../img/rizwin.jpeg";
import rizwan from "../img/rizwan.jpeg";

function Founders() {
  return (
    <div className="Founders">
      <div className="team">
        <h1>Meet the Team</h1>
      </div>
      <div className="row">
        <div className="col-xl-3 col-sm-12 col-xs-12 col-lg-3 FounderColumn ">
          <div className="imagediv">
            <img className="imagetag" src={shamal}></img>
          </div>
          <div className="founderInfo">
            <h3>Shamal Khalid N P</h3>
            <p>Founder & CEO</p>
          </div>
        </div>
        <div className="col-xl-3 col-sm-12 col-xs-12 col-lg-3 FounderColumn">
          <div className="imagediv">
            <img className="imagetag" src={sahal}></img>
          </div>
          <div className="founderInfo">
            <h3>Sahal Shakeer</h3>
            <p>COO</p>
          </div>
        </div>
        <div className="col-xl-3 col-sm-12 col-xs-12 col-lg-3 FounderColumn">
          <div className="imagediv">
            <img className="imagetag" src={rizwin}></img>
          </div>
          <div className="founderInfo">
            <h3>Rizwin Nihal</h3>
            <p>CFO</p>
          </div>
        </div>
        <div className="col-xl-3 col-sm-12 col-xs-12 col-lg-3 FounderColumn">
          <div className="imagediv">
            <img className="imagetag" src={rizwan}></img>
          </div>
          <div className="founderInfo">
            <h3>Mohammed Rizwan</h3>
            <p>CTO</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Founders;
