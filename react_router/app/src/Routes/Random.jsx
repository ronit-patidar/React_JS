import React from 'react'
import { Outlet } from 'react-router-dom'

const Random = () => {
  return (
    <div>
      <h1>Welcome to Random Page</h1>
      <Outlet/>
    </div>
  )
}

export default Random
