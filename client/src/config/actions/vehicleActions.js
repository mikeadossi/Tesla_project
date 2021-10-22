import * as types from "./types"; 
import { hasAValue } from "../../helpers/helper";
import { atlasApi } from "../myApi";

export const getAllVehicles = () => async (dispatch) => {
  try {
    const res = await atlasApi.get(`allModels`);
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

export const updateRenderData = (vehicleRenderData) => async (dispatch) => { 
  try {
    dispatch({
      type: types.UPDATE_VEHICLE_RENDER_DATA,
      payload: vehicleRenderData,
    });
  } catch (e) {
    console.log(e);
  }
}

export const addCurrentPrice = (newPrice) => async (dispatch) => {
  try {
    dispatch({
      type: "ADD_CURRENT",
      newPrice,
    });
  } catch (e) {
    console.log(e);
  }
};

export const setActiveFormVals = () => async (field, dispatch) => {
  try{
    dispatch({
      type: types.ACTIVE_FORM,
      payload: field,
    });
  } catch (e) {
    console.log(e);
  }

};