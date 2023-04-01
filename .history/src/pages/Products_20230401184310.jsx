import React, { useEffect, useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { useLocation, useParams } from 'react-router-dom';
import {products} from "../AllProducts"
import ProductPreview from './ProductPreview';


export default function Products(props) {



  const cardRef = useRef(null)

  const navigate = useNavigate()
  const location = useLocation()
  // const { id, title } = props.location.state
  console.log('props.location.state', props.location.state)




//scroll to selected name on homepage
  // useEffect(() => {
    
  //   if (location.pathname) {
      
  //     window.scrollTo({
  //       top: cardRef.current.offsetTop,
  //       behavior: "smooth",
  //     });
  //   } 

  // }, [id]);


  return (
    <div style={{ backgroundColor: "#FFE082" }} className="tabcontent">
      <div className="inner-content">
        <h3>Products</h3>


      </div>
    </div>
  );
}
