import React, { useState } from "react";
import "./Todos.css";
import Todo from "../../components/todo/Todo";
import { connect } from "react-redux";

const Todos = (props) => {
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
    console.log(props.list);
    num = 0;
    props.addTodo(input);
    setInput({
      val: "",
      done: false,
      description: "",
    });
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
          {props.list.map((item) => {
            num = num + 1;
            return (
              <Todo
                item={item.val}
                description={item.description}
                deleteHandler={() => props.deleteHandler(item.val)}
                completeHandler={() => props.completeHandler(item.val)}
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

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (input) => dispatch({ type: "ADD_TODO", input: input }),
    deleteHandler: (value) => dispatch({ type: "DELETE_TODO", value: value }),
    completeHandler: (val) => dispatch({ type: "COMPLETE_TODO", val: val }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
