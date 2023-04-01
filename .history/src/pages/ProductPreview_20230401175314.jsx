import React from 'react'
import { useParams } from 'react-router-dom'
import {products} from "../AllProducts"

export default function ProductPreview() {
  console.log('products', products)

  const {id} = useParams()
  let productId = Number(id)
  console.log('id', productId)
 

  const result = products.filter(item => item.id === productId)
  console.log('result', result)

  return (
    <div>
      <h1>{result?.title}</h1>
    </div>
  )
}
