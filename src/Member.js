import React from "react";

export default function Member(props) {
  return (
    <div>
      <h1> Member Component </h1>
      <button onClick={props.data}> call </button>
    </div>
  );
}
