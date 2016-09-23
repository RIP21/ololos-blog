import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const BlogPostHeader = ({title, author, date}) => {
  return (
    <div>
      <h2 className="blog-post-title">{title}</h2>
      <p className="blog-post-meta">{date} by <Link
        to={`author/${author}`}>{author}</Link>
      </p>
    </div>
  );
};

BlogPostHeader.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default BlogPostHeader;
