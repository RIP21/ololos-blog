import React from "react";
import {Route, IndexRoute} from "react-router";
import App from "./containers/App";
import HomePage from "./components/home/HomePage";
import PostPage from "./components/post/PostPage";
import EditPostPage from "./components/post/EditPostPage";
import ManagePostsPage from "./components/post/ManagePostsPage";
import LoginPage from "./components/login/LoginPage";

import { UserIsAuthenticated , UserIsNotAuthenticated } from './accessors/accessors';

/*
 * @param {Redux Store}
 * We require store as an argument here because we wish to get
 * state from the store after it has been authenticated.
 */

export default (store) => {
    return (
      <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="/post/:id" component={PostPage}/>
        <Route path="/post/edit/:id" component={UserIsAuthenticated(EditPostPage)}/>
        <Route path="/create/post" component={UserIsAuthenticated(EditPostPage)}/>
        <Route path="/admin/posts" component={UserIsAuthenticated(ManagePostsPage)}/>
        <Route path="/login" component={UserIsNotAuthenticated(LoginPage)}/>
      </Route>
  );
};




