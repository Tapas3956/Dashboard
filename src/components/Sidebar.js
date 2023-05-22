import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceLaughWink,
  faGaugeHigh,
  faGear,
  faWrench,
  faFolder,
  faChartSimple,
  faTable,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <NavLink
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <FontAwesomeIcon
              icon={faFaceLaughWink}
              style={{ fontSize: "2rem" }}
            />
          </div>
          <div className="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </div>
        </NavLink>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item">
          <NavLink className="nav-link" to="/" activeClassName="active">
            <FontAwesomeIcon icon={faGaugeHigh} />
            <span>Dashboard</span>
          </NavLink>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Interface</div>

        <li className="nav-item">
          <NavLink
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
            activeClassName="active"
          >
            <FontAwesomeIcon icon={faGear} />
            <span>Components</span>
          </NavLink>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Components:</h6>
              <Link className="collapse-item" to="buttons.html">
                Buttons
              </Link>
              <Link className="collapse-item" to="cards.html">
                Cards
              </Link>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <NavLink
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
            activeClassName="active"
          >
            <FontAwesomeIcon icon={faWrench} />
            <span>Utilities</span>
          </NavLink>
          <div
            id="collapseUtilities"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Utilities:</h6>
              <Link className="collapse-item" href="utilities-color.html">
                Colors
              </Link>
              <Link className="collapse-item" href="utilities-border.html">
                Borders
              </Link>
              <Link className="collapse-item" href="utilities-animation.html">
                Animations
              </Link>
              <Link className="collapse-item" href="utilities-other.html">
                Other
              </Link>
            </div>
          </div>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Addons</div>

        <li className="nav-item">
          <NavLink
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
            activeClassName="active"
          >
            <FontAwesomeIcon icon={faFolder} />
            <span>Pages</span>
          </NavLink>
          <div
            id="collapsePages"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Login Screens:</h6>
              <Link className="collapse-item" to="/login">
                Login
              </Link>
              <Link className="collapse-item" href="register.html">
                Register
              </Link>
              <Link className="collapse-item" href="forgot-password.html">
                Forgot Password
              </Link>
              <div className="collapse-divider"></div>
              <h6 className="collapse-header">Other Pages:</h6>
              <Link className="collapse-item" href="404.html">
                404 Page
              </Link>
              <Link className="collapse-item" href="blank.html">
                Blank Page
              </Link>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/" activeClassName="active">
            <FontAwesomeIcon icon={faChartSimple} />
            <span>Charts</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/" activeClassName="active">
            <FontAwesomeIcon icon={faTable} />
            <span>Tables</span>
          </Link>
        </li>

        <hr className="sidebar-divider d-none d-md-block" />

        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            id="sidebarToggle"
          ></button>
        </div>

        <div className="sidebar-card d-none d-lg-flex">
          <img
            className="sidebar-card-illustration mb-2"
            src="assets/img/undraw_rocket.svg"
            alt="..."
          />
          <p className="text-center mb-2">
            <strong>SB Admin Pro</strong> is packed with premium features,
            components, and more!
          </p>
          <a
            className="btn btn-success btn-sm"
            href="https://startbootstrap.com/theme/sb-admin-pro"
          >
            Upgrade to Pro!
          </a>
        </div>
      </ul>

      <Outlet />
    </>
  );
};

export default Sidebar;
