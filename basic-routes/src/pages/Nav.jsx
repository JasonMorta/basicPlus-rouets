import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
   //set the default state color to red which is equal to home page color.
  const [state, setState] = React.useState("#f44336");

  return (
    <header className="App-header">
      {/* Home will be the default/home page */}
      <Link
        to="/"
        className="tablink"
        onClick={() => setState("#f44336")}
        style={{ backgroundColor: state === "#f44336" ? state : "" }}>
        Home
      </Link>

      <Link
        to="/News"
        className="tablink"
        onClick={() => setState("#4caf50")}
        style={{ backgroundColor: state === "#4caf50" ? state : "" }}>
        News
      </Link>

      <Link
        to="/Contact"
        className="tablink"
        onClick={() => setState("#2196f3")}
        style={{ backgroundColor: state === "#2196f3" ? state : "" }}>
        Contact
      </Link>

      <Link
        to="/About"
        className="tablink"
        onClick={() => setState("#ff5722")}
        style={{ backgroundColor: state === "#ff5722" ? state : "" }}>
        About
      </Link>
    </header>
  );
}
