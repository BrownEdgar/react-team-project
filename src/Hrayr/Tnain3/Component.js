import React from 'react'

import PropTypes from 'prop-types'

export default function Component(props) {
  
  return (
    <div>{props.data.map(elem =>{
          return (
            <div key={elem.id}>
              <h1>{elem.name}</h1>
              <h2>{elem.username}</h2>
              <h3>{elem.email}</h3>
            </div>
          )
    })}</div>
  )
}


Component.propTypes = {
  data: PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string,
      suite: PropTypes.string,
      city: PropTypes.string,
      zipcode: PropTypes.string,
      geo: PropTypes.shape({
        lat: PropTypes.string,
        lng: PropTypes.string,
      }),
    }),
    phone: PropTypes.string,
    website: PropTypes.string,
    compan: PropTypes.shape({
      name: PropTypes.string,
      catchPhrase: PropTypes.string,
      bs: PropTypes.string,
    }),
  })
),
};
