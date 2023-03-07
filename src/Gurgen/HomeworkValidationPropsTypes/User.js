import React, { useContext } from 'react'
import style from './User.module.css'
import { myContext } from './App'

export default function User({item}) {
    console.log(item.address.street)
    let deletDiv = useContext(myContext);
    const deletMe = () =>{
        deletDiv(item.id)
    }
  return (
    <div onClick={deletMe} className={style.user}>
        <div className={style.close}>X</div>
        <h2 className={style.name}>name:{item.name}</h2>
        <br/>
        <p>email:{item.email}</p>
    </div>
  )
}

