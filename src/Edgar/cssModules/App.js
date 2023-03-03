import React from 'react'
import Component from './Component'

import s from "./App.module.css"

export default function App() {
	return (
		<div className={s.box}>
			<h1>App box</h1>
			<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint aspernatur nemo vel!</p>
			<Component/>
		</div>
	)
}
