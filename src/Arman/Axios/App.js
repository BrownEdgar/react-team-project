import React, {useState, useEffect} from "react"
import axios from "axios"
import "./App.css"
export default function App() {
    const [data, setData] = useState([])

    useEffect(() => {
      async function getData() {
       axios.get("https://jsonplaceholder.typicode.com/comments?_limit=16").then(res => setData(res.data))
      }
      getData()
    
    }, [])

    const handClick = (id) => {
        const newdata = data.filter(elem => elem.id !== id)
        setData(newdata)
    }
    
  return (
    <div className="conteiner">
        {data.map(elem => {
            return (
                <div key={elem.id} className="box">
                    <button onClick={() => handClick(elem.id)}>X</button>
                    <h2 className="">{elem.id}</h2>
                    <h3>Name: {elem.name}</h3>
                    <h3>Email: {elem.email}</h3>
                </div>
            )
        })}
    </div>
  )
}