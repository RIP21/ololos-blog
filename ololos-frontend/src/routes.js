import React from "react";
import {Route, IndexRoute} from "react-router";
import App from "./containers/App";
import About from "./components/about/About";
import ItemsPage from "./containers/items/ItemsPage";


export default (
  <Route path="/" component={App}>
    <IndexRoute component={ItemsPage}/>
    <Route path="/about" component={About}/>
  </Route>
);
