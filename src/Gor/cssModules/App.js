import s from "./App.module.css";
import { useEffect, useState } from "react";
import Component from "./component";

function App() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(5);

  useEffect(() => {
    const getData = () => {
      fetch(`https://jsonplaceholder.typicode.com/users?_limit=${count}`)
        .then(res => res.json())
        .then(data => setData(data));
    };
    getData();
  }, [count]);

  const handleClick = () => {
    if (count < 10) {
      setCount(count + 5);
    } else {
      setCount(count - 5);
    }
    console.log(count);
  };

  const deleteItem = id => {
    setData(prevData => prevData.filter(user => user.id !== id));
  };

  return (
    <div className={s.flex}>
      <Component
        data={data}
        handleClick={handleClick}
        count={count}
        deleteItem={deleteItem}
      />
    </div>
  );
}

export default App;
