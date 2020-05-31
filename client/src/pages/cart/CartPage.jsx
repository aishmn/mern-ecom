import React, { Fragment } from "react";
import { connect } from "react-redux";

import {
  increaseItem,
  decreaseItem,
  removeItem,
} from "../../redux/action/cart.actions";
import { makePayment } from "../../redux/action/order.actions";

import PropTypes from "prop-types";

const CartPage = ({
  cart: { items, totalAmmount },
  increaseItem,
  decreaseItem,
  removeItem,
  makePayment,
}) => {
  const itemquantity = items.length;

  return (
    <div className="container">
      <table className="table table-hover bg-secondary text-light mt-5 ">
        <thead>
          <tr className="bg-danger">
            <th scope="col">Item</th>
            <th scope="col">Price</th>
            <th scope="col">Count</th>
            <th scope="col">Total Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items === null ? (
            <Fragment>No items in cart</Fragment>
          ) : (
            items.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <strong>{item.count}</strong>
                  <button
                    className="btn btn-success ml-2 mb-1 p-1"
                    onClick={(e) => increaseItem(items, item._id)}
                  >
                    <i className="fa fa-arrow-up" aria-hidden="true"></i>
                  </button>
                  <button
                    className="btn btn-warning  p-1 mb-1 ml-3"
                    onClick={(e) => decreaseItem(items, item._id)}
                  >
                    <i className="fa fa-arrow-down" aria-hidden="true"></i>
                  </button>
                </td>
                <td>
                  <div className="text-left">{item.count * item.price}</div>
                </td>
                <td className="text-center ">
                  <button
                    className="btn btn-danger"
                    onClick={(e) => removeItem(items, item._id)}
                  >
                    <i className="fa fa-times" aria-hidden="true"></i>
                  </button>
                </td>
              </tr>
            ))
          )}
          <tr className="bg-danger">
            <td colSpan="4">Total ammount</td>
            <td>{totalAmmount}</td>
          </tr>
        </tbody>
      </table>
      <div style={{ backgroundColor: "#e0e0e0" }}>
        <button
          role="link"
          className="btn btn-warning form-control my-5 "
          onClick={(e) => makePayment(totalAmmount, itemquantity, items)}
        >
          CHECKOUT <i class="fa fa-cc-stripe" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};
CartPage.propTypes = {
  increaseItem: PropTypes.func,
  decreaseItem: PropTypes.func,
  removeItem: PropTypes.func,
  makePayment: PropTypes.func,
};
const mapStateToProps = (state) => ({
  cart: state.cart,
});
export default connect(mapStateToProps, {
  increaseItem,
  decreaseItem,
  removeItem,
  makePayment,
})(CartPage);
