import React, { useState } from 'react'
import Component from './Component'
import Buttons from "./Buttons";

import "./App.css";

export default function App() {

	const [data, setData] = useState([
		{ id: 1, firstname: 'Sebastian', age: 30, email: "SebastianExampl@gmail.com" },
		{ id: 2, firstname: 'Luiza', age: 25, email: "LuizaExampl@gmail.com" },
		{ id: 3, firstname: 'Jhon', age: 23, email: "JhonExampl@gmail.com" },
		{ id: 4, firstname: 'Hans', age: 27, email: "HansExampl@gmail.com" },
	])

	const deleteById = (id) => {
		console.log(id);

		const newData = data.filter(user => user.id !== id)
		setData(newData)
	}

	const sortByAge = () => {
		const copy = [...data]
		copy.sort((fElem, sElem) => fElem.age - sElem.age)
		setData(copy)
	}

	const onlyOneStay = () => {
		const id = Math.floor((Math.random() * data.length) + 1)
		const newData = data.filter(user => user.id === id)
		setData(newData)
	}

	const addPerson = () => {
		const copy = [...data]
		const id = copy.length + 1
		copy.push({ id: id, firstname: "Xdr", age: 18, email: "XdrExampl@gmail.com" })
		setData(copy)
	}

	const deleteAll = () => setData([])

	return (
		<div>
			<Component data={data} deleteById={deleteById} />
			<Buttons deleteAll={deleteAll} sortByAge={sortByAge} onlyOneStay={onlyOneStay} addPerson={addPerson} />

		</div >
	)
}
