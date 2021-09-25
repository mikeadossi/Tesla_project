import * as types from "../actions/types"; 

const initialState = {
  vehicle: {},
  error: "",
  vehicleRenderData: {},
  vehiclesRendered: [], 
  vehicleContent: {},
  form: {},
};

export default function state(state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_VEHICLES:
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
    case types.UPDATE_VEHICLE_RENDER_DATA:
      initialState.vehicleRenderData = {};
      return {
        ...state,
        vehicleRenderData: action.payload,
      };
    case types.VIEW_RENDERED_OPTIONS:
      initialState.vehiclesRendered = [];
      return {
        ...state,
        vehiclesRendered: action.payload,
      };
    case types.GET_VEHICLE_CONTENT:
      initialState.vehicleContent = {};
      return {
        ...state,
        vehicleContent: action.payload,
      };
      case types.ACTIVE_FORM:
        initialState.activeFormVals = {};
        return {
          ...state,
          activeFormVals: action.payload,
        };
    default:
      return state;
  }
}
