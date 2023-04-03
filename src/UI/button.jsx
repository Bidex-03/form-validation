import React from "react";

const Button = (props) => {
  return (
    <button className="bg-Purplish-blue text-White py-4 rounded-[5px] hover:bg-Marine-blue" type={props.type || "button"} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
