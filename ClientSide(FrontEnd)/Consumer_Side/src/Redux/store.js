import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import ProductReducer from "./ProductReducer/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  products: ProductReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
