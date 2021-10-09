import { combineReducers } from "redux";
import vehiclesReducer from "./vehiclesReducer";
import userReducer from "./userReducer";
import navReducer from "./navReducer";
import solarReducer from "./solarReducer";
import usStateReducer from "./usStateReducer";

export default combineReducers({
  vehiclesReducer,
  navReducer,
  usStateReducer,
  userReducer,
  solarReducer,
});
