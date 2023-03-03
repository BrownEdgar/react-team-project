import { useState } from "react";
import Component from "./Component";
import "./App.css"
const respons = [
	{ id: 1, name: "Aram", age: "26", game: "Warface" },
	{ id: 2, name: "Samwel", age: "15", game: "PES" },
	{ id: 3, name: "Vardan", age: "54", game: "Consa" },
	{ id: 4, name: "Satenik", age: "31", game: "MyFerma" },
	{ id: 5, name: "Armenuhi", age: "61", game: "Lukka" },
	{ id: 6, name: "Artak", age: "17", game: "Soccer" },
	{ id: 7, name: "Susan", age: "29", game: "Karate" },
	{ id: 8, name: "Ani", age: "9", game: "Sonik" }
]
function App() {
	const [data, setData] = useState(respons);
	const mySort = () => {
		let coppy = [...data];
		coppy = coppy.sort((a, b) => a.age - b.age)
		setData(coppy)
	}
	const closeSort = () => {
		setData(respons)
	}
	const addnewElement = () => {

		const obj = {
			id: Date.now(),
			name: "Example",
			age: "45",
			game: "Example"
		}

		setData([ ...data, obj])
	}

	const myRandom = () => {
		setData([data[Math.floor(Math.random() * data.length)]])
	}
	return (
		<div >
			<Component data={data} />
			<div className="parent_btn">
				<button className="btn" onClick={mySort} >Sort</button>
				<button className="btn" onClick={closeSort}>close </button>
				<button className="btn" onClick={addnewElement}>add new Element</button>
				<button className="btn" onClick={myRandom} >random Element</button>
			</div>
		</div>
	)
}
export default App;