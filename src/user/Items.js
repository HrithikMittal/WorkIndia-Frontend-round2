import React, { Component } from "react";
import { getAllItems, isAuthenticated } from "../auth";
class Item extends Component {
  state = {
    items: [],
  };

  componentWillMount() {
    var data = isAuthenticated();
    getAllItems(data.userRes.id, data.token)
      .then((dataApi) => {
        this.setState({ items: dataApi.Items });
      })
      .catch((err) => {
        console.log("Error is", err);
      });
  }
  render() {
    return (
      <>
        <div
          className="card-columns"
          style={{ marginLeft: "20px", marginRight: "20px" }}
        >
          {this.state.items &&
            this.state.items.map((item, index) => {
              return (
                <div
                  key={index}
                  className="card"
                  style={{ borderRadius: "10px" }}
                >
                  <div className="card-header">
                    <b style={{ fontSize: "20px" }}>{item.website}</b>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      <b>Username:</b>
                      {item.username}
                    </h5>
                    <h5 className="card-title">
                      <b>Password:</b>
                      {item.password}
                    </h5>
                  </div>
                </div>
              );
            })}
        </div>
        <div></div>
      </>
    );
  }
}

export default Item;
