import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import SignupPage from "../SignupPage";
import FeedPage from "../FeedPage";
import LoginPage from "../LoginPage";
import PostPage from "../PostPage";
import { connect } from "react-redux";



export const routes = {
  root: "/",
  signup: "/signup",
  feed: "/feed",
  postId: "/postId/" //como vamos mostrar cada post?
};

function router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={LoginPage} />
        <Route exact path={routes.signup} component={SignupPage} />
        <Route exact path={routes.feed} component={FeedPage} />
        <Route exact path={routes.postId} component={PostPage} />
      </Switch>
    </ConnectedRouter>
  );
}

  // function mapStateToProps(state) {
  //   return {
  //     postId: state.posts.postDetailArr.id
  //   }
  // }

  export default router;

// export default connect(
//   mapStateToProps
//   )(router);
