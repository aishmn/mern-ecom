import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../redux/action/auth.actions";
import Spinner from "../../components/layout/Spinner";
const Login = ({ login, isAuthenticated, loading }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };
  if (loading) {
    return <Spinner />;
  }
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
      <div className="container" style={{ height: "100vh" }}>
        <div className="row d-flex justify-content-center text-center">
          <div className="col-md-8 col-lg-6 shadow my-md-5 py-md-5 p-2">
            <p className="lead">
              <i className="fa fa-user" /> Sign Into Your Account
            </p>
            <form className="p-2" onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  name="email"
                  value={email}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  minLength="6"
                />
              </div>

              <div className="form-group">
                <input
                  type="submit"
                  className="btn btn-success form-control"
                  value="Login"
                />
              </div>
            </form>
            <p className="my-1">
              Don't have an account? <Link to="/register">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});

export default connect(mapStateToProps, { login })(Login);
