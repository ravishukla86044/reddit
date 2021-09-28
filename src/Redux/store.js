import { colorReducer } from "./color/reducer";
import { applyMiddleware, combineReducers, createStore, compose } from "redux";

const rootreducer = combineReducers({
  color: colorReducer,
});
const customMiddleware = (store) => (next) => (action) => {
  console.log();
  return typeof action === "function" ? action(store.dispatch) : next(action);
};

export const store = createStore(
  rootreducer,
  compose(
    applyMiddleware(customMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
