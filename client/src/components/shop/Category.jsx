import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCategories } from "../../redux/action/category.actions";
import PropTypes from "prop-types";
import { filterProductByCategory } from "../../redux/action/product.actions";

const Category = ({
  getCategories,
  categories,
  filterProductByCategory,
  products,
}) => {
  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return (
    <div>
      <nav className="nav flex-column my-auto">
        <a
          className="nav-link active"
          href="/#"
          onClick={(e) => filterProductByCategory(products)}
        >
          All Products
        </a>
        {categories
          ? categories.map((category) => (
              <a
                key={category._id}
                className="nav-link active"
                href="/#"
                onClick={() =>
                  filterProductByCategory(products, category.title)
                }
              >
                {category.title}
              </a>
            ))
          : ""}
      </nav>
    </div>
  );
};

Category.propTypes = {
  categories: PropTypes.array,
  filterProductByCategory: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  categories: state.category.categories,
  products: state.product.products,
});
export default connect(mapStateToProps, {
  getCategories,
  filterProductByCategory,
})(Category);
