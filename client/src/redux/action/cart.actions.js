import {
  ADD_TO_CART,
  INCREASE_ITEM,
  DECREASE_ITEM,
  REMOVE_ITEM,
  EMPTY_CART,
} from "./types";

export const addToCart = (items, product) => (dispatch) => {
  const cartItems = items.slice();
  let productAlreadyInCart = false;
  cartItems.forEach((cartItem) => {
    if (cartItem._id === product._id) {
      cartItem.count += 1;
      productAlreadyInCart = true;
    }
  });
  if (!productAlreadyInCart) {
    cartItems.push({ ...product, count: 1 });
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  dispatch({ type: ADD_TO_CART, payload: { cartItems } });
};

export const increaseItem = (cartItems, id) => (dispatch) => {
  cartItems.forEach((item) => {
    if (item._id === id) {
      item.count = item.count + 1;
    }
  });

  dispatch({ type: INCREASE_ITEM, payload: { cartItems } });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const decreaseItem = (cartItems, id) => (dispatch) => {
  cartItems.forEach((item) => {
    if (item._id === id && item.count !== 1) {
      item.count = item.count - 1;
    }
  });

  dispatch({ type: DECREASE_ITEM, payload: { cartItems } });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const removeItem = (items, id) => (dispatch) => {
  const cartItems = items.filter((item) => item._id !== id);

  dispatch({ type: REMOVE_ITEM, payload: { cartItems } });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const emptyCart = () => (dispatch) => {
  localStorage.removeItem("cartItems");
  dispatch({ type: EMPTY_CART });
};
