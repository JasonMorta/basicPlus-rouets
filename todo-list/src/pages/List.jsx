import React from "react";
import { Link } from "react-router-dom";
export default function List() {
  return (
    <div style={{ backgroundColor: "#4caf50" }} className="tabcontent">
      <div className="inner-content">
        <div className="to_do_list">
          <h3>Things To Do</h3>
          <p>Some news this fine day!</p>
        </div>
        <div className="!logged_in">
          <h2>You are not Logged in</h2>
          <p>Log-in from the Home
           page
           </p>
        </div>
      </div>
    </div>
  );
}
