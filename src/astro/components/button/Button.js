import React from "react";
import "./button.scss";

export const Button = props => {
  switch (props.type) {
    case "icon":
      return (
        <button className="link" onClick={props.callback} style={props.style}>
          {props.children}
        </button>
      );
      break;
    default:
      return (
        <button
          onClick={() => console.log("click on button.")}
          style={props.style}
        >
          {props.children}
        </button>
      );
  }
};
