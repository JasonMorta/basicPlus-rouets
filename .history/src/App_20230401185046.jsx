
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Component, createContext, useState } from 'react'
import Nav from './components/Nav';
import Home from './pages/Home';
import News from './pages/News';
import About from './pages/About';
import Contact from './pages/Contact';
import List from './pages/List';
import Products from './pages/Products';
import ProductPreview from './pages/ProductPreview';

//create context hook
//This hook allow any nested children to share and alter data with the use of props.
export const StateContext = createContext()

export default function App() {

  const [state, setState] = useState("#f44336");

  return (
    <BrowserRouter>
      <StateContext.Provider value={[state, setState]} className="App">
        <div className="routes">
          <Nav />
          <Routes>
            <Route exact path="/" component={Home} />
            <Route path="/List" component={<List />} />
            <Route path="/Contact" component={<Contact />} />
            <Route path="/About" component={<About />} />
            <Route path="/products" component={<Products />}>
            <Route path=":id" component={<ProductPreview />}/>
            </Route>
            <Route path="/news" component={<News />} />
          </Routes>
        </div>
        <div className="orig-link"></div>
      </StateContext.Provider>
    </BrowserRouter>
  );
}
