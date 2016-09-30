import React, {PropTypes} from 'react';
import BlogHeader from "../common/BlogHeader";
import HomePageRow from "./HomePageRow";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as postsActions  from '../../actions/postActions';

class HomePage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }


  render() {
    return (
      <div>
        <BlogHeader/>
        <HomePageRow posts={this.props.posts}/>
      </div>
    );
  }
}


HomePage.propTypes = {
  posts: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(postsActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
