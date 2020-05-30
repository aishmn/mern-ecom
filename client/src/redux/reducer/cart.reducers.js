import {
  ADD_TO_CART,
  INCREASE_ITEM,
  DECREASE_ITEM,
  REMOVE_ITEM,
} from "../action/types";
const cartItems = JSON.parse(localStorage.getItem("cartItems"));
const initialState = {
  items: cartItems ? cartItems : [],
  totalAmmount: cartItems
    ? cartItems.reduce((ammount, item) => ammount + item.price * item.count, 0)
    : 0,
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_CART:
    case INCREASE_ITEM:
    case DECREASE_ITEM:
    case REMOVE_ITEM:
      return {
        ...state,
        items: payload.cartItems,
        totalAmmount: payload.cartItems.reduce(
          (ammount, item) => ammount + item.price * item.count,
          0
        ),
      };
    default:
      return state;
  }
}
