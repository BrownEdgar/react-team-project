import React, { useState } from 'react'
import data from './data.json'

import "./App.css"

export default function App() {
	// const [url, setUrl] = useState("https://images.unsplash.com/photo-1677406014664-489c1fffd6bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80")
//  style={{ backgroundImage: `url(${url})`}}
	const [json, setJson] = useState(data)
	return (
		<div className='container'>
			{/* ՏԱՐԲԵՐԱԿ 1 
			<img src="https://images.unsplash.com/photo-1677406014664-489c1fffd6bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="sadas" /> */}

			{/* 	ՏԱՐԲԵՐԱԿ 2
			<img src={url} alt="dsa" /> */}

			{/*ՏԱՐԲԵՐԱԿ 3
			 <img src='./images/photo.jpg' alt="dsa" /> */}

			{/*ՏԱՐԲԵՐԱԿ 4
			<img src={logo} alt="" /> */}
			<pre>{JSON.stringify(json, null,2)}</pre>

			<img src={json[0].image} alt="ss" />
		</div>
	)
}
