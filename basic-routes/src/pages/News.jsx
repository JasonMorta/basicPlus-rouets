import React from "react";
import './news.css'

export default function News() {
  return (
    <div style={{ backgroundColor: "#4caf50" }} className="tabcontent">
      <div className="inner-content">
        <h3>NEWS</h3>
        <p>Some news this fine day!</p>
        <div className="spacer">
          <h3 >BOTTOM</h3>
        </div>
      </div>
    </div>
  );
}
