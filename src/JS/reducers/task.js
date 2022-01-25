import { ADD_TASK, DELETE_TASK } from "../actionTypes/task";

const initialState = {
  tasks: [
    {
      id: Math.random(),
      text: "Task1",
      done: false,
    },
    {
      id: Math.random(),
      text: "Task2",
      done: false,
    },
    {
      id: Math.random(),
      text: "Task3",
      done: false,
    },
  ],
  x: 2,
  toggle: false,
};

const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, payload] };
    case DELETE_TASK:
      return { ...state, tasks: state.tasks.filter((el) => el.id != payload) };
    default:
      return state;
  }
};

export default taskReducer;
