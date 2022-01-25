import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../JS/actions/task";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };
  return (
    <div>
      <span>{task.text}</span>
      <button>edit</button>
      <button onClick={handleDelete}>delete</button>
      <button>done</button>
    </div>
  );
};

export default Task;
