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
