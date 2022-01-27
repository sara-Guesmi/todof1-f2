import React, { useState } from "react";
import { useSelector } from "react-redux";
import Task from "./Task";
const TaskList = () => {
  const [filter, setfilter] = useState("all");
  const tasks = useSelector((state) => state.taskReducer.tasks);

  return (
    <div>
      <div>
        <button
          style={{ backgroundColor: "red" }}
          onClick={() => setfilter("all")}
        >
          All
        </button>
        <button onClick={() => setfilter("done")}>Done</button>
        <button onClick={() => setfilter("undone")}>Undone</button>
      </div>
      {filter === "done"
        ? tasks
            .filter((el) => el.done === true)
            .map((task) => <Task task={task} key={task.id} />)
        : filter === "undone"
        ? tasks
            .filter((el) => el.done === false)
            .map((task) => <Task task={task} key={task.id} />)
        : tasks.map((task) => <Task task={task} key={task.id} />)}
    </div>
  );
};

export default TaskList;
