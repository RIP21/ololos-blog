import React, {PropTypes} from 'react';
import AuthorsListRow from './AuthorsListRow';

const AuthorsList = ({authors, onDelete}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th/>
        <th>Author ID</th>
        <th>First Name</th>
        <th>Last Name</th>
      </tr>
      </thead>
      <tbody>
      {authors.map(author =>
        <AuthorsListRow key={author.id} author={author} onDelete={onDelete}/>
      )}
      </tbody>
    </table>
  );
};

AuthorsList.propTypes = {
  authors: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default AuthorsList;
