import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../JS/actions/task";

const AddTasks = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleAdd = () => {
    // text.length ? add() : alert("can not add empty task!!");
    if (text) {
      dispatch(addTask({ id: Math.random(), text: text, done: false }));
      setText("");
    } else {
      alert("can not add empty task!!");
    }
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button onClick={handleAdd}>AddTASK</button>
    </div>
  );
};

export default AddTasks;
