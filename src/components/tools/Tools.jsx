import React from 'react'
import "./Tools.scss"
import Calender from "../../assets/images/calender.svg"
import Search from "../../assets/images/Search.svg";
import Upload from "../../assets/images/up-arrow.svg";
import Profile from "../../assets/images/profile.svg";

export default function Tools() {
  return (
    <div className='tools'>
      <img src={Calender} alt="" />
      <img src={Search} alt="" />
      <img src={Upload} alt="" />
      <img src={Profile} alt="" />
    </div>
  )
}
