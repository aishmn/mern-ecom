import { GET_CATEGORIES, GET_CATEGORIES_ERROR } from "../action/types";

const initialState = {
  categories: null,
  loading: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_CATEGORIES:
      return { ...state, categories: payload };

    case GET_CATEGORIES_ERROR:
      return { ...state, categories: null };
    default:
      return state;
  }
}
