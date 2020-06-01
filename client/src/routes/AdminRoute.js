import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../components/layout/Spinner";
import AdminSidebar from "../components/admin/AdminSidebar";

const AdminRoute = ({
  component: Component,
  auth: { isAuthenticated, loading },
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      loading ? (
        <Spinner />
      ) : isAuthenticated ? (
        <Fragment>
          <div id="wrapper">
            <AdminSidebar />
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <Component {...props} />
              </div>
            </div>
          </div>
        </Fragment>
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

AdminRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(AdminRoute);
