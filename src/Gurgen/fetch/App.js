import React, { useState,useEffect } from 'react'
import style from "./App.module.css"
export default function App() {
    const[data,setData] = useState([]);
   
    useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setData(data))
    },[])

  return (
    <div>
      {data.map(el=>{
        return( 
        <div className={style.parent} key={el.id}>
            <span>{el.name}</span>
            <span>{el.username}</span>
            <span>{el.email}</span>
            <span>{el.phone}</span>
        </div>
        )
      })}
    </div>
  )
}
