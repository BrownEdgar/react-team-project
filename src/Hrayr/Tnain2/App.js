import React,{useState,useEffect} from 'react'

import './App.css'
import Component from './Component'

export default function App() {
  
  const [data,setData]= useState([])
 
        useEffect(()=>{
          const getData=()=>{
            fetch('https://jsonplaceholder.typicode.com/users')
              .then(response => response.json())
              .then(json => setData(json))
        }
          getData()
          
        },[])
   
  return (
    <div className='box'>
        <Component  data={data}/>
    </div>
  )
}
