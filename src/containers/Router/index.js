import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";




const routes = {
  root: "/",
  login: "/login",
  singup: "/singup",
  feed: "/feed",
  postId: "/postId/"&{postId}  //como vamos mostrar cada post?
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exac path={feed.root} component={FeedPage} />
        <Route exac path={login.root} component={LoginPage} />
        <Route exac path={routes.root} component={LoginPage} />
        <Route exac path={routes.root} component={LoginPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
