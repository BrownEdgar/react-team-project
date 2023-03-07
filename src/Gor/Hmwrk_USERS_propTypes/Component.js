import React from "react";
import { MyContext } from "./App";
import { useContext } from "react";
import PropTypes from "prop-types";

export default function Component() {
  const value = useContext(MyContext);
  console.log(value.data);
  return value.data.map(elem => {
    return (
      <ul key={elem.id}>
        <li>Name: {elem.name}</li>
        <li>Username: {elem.username}</li>
        <li>Email: {elem.email}</li>
      </ul>
    );
  });
}
