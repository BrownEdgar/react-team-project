import React from 'react'

export default function Component(props) {

	if (props.data.length === 0) {
		return <h1 className='no-data'>No Data Detected!</h1>
	}

	return (
		<div className='flex'>
			{props.data.map(elem => {
				return <div key={elem.id} className="flex-item">
					<button
						className='btn-delete'
						onClick={() => props.deleteById(elem.id)}
					>X</button>
					<p className='number'>&#8470;{elem.id}</p>
					<h2 className='text'><span>Name:</span> {elem.firstname}</h2>
					<h3 className='text'><span>Email:</span> {elem.email}</h3>
					<h4 className='text'><span>Age:</span> {elem.age}</h4>
					<span className='decor-name'>{elem.firstname}</span>
				</div>
			})}
		</div>
	)
}
