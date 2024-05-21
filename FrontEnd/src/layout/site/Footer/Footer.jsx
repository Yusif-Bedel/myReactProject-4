import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row justify-content-center pt-5 pb-5">
          <div className="section-heading">
            <div className="section-item"></div>
            <h2 className="heading white">Subscribe to Newslater</h2>
          </div>
        </div>
        <div className="row border-top pb-5 pt-5">
          <div className="col-lg-3 col-md-6 col-sm-12 pt-5">
            <div className="d-flex gap-3">
              <img
                src="https://preview.colorlib.com/theme/course/images/logo.png.webp"
                alt=""
              />
              <h2 className="white">Course</h2>
            </div>
            <p className="pt-5 footer-subs">
              In aliquam, augue a gravida rutrum, ante nisl fermentum nulla,
              vitae tempor nisl ligula vel nunc. Proin quis mi malesuada,
              finibus tortor fermentum, tempor lacus.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pt-5">
            <h2 className="white">Menu</h2>
            <ul className="nav flex-column">
              <li className="nav-item mb-2 mt-3">
                <Link to="#" className="nav-link p-0">
                  Home
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0">
                  About Us
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0">
                  Courses
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0">
                  News
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 ">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pt-5">
            <h2 className="white">Usefull Links</h2>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 mt-3">
                  Testimonials
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0">
                  FAQ
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0">
                  Community
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 ">
                  Campus Pictures
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 ">
                  Tuitions
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pt-5">
            <h2 className="white">Contact</h2>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <p className="nav-link p-0 mt-3">
                  <i className="fa-solid fa-location-dot"></i>
                  Blvd Libertad, 34 m05200 Arévalo
                </p>
              </li>
              <li className="nav-item mb-2">
                <p className="nav-link p-0 mt-3">
                  <i className="fa-solid fa-mobile"></i>
                  Blvd Libertad, 34 m05200 Arévalo
                </p>
              </li>
              <li className="nav-item mb-2">
                <p className="nav-link p-0 mt-3">
                  <i className="fa-solid fa-envelope"></i>
                  Blvd Libertad, 34 m05200 Arévalo
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="row border-top pb-5 pt-5 justify-content-between">
          <p className="salam">
            Copyright ©2024 All rights reserved | This template is made with
            <i class="fa-solid fa-heart"></i>
            by
            <Link to="#" className="white">
              Colorlib
            </Link>
          </p>
          <ul className="nav salam gap-2">
            <li>
              <Link to="#">
                <i className="fa-brands fa-pinterest"></i>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fa-brands fa-linkedin"></i>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fa-brands fa-instagram"></i>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fa-brands fa-facebook"></i>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fa-brands fa-twitter"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
