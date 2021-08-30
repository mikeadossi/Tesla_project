import * as types from "./types";
import axios from "axios";
import { hasAValue } from "../../helpers/helper";
// import { useDispatch } from "react-redux"
// const dispatch = useDispatch();

export const getUserDetails = () => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:3002/userData`);
    dispatch({
      type: types.GET_USER_DATA,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    if (hasAValue(err.response) && hasAValue(err.response.data)) {
      dispatch({
        type: types.GET_USER_DATA_ERROR,
        payload: err.response.data,
      });
    }
  }
};

export const insertNewMember = (userObj) => async (dispatch) => {
  try {
    console.log("insert new member actions >>>", userObj);

    const res = await axios.post(
      `http://localhost:3002/insertNewUser`,
      userObj,
      { headers: { "Content-type": "application/json; charset=UFT-8" } }
    );
    dispatch({
      type: types.INSERT_NEW_USER,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    if (hasAValue(err.response) && hasAValue(err.response.data)) {
      dispatch({
        type: types.INSERT_NEW_USER_ERROR,
        payload: err.response.data,
      });
    }
  }
};

export const updateUser = () => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:3002/updateUserData`);
    dispatch({
      type: types.UPDATE_USER_DATA,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    if (hasAValue(err.response) && hasAValue(err.response.data)) {
      dispatch({
        type: types.UPDATE_USER_DATA_ERROR,
        payload: err.response.data,
      });
    }
  }
};
