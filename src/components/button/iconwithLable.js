import React from "react";
import "./iconwithLable.scss";

const IconwithLable = ({ Icon, label, isActive, white }) => {
  return (
    <div className={`main-icon ${isActive ? "active" : ""}`}>
      <div>{Icon}</div>
      <div className={`color ${white ? "white" : "blak"}`}>{label}</div>
    </div>
  );
};

export default IconwithLable;
