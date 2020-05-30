import React, { Fragment } from "react";
import spinner from "./spinner.gif";

export default () => (
  <Fragment>
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div
          className="col"
          style={{
            height: "80vh",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={spinner}
            style={{ margin: "auto", display: "block" }}
            alt="Loading..."
          />
        </div>
      </div>
    </div>
  </Fragment>
);
