import api from "./../../utils/api";
import { setAlert } from "./alert.actions";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./types";

export const loadUser = () => async (dispatch) => {
  try {
    const res = await api.get("/users/me");

    dispatch({
      type: USER_LOADED,
      payload: res.data.data.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const register = ({ name, email, password, passwordConfirm }) => async (
  dispatch
) => {
  const body = JSON.stringify({ name, email, password, passwordConfirm });
  try {
    const res = await api.post("/users/signup", body);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
    dispatch(setAlert(`Hello ${name}, Account succesfully created!`));
  } catch (err) {
    const errors = err.response.data;
    if (errors) {
      dispatch(setAlert(errors.message, "danger"));
    }
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  const body = JSON.stringify({ email, password });

  try {
    const res = await api.post("/users/login", body);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data;

    if (errors) {
      dispatch(setAlert(errors.message, "danger"));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const logout = () => async (dispatch) => {
  await api.get("/users/logout");
  dispatch({ type: LOGOUT });
  dispatch(setAlert("Logged out succesfully! Please visit again, thank's."));
};
