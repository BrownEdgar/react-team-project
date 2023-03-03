import React, { useState } from "react"
import './App.css';

function App() {
	const [data, setData] = useState(["A", "B", "C"])
  return (
    <div className="App">
     <h1>Hello react</h1>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, earum, qui perferendis deserunt exercitationem ullam tempore ea ducimus cumque placeat quos laborum atque iusto. Consectetur maiores explicabo qui beatae ullam?</p>
    </div>
  );
}

export default App;
