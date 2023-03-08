import React, { useContext } from 'react'
import { Context } from './App'
export default function D() {
    const state = useContext(Context);
    
  return (
    <div>

        <h4>{state.arjeq}</h4>
        <button onClick={()=> state.setArjeq(state.arjeq + "a")}>asdasdas</button>
        {/* <Context.Consumer>
            {(value)=><pre>{JSON.stringify(value)}</pre>}
        </Context.Consumer> */}
    </div>
  )
}
