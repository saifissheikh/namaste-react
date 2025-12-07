import React from 'react'
import { useRouteError } from 'react-router'

const Error = () => {
    const error = useRouteError();
  return (
    <div>
        <h1>Oopssss!!!! something is wrong</h1>
        <h3>{error.data}</h3>
        <h3>{error.status}</h3>
    </div>
  )
}

export default Error