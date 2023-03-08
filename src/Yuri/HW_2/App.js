import React, { useState, useEffect } from 'react'
import Component from './Component'
import s from './App.module.css'

export default function App() {
	const [data, setData] = useState([])
	const [count, setCount] = useState(5)


	useEffect(() => {

		const getData = () => {
			fetch(`https://jsonplaceholder.typicode.com/users/?_limit=${count}`)
				.then(res => res.json())
				.then(data => setData(data))
		}
		getData()
	}, [count])
	const handleClick = () => {
		setCount((prevCount) => prevCount + 5)
	}
	return (
		<div className={s.wrapper}>
			<h1 className={s.title}>Our Personal</h1>
			<Component data={data} />
			<button onClick={handleClick} className={s.btn}>More!</button>
		</div>
	)
}
