import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Cart = ({ cart }) => {
  return (
    <Link className="badge badge-warning p-2 border" to="/cart">
      Cart <span>{cart.length}</span>
      <span className="sr-only">shopping cart</span>
    </Link>
  );
};
const mapStateToProps = (state) => ({
  cart: state.cart.items,
});
export default connect(mapStateToProps, null)(Cart);
