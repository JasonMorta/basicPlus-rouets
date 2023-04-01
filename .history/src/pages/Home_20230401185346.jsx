import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {products} from "../AllProducts"

export default function Home() {
const nav = useNavigate()


  

  return (
    <div style={{ backgroundColor: "#f44336" }}  className="tabcontent">
      <div className="inner-content">
         <h3>Log-in</h3>
         <p>Select one of these product to navigate to its card on the products page</p>
         {products.map((item, i)=>(
          <Link key={i} to={{ pathname: '/products', state: item}}>{item.title}</Link>
         ))}
      </div>
    </div>
  );
}
