import React from "react";
import "./style.scss";

const AuthLayout = (props) => {
  return (
    <div className="AuthLayout">
      <div className="AuthLayout__form">{props.children}</div>
      <div className="AuthLayout__img-box">
        <img
          src= {props.img} 
          alt=""
        />
      </div>
    </div>
  );
};

export default AuthLayout;
