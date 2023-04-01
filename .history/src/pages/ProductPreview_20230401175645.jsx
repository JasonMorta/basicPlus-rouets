import React from 'react'
import { useParams } from 'react-router-dom'
import {products} from "../AllProducts"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ProductPreview() {
  console.log('products', products)

  const {id} = useParams()
  let productId = Number(id)
  console.log('id', productId)
 

  const result = products.filter(item => item.id === productId)
  console.log('result', result)

  return (
    <div>
       <Card style={{ width: "18rem" }}>
            <div>
              <Card.Img variant="top" src={result[0]?.images[0]} />
              <Card.Img variant="left" src={result[0]?.images[1]} />
              <Card.Img variant="top" src={result[0]?.images[2]} />
              <Card.Img variant="top" src={result[0]?.images[3]} />
              <Card.Img variant="top" src={result[0]?.images[4]} />
            </div>
            <Card.Body>
              <Card.Title style={{ color: "black" }}>{result[0].title}</Card.Title>
              <Card.Text style={{ color: "black" }}>
                {result[0].description}
              </Card.Text>

            </Card.Body>
          </Card>
    </div>
  )
}
