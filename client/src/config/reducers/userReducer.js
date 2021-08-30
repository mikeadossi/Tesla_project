import * as types from "../actions/types";

const initialState = {
  user_data: {},
  error: "", 
};

export default function (state = initialState, action) { 
  switch (action.type) {
    case types.GET_USER_DATA:
      return {
        ...state,
        user_data: action.payload,
        error: ""
      };
    case types.GET_USER_DATA_ERROR:
      return {
        ...state,
        error: action.payload,
        user_data: {}
      };
    case types.UPDATE_USER_DATA:
      return {
        ...state, 
        error: ""
      };
    case types.UPDATE_USER_DATA_ERROR:
      return {
        ...state, 
        error: action.payload, 
      };
    case types.INSERT_NEW_USER:
      return {
        ...state, 
        error: ""
      };
    case types.INSERT_NEW_USER_ERROR:
      return {
        ...state, 
        error: action.payload, 
      };
    default:
      return state;
  }
}
