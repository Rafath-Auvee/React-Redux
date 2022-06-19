import { createStore, useDispatch } from "redux";

const reducerFn = (state = { counter: 120 }, action) => {
  if (action.type === "INC") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "FUAD") {
    return { counter: state.counter - 1 };
  }
  return state;
};

const store = createStore(reducerFn);

export default store;
