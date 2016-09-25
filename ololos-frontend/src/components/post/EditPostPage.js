import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import toMarkdown from "to-markdown";
import * as postActions from "../../actions/postActions";
import {getById} from "../../selector/selectors";
import SimpleMDE from "react-simplemde-editor";

class EditPostPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      post: Object.assign({}, props.post),
      errors: {},
      saving: false,
      transformedBody: toMarkdown(props.post.body)
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.post.id != nextProps.post.id) {
      // Necessary to populate form when existing author is loaded directly.
      this.setState({post: Object.assign({}, nextProps.post)});
    }
  }

  render() {
    return ( <SimpleMDE  options={{
        autofocus: true,
        value: this.state.transformedBody
      }}/>
    );
  }
}

EditPostPage.propTypes = {
  post: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  errors: PropTypes.array,
  saving: PropTypes.bool,
};


function mapStateToProps(state, ownProps) {

  const postId = ownProps.params.id;
  let post = {id: '', authorId: '', body: '', postdate: '', title: ''};

  if (postId && state.posts.length > 0) {
    post = getById(state.posts, postId);
  }

  return {
    transformedBody: toMarkdown(post.body),
    post,
    posts: state.posts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(postActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage);

{/*handleChange={(value) => {
 this.setState({value: value});
 }}*/}
