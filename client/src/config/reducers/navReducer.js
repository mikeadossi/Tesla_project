import * as types from "../actions/types";

const initialState = {
  zipcode_data: {},
  error: "",
};

export default function (state = initialState, action) {
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
    default:
      return state;
  }
}
