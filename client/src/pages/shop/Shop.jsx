import React, { Fragment } from "react";
import Category from "../../components/shop/Category";
import Products from "../../components/shop/Products";

const Shop = () => {
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 text-center">
            <div className="h5 text-uppercase mt-2">Categories</div>
            <Category />
          </div>
          <div className="col-md-9 bg-info">
            <Products />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Shop;
