import React from 'react'
import { useSelector } from 'react-redux'

const Modal = () => {
    const users =useSelector((state)=>state.user)
  return (
    <div>{users.map((user)=><div>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.date}</p>
        <p>{user.gender}</p>
        <p>{user.phone}</p>
    </div>)}</div>
  )
}

export default Modal