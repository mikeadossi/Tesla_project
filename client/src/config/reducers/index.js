import {combineReducers} from 'redux'
import vehiclesReducer from './vehiclesReducer'
import navReducer from './navReducer'
import usStateReducer from './usStateReducer'

export default combineReducers({
    vehiclesReducer,
    navReducer,
    usStateReducer,
});