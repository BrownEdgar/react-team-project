import React,{useState,useEffect} from 'react'

export default function App() {

    const [data,setData]= useState([])
const getData=()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setData(json))
}
      useEffect(()=>{
        
        getData()
        
      },[])
  return (
    <div>App</div>
  )
}
