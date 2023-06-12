import React from "react";
import "./Medication.scss";
import Aspirin from "../../assets/images/aspirin.svg";
import Edit from "../../assets/images/edit-big.svg";
import Reminder from "../../assets/images/reminder.svg";

export default function Medication() {
  return (
    <div className="medications">
      <h2>Your Medications Today</h2>
      <div className="medications__card">
        <div className="medications__card--aspirin">
          <div className="medications__card--aspirin-text">
            <h3>ASPIRIN</h3>
            <p>ASS, 500mg BAYER, coated pill</p>
            <h4>2x Daily</h4>
          </div>
          <img src={Aspirin} alt="" />
        </div>
        <div className="medications__card--reminder">
          <div className="medications__card--reminder-all">
            <div className="medications__card--reminder-bell">
              <img src={Reminder} alt="" />
              <h6>Reminders</h6>
            </div>
            <p>6:00, 22:00</p>
          </div>
          <img src={Edit} alt="" />
        </div>
      </div>
    </div>
  );
}
