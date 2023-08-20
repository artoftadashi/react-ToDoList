import React, { useState } from "react";

function TodoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.Item}</li>
    </div>
  );
}

export default TodoItem;
