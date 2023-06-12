import React from "react";
import "./Appointment.scss";
import Mail from "../../assets/images/mail.svg";
import PhoneSmall from "../../assets/images/phone-small.svg";
import Googlemap from "../../assets/images/googlemap.svg";
import MailBig from "../../assets/images/mail-big.svg";
import PhoneBig from "../../assets/images/phone-big.svg";
import EditBig from "../../assets/images/edit-big.svg";

export default function Appointment() {
  return (
    <div className="appointment">
      <h2>Your next Appointment</h2>
      <div className="appointment__doctor">
        <div className="appointment__doctor--name">
          <h3>Dr. Schimtz</h3>
          <h6>Neurologist</h6>
          <div className="appointment__doctor--name-mail">
            <img src={Mail} alt="" />
            <h6>schimts@aol.de</h6>
            <img src={PhoneSmall} />
            <h6>+49 989 232</h6>
          </div>
        </div>
        <div className="appointment__doctor--dateAndTime">
          <div className="appointment__doctor--dateAndTime-date">
            <h6>Date</h6>
            <h2>20.04.2023</h2>
          </div>
          <div className="appointment__doctor--dateAndTime-date">
            <h6>Time</h6>
            <h2>16:30</h2>
          </div>
        </div>
        <div className="appointment__doctor--address">
          <h6>Address</h6>
          <div>
            <h2>Winklergasse 45, 10117 Berlin</h2>
            <div className="appointment__doctor--address-map">
              <img src={Googlemap} alt="" />
              <h6>Open in Google Maps</h6>
            </div>
          </div>
        </div>
        <div className="appointment__doctor--icon">
          <img src={MailBig} alt="" />
          <img src={PhoneBig} alt="" />
          <img src={EditBig} alt="" />
        </div>
      </div>
    </div>
  );
}
