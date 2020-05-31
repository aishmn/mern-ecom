import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import {
  increaseItem,
  decreaseItem,
  removeItem,
} from "../../redux/action/cart.actions";
import StripeButton from "../../components/stripe/StripeButton";
import { setAlert } from "../../redux/action/alert.actions";
import PropTypes from "prop-types";

const CartPage = ({
  cart: { items, totalAmmount },
  increaseItem,
  decreaseItem,
  removeItem,
  setAlert,
  auth,
}) => {
  if (items.length === 0) {
    setAlert("Please Add some items to the cart");
    return <Redirect to="/" />;
  }
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
        {auth.isAuthenticated ? (
          <div className="mb-5 text-right">
            <StripeButton
              price={totalAmmount}
              user={auth.user._id}
              products={items}
            />
          </div>
        ) : (
          <Link
            role="link"
            className="btn btn-warning form-control my-5 "
            to="/login"
          >
            LOGIN TO PROCEED PAYMENT
          </Link>
        )}
      </div>
      <div className="card p-3">
        <p className="lead ">
          You can use following fake visa card for the payment test purpose
          details are :
        </p>
        <br />
        <span>
          card-no: <strong className="text-primary">4242-4242-4242-4242</strong>
        </span>
        <br />
        <span>
          exp-date: <strong className="text-primary">12/22</strong>
        </span>
        <br />
        <span>
          cvv-number: <strong className="text-primary">255</strong>
        </span>
      </div>
    </div>
  );
};
CartPage.propTypes = {
  increaseItem: PropTypes.func,
  decreaseItem: PropTypes.func,
  removeItem: PropTypes.func,
  setAlert: PropTypes.func,
  auth: PropTypes.object,
};
const mapStateToProps = (state) => ({
  cart: state.cart,
  auth: state.auth,
});
export default connect(mapStateToProps, {
  increaseItem,
  decreaseItem,
  removeItem,
  setAlert,
})(CartPage);
