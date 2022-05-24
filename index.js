import { createStore } from "./store.js";
import { reducer } from "./reducer.js";
export const store = createStore(reducer);
store.subscribe(() => {
  console.log("componenet 1");
});
store.dispatch({ type: "plus" });
console.log(store.getState());
export const data = store.getState();
store.subscribe(() => {
  console.log("componenet 2");
});
store.dispatch({ type: "plus" });
console.log(store.getState());
