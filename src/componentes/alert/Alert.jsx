import React from "react";
import "../../views/Login.css";
const Alert = ({ message }) => {
  return (
    <div className="alert-div">
      <div className="alert alert-danger text-center w-75">
        <span>{message}</span>
      </div>
    </div>
  );
};
export default Alert;
