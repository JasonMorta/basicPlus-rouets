import React from 'react'
import { useParams } from 'react-router-dom'
import {products} from "../AllProducts"

export default function ProductPreview() {

  const {id} = useParams()
 

  const result = products.filter(item => item.id === id)

  return (
    <div>
      <h1>{result?.title}</h1>
    </div>
  )
}
