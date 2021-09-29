import * as types from "./types";
import axios from "axios";
import { hasAValue } from "../../helpers/helper";
import {  connect } from "react-redux"

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

export const getStateAbbrWithAreacode = (areacode) => async (dispatch) => {
  try { 
    const res = await axios.get(`http://localhost:3002/stateabbr?areacode=${areacode}`);
    dispatch({
      type: types.GET_STATE_ABBR,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    if (hasAValue(err.response) && hasAValue(err.response.data)) {
      dispatch({
        type: types.GET_STATE_ABBR_ERROR,
        payload: err.response.data,
      });
    }
  }
}

export const showApplyAllWarning = () => async (modelName, dispatch) => { // action creator - creates and returns action object
  dispatch({ // action - plain JavaScript object that has a type field.
    type: types.TOGGLE_APPLY_ALL_WARNING,
    payload: modelName,
  }); 
};

export const showResetWarning = () => async (modelName, dispatch) => { 
  dispatch({
    type: types.TOGGLE_RESET_WARNING,
    payload: modelName,
  });
};

export const showLocations = (dispatch, locations) => () => {
  dispatch({
    type: types.TOGGLE_LOCATIONS, 
    payload: locations,
  });
}; 
