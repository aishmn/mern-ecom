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
const MainRouter = () => {
  return (
    <Fragment>
      <Header />
      <Alert />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/cart" component={CartPage} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
      <Footer />
    </Fragment>
  );
};

export default MainRouter;
