import { useState } from "react";
import React from "react";
import s from "./component.module.css";
function Component(props) {
  const { data, handleClick, count, deleteItem } = props;

  return (
    <>
      {props.data.map(user => (
        <div className={s.flex} key={user.id}>
          <button onClick={() => deleteItem(user.id)} className="close">
            X
          </button>
          <h1>User Info</h1>
          <h2 className={s.user}>{user.name}</h2>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
      ))}
      <button className="show" onClick={handleClick}>
        {count === 5 ? "Show More" : "Show less"}
      </button>
    </>
  );
}

export default Component;
