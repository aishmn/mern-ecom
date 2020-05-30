import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../../components/layout/Spinner";
import Shop from "../shop/Shop";

const Home = ({ loading }) => {
  if (loading) return <Spinner />;
  return (
    <div className="">
      <Shop />
    </div>
  );
};

Home.propTypes = {
  loading: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  loading: state.auth.loading,
});

export default connect(mapStateToProps, null)(Home);
