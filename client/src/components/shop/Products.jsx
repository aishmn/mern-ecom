import React, { Fragment, useEffect } from "react";
import Product from "./Product";
import { connect } from "react-redux";
import { getProducts } from "../../redux/action/product.actions";
import PropTypes from "prop-types";
import Spinner from "../../components/layout/Spinner";

const Products = ({ getProducts, product: { products }, filteredProducts }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  if (filteredProducts) {
    products = filteredProducts;
  }
  return (
    <Fragment>
      <div className="row">
        {products ? (
          products.map((product) => (
            <Product key={product._id} product={product} />
          ))
        ) : (
          <Spinner />
        )}
      </div>
    </Fragment>
  );
};
Products.propTypes = {
  product: PropTypes.object,
  filteredProducts: PropTypes.array,
  getProducts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  product: state.product,
  filteredProducts: state.product.filteredProducts,
});

export default connect(mapStateToProps, { getProducts })(Products);
