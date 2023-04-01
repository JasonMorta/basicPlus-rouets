import React from 'react'
import { useParams } from 'react-router-dom'
import product from "../AllProducts"

export default function ProductPreview() {

  const {id} = useParams()
  console.log('id', id)
  return (
    <div>
      <h1>{product.id}</h1>
    </div>
  )
}
