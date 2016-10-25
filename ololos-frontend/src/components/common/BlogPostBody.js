import React, {PropTypes} from 'react';
import Remarkable from 'remarkable';

const BlogPostBody = ({post}) => {

  function addImgResponsive(htmlBody) {
    return htmlBody.replace(new RegExp('<img', 'g'), '<img class="img-responsive"');
  }

  return (
    <div dangerouslySetInnerHTML={{__html: addImgResponsive(new Remarkable().render(post.body))}}></div> //eslint-disable-line
  );
};

BlogPostBody.propTypes = {
  post: PropTypes.object.isRequired
};

export default BlogPostBody;
