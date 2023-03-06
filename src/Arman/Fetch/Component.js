import React from 'react'
import s from "./Component.module.css"
export default function Component(props) {
  const {data, handleClick, count, deleteItem} = props
  return (
    <div className={s.flex}>
      {props.data.map(elem => {
        return (
          <div className = {s.boo} key = {elem.id}>
            <button onClick={() => props.deletById(elem.id)} className={s.remove}>X</button>
            <h2>Id: {elem.id}</h2>
            <h1 className={s.do}>Name: {elem.name}</h1>
            <h2>UserName: {elem.username}</h2>
            <h3>Email: {elem.email}</h3>
            <h3>Phone: {elem.phone}</h3>
          </div>
        )
      })}
    </div>
)}