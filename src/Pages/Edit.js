import React from "react";
import { useSelector } from "react-redux";

const Edit = ({ match, history }) => {
  const listTask = useSelector((state) => state.taskReducer.tasks);
  const findtask = listTask.find((task) => task.id === +match.params.id);
  return (
    <div>
      <input type="text" defaultValue={findtask.text} />
      <button onClick={() => history.go(-1)}>GoBack</button>
    </div>
  );
};

export default Edit;
