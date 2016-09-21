import React, {PropTypes} from 'react';

const BlogPostHeader = () => {
  return (
    <div>
      <h2 className="blog-post-title">Sample blog post</h2>
      <p className="blog-post-meta">January 1, 2014 by <a
        href="#">Mark</a>
      </p>
    </div>
  );
};

BlogPostHeader.propTypes = {};

export default BlogPostHeader;
