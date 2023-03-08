import React from 'react'

export default function Child({ children, id }) {
	console.log({ children, id });
	
	return (
		<div >
			<hr />
		</div>
	)
}
