import React, { useState } from "react";
import Component from "./Component";
import "./App.css";
export default function App() {
  const [random, setRandom] = useState([]);
  const [data, setData] = useState([
    { name: "Sebastian", age: 50, email: "sebo@mail.com" },
    { name: "Anna", age: 27, email: "anna@mail.com" },
    { name: "Jhon", age: 11, email: "jhon@mail.com" },
    { name: "Smit", age: 79, email: "smit@mail.com" },
    { name: "Smit", age: 8, email: "smit@mail.com" },
  ]);

  const sorted = () => {
    setRandom([]);
    if (data[0].age > data[data.length - 1].age) {
      const coppy = [...data];
      coppy.sort((a, b) => a.age - b.age);
      setData(coppy);
    } else {
      const coppy = [...data];
      coppy.sort((a, b) => b.age - a.age);
      setData(coppy);
    }
  };
  const randoms = () => {
    setRandom(data[Math.floor(Math.random() * data.length)]);
  };
  const newPerson = () => {
    const coppy = [...data];
    coppy.push(coppy[Math.floor(Math.random() * data.length)]);
    setData(coppy);
  };
  return (
    <div>
      <Component data={data} random={random} />
      <div className="buttonsCont">
        <button onClick={sorted}>Sort Age </button>
        <button onClick={randoms}>Random Person</button>
        <button onClick={newPerson}>Add New Person</button>
      </div>
    </div>
  );
}
