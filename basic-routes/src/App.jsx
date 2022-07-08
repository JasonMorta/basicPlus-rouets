
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Component } from 'react'
import Nav from './pages/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import News from './pages/News';
import Layout from './pages/Layout';




export default class App extends Component {
constructor(props) {
  super(props)

  this.state = {
     first:true,
  }
}

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Nav />
    
        <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        <Route  index  path="/" element={ <Home />}/>
        <Route  path="/News" element={ <News />}/>
        <Route  path="/Contact" element={ <Contact />}/>
        <Route  path="/About" element={ <About />}/>
        {/* </Route> */}

        </Routes>
      
    </div>
    </BrowserRouter>
    )
  }
}
