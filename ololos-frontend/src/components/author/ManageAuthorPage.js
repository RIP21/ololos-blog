import React, {PropTypes} from 'react';
import AuthorForm from './AuthorForm';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authorActions from '../../actions/authorActions';
import toastr from 'toastr';
import {withRouter} from 'react-router';
import _ from 'lodash';
import {getById} from '../../selector/selectors';


class ManageAuthorPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      author: Object.assign({}, props.author),
      errors: {},
      saving: false,
    };

    this.updateAuthorState = this.updateAuthorState.bind(this);
    this.saveAuthor = this.saveAuthor.bind(this);
  }

  componentDidMount() {
    const isChanged = !_.isEqual(this.props.author, this.state.author);
    const newAuthor = this.props.author.id == "";
    if (isChanged && !newAuthor) {
      return 'You have unsaved changes. Are you sure you want to leave this page?';
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.author.id != nextProps.author.id) {
      // Necessary to populate form when existing author is loaded directly.
      this.setState({author: Object.assign({}, nextProps.author)});
    }
  }

  updateAuthorState(event) {
    const field = event.target.name;
    const author = this.state.author;
    author[field] = event.target.value;
    return this.setState({author});
  }

  saveAuthor(event) {
    event.preventDefault();
    this.setState({saving: true});
    this.props.actions.saveAuthor(this.state.author)
      .then(() => this.redirect())
      .catch((error) => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Author saved');
    this.context.router.push('/authors');
  }

  render() {
    return (
      <AuthorForm
        author={this.state.author}
        errors={this.state.errors}
        saving={this.state.saving}
        onChange={this.updateAuthorState}
        onSave={this.saveAuthor}
      />
    );
  }

}

ManageAuthorPage.propTypes = {
  author: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  errors: PropTypes.array,
  saving: PropTypes.bool,
  route: PropTypes.object,
  router: PropTypes.object,

};

ManageAuthorPage.contextTypes = {
  router: PropTypes.object
};


function mapStateToProps(state, ownProps) {
  const authorId = ownProps.params.id;
  let author = {id: '', firstName: '', lastName: ''};

  if (authorId && state.authors.length > 0) {
    author = getById(state.authors, authorId);
  }
  return {
    author,
    authors: state.authors,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authorActions, dispatch),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ManageAuthorPage));
