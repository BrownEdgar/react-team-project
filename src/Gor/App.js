import "./App.css";
import { useState } from "react";
import Component from "./component.js";

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      firstName: "John",
      age: 32,
      email: "john@gmail.com",
    },
    {
      id: 2,
      firstName: "Donald",
      age: 22,
      email: "donald@gmail.com",
    },
    {
      id: 3,
      firstName: "Sam",
      age: 45,
      email: "sam@gmail.com",
    },
    {
      id: 4,
      firstName: "Blake",
      age: 15,
      email: "blake@gmail.com",
    },
  ]);
  const anotherPerson = {
    id: 5,
    firstName: "Andrew",
    age: 21,
    email: "andrew@gmail.com",
  };
  const deleteById = id => {
    const newData = data.filter(user => {
      return user.id !== id;
    });
    setData(newData);
  };

  const sortByAge = () => {
    const sortedArray = data.slice().sort((a, b) => a.age - b.age);
    setData(sortedArray);
  };

  const addPerson = () => {
    // setData([...data, anotherPerson]);
    if (!data.some(person => person.email === anotherPerson.email)) {
      setData([...data, anotherPerson]);
    }
    console.log(data);
  };

  return (
    <div>
      <Component
        data={data}
        deleteById={deleteById}
        sortByAge={sortByAge}
        addPerson={addPerson}
      />
    </div>
  );
}

export default App;
