import React from 'react'

export default function Component(props) {
    if(props.data.length === 0){
        return (
            <h1>No Data</h1>
        )
    }
  return (
    <div className='flex'>
        {props.data.map(elem=>{
            return <div key={elem.id} className='flex-item'>
                <button className='btn-delete' onClick={()=>props.deleteByid(elem.id)}>X</button>
                <h1>{elem.firstname}</h1>
                <h1>{elem.email}</h1>
        
            </div>
        })}
    </div>
  )
}
