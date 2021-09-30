import * as types from "../actions/types"; 

const fsdSettingsObj = {
  "Model 3": "autopilot",
  "Model S": "autopilot",
  "Model X": "autopilot",
  "Model Y": "autopilot",
};

const initialState = {
  vehicle: {},
  error: "",
  vehicleRenderData: {},
  vehiclesRendered: [], 
  vehicleContent: {},
  form: {},
  activeFSDSetting: fsdSettingsObj,
  activeOffMenuAutopilot: "no_autopilot",
  vehicleOrderObject: [],
  loadTeslaDataBool: false,
  menuOptions: "",
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
      case types.FSD_SETTING:
        initialState.activeFSDSetting = fsdSettingsObj;
        return {
          ...state,
          activeFSDSetting: action.payload,
        };
      case types.OFFMENU_AUTOPILOT:
        initialState.activeOffMenuAutopilot = "no_autopilot";
        return {
          ...state,
          activeOffMenuAutopilot: action.payload,
        };
      case types.VEHICLE_ORDER:
        initialState.vehicleOrderObject = [];
        return {
          ...state,
          vehicleOrderObject: action.payload,
        };
      case types.LOAD_TESLA_DATA_BOOL:
        initialState.loadTeslaDataBool = false;
        return {
          ...state,
          loadTeslaDataBool: action.payload,
        };
      case types.MENU_OPTIONS:
        initialState.menuOptions = "";
        return {
          ...state,
          menuOptions: action.payload,
        };
    default:
      return state;
  }
}
