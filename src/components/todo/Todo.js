import React, { useState } from "react";
import "./Todo.css";

const Todo = (props) => {
  const [show, setShow] = useState(false);
  const showHandler = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="todo-outerdiv" style={{ backgroundColor: props.colour }}>
        <div onClick={props.completeHandler} className="tick">
          <i class="fas fa-check-circle"></i>
        </div>
        <div onClick={props.deleteHandler} className="icon">
          <i class="fas fa-trash"></i>
        </div>
        <p className={props.done ? "todo-done" : ""}>{props.item}</p>
        <div onClick={showHandler} className="dropdown">
          {show ? (
            <i class="fas fa-sort-up"></i>
          ) : (
            <i class="fas fa-caret-down"></i>
          )}
        </div>
      </div>
      {show ? (
        <div style={{ backgroundColor: "#d4f7fa", margin: 0 }}>
          <p className="description">{props.description}</p>
        </div>
      ) : null}
    </>
  );
};

export default Todo;
