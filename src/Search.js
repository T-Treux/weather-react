import React from "react";
import "./App.js";
import "./App.css";

export default function Search() {
  return (
    <div className="Search">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              placeholder="Type a city.."
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-danger" />
          </div>
        </div>
      </div>
    </div>
  );
}
