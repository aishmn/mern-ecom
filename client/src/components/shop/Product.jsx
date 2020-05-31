import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../redux/action/cart.actions";
import PropTypes from "prop-types";

const Product = ({ product, addToCart, cartItems }) => {
  return (
    <div className="col-md-4 my-1">
      <div className="card rounded-0">
        <img
          src={product.coverImage}
          className="card-img-top p-2"
          alt="product"
          style={{ height: "190px", width: "240px" }}
        />
        <div className="card-body">
          <div className="product-description pb-3">{product.name}</div>
          <p className="text-small text-muted">
            {product.description.slice(0, 40) + "..."}
          </p>
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
