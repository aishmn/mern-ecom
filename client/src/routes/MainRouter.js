import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Home from "../pages/home/Home";
import Alert from "../components/alert/Alert";
import Footer from "../components/core/Footer";
import Header from "../components/core/Header";
import CartPage from "../pages/cart/CartPage";
import Dashboard from "../pages/dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import Admin from "../pages/admin/Admin";
import AddProduct from "../pages/admin/AddProduct";
import EditProduct from "../pages/admin/EditProduct";
import AllProducts from "../pages/admin/AllProducts";

const MainRouter = () => {
  return (
    <Fragment>
      <Header />
      <Alert />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/cart" component={CartPage} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <AdminRoute exact path="/admin" component={Admin} />
        <AdminRoute exact path="/admin/add-product" component={AddProduct} />
        <AdminRoute exact path="/admin/edit-product" component={EditProduct} />
        <AdminRoute exact path="/admin/all-products" component={AllProducts} />
      </Switch>
      <Footer />
    </Fragment>
  );
};

export default MainRouter;
