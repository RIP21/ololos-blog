import React, {PropTypes} from "react";
import {Link, IndexLink} from "react-router";

const Navigation = () => {
  return (
    <div className="blog-masthead">
      <div className="container">
        <nav className="blog-nav">
          <Link to="#"><a className="blog-nav-item active">Home</a></Link>
          <Link to="#"><a className="blog-nav-item">New features</a></Link>
          <Link to="#"><a className="blog-nav-item">Press</a></Link>
          <Link to="#"><a className="blog-nav-item">New hires</a></Link>
          <Link to="#"><a className="blog-nav-item">About</a></Link>
        </nav>
      </div>
    </div>);

};

Navigation.propTypes = {};

export default Navigation;
