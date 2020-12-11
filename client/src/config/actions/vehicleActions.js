import * as types from "./types"
import axios from "axios"

export const getAllVehicles = (model) => async dispatch => {
    try{
        const res = await axios.get(`http://localhost:3002/model?model=${model}`)

        dispatch({
            type: types.GET_ALL_VEHICLES,
            payload: res.data
        })

    }catch(err){

        dispatch({
            type: types.GET_ALL_VEHICLES_ERROR,
            payload: err.response.data
        })
    }
}