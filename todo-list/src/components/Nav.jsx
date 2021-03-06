import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import { StateContext,  } from "../App";



export default function Nav() {
   //set the default state color to red which is equal to home page color.

  const [color, setColor] = useState("white")
  const value = useContext(StateContext)

  let [state, setState] = value

  
  

  function toDo(){
    setState("#4caf50")
  }




  return (
    <header className="App-header">
      {/* Home will be the default/home page */}
      <Link
        to="/"
        className="tablink"
        onClick={() => setState("#f44336")}
        style={{ backgroundColor: state === "#f44336" ? state : "", color: state === "#f44336" ? color: "#ffc107"}}>
        Home
      </Link>

      <Link
        to="/List"
        className="tablink"
        onClick={toDo}
        style={{ backgroundColor: state === "#4caf50" ? state : "", color: state === "#4caf50" ? color: "#ffc107" }}>
        To-Do's
      </Link>

      <Link
        to="/Contact"
        className="tablink"
        onClick={() => setState("#2196f3")}
        style={{ backgroundColor: state === "#2196f3" ? state : "", color: state === "#2196f3" ? color: "#ffc107" }}>
        Contact
      </Link>

      <Link
        to="/About"
        className="tablink"
        onClick={() => setState("#ff5722")}
        style={{ backgroundColor: state === "#ff5722" ? state : "", color: state === "#ff5722" ? color: "#ffc107" }}>
        About
      </Link>
    </header>
  );
}
