import marked from "marked";
import toastr from 'toastr';
import {connect} from "react-redux";
import toMarkdown from "to-markdown";
import React, {PropTypes} from "react";
import {bindActionCreators} from "redux";
import {getById} from "../../selector/selectors";
import * as postActions from "../../actions/postActions";
import EditPostForm from '../../components/post/EditPostForm';

class EditPostPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      post: Object.assign({}, props.post),
      errors: {},
      saving: false,
      transformedBody: props.transformedBody
    };

    this.updatePostState = this.updatePostState.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.savePost = this.savePost.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.post.id != nextProps.post.id) {
      // Necessary to populate form when existing author is loaded directly.
      this.setState({post: Object.assign({}, nextProps.post)});
      this.setState({transformedBody: toMarkdown(nextProps.post.body)});
    }
  }

  updatePostState(event) {
    const field = event.target.name;
    const post = this.state.post;
    post[field] = event.target.value;
    return this.setState({post});
  }

  handleEditorChange(value) {
    return this.setState({transformedBody: value});
  }

  savePost(event) {
    event.preventDefault();

    this.setState({saving: true});
    this.setState({post: Object.assign(this.state.post, {body: marked(this.state.transformedBody)})});

    this.props.actions.savePost(this.state.post)
      .then(() => this.redirect())
      .catch((error) => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Post saved');
    this.context.router.push('/admin/posts');
  }

  render() {

    return (
      <EditPostForm post={this.state.post}
                    transformedBody={this.state.transformedBody}
                    saving={this.state.saving}
                    errors={this.state.errors}
                    onChange={this.updatePostState}
                    handleEditorChange={this.handleEditorChange}
                    onSave={this.savePost}
      />
    );
  }
}

EditPostPage.propTypes = {
  actions: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  errors: PropTypes.object,
  saving: PropTypes.bool,
  transformedBody: PropTypes.string
};

EditPostPage.contextTypes = {
  router: PropTypes.object
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

