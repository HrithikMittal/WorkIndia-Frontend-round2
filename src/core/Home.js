import React from "react";
import Item from "../user/Items";
import { isAuthenticated } from "../auth";
const Home = () => {
  return (
    <>
      <div className="jumbotron">
        <h2>Home</h2>
        <p className="lead">
          Welcome to the Password Keeper by Adhikansh Mittal
        </p>
      </div>
      {isAuthenticated() && <Item></Item>}
      {!isAuthenticated() && (
        <div>
          <h3 style={{ marginLeft: "20px" }}>
            You have to first Sign In to save your password or see your saved
            password.
          </h3>
        </div>
      )}
    </>
  );
};

export default Home;
