import React from "react";
import "./App.js";
import "./App.css";

export default function Weather() {
  return (
    <div className="Temperature">
      <div className="temp">39°</div>
      <div className="units">C | F</div>
    </div>
  );
}
