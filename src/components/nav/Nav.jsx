import React from "react";
import "./Nav.scss";
import Wifi from "../../assets/images/Wifi.svg";
import Signal from "../../assets/images/Signal.svg";
import Battery from "../../assets/images/Battery.svg";

export default function Nav() {
  return (
    <div className="nav">
      9:30
      <div className="nav__images">
        <img src={Wifi} alt="" />
        <img src={Signal} alt="" />
        <img src={Battery} alt="" />
      </div>
    </div>
  );
}
