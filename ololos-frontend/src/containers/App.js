// This component handles the App template used on every page.
import React, {PropTypes} from "react";
import {connect} from 'react-redux';
import Header from '../components/common/Header'


class App extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="container">
        <Header/>
          {this.props.children}
      </div>
    );
  }
}


App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default connect()(App);
