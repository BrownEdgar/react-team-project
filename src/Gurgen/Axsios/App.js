import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function App() {
  const[data,setData]=useState({});
 
  useEffect(()=>{
    async function getData(){
        // example 1
        // axios.get("https://jsonplaceholder.typicode.com/posts")
        // .then(data => console.log(data.data));
        // example 2
        // const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        // console.log(response.data)
        // example 3
        // axios({
        //   method:"get",
        //   url:"https://jsonplaceholder.typicode.com/posts",
        //   timeout:1000

        // }).then(res => console.log(res.data))
        axios.all([
          axios.get("https://jsonplaceholder.typicode.com/posts"),
          axios.get("https://jsonplaceholder.typicode.com/users")
        ]).then(([post,user])=>{
            setData({
              post:[...post.data],
              user:[...user.data]
            })
        })

      
    }
    getData()
    
  },[])

  const myFilter = (id) =>{
      return data.post.filter(el=>el.userId === id)
  }
  const handleMerge = () => {
   const handleMarge =  data.user.map((el)=>{
      return {...el,post:myFilter(el.id)}
    })
    console.log(handleMarge)
  }
  return (
    <div>

      <button onClick={handleMerge}>merge</button>
    </div>
  )
}
