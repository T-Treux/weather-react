import React from "react";
import Search from "./Search.js";
import Weather from "./Weather.js";
import "./App.css";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="Weatherapp">
      <Search />
      <h1 className="city"> Park Forest, IL</h1>
      <ul>
        <li>Sunday 4:00</li>
        <li>Windy</li>
      </ul>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Weather />
          </div>
          <div className="col-4">
            <ul>
              <li>Humidity: 51%</li>
              <li>Wind: 10 mph</li>
            </ul>
            <div className="forecast">
              <ul>
                <li>Monday ☁️ 44°| 31°</li>
                <li>Tuesday 🌧️ 44° | 34°</li>
                <li>Wednesday ⛈️ 48° | 33°</li>
                <li>Thursday ⛈️ 44° | 32°</li>
                <li>Friday ❄️ 39° | 25°</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
