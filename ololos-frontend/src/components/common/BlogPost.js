import React, {PropTypes} from 'react';
import BlogPostBody from '../common/BlogPostBody';
import BlogPostHeader from '../common/BlogPostHeader';

const BlogPost = ({post}) => {
  return (
    <div className="blog-post">
      <BlogPostHeader title={post.title} author={post.authorId} date={post.postdate}/>
      <BlogPostBody body={post.body}/>
    </div>
  );
};

BlogPost.propTypes = {};

export default BlogPost;
