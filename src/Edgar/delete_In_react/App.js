import React, { useState } from 'react'
import Component from './Component'

import "./App.css";

export default function App() {
	const [isShow, setIsShow] = useState(false)
	const [data, setData] = useState([
		{ id: 1, firstname: 'Sebastian', email: "SebastianExampl@gmail.com" },
		{ id: 2, firstname: 'Luiza', email: "LuizaExampl@gmail.com" },
		{ id: 3, firstname: 'Jhon', email: "JhonExampl@gmail.com" },
		{ id: 4, firstname: 'Hans', email: "HansExampl@gmail.com" },
	])

	const deleteById = (id) => {
		 console.log(id);
		
		const newData = data.filter(user => user.id !== id)
		setData(newData)
	}

	const handleClick = () => {
		setIsShow(!isShow)
	}
	const deleteAll = () => setData([])
	return (
		<div>
			{isShow && <h1>hidden context</h1>}
			<button onClick={handleClick}>{isShow ? "hidden" : "show"}</button>
			<Component data={data} deleteById={deleteById} />
			<button onClick={deleteAll}>aramagedon</button>
		</div>
	)
}


