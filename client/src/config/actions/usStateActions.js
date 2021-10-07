import * as types from "./types";
import axios from "axios";


export const getAllStateData = (abbr) => async (dispatch) => { 
    try {
      const res = await axios.get(`http://localhost:3002/statedata?abbr=${abbr}`); 
      dispatch({
        type: types.GET_ALL_US_STATES_DATA,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: types.GET_ALL_US_STATES_DATA_ERROR,
        payload: err,
      });
    }
  };

