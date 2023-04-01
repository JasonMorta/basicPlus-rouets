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
  const {item} = useLocation()


  console.log('location.pathname', location.pathname)

//scroll to selected name on homepage
  useEffect(() => {
    
    if (location.pathname) {
      
      window.scrollTo({
        top: cardRef.current.offsetTop,
        behavior: "smooth",
      });
    } 

  }, [item.id]);


  return (
    <div style={{ backgroundColor: "#FFE082" }} className="tabcontent">
      <div className="inner-content">
        <h3>Products</h3>

        {location.pathname.includes(`${item.id}`) ? <ProductPreview /> : 

        products.map((item, i) => (
             <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={item.images[0]} />
            <Card.Body>
              <Card.Title ref={cardRef} style={{ color: "black" }}>{item.title}</Card.Title>
              <Card.Text style={{ color: "black" }}>
                {item.description}
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => {
                  navigate(`/products/${item.id}`);
                }}
              >
                Preview
              </Button>
            </Card.Body>
          </Card>
        
        ))}
      </div>
    </div>
  );
}
