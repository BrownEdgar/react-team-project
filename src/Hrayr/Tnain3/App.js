import React,{useState,useEffect} from 'react'
import Component from './Component'
export default function App() {
    const [data,setData]= useState([])
   
        useEffect(()=>{

           fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(json => setData(json))
          },[])
          
          
  return (
    <div>
      <Component data={data}/>
    </div>
  )
}
