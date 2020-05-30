import React from "react";
import "./footer.scss";
const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <div className="pt-5 pb-5 footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-xs-12 about-company">
            <h2>Information</h2>
            <p className="pr-5 text-white-50">
              This is an ecommerce project devloped by Developer - <br />
              Manish Yadav
            </p>
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/yadavmanish.com.np"
              >
                <i className="fa fa-facebook-square mr-1" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/manishyadav-npl/"
              >
                <i className="fa fa-linkedin-square" />
              </a>
            </p>
          </div>
          <div className="col-lg-3 col-xs-12 links">
            <h4 className="mt-lg-0 mt-sm-3">Links</h4>
            <ul className="m-0 p-0">
              <li>
                - <a href="/#">Lorem ipsum</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-xs-12 location">
            <h4 className="mt-lg-0 mt-sm-4">Location</h4>
            <p>Kapan, Baluwakhani Nepal</p>
            <a className="mb-0 text-warning" href="tel:+9779816399133">
              <i className="fa fa-phone mr-3" />
              +9779816399133
            </a>
            <a href="mailto:manish.sinuwari@gmail.com" className="text-warning">
              <br />
              <i className="fa fa-envelope-o mr-3" />
              manish.sinuwari@gmail.com
            </a>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col copyright">
            <p>
              <small className="text-white-50">
                © {currentYear}. All Rights Reserved. Manish Yadav
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
