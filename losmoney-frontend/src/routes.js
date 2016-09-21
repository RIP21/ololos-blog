import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage'; // eslint-disable-line import/no-named-as-default
import CoursesPage from './components/course/CoursesPage';
import ManageCoursesPage from './components/course/ManageCoursePage';
import AuthorPage from './components/author/AuthorsPage';
import ManageAuthorPage from './components/author/ManageAuthorPage';


export default (
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="courses" component={CoursesPage}/>
      <Route path="course" component={ManageCoursesPage}/>
      <Route path="course/:id" component={ManageCoursesPage}/>
      <Route path="about" component={AboutPage}/>
      <Route path="authors" component={AuthorPage}/>
      <Route path="author" component={ManageAuthorPage}/>
      <Route path="author/:id" component={ManageAuthorPage}/>
    </Route>
);
