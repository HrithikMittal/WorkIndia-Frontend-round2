import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { signin } from "../auth";

class Signin extends Component {
  state = {
    username: "",
    password: "",
    error: "",
    redirectToReferer: false,
  };

  handleChange = (name) => (event) => {
    this.setState({ error: "" });
    this.setState({ [name]: event.target.value });
  };

  clickSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const user = {
      username,
      password,
    };
    signin(user).then((data) => {
      if (data.error) {
        this.setState({ error: data.error });
      } else {
        // authenticate
        this.authenticate(data, () => {
          this.setState({ redirectToReferer: true });
        });

        // redirect
      }
    });
  };

  authenticate = (jwt, next) => {
    if (typeof window !== undefined) {
      localStorage.setItem("jwt", JSON.stringify(jwt));
    }
    next();
  };

  render() {
    if (this.state.redirectToReferer) {
      return <Redirect to="/" />;
    }

    return (
      <div className="container">
        <h2 className="mt-5 mb-5"> SignIn User</h2>

        <div
          className="alert alert-danger"
          style={{ display: this.state.error ? "" : "none" }}
        >
          {this.state.error}
        </div>

        <form>
          <div className="form-group">
            <label className="text-muted">Username</label>
            <input
              onChange={this.handleChange("username")}
              type="username"
              className="form-control"
              value={this.state.username}
            />
          </div>

          <div className="form-group">
            <label className="text-muted">Password</label>
            <input
              onChange={this.handleChange("password")}
              type="password"
              className="form-control"
              value={this.state.password}
            />
          </div>
          <button
            onClick={this.clickSubmit}
            className="btn btn-raised btn-primary"
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Signin;
