import React from "react";

const Errors = ({ message }) => {
  return (
    <div className="error">
      <h3>Error</h3>
      <p>{message || "Something went wrong. Please try again later."}</p>
    </div>
  );
};

export default Errors;
