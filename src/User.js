import React from "react";

export default function User(props) {
  return (
    <div>
      <h1> User Component </h1>
      <button onClick={props.data}> call </button>
    </div>
  );
}
