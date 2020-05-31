import { ORDER_BOOKED, GET_MY_ORDERS } from "./../action/types";

let initialState = {
  orderBooked: false,
  loading: false,
  orders: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ORDER_BOOKED:
      return { ...state, orderBooked: true };
    case GET_MY_ORDERS:
      return { ...state, orders: payload };
    default:
      return state;
  }
}
