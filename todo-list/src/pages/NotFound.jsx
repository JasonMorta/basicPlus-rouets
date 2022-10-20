import React from 'react'
import { useLocation } from 'react-router-dom'

export default function NotFound() {

  let locate = useLocation();

  console.log(locate)
  return (
    <div>
      <p></p>
      <h3>Sorry The Page: "{locate.pathname}" Not Found</h3>
    </div>
  )
}
