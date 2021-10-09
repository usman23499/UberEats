import { combineReducers } from "redux";
import cartReducer from "./cartReducers";

let reducers = combineReducers({
  cartReducer: cartReducer,
});

const rootReducer = (state, action) => {
  return reducers(state, action);
};

export default rootReducer;
// ye code always same