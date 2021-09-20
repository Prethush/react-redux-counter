
import { createStore } from "redux";

function counterReducer(state = { value: 0, step: 1, max: Infinity }, action) {
  switch (action.type) {
    case "increment":
      state.value = state.value + state.step <= state.max ? state.value + state.step : state.value;
      return { ...state };
    case "decrement":
      return { ...state, value: state.value - state.step };
    case "reset":
      return { ...state, value: 0 };
    case "changeStep":
      return { ...state, step: action.payload };
    case "changeMax":
      state.max = action.payload;
      if (state.value > state.max) {
        state.value = state.max;
      }
      return { ...state };
    default:
      return { ...state };
  }
}

let store = createStore(counterReducer);
export default store;