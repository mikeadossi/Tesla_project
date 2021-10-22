import * as types from "./types";
import { atlasApi } from "../myApi";


export const getAllStateData = (abbr) => async (dispatch) => { 
    try {
      const res = await atlasApi.get(`statedata?abbr=${abbr}`); 
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

