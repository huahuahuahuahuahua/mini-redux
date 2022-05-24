import { state as initialState } from "./state.js";
export function reducer(state = initialState, action) {
  switch (action.type) {
    case "plus":
      return {
        ...state,
        count: state.count + 1,
      };
    case "subtract":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return initialState;
  }
}
