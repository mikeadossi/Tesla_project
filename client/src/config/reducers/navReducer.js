import * as types from "../actions/types";

const initialState = {
  zipcode_data: {},
  error: "",
  displayMobileMenu: false,
  displayResetWarning: false,
  displayApplyAllWarning: false,
  displayLocations: false,
  getLocations: {},
};

export default function (state = initialState, action) {
  // reducers are similar to reduce callback and must not cause side effects
  switch (action.type) {
    case types.GET_ALL_ZIPCODE_DATA:
      return {
        ...state,
        zipcode_data: action.payload,
        error: "",
      };
    case types.GET_ALL_ZIPCODE_DATA_ERROR:
      return {
        ...state,
        error: action.payload,
        zipcode_data: {},
      };
    case types.TOGGLE_MOBILE_MENU:
      const { displayMobileMenu } = state;
      return {
        ...state,
        displayMobileMenu: !displayMobileMenu,
      };
    case types.TOGGLE_RESET_WARNING:
      const { displayResetWarning } = state;
      return {
        ...state,
        displayResetWarning: !displayResetWarning,
        currentModelName: action.payload,
      };
    case types.TOGGLE_APPLY_ALL_WARNING:
      const { displayApplyAllWarning } = state;
      return {
        ...state,
        displayApplyAllWarning: !displayApplyAllWarning,
        currentModelName: action.payload,
      };
    case types.TOGGLE_LOCATIONS:
      const { displayLocations } = state;
      return {
        ...state,
        displayLocations: !displayLocations, 
      };
    case types.GET_LOCATIONS:
      initialState.getLocations = {};
      return {
        ...state,
        getLocations: action.payload, 
      };
    default:
      return state;
  }
}
