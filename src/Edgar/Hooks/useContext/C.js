import React, { useContext } from 'react'
import { MyContext } from './App'

export default function C() {
	const value = useContext(MyContext)
	console.log(value);
	
	return (
		<div>
			{/* <MyContext.Consumer>
				{(value) => <button onClick={value.setCount}>{value.title}</button>}
			</MyContext.Consumer> */}

			<h3> Component C </h3>
			<button onClick={value.setCount}>{value.title}</button>
		</div>
	)
}
