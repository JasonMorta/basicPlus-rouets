import React from "react";
import {products} from "../AllProducts"

export default function Home() {

  

  return (
    <div style={{ backgroundColor: "#f44336" }}  className="tabcontent">
      <div className="inner-content">
         <h3>Log-in</h3>
         <p>Select one of these product to navigate to its card on the products page</p>
         {products.map((item, i)=>(
          <p>item.title</p>
         ))}
      </div>
    </div>
  );
}
