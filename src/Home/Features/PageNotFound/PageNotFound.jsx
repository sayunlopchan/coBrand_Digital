import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {

  const nav = useNavigate();
  return (
    <div>
      <h1>Page not found</h1>
      <button onClick={() => nav('/')}>Go back</button>
    </div>
  )
}

export default PageNotFound