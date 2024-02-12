import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userId}=useParams()
  return (
    <div>
       <h1 className='bg-grey-400 p-4 text-center text-3xl'>User Id: {userId}</h1>
    </div>
  )
}

export default User
