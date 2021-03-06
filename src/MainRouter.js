import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Menu from "./core/Menu";
import AddItem from "./user/AddItem";
import EditItem from "./user/EditItem";

const MainRouter = () => {
  return (
    <div>
      <Menu></Menu>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/signup" component={Signup}></Route>
        <Route exact path="/signin" component={Signin}></Route>
        <Route exact path="/addItem" component={AddItem}></Route>
        <Route exact path="/editItem" component={EditItem}></Route>
      </Switch>
    </div>
  );
};

export default MainRouter;
