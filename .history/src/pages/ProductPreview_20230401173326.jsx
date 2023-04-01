import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductPreview() {

  const {id} = useParams()
  console.log('id', id)
  return (
    <div>
      <h1>Preview</h1>
    </div>
  )
}
