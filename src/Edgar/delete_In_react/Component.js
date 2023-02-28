import React from 'react'

export default function Component(props) {

	if (props.data.length === 0) {
		return <h1>no data 😐</h1>
	}

	return (
		<div className='flex'>
			{props.data.map(elem => {
			return 	<div key={elem.id} className="flex-item">
				<button 
				className='btn-delete'
					onClick={() => props.deleteById(elem.id)}
				>X</button>
				<h2>Name: {elem.firstname}</h2>
				<h3>Email: {elem.email}</h3>
			</div>
			})}
		</div>
	)
}
