import * as types from "./types";
import axios from "axios";
import { hasAValue } from "../../helpers/helper";
import { atlasApi } from "../myApi";


export const getMyZipcodeData = (zip) => async (dispatch) => {
  try {
    const res = await atlasApi.get(`zipcode?zipcode=${zip}`); 
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

export const emptyZipcodeData = () => async (dispatch) => {
  try { 
    dispatch({
      type: types.EMPTY_ZIPCODE_DATA,
      payload: {},
    });
  } catch (err) {
    console.log(err);
    if (hasAValue(err.response) && hasAValue(err.response.data)) {
      dispatch({
        type: types.EMPTY_ZIPCODE_DATA_ERROR,
        payload: err.response.data,
      });
    }
  }
};

export const showLocations = (dispatch, locations) => () => {
  dispatch({
    type: types.TOGGLE_LOCATIONS, 
    payload: locations,
  });
};


export const getZipDataWithAreaCode = (areacode) => async (dispatch) => {
  try {
    const res = await atlasApi.get(`areacode?areacode=${areacode}`);
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

export const getNotifications = (dateJoined) => async (dispatch) => {
  try {
    const res = await atlasApi.get(`userNotifications?dateJoined=${dateJoined}`);
    dispatch({
      type: types.GET_TAILORED_NOTIFICATIONS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    if (hasAValue(err.response) && hasAValue(err.response.data)) {
      dispatch({
        type: types.GET_TAILORED_NOTIFICATIONS_ERROR,
        payload: err.response.data,
      });
    }
  }
}
