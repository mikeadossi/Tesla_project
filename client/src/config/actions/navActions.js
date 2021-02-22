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

export const showApplyAllWarning = (dispatch) => () => {
  dispatch({
    type: types.TOGGLE_APPLY_ALL_WARNING,
    payload: "",
  });
};

export const showResetWarning = (dispatch) => () => {
  console.log('============ coming here')
  dispatch({
    type: types.TOGGLE_RESET_WARNING,
    payload: "",
  });
};
