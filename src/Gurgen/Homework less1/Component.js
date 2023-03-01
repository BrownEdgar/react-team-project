import React from 'react'

export default function Component({data}) {
    if(data.length == 0){
        return(
            <>
                <h1>no data for Map</h1>
            </>
        )
    }
 
  return (
    <div className='flex'>
        {data.map(elem=>{
            return(
                <div className='flex-item' key={elem.id}>
                    <span> {elem.name}</span>
                    <span>{elem.age}</span>
                    <span>{elem.game}</span>
                </div>
            )
        })}
        
    </div>
  )
}
