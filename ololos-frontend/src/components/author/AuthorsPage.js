import React, {PropTypes} from 'react';
import AuthorsList from './AuthorsList';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as authorActions from "../../actions/authorActions";
import {browserHistory} from 'react-router';
import toastr from 'toastr';
import ToastExceptionsShower from '../../service/toastWrapper';

class AuthorsPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.deleteAuthor = this.deleteAuthor.bind(this);
    this.redirectToAddAuthorPage = this.redirectToAddAuthorPage.bind(this);
  }

  deleteAuthor(event, author) {
    event.preventDefault();
    this.props.actions.deleteAuthor(author.id)
      .then(() => toastr.success('Author deleted'))
      .catch(error => {
        ToastExceptionsShower.show(error);
      });
  }


  redirectToAddAuthorPage() {
    browserHistory.push('/author');
  }

  render() {
    const {authors} = this.props;

    return (
      <div>
        <h1>Authors</h1>
        <input type="submit"
               value="Add Author"
               className="btn btn-primary"
               onClick={this.redirectToAddAuthorPage}/>
        <AuthorsList authors={authors} onDelete={this.deleteAuthor}/>
      </div>
    );
  }
}


AuthorsPage.propTypes = {
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
  return {
    authors: state.authors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authorActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsPage);
