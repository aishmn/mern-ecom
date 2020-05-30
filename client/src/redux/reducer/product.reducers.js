import {
  GET_PRODUCTS,
  GET_PRODUCTS_ERROR,
  FILTER_PRODUCTS_BY_CATEGORY,
} from "../action/types";

const initialState = {
  loading: false,
  products: null,
  filteredProducts: null,
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
    default:
      return state;
  }
}
