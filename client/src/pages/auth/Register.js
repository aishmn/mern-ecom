import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../redux/action/alert.actions";
import { register } from "../../redux/action/auth.actions";
import PropTypes from "prop-types";
import Spinner from "../../components/layout/Spinner";
const Register = ({ setAlert, register, isAuthenticated, loading }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const { name, email, password, passwordConfirm } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({ name, email, password, passwordConfirm });
    }
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
        <div className="row d-flex justify-content-center  ">
          <div className="col-md-8 col-lg-6 shadow my-md-5 py-md-5 p-4 text-center ">
            <p className="lead">
              <i className="fa fa-user" /> Create Your Account
            </p>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  name="email"
                  value={email}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="form-control"
                  name="passwordConfirm"
                  value={passwordConfirm}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  className="btn btn-success form-control"
                  value="Register"
                />
              </div>
            </form>
            <p className="my-1">
              Already have an account? <Link to="/login">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
