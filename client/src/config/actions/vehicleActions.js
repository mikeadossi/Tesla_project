import * as types from "./types";
import axios from "axios";
import { hasAValue } from "../../helpers/helper";

export const getAllVehicles = () => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:3002/allModels`);
    debugger;
    dispatch({
      type: types.GET_ALL_VEHICLES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    if (hasAValue(err.response) && hasAValue(err.response.data)) {
      dispatch({
        type: types.GET_ALL_VEHICLES_ERROR,
        payload: err.response.data,
      });
    }
  }
};

export const getAllStateData = (abbr) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:3002/statedata", {
      abbr,
    });
    dispatch({
      type: types.GET_ALL_US_STATES_DATA,
      payload: res[0],
    });
  } catch (err) {
    dispatch({
      type: types.GET_ALL_US_STATES_DATA_ERROR,
      payload: err,
    });
  }
};

export const addCurrentPrice = (newPrice) => async (dispatch) => {
  try {
    dispatch({
      type: "ADD_CURRENT",
      newPrice,
    });
  } catch (e) {}
};
