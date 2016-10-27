import {connect} from "react-redux";
import React, {PropTypes} from "react";
import {bindActionCreators} from "redux";
import objectAssign from 'object-assign';
import DisqusThread from 'react-disqus-thread';
import {getById} from "../../selector/selectors";
import * as Empty from '../../constants/emptyEntities';
import BlogPost from "../../components/common/BlogPost";
import * as postActions from "../../actions/postActions";


class PostPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      post: objectAssign({}, props.post),
      errors: {},
      saving: false,
    };

  }

  componentWillReceiveProps(nextProps) {
    if (this.props.post.id != nextProps.post.id) {
      // Necessary to populate form when existing post is loaded directly.
      this.setState({post: Object.assign({}, nextProps.post)});
    }
  }

  render() {
    return (
      <div className="blog-main">
        <BlogPost post={this.state.post} open/>
        <DisqusThread shortname="ololos"
                      identifier={this.props.post.id}
                      title={this.props.post.title}
        />
      </div>
    );
  }
}

PostPage.propTypes = {
  post: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  errors: PropTypes.object,
  saving: PropTypes.bool
};


function mapStateToProps(state, ownProps) {
  const postId = ownProps.params.id;
  let post = Empty.POST;

  if (postId && state.posts.length > 0) {
    post = getById(state.posts, postId);
  }

  return {
    post,
    posts: state.posts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(postActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
