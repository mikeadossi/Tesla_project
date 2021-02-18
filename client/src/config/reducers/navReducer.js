import * as types from "../actions/types";

const initialState = {
  zipcode_data: {},
  error: "",
  displayMobileMenu: false,
  displayResetWarning: false,
  displayApplyAllWarning: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_ZIPCODE_DATA:
      return {
        ...state,
        zipcode_data: action.payload,
        error: ""
      };
    case types.GET_ALL_ZIPCODE_DATA_ERROR:
      return {
        ...state,
        error: action.payload,
        zipcode_data: {}
      };
    case types.TOGGLE_MOBILE_MENU:
      const { displayMobileMenu } = state;
      return {
        ...state,
        displayMobileMenu: !displayMobileMenu
      };
    case types.TOGGLE_RESET_WARNING:
      const { displayResetWarning } = state;
      return {
        ...state,
        displayResetWarning: !displayResetWarning
      };
    case types.TOGGLE_APPLY_ALL_WARNING:
      const { displayApplyAllWarning } = state;
      return {
        ...state,
        displayApplyAllWarning: !displayApplyAllWarning
      };
    default:
      return state;
  }
}
