import {combineReducers} from 'redux'
import vehiclesReducer from './vehiclesReducer'
import navReducer from './navReducer'

export default combineReducers({
    vehiclesReducer,
    navReducer
});