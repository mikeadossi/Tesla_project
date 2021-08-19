import * as types from "../actions/types";

const initialState = {
  usStatesData: {},
  error: ""
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_US_STATES_DATA: 
    
      return {
        ...state,
        usStatesData: action.payload,
        error: "",
      };
    case types.GET_ALL_US_STATES_DATA_ERROR:
      return {
        ...state,
        error: action.payload,
        usStatesData: {},
      };
    default:
      return state;
  }
}