// This component handles the App template used on every page.
import React, {PropTypes} from "react";
import Navigation from './common/Navigation';
import Footer from './common/Footer';
import {connect} from 'react-redux';
import toastr from 'toastr';
import {getSession, logout} from '../actions/authentication';
import {browserHistory} from 'react-router';
import * as PostsActions from "../actions/post";
import * as AuthorsActions from "../actions/authors";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/toastr/build/toastr.min.css";
import "../../node_modules/simplemde/dist/simplemde.min.css";
import "../styles/styles.css";

App.need = [
  PostsActions.loadPosts,
  AuthorsActions.loadAuthors
];


class App extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.onLogout = this.onLogout.bind(this);

  }
  componentDidMount() {
    this.props.getSession();
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

export default connect(mapStateToProps, {getSession, logout})(App);
