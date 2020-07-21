import React, { Component } from "react";
import { getAllItems, isAuthenticated } from "../auth";
class Item extends Component {
  state = {
    items: [],
  };

  onClickHandler = () => {
    var data = isAuthenticated();
    getAllItems(data.userRes.id, data.token)
      .then((dataApi) => {
        this.setState({ items: dataApi.Items });
      })
      .catch((err) => {
        console.log("Error is", err);
      });
  };

  componentWillMount() {
    //   .then((data) => {
    //     var userId, token;
    //     userId = data.userRes.id;
    //     token = data.token;
    //     getAllItems(userId, token)
    //       .then((items) => {
    //         console.log(items);
    //       })
    //       .catch((err) => {
    //         console.log("Error is", err);
    //       });
    //   })
    //   .catch((err) => {
    //     console.log("Error is", err);
    //   });
  }
  render() {
    return (
      <>
        <div onClick={this.onClickHandler}>All the card</div>
        {this.state.items &&
          this.state.items.map((item, index) => {
            return (
              <div
                key={index}
                className="card"
                style={{ width: `20rem`, marginBottom: "10", padding: "10" }}
              >
                <div className="card-header">{item.website}</div>
                <div className="card-body">
                  <h5 className="card-title">username:{item.username}</h5>
                  <h5 className="card-title">password:{item.password}</h5>
                </div>
              </div>
            );
          })}
        <div></div>
      </>
    );
  }
}

export default Item;
