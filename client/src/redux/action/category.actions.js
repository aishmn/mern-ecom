import api from "./../../utils/api";
import { GET_CATEGORIES, GET_CATEGORIES_ERROR } from "./types";

export const getCategories = () => async (dispatch) => {
  try {
    const res = await api.get("/products/category");
    dispatch({ type: GET_CATEGORIES, payload: res.data.data.data });
  } catch (error) {
    dispatch({ type: GET_CATEGORIES_ERROR });
  }
};
