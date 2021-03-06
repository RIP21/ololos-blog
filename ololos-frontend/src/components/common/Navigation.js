import React from "react";
import {Link} from "react-router";
import {VisibleToUser} from "../../accessors/accessors";

const AdminNavigationLink = VisibleToUser(({onClick, to ="#", label, activeClassName = ""}) => {
  const onClickFunction = onClick ? onClick : null;
  return (
        <Link onClick={onClickFunction}
              className="blog-nav-item"
              activeClassName={activeClassName}
              to={to}>{label}</Link>
);
});


const Navigation = ({onLogout}) => {
  return (
    <div className="blog-masthead">
      <div className="container">
        <nav className="blog-nav">
          <Link className="blog-nav-item" onlyActiveOnIndex activeClassName="active" to="/">Home Feed</Link>
          <AdminNavigationLink  label="Posts Management" activeClassName="active" to="/admin/posts"/>
          <AdminNavigationLink onClick={onLogout} label="Logout"/>
        </nav>
      </div>
    </div>);
};

Navigation.propTypes = {
  onLogout: React.PropTypes.func.isRequired
};

export default Navigation;

