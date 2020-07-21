import React from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";

const isActive = (history, path) => {
  if (history.location.pathname === path)
    return {
      color: "#FF9900",
    };
  else
    return {
      color: "#FFFFFF",
    };
};

const Menu = (props) => {
  return (
    <div>
      <ul className="nav nav-tabs bg-primary">
        <li className="nav-item">
          <Link
            className="nav-link"
            to="/"
            style={isActive(props.history, "/")}
          >
            Home
          </Link>
        </li>

        {!isAuthenticated() && (
          <>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/signin"
                style={isActive(props.history, "/signin")}
              >
                Sign In
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/signup"
                style={isActive(props.history, "/signup")}
              >
                Sign Up
              </Link>
            </li>
          </>
        )}
        {isAuthenticated() && (
          <>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/addItem"
                style={isActive(props.history, "/addItem")}
              >
                Add Password
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={isActive(props.history, "/signup")}
                to=""
                onClick={() =>
                  signout(() => {
                    props.history.push("/");
                  })
                }
              >
                Sign Out
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default withRouter(Menu);
