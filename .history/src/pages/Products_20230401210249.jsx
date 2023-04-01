import React, { useEffect, useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { useLocation, useParams } from 'react-router-dom';
import {products} from "../AllProducts"
import ProductPreview from './ProductPreview';


export default function Products() {



  const navigate = useNavigate()
  const location = useLocation()

  let itemState = location.state?.item;
  console.log('itemState', itemState?.title)

  const cardRef = useRef(null)


//scroll to selected name on homepage
  useEffect(() => {
   
    if (cardRef.current !== null) {
      cardRef.current.childNodes.forEach((item, i) =>{
        let itemName = item.querySelector(`#cardTitle${i}`).textContent
        console.log('itemName', itemName.includes())
        
        // if (item.querySelector(`#cardImage${i}`.innerHTML.includes(itemState.item.title))) {
        //   item.scrollIntoView({ behavior: 'smooth' });
        // }
      })
  
    }

  }, []);


  return (
    <div style={{ backgroundColor: "#FFE082" }} className="tabcontent">
      <div className="inner-content" >
        <h3>Products</h3>

        <div className='card-container'  ref={cardRef}>
          {location.pathname.includes(`${itemState?.id}`) ? (
            <ProductPreview />
          ) : (
            itemState !== null &&
            products.map((item, i) => (
              <Card style={{ width: "18rem" }} key={i}>
                <Card.Img  variant="top" src={item.images[0]} />
                <Card.Body>
                  <Card.Title id={`cardTitle${i}`} style={{ color: "black" }}>
                    {item.title}
                  </Card.Title>
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
            ))
          )}
        </div>
      </div>
    </div>
  );
}
