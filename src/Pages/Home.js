import React from "react";
import AddTasks from "../Components/AddTask";
import TaskList from "../Components/TaskList";

const Home = () => {
  return (
    <div>
      {" "}
      <AddTasks />
      <TaskList />{" "}
    </div>
  );
};

export default Home;
