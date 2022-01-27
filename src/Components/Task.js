import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { checkTask, deleteTask, editTask } from "../JS/actions/task";
import EditTask from "./EditTask";

const Task = ({ task }) => {
  const [newText, setnewText] = useState(task.text);
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch(checkTask(task.id));
  };
  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };
  const handleEdit = () => {
    setEdit(!edit);
  };
  const handleText = (e) => {
    setnewText(e.target.value);
  };
  const handleSave = () => {
    dispatch(editTask(task.id, newText));
    setEdit(false);
  };
  const handleClose = () => {
    setEdit(false);
    setnewText(task.text);
  };

  return (
    <div>
      <span className={task.done && "done"}>{task.text}</span>
      {/* Method 1:modal */}
      {/* <EditTask task={task} /> */}

      {/* method 2 : input  */}
      {/* {!edit ? (
        <span className={task.done && "done"}>{task.text}</span>
      ) : (
        <div>
          <input onChange={handleText} type="text" value={newText} />
          <button onClick={handleClose}>close</button>
          <button onClick={handleSave}>save</button>
        </div>
      )} */}
      <Link to={`/edit/${task.id}`}>
        {" "}
        <button onClick={handleEdit}>edit</button>
      </Link>
      <button onClick={handleDelete}>delete</button>
      <button onClick={handleCheck}>{task.done ? "undone" : "done"}</button>
    </div>
  );
};

export default Task;
