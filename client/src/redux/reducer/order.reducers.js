import { PAYMENT_SUCCESS } from "./../action/types";
let initialState = {
  success: false,
  session: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case PAYMENT_SUCCESS:
      return { ...state, success: true, session: payload };
    default:
      return state;
  }
}
