import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { useLocation, useParams } from 'react-router-dom';
import {products} from "../AllProducts"


export default function Products() {

  const navigate = useNavigate()
  const location = useLocation()
  const { id } = useParams()


  return (
    <div style={{ backgroundColor: "#FFE082" }} className="tabcontent">
      <div className="inner-content">
        <h3>Products</h3>
        {products.map((item, i) => (
           location.pathname.includes(`${item.title}`) ? <></> : <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={item.images[0]} />
            <Card.Body>
              <Card.Title style={{ color: "black" }}>{item.title}</Card.Title>
              <Card.Text style={{ color: "black" }}>
                {item.description}
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => {
                  navigate(`/products/${item.title}`);
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
