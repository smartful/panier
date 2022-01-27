import { combineReducers } from "redux";
import cartReducer from "./cartReducer";

const reducers = combineReducers({
  cart: cartReducer,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
