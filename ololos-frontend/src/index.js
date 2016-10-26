/*eslint-disable import/default */
import "babel-polyfill";
import React from "react";
import {render} from "react-dom";
import configureStore from "./store/configureStore";
import {Provider} from "react-redux";
import {Router, browserHistory} from "react-router";
import routes from "./routes";
import {loadPosts} from './actions/postActions';
import {loadAuthors} from './actions/authorsActions';
import {setupAxiosInterceptors} from './axios';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/toastr/build/toastr.min.css";
import "../node_modules/simplemde/dist/simplemde.min.css";
import "./styles/styles.css";
import {syncHistoryWithStore} from 'react-router-redux';
import ReactGA from 'react-ga';

const store = configureStore();
store.dispatch(loadPosts());
store.dispatch(loadAuthors());

setupAxiosInterceptors();

ReactGA.initialize('UA-86360910-1'); // Google Analytics with React

const logPageView = () => {
  ReactGA.set({page: window.location.pathname});
  ReactGA.pageview(window.location.pathname);
  window.scrollTo(0, 0);
};

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} onUpdate={logPageView}/>
  </Provider>,
  document.getElementById('app')
);
