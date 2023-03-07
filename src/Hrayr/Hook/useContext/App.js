import React, { useState } from 'react'
import A from './A'
export const MyContext=React.createContext()
export default function App() {
    const [data,setData]=useState('React.js')
  return (
    <div> 
        <h1>App</h1>
        <MyContext.Provider value={{
            title:data,
            count:5,
            setCount: ()=> console.log('ok'),  
             }}>
          <A/>
        </MyContext.Provider>
      
    </div>
   
  )
}
