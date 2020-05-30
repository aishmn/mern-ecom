import api from "./../../utils/api";
import {
  GET_PRODUCTS,
  GET_PRODUCTS_ERROR,
  FILTER_PRODUCTS_BY_CATEGORY,
} from "./types";

export const getProducts = () => async (dispatch) => {
  try {
    const res = await api.get("/products");
    dispatch({ type: GET_PRODUCTS, payload: res.data.data.data });
  } catch (error) {
    console.log("error from here", error.response);
    dispatch({ type: GET_PRODUCTS_ERROR });
  }
};

export const filterProductByCategory = (products, category) => async (
  dispatch
) => {
  dispatch({
    type: FILTER_PRODUCTS_BY_CATEGORY,
    payload: category
      ? products.filter((product) => product.category.title === category)
      : null,
  });
};
