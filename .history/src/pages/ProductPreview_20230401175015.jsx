import React from 'react'
import { useParams } from 'react-router-dom'
import product from "../AllProducts"

export default function ProductPreview() {

  const {id} = useParams()
 

  const result = product.filter(item => item.id === id)

  return (
    <div>
      <h1>{result?.title}</h1>
    </div>
  )
}
