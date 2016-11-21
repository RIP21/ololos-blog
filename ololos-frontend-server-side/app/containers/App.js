// This component handles the App template used on every page.
import React, {PropTypes} from "react";
import Navigation from '../components/common/Navigation';
import Footer from '../components/common/Footer';
import {connect} from 'react-redux';
import toastr from 'toastr';
import {getSession, logout} from '../actions/authentication';
import {loadPosts} from '../actions/post';
import {loadAuthors} from '../actions/authors';
import {browserHistory} from 'react-router';
import { app } from 'css/main';
import classNames from 'classnames/bind';
import styles from 'css/main';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/toastr/build/toastr.min.css";
import "../css/styles.css";

const cx = classNames.bind(styles);

class App extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.onLogout = this.onLogout.bind(this);
  }
  componentDidMount() {
    this.props.getSession();
    this.props.loadPosts();
    this.props.loadAuthors();
  }

  onLogout(event) {
    event.preventDefault();
    this.props.logout()
      .then(() => {
        toastr.success("Logout success!");
        browserHistory.push('/');
      });
  }

  render() {
    return (
      <div>
        <Navigation onLogout={this.onLogout}/>
        <div className="container">
          {this.props.children}
        </div>
        <Footer/>
      </div>
    );
  }
}


App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  getSession: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
};


function mapStateToProps(state) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps, {getSession, logout, loadAuthors, loadPosts})(App);
