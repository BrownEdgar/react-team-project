import React,{useState} from 'react'
import Component from './Component'
import './App.css'
export default function App() {
	const [data,setData]=useState([
		{id:1,firstname:'Sebastian',email:"sebo@mail.com"},
		{id:2,firstname:'Anna',email:"anna@mail.com"},
		{id:3,firstname:'Jhon',email:"jhon@mail.com"},
		{id:4,firstname:'Smit',email:"smit@mail.com"},
	])
	const [isShow,setIsShow]=useState(false)
	const handleClick=()=>{
   setIsShow(!isShow)
	}
	const deleteByid=(id)=>{
     const newData=data.filter(user=>user.id !== id)
	 setData(newData)
	}
	return (
		<div>

			{isShow && <h1>Hidden context</h1>}
			<button onClick={handleClick}>{isShow?'hidden':'show'}</button>
			<Component data={data} deleteByid={deleteByid}/>
		</div>
	)

}
