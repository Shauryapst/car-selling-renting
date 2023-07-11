import React from "react";
import logo from "../../../../assets/logo.png";
import "./Logo.css";

export const Logo = () => {
  return (
    <div className="flex">

      <img className="logoimg" src={logo} alt="" />

      <p className="logotext"> Car Renting</p>
    </div>
  );
};
