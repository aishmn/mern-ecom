import React, { Fragment } from "react";
import "./admin-sidebar.scss";
import { Link } from "react-router-dom";
const AdminSidebar = () => {
  return (
    <Fragment>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/#"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink" />
          </div>
          <div className="sidebar-brand-text mx-3">ADMIN</div>
        </a>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item active">
          <Link className="nav-link" to="/admin">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>Dashboard</span>
          </Link>
        </li>
        <hr className="sidebar-divider" />
        <li className="nav-item ">
          <Link className="nav-link" to="/admin/all-products">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>All Products</span>
          </Link>
          <Link className="nav-link" to="/admin/add-product">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>Add Product</span>
          </Link>
          <Link className="nav-link" to="/admin/edit-product">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>Edit Product</span>
          </Link>
        </li>
        <hr className="sidebar-divider" />
        <li className="nav-item ">
          <Link className="nav-link" to="/admin/add-product">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>All Orders</span>
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default AdminSidebar;
