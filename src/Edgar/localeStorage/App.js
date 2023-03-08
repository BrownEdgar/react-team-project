import React, { useState,useEffect } from 'react'

export default function App() {

	const [data, setData] = useState(
		JSON.parse(localStorage.getItem("arr")) || []
	)

	const handleClick = (e) => { 
		 console.log(111);
		
		const arr = [
			{
				"id": 1,
				"title": "product-1",
				"body": "lorem kjdhsakjhd sakhd ksahd kash",
				"image": "./images/photo.jpg"
			}
		]
		localStorage.setItem("arr", JSON.stringify(arr))
		check()
		e.target.removeEventListener( "click", handleClick)
	 }

	 function check() {
		 setData(JSON.parse(localStorage.getItem("arr")) || [])
	 }
	useEffect(() => {
		check()
	}, [data.length])
	return (
		<div>
			<h1>data from Storage</h1>
				<pre>{JSON.stringify(data,null,1)}</pre>

				<button onClick={handleClick} >save to Storage</button>
		</div>
	)
}
