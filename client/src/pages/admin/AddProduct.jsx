import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCategories } from "../../redux/action/category.actions";
import { addProduct } from "../../redux/action/product.actions";
const AddProduct = ({
  getCategories,
  category: { categories },
  addProduct,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
    category: "",
  });
  const { name, price, description, category } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    addProduct(name, price, description, category);
  };

  useEffect(() => {
    getCategories();
  }, [getCategories]);
  return (
    <div className="container ">
      <form onSubmit={onSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="productname">Product Name</label>
            <input
              type="text"
              className="form-control"
              id="productname"
              placeholder="Product Name"
              name="name"
              value={name}
              onChange={onChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="price">Price</label>
            <input
              type="Number"
              className="form-control"
              id="price"
              placeholder="Product Price"
              name="price"
              value={price}
              onChange={onChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="productdescription">Product Description</label>
          <textarea
            className="form-control"
            id="productdescription"
            placeholder="Product description"
            name="description"
            value={description}
            onChange={onChange}
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-8">
            <label htmlFor="coverimage">Cover Image</label>
            <input type="file" className="form-control " id="coverimage" />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              className="form-control"
              name="category"
              onChange={onChange}
            >
              <option>Choose...</option>
              {categories
                ? categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.title}
                    </option>
                  ))
                : ""}
            </select>
          </div>
        </div>

        <input
          type="submit"
          className="btn btn-success form-control rounded-0"
          value="Add Product"
        />
      </form>
    </div>
  );
};
AddProduct.propTypes = {
  getCategories: PropTypes.func.isRequired,
  addProduct: PropTypes.func.isRequired,
  category: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  category: state.category,
});
export default connect(mapStateToProps, { getCategories, addProduct })(
  AddProduct
);
