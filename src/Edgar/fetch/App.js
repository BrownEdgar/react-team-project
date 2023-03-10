import React, { useState, useEffect } from 'react'


import "./App.css"
export default function App() {
	const [data, setData] = useState({})
	const [count, setCount] = useState(1)


	useEffect(() => {

		const getData = () => {
			fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
				.then(res => res.json())
				.then(data => setData(data))
		}
		getData()
	}, [count])
	const handleClick = () => { 

		setCount(count + 1) 
	 }
	return (
		<div>
			{/* {data.map(elem => {
				return (
					<p key={elem.id}>{elem.title}</p>
				)
			})} */}

			<h1>get Post N{count} every <kbd>click</kbd> time with fetch</h1>
			<pre>{JSON.stringify(data,null,1)}</pre>
			<button onClick={ handleClick}>add count</button>
		</div>
	)
}
