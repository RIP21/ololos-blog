/*eslint-disable import/default */
import React from "react";
import {render} from "react-dom";
import configureStore from "./store/configureStore";
import {Provider} from "react-redux";
import {Router, browserHistory} from "react-router";
import createRoutes from "./routes";
import {setupAxiosInterceptors} from './axios';

import {syncHistoryWithStore} from 'react-router-redux';

setupAxiosInterceptors();

// Grab the state from a global injected into
// server-generated HTML
const initialState = window.__INITIAL_STATE__;

const store = configureStore(initialState, browserHistory);
const history = syncHistoryWithStore(browserHistory, store);
const routes = createRoutes(store);

//ReactGA.initialize('UA-86360910-1'); // Google Analytics with React

// Router converts <Route> element hierarchy to a route config:
// Read more https://github.com/rackt/react-router/blob/latest/docs/Glossary.md#routeconfig
const logPageView = () => {
  //ReactGA.set({page: window.location.pathname});
  //ReactGA.pageview(window.location.pathname);
  window.scrollTo(0, 0);
};

// Router converts <Route> element hierarchy to a route config:
// Read more https://github.com/rackt/react-router/blob/latest/docs/Glossary.md#routeconfig
render(
  <Provider store={store}>
    <Router history={history} routes={routes} onUpdate={logPageView}/>
  </Provider>,
  document.getElementById('app')
);





