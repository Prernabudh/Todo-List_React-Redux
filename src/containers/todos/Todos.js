import React, { useState } from "react";
import "./Todos.css";
import Todo from "../../components/todo/Todo";

const Todos = (props) => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState({
    val: "",
    done: false,
    description: "",
  });
  let num = 0;
  const inputChangeHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const todoHandler = () => {
    num = 0;
    setList([...list, input]);
    setInput({
      val: "",
      done: false,
      description: "",
    });
  };

  const deleteHandler = (value) => {
    setList(list.filter((item) => item.val !== value));
  };

  const completeHandler = (val) => {
    let tempList = [...list];
    tempList.map((item) => {
      if (item.val === val) item.done = true;
    });
    setList(tempList);
  };
  return (
    <>
      <center>
        <h1>Todo List</h1>
      </center>
      <div className="input-form">
        <div>
          Add Todo:
          <input
            type="text"
            name="val"
            value={input.val}
            onChange={(e) => inputChangeHandler(e)}
          ></input>
        </div>
        <div>
          Add Description:
          <input
            type="text"
            name="description"
            value={input.description}
            onChange={(e) => inputChangeHandler(e)}
          ></input>
        </div>
        <button onClick={todoHandler} className="add-button">
          Add
        </button>
      </div>
      <div className="todos-outerdiv">
        <div className="todos-innerdiv">
          {list.map((item) => {
            num = num + 1;
            return (
              <Todo
                item={item.val}
                description={item.description}
                deleteHandler={() => deleteHandler(item.val)}
                completeHandler={() => completeHandler(item.val)}
                done={item.done}
                colour={num % 2 === 0 ? "#88c8eb" : "#6291de"}
              ></Todo>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Todos;
