import React from "react";

export default function Component(props) {
  if (props.data.length === 0) {
    return <h1>No Data</h1>;
  }
  if (props.random.length === 0) {
    return (
      <div className="flex">
        {props.data.map((elem) => {
          return (
            <div key={Date.now() + Math.random() * 1e2} className="flex-item">
              <h1>Name - {elem.name}</h1>
              <h2>Age - {elem.age}</h2>
              <h2>Email - {elem.email}</h2>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="flex">
        <div key={Date.now() + Math.random() * 1e100} className="flex-item">
          <h1>Name - {props.random.name}</h1>
          <h2>Age - {props.random.age}</h2>
          <h2>Email - {props.random.email}</h2>
        </div>
      </div>
    );
  }
}
