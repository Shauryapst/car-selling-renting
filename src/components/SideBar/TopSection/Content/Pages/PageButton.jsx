import React from "react";
import "./PageButton.css";

export const PageButton = (props) => {
  return (
    <button className="buttonwrapper">
      <div className="buttonlayout">
        <img
          className="buttonicon"
          src={require(`./svgicons/${props.page.icon}`)}
          alt=""
        />
        <div className="buttontext">{props.page.name}</div>
      </div>
    </button>
  );
};
