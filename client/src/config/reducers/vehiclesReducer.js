import * as types from "../actions/types"

const initialState = {
    vehicle: {},
    error: ''
    
};

export default function (state = initialState, action){
    switch(action.type) {
        
        case types.GET_ALL_VEHICLES:
            return {
                ...state,
                vehicle: action.payload,
                error: ''
            };

        case types.GET_ALL_VEHICLES_ERROR:
            return {
                ...state,
                error: action.payload,
                vehicle: {}
                
            }
        default:
            return state;
    }
}