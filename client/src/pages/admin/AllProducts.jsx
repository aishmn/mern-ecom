import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { getProducts, deleteProduct } from "../../redux/action/product.actions";
import Spinner from "../../components/layout/Spinner";

const AllProducts = ({
  product: { products, loading },
  getProducts,
  deleteProduct,
}) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);
  console.log(loading);
  if (loading) {
    return <Spinner />;
  } else if (products === null) {
    return <Redirect to="/admin/add-product" />;
  }

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Available</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products ? (
            products.map((product) => (
              <tr key={product._id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.available ? "Yes" : "no"}</td>
                <td>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => deleteProduct(product._id, products)}
                  >
                    <i className="fa fa-times " aria-hidden="true"></i>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No product</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
AllProducts.propTypes = {
  product: PropTypes.object.isRequired,
  deleteProduct: PropTypes.func,
};
const mapStateToProps = (state) => ({
  product: state.product,
});
export default connect(mapStateToProps, { getProducts, deleteProduct })(
  AllProducts
);
