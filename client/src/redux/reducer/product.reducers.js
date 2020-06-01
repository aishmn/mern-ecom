import {
  GET_PRODUCTS,
  GET_PRODUCTS_ERROR,
  FILTER_PRODUCTS_BY_CATEGORY,
  ADD_PRODUCT,
  DELETE_PRODUCT,
} from "../action/types";

const initialState = {
  loading: false,
  products: null,
  filteredProducts: null,
  addedProduct: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS:
      return { ...state, products: payload };
    case GET_PRODUCTS_ERROR:
      return { ...state, products: null };
    case FILTER_PRODUCTS_BY_CATEGORY:
      return { ...state, filteredProducts: payload };
    case ADD_PRODUCT:
      return { ...state, addedProduct: payload };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
}
