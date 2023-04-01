import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLocation } from 'react-router-dom';
import {products} from "../AllProducts"


export default function Products() {

  const navigate = useLocation()



  return (
    <div style={{ backgroundColor: "#FFE082" }} className="tabcontent">
      <div className="inner-content">
        <h3>Products</h3>
        {products.map((item, i) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={item.images[0]} />
            <Card.Body>
              <Card.Title style={{ color: "black" }}>{item.title}</Card.Title>
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
