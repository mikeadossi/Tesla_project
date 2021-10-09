import * as types from "../actions/types";

const initialState = {
  showSolarConfig: false,
  recommendedProducts: "",
  recommendedSize: "",
};


export default function (state = initialState, action) { 
  switch (action.type) {
    case types.SHOW_SOLAR_CONFIG:
      return {
        ...state,
        showSolarConfig: action.payload,
        error: "",
      };
    case types.RECOMMENDED_PRODUCTS:
      return {
        ...state,
        recommendedProducts: action.payload,
        error: "",
      };
    case types.RECOMMENDED_SIZE:
      return {
        ...state,
        recommendedSize: action.payload,
        error: "",
      };
    default:
      return state;
  }
}