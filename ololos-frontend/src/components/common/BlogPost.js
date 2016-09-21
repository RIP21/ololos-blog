import React, {PropTypes} from 'react';
import BlogPostBody from '../common/BlogPostBody';
import BlogPostHeader from '../common/BlogPostHeader';

const BlogPost = () => {
  return (
    <div className="blog-post">
      <BlogPostHeader/>
      <BlogPostBody/>
    </div>
  );
};

BlogPost.propTypes = {};

export default BlogPost;
