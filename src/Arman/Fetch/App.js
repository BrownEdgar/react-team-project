import React, {useState, useEffect} from 'react'
import Component from './Component'
import "./App.css"

export default function App() {
  const [data, setData] = useState([])



useEffect(() => {
  const getData = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/?_limit = ${count}`)
    .then(res => res.json())
    .then(data => setData(data))
  }
   getData()
}, [])


 const deletById = (id) => {
  const newData = data.filter(elem => elem.id !== id)
  setData(newData)
 }
  return (
    <div className = "box">
      <h1 className="go">JSON Placeholder/users</h1>
      <Component data = {data}
      deletById={deletById}
      />
    </div>
  )
}