import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getMyOrders } from "../../redux/action/order.actions";
import Order from "../../components/order/Order";
import PropTypes from "prop-types";

const Dashboard = ({ getMyOrders, order: { orders } }) => {
  useEffect(() => {
    getMyOrders();
  }, [getMyOrders]);
  return (
    <div>
      <div className=" mb-5">
        <div className="lead p-2 text-center text-uppercase">My Orders</div>
        {orders
          ? orders.map((order) => <Order key={order._id} order={order} />)
          : ""}
      </div>
    </div>
  );
};
Dashboard.propTypes = {
  getMyOrders: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  order: state.order,
});
export default connect(mapStateToProps, { getMyOrders })(Dashboard);
