import React from "react";
import "./Dashboard.scss";
import Icon from "../../assets/images/Icon.svg";
import Search from "../../assets/images/Search.svg";
import Notification from "../../assets/images/Notifications.svg";
import Hero from "../../assets/images/hero.svg";

export default function Dashboard() {
  return (
    <div className="hero">
      <div className="hero__dashboard">
        <h2>Dashboard</h2> <img src={Icon} alt="" />
      </div>
      <div className="hero__notification">
        <div className='hero__notification--search'>
          <input type="text" placeholder="Search your records" />
          <img src={Search} alt="" />
        </div>
        <img src={Notification} alt="" />
      </div>
      <img src={Hero} alt="" />
    </div>
  );
}
