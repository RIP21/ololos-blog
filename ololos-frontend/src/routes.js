import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import Container from './components/common/Container';
import AboutPage from './components/about/AboutPage'; // eslint-disable-line import/no-named-as-default


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Container}/>
    <Route path="about" component={AboutPage}/>
  </Route>
);
