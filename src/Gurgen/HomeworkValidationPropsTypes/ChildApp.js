import React from 'react'

import User from './User'
import PropTypes from 'prop-types'
export default function ChildApp({data}) {
   
    
  return (
    <div>
        {data.map(item=>{
            return(
                <User  key={item.id} item={item}/>
            ) 
        })}
    </div>
  )
}

ChildApp.propTypes={
    data:PropTypes.arrayOf(PropTypes.shape(
        {
            id:PropTypes.number.isRequired,
            name:PropTypes.string.isRequired,
            address:PropTypes.objectOf(PropTypes.shape(
                {
                    street:PropTypes.string
                }
            ))
        }
       
    ))
}