import React, { useState } from 'react'
import { useEffect } from 'react'
import style from "./App.module.css"
export default function App() {
    const[data,setData] = useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setData(data))
        },[])

    const closeDiv = (id) => {
        setData(data.filter(item=>item.id !=id))
    }
  return (
    <div className={style.parent_div}>
        {data.map(el=>{
            return(
            <div 
            key={el.id}
            className={style.item_div}
            >
                <div 
                className={style.close}
                onClick={()=>closeDiv(el.id)}
                >
                    X
                </div>
                <h2>name:{el.name}</h2>
                <h2>email:{el.email}</h2>
                <h2>City:{el.address.city}</h2>
                <span>phone{el.phone}</span>
            </div>
            )
        })}
    </div>
  )
}
