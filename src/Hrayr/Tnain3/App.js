import React,{useState,useEffect} from 'react'

export default function App() {
    const [data,setData]= useState([])

        useEffect(()=>{

           fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(json => setData(json))
          },[])
  return (
    <div>App</div>
  )
}
