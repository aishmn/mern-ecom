import React from "react";

const Order = ({ order }) => {
  return (
    <div className="card">
      <div className="card-body">
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Products</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{order.created}</td>
              <td>
                <ul className="list-group ">
                  {order.products.map((product) => (
                    <li
                      key={product._id}
                      className="list-group-item bg-warning text-dark"
                    >
                      {product.name}
                    </li>
                  ))}
                </ul>
              </td>
              <td>{order.status}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
