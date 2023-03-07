import React,{ useContext } from 'react'
import { MyContext } from './App'


export default function C() {
    const value=useContext(MyContext)
    console.log(value)
  return (
    <div>
        {/* <MyContext.Consumer>
            {(value)=><button onClick={value.setCount}>{value.title}</button>}
        </MyContext.Consumer> */}
    </div>
  )
}
