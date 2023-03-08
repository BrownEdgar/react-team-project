import React, { useEffect, useState } from 'react'
import style from "./App.module.css"
import ChildApp from './ChildApp';
export const myContext = React.createContext();

export default function App() {
    const[response,setResponse]=useState([]);
    const deletDiv = (id) => setResponse(response.filter(el=> el.id !== id))
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(res => res.json())
        .then(data => setResponse(data))
    },[])
  return (
    <div className={style.main}>
        <myContext.Provider value={deletDiv}>
             <ChildApp data={response} />
        </myContext.Provider>
    </div>
  )
}
