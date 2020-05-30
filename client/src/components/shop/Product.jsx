import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../redux/action/cart.actions";
import PropTypes from "prop-types";

const Product = ({ product, addToCart, cartItems }) => {
  return (
    <div className="col-md-4 my-1">
      <div className="card rounded-0">
        <img
          src="https://placeimg.com/640/480/any"
          className="card-img-top"
          alt="product"
        />
        <div className="card-body">
          <div className="product-description pb-3">{product.name}</div>
          <button
            className="btn btn-outline-success rounded-0 form-control "
            onClick={(e) => addToCart(cartItems, product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
Product.propTypes = {
  addToCart: PropTypes.func,
};
const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { addToCart })(Product);
