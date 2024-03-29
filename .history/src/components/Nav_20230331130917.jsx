import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();


   //set the default state color to red which is equal to home page color.
  const [state, setState] = React.useState({
    home: "#f44336",
    news: "#4caf50",
    contact: "#2196f3",
    about: "#ff5722",
    active: "",
    location : window.location.pathname
  });
  const [color, setColor] = React.useState("white")


  function handleNavToNews(params) {

    location.pathname = "/News"

  setState(prev => ({...prev, active:"#4caf50", location: "/News" }))
  console.log('location.pathname ', location.pathname  === "/News")
  console.log('location', location)

if (location.pathname  === "/News") {
  window.scrollTo({
    top: document.getElementById("my-image").offsetTop,
    behavior: "smooth"
  });
}
  }

 // Set the tab color to even when a nested link pathname is entered
  return (
    <header className="App-header">
      {/* Home will be the default/home page */}
      <Link
        to="/"
        className="tablink"
        onClick={() => setState(prev => ({...prev, active:"#f44336", location: "/" }))}
        style={{ 
          backgroundColor: state.location === "/" ? "#f44336" : "", 
          color: state.home === "#f44336" ? color: "#ffc107"}}>
        Home
      </Link>

      <Link
        to="/News"
        className="tablink"
        onClick={handleNavToNews}
        style={{ 
          backgroundColor: state.location === "/News" ? "#4caf50" : "",
          color: state.news === "#4caf50" ? color: "#ffc107" }}>
        News
      </Link>

      <Link
        to="/Contact"
        className="tablink"
        onClick={() => setState(prev => ({...prev, active:"#2196f3", location: "/Contact" }))}
        style={{ 
          backgroundColor: state.location === "/Contact" ? "#2196f3" : "", 
          color: state.contact === "#2196f3" ? color: "#ffc107" }}>
        Contact
      </Link>

      <Link
        to="/About"
        className="tablink"
        onClick={() => setState(prev => ({...prev, active:"#ff5722", location: "/About" }))}
        style={{ 
          backgroundColor: state.location === "/About" ? "#ff5722": "",
          color: state.about === "#ff5722" ? color: "#ffc107" }}>
        About
      </Link>
    </header>
  );
}
