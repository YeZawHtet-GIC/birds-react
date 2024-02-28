import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer bg-dark text-white py-3 mt-3">
      <div className="d-flex justify-content-center">
        <div className=" text-center px-5">
          <h5>Follow Us</h5>
          <div className="social-icons">
            <a href="#" className="text-white me-3">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="text-white me-3">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="text-white me-3">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-light mt-3">
        &copy; {new Date().getFullYear()} Bird Website. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
