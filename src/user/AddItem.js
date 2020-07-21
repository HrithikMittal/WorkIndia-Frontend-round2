import React, { Component } from "react";
import { isAuthenticated, addItem } from "../auth";

class AddItem extends Component {
  state = {
    website: "",
    username: "",
    password: "",
    error: "",
    open: false,
  };

  handleChange = (name) => (event) => {
    this.setState({ error: "", open: false });
    this.setState({ [name]: event.target.value });
  };

  clickSubmit = (event) => {
    event.preventDefault();
    const { website, username, password } = this.state;

    const dataToSave = {
      website,
      username,
      password,
    };
    console.log(isAuthenticated());
    const userId = isAuthenticated().userRes.id;
    const token = isAuthenticated().token;

    addItem(userId, token, dataToSave).then((data) => {
      if (data.error) {
        this.setState({ error: data.error });
      } else
        this.setState({
          error: "",
          website: "",
          password: "",
          username: "",
          open: true,
        });
    });
  };

  render() {
    return (
      <div className="container">
        <h2 className="mt-5 mb-5"> Add Password</h2>

        <div
          className="alert alert-danger"
          style={{ display: this.state.error ? "" : "none" }}
        >
          {this.state.error}
        </div>

        <div
          className="alert alert-info"
          style={{ display: this.state.open ? "" : "none" }}
        >
          Password is added successfully
        </div>

        <form>
          <div className="form-group">
            <label className="text-muted">Website</label>
            <input
              onChange={this.handleChange("website")}
              type="website"
              className="form-control"
              value={this.state.website}
            />
          </div>

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
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddItem;
