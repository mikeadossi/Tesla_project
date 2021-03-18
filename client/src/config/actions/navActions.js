import * as types from "./types";
import axios from "axios";
import { hasAValue } from "../../helpers/helper";

export const getMyZipcodeData = (zip) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:3002/zipcode?zipcode=${zip}`);
    dispatch({
      type: types.GET_ALL_ZIPCODE_DATA,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    if (hasAValue(err.response) && hasAValue(err.response.data)) {
      dispatch({
        type: types.GET_ALL_ZIPCODE_DATA_ERROR,
        payload: err.response.data,
      });
    }
  }
};

export const showApplyAllWarning = (dispatch, modelName) => () => {
  console.log('hey')
  debugger
  dispatch({
    type: types.TOGGLE_APPLY_ALL_WARNING,
    payload: modelName,
  });
};

export const showResetWarning = (dispatch, modelName) => () => { 
  dispatch({
    type: types.TOGGLE_RESET_WARNING,
    payload: modelName,
  });
};
