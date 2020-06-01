import api from "./../../utils/api";
import {
  GET_PRODUCTS,
  GET_PRODUCTS_ERROR,
  FILTER_PRODUCTS_BY_CATEGORY,
  ADD_PRODUCT,
  DELETE_PRODUCT,
} from "./types";
import { setAlert } from "./alert.actions";

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

export const addProduct = (name, price, description, category) => async (
  dispatch
) => {
  try {
    const body = {
      name,
      price,
      description,
      category,
    };

    const product = await api.post("/products", body);
    dispatch({ type: ADD_PRODUCT, payload: product });
    dispatch(setAlert("Product created Successfully, You can create more"));
  } catch (error) {
    console.log(error.response);
  }
};

export const deleteProduct = (id, products) => async (dispatch) => {
  try {
    await api.delete(`/products/${id}`);
    const fproducts = products.filter((product) => product._id !== id);
    dispatch(setAlert("Product succesfully deleted"));
    dispatch({ type: DELETE_PRODUCT, payload: fproducts });
  } catch (err) {
    console.log(err.response);
  }
};
