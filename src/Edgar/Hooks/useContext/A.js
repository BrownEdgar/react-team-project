import React from 'react'

import C from './C';

export default function A() {
	console.log("A rerender");
	return (
		<div>
			<h3> Component A </h3>
			<C/>
		</div>
	)
}
