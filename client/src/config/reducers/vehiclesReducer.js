import * as types from "../actions/types";

const initialState = {
  vehicle: {},
  error: "",
  usStatesData: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_VEHICLES:
      debugger;
      return {
        ...state,
        vehicle: action.payload,
        error: "",
      };
    case "ADD_CURRENT":
      return {
        ...state,
        price: action.newPrice,
      };
    case types.GET_ALL_VEHICLES_ERROR:
      return {
        ...state,
        error: action.payload,
        vehicle: {},
      };
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
