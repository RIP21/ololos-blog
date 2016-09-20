import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const AuthorsListRow = ({author, onDelete}) => {
  return (
    <tr>
      <td><a href="#" onClick={event => onDelete(event, author)}>Delete</a></td>
      <td><Link to={'/author/' + author.id}>{author.id}</Link></td>
      <td>{author.firstName}</td>
      <td>{author.lastName}</td>
    </tr>
  );
};

AuthorsListRow.propTypes = {
  author: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default AuthorsListRow;
