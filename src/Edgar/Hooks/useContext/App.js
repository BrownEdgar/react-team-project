import React, { useState } from 'react'
import A from './A'
import B from './B'
export const MyContext = React.createContext()


export default function App() {
	const [data, setData] = useState("React.js")
	return (
		<div>
			<h2>App Cpmponent</h2>
			<MyContext.Provider value={{
				title: data,
				count: 5,
				setCount: () => setData("Javascript")
			}}>
				<A />
			</MyContext.Provider>
			<B/>
		</div>
	)
}
