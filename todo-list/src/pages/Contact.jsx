import React from "react";
import UseRefHook from "./Hooks/UseRefHook";

export default function Contact() {
  return (
    <div style={{ backgroundColor: "#2196f3" }} className="tabcontent">
      <div className="inner-content">
      <h3>Contact</h3>
      <UseRefHook />
      <p>Get in touch, or swing by for a cup of coffee.</p>
      </div>
    </div>
  );
}
