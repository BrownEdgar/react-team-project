import React from 'react'
import Child from './Child'

export default function App() {
	
	return (
		<div>
			<Child >
				<p className='box'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, odio?</p>
				<p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, odio?</p>
				<button >Click</button>
			</Child>

			<Child id="1">
			
					<h1>Lorem ipsum dolor sit.</h1>
					<h1>Lorem ipsum dolor sit.</h1>
				
			</Child>
			<Child data='box' />
		</div>
	)
}
