import React from 'react'
import PropTypes from 'prop-types'
export default function Component({name,age,lasName}) {
  return (
    <div>
        <h2>name:{name}</h2>
        <h2>age:{age}</h2>
        <h3>{lasName.filter(el=> el ==4)}</h3>
    </div>
  )
}

Component.propTypes = {
    name:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired,
    lasName:PropTypes.arrayOf(PropTypes.number)
}