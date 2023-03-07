import React, { useState, useEffect } from "react";
import Title from "./Title";
import Component from "./Component";
import PropTypes from "prop-types";

export const MyContext = React.createContext();

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setData(data));
    };
    getData();
  }, []);
  console.log(data);

  return (
    <div className="container">
      <h1>Welcome to react.js</h1>
      <MyContext.Provider value={{ data }}>
        <Title />
        <Component />
      </MyContext.Provider>
    </div>
  );
}

App.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    email: PropTypes.string,
  }),
};
