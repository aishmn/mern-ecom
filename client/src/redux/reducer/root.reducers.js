import { combineReducers } from "redux";
import alert from "./alert.reducers";
import auth from "./auth.reducers";
import product from "./product.reducers";
import category from "./category.reducers";
import cart from "./cart.reducers";
import order from "./order.reducers";
export default combineReducers({
  alert,
  auth,
  product,
  category,
  cart,
  order,
});
