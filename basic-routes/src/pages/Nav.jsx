import React from 'react'
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
   <header className="App-header">

   {/* Home will be the default/home page */}
   <Link to="/" className="tablink" >Home</Link>
  
   <Link to="/News" className="tablink" >News</Link>

   <Link to="/Contact" className="tablink" >Contact</Link>

   <Link to="/About" className="tablink" >About</Link>

 </header>
  )
}
