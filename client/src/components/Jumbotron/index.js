import React from "react";

function Jumbotron({ children, id }) {
  return (
    <div
      style={{  clear: "both", paddingTop: 100, textAlign: "center" }}
      className="jumbotron jumbotron-fluid  border-dark"
      id={id}
    >
      {children}
    </div>
  );
}

export default Jumbotron;
