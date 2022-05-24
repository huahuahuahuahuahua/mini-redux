import { state } from "./state.js";
export const createStore = (reducer) => {
  let currentState = state;
  let queue = [];
  function getState() {
    return currentState;
  }
  function dispatch(action) {
    currentState = reducer(currentState, action);
    queue.forEach((fn) => {
      fn();
    });
  }
  function subscribe(fn) {
    queue.push(fn);
  }
  return { getState, dispatch, subscribe };
};
