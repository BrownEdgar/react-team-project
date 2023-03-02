import React from 'react'

import s from './Component.module.css'

export default function Component(props) {
  return (
    props.data.map(elem => {
      return(
        <div className={s.box}>
        <h2>Name:{elem.username}</h2>
        <h2>Phone:<br/>{elem.phone}</h2>
        <h2>Email:<br/>{elem.email}</h2>
        <h2>Address:<br/>{elem.address.street}</h2>
        </div>
      )
    })
   
  )
}
