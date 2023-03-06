import React, { useContext, useState } from 'react'
import A from './A'
export const Context = React.createContext();
export default function App() {
    const[value,setValue] = useState("alkash");
  return (
    <div>
        <h1>App Component</h1>
        <Context.Provider value={{
            arjeq:value,
            setArjeq:setValue
        }}>
            <A />
        </Context.Provider>
        
        
    </div>
  )
}
