import React, { useState, useEffect } from 'react';
import axios from './axios'

export default function App() {
	const [data, setData] = useState({
		users: [],
		posts: []
	})


	useEffect(() => {
		async function getdata() {

			// Տարբերակ 1
			// axios.get("https://jsonplaceholder.typicode.com/todos?_limit=4").then(response => console.log(response.data))
			// // Տարբերակ 2
			// const response = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=4");
			// console.log(response.data);
			// Տարբերակ 3
			// axios({
			// 	method: "get",
			// 	url:"https://jsonplaceholder.typicode.com/todos?_limit=4",
			// 	timeout:1000,
			// }).then(response => console.log(response.data))
			// Տարբերակ 4

			// 		axios.all([
			// 			axios.get("/posts"),
			// 			axios.get("/users")
			// 		]).then(([posts, users]) => {
			// 			setData({ users: users.data, posts: posts.data, });		
			// 		})
			// 	
			// getdata()
			// Տարբերակ 5
			axios.get("/todos", {
				params: {
					_limit: 12
				}
			}).then(response =>  console.log(response.data))
		}
		getdata()
	}, [])

	console.log(data);
	function getPostById(id) {
		return data.posts.filter(post => post.userId === id)
	}
	const handleMarge = () => {

		const mergeData = data.users.map(user => {
			return { ...user, posts: getPostById(user.id) }
		})
		console.log(mergeData);

	}
	return (
		<div>
			<button onClick={handleMarge}>merge data</button>
		</div>
	)
}
